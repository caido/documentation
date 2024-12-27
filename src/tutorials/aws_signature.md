# Resign AWS requests

When dealing with AWS APIs, there is often a need to resign requests so they can be accepted by AWS.
In this tutorial, we will build a [Convert Workflow](/concepts/workflows_intro.md#convert-workflows) to rebuild the [AWS Signature V4](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) on send in [Replay](/guides/replay).
A similar method can be used for other cloud providers since a lot of them follow the same signature process.

## Setting the environment

We assume at this point that you have access to an `AWS Access Key` (like `AKIAIOSFODNN7EXAMPLE`) and an `AWS Secret Access key` (like `wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY`).

Enter them in the global environment for your project as `AWS_ACCESS_KEY` and `AWS_SECRET_ACCESS_KEY`.
We will also need a two other variables: `AWS_REGION` (like `us-east-1`) and `AWS_SERVICE` (like `s3`).

<img alt="Setup the variables in the global environment" src="/_images/aws_environment.png" center no-shadow width="900"/>

## Creating the workflow

For this tutorial, we will use AWS v4 authentication via headers. Note that it is [also possible to authenticate via query parameters](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv-authentication-methods.html).

The algorithm to craft the signature is illustrated in the following diagram. You can also refer to the [AWS documentation on the subject](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv-create-signed-request.html) for more details.

<img alt="AWS Signature process" src="/_images/aws_signature_process.png" center no-shadow width="600"/>

### Linking up the nodes

Let's create a new `Convert Workflow` and drop in a `Javascript` node. This will provide us with [a full Javascript environment](https://developer.caido.io/concepts/essentials/runtime.html#backend) to code our algorithm.
Make sure that all the references are setup properly. If that is the case if you enter `test` in the input and run it, it should output `test`.

<img alt="Workflow setup" src="/_images/aws_workflow_setup.png" center no-shadow width="800"/>

### Inserting the script

Here is the script we are going to use for that workflow, replace the content of the `Javascript` node with it.
It will output three headers (`Authorization`, `x-amz-date` and `x-amz-content-sha256`) that we will inject in our request.

```javascript
import { createHmac, createHash } from "crypto";
import { RequestSpec } from "caido:utils";

function getSignatureKey(key, dateStamp, regionName, serviceName) {
  const kDate = createHmac("SHA256", `AWS4${key}`).update(dateStamp).digest();
  const kRegion = createHmac("SHA256", kDate).update(regionName).digest();
  const kService = createHmac("SHA256", kRegion).update(serviceName).digest();
  const kSigning = createHmac("SHA256", kService)
    .update("aws4_request")
    .digest();
  return kSigning;
}

function sign(sdk, spec) {
  const accessKey = sdk.env.getVar("AWS_ACCESS_KEY");
  const secretAccessKey = sdk.env.getVar("AWS_SECRET_ACCESS_KEY");
  const region = sdk.env.getVar("AWS_REGION");
  const service = sdk.env.getVar("AWS_SERVICE");

  const now = new Date();
  const year = now.getUTCFullYear();
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const day = String(now.getUTCDate()).padStart(2, "0");
  const hours = String(now.getUTCHours()).padStart(2, "0");
  const minutes = String(now.getUTCMinutes()).padStart(2, "0");
  const seconds = String(now.getUTCSeconds()).padStart(2, "0");
  const amzDate = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;
  const dateStamp = amzDate.slice(0, 8);

  const method = spec.getMethod();
  const canonicalUri = spec.getPath();
  const canonicalQueryString = spec.getQuery();
  const host = spec.getHost();
  const payload = spec.getBody()?.toRaw() ?? "";
  const payloadHash = createHash("SHA256").update(payload).digest("hex");
  const canonicalHeaders = `host:${host}\nx-amz-content-sha256:${payloadHash}\nx-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-content-sha256;x-amz-date";

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQueryString,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");
  const hashedCanonicalRequest = createHash("sha256")
    .update(canonicalRequest)
    .digest("hex");
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    hashedCanonicalRequest,
  ].join("\n");

  const signingKey = getSignatureKey(
    secretAccessKey,
    dateStamp,
    region,
    service,
  );
  const signature = createHmac("sha256", signingKey)
    .update(stringToSign)
    .digest("hex");
  const authorizationHeader = [
    `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}`,
    `SignedHeaders=${signedHeaders}`,
    `Signature=${signature}`,
  ].join(", ");

  return {
    authorizationHeader,
    amzDate,
    payloadHash,
  };
}

export function run(input, sdk) {
  try {
    const spec = RequestSpec.parse(input);
    const { authorizationHeader, amzDate, payloadHash } = sign(sdk, spec);
    return `Authorization: ${authorizationHeader}\r\nx-amz-date: ${amzDate}\r\nx-amz-content-sha256: ${payloadHash}\r\n`;
  } catch (e) {
    sdk.console.log(e.toString());
    return input;
  }
}
```

## Using the workflow in replay

Now that our workflow is created, the last step is to use it inside `Replay`. For the purpose of this tutorial, we will try to access a private file on an S3 bucket. If we try to access this file without authentication, we get an error.

<img alt="AWS error when trying to access the file" src="/_images/aws_s3_error.png" center no-shadow width="800"/>

### Adding the header

Next add a new authorization header placeholder by highlighting it and clicking on the `+` icon.
Then, open the placeholder settings by using the pen icon.

<img alt="Adding an header placeholder" src="/_images/aws_header_placeholder.png" center no-shadow width="600"/>

On the left part of the new window, you can select what the input of our workflow will be. By default, only the placeholder is selected but in our case we will need the whole request. You can either select with the mouse or type `CTRL + A` to grab the whole request.

On the right, remove the default `URL Encode` preprocessor and add our `AWS Signature` workflow instead.

<img alt="Placeholder settings" src="/_images/aws_placeholder_settings.png" center no-shadow width="800"/>

### Resending the request

Once you resend the request, you should now get the content of the file.

<img alt="Content of the private S3 file" src="/_images/aws_s3_success.png" center no-shadow width="900"/>

In `Search`, you can also view the fully expanded request and the properly crafted signature.

<img alt="S3 Request signed" src="/_images/aws_s3_signed.png" center no-shadow width="900"/>

## Conclusion

With this new workflow you are now able to re-sign any `AWS` request.
You should also be more familiar with workflow integration in `Replay` and how to really customize your requests at runtime.

The full `Workflow` is provided below, ready to be imported!

<details>
<summary>Full Workflow</summary>

```json
{
  "description": "This workflow will create an AWS Signature",
  "edition": 2,
  "graph": {
    "edges": [
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 0
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 2
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 2
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 1
        }
      }
    ],
    "nodes": [
      {
        "alias": "convert_start",
        "definition_id": "caido/convert-start",
        "display": {
          "x": 60,
          "y": -110
        },
        "id": 0,
        "inputs": [],
        "name": "Convert Start",
        "version": "0.1.0"
      },
      {
        "alias": "convert_end",
        "definition_id": "caido/convert-end",
        "display": {
          "x": 60,
          "y": 180
        },
        "id": 1,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$javascript.data",
              "kind": "ref"
            }
          }
        ],
        "name": "Convert End",
        "version": "0.1.0"
      },
      {
        "alias": "javascript",
        "definition_id": "caido/code-js",
        "display": {
          "x": 60,
          "y": 30
        },
        "id": 2,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$convert_start.data",
              "kind": "ref"
            }
          },
          {
            "alias": "code",
            "value": {
              "data": "import { createHmac, createHash } from \"crypto\";\nimport { RequestSpec } from \"caido:utils\";\n\nfunction getSignatureKey(key, dateStamp, regionName, serviceName) {\n  const kDate = createHmac(\"SHA256\", `AWS4${key}`).update(dateStamp).digest();\n  const kRegion = createHmac(\"SHA256\", kDate).update(regionName).digest();\n  const kService = createHmac(\"SHA256\", kRegion).update(serviceName).digest();\n  const kSigning = createHmac(\"SHA256\", kService)\n    .update(\"aws4_request\")\n    .digest();\n  return kSigning;\n}\n\nfunction sign(sdk, spec) {\n  const accessKey = sdk.env.getVar(\"AWS_ACCESS_KEY\");\n  const secretAccessKey = sdk.env.getVar(\"AWS_SECRET_ACCESS_KEY\");\n  const region = sdk.env.getVar(\"AWS_REGION\");\n  const service = sdk.env.getVar(\"AWS_SERVICE\");\n\n  const now = new Date();\n  const year = now.getUTCFullYear();\n  const month = String(now.getUTCMonth() + 1).padStart(2, \"0\");\n  const day = String(now.getUTCDate()).padStart(2, \"0\");\n  const hours = String(now.getUTCHours()).padStart(2, \"0\");\n  const minutes = String(now.getUTCMinutes()).padStart(2, \"0\");\n  const seconds = String(now.getUTCSeconds()).padStart(2, \"0\");\n  const amzDate = `${year}${month}${day}T${hours}${minutes}${seconds}Z`;\n  const dateStamp = amzDate.slice(0, 8);\n\n  const method = spec.getMethod();\n  const canonicalUri = spec.getPath();\n  const canonicalQueryString = spec.getQuery();\n  const host = spec.getHost();\n  const payload = spec.getBody()?.toRaw() ?? \"\";\n  const payloadHash = createHash(\"SHA256\").update(payload).digest(\"hex\");\n  const canonicalHeaders = `host:${host}\\nx-amz-content-sha256:${payloadHash}\\nx-amz-date:${amzDate}\\n`;\n  const signedHeaders = \"host;x-amz-content-sha256;x-amz-date\";\n\n  const canonicalRequest = [\n    method,\n    canonicalUri,\n    canonicalQueryString,\n    canonicalHeaders,\n    signedHeaders,\n    payloadHash,\n  ].join(\"\\n\");\n  const hashedCanonicalRequest = createHash(\"sha256\")\n    .update(canonicalRequest)\n    .digest(\"hex\");\n  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;\n  const stringToSign = [\n    \"AWS4-HMAC-SHA256\",\n    amzDate,\n    credentialScope,\n    hashedCanonicalRequest,\n  ].join(\"\\n\");\n\n  const signingKey = getSignatureKey(\n    secretAccessKey,\n    dateStamp,\n    region,\n    service,\n  );\n  const signature = createHmac(\"sha256\", signingKey)\n    .update(stringToSign)\n    .digest(\"hex\");\n  const authorizationHeader = [\n    `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}`,\n    `SignedHeaders=${signedHeaders}`,\n    `Signature=${signature}`,\n  ].join(\", \");\n\n  return {\n    authorizationHeader,\n    amzDate,\n    payloadHash,\n  };\n}\n\nexport function run(input, sdk) {\n  try {\n    const spec = RequestSpec.parse(input);\n    const { authorizationHeader, amzDate, payloadHash } = sign(sdk, spec);\n    return `Authorization: ${authorizationHeader}\\r\\nx-amz-date: ${amzDate}\\r\\nx-amz-content-sha256: ${payloadHash}\\r\\n`;\n  } catch (e) {\n    sdk.console.log(e.toString());\n    return input;\n  }\n}",
              "kind": "string"
            }
          }
        ],
        "name": "Javascript",
        "version": "0.1.0"
      }
    ]
  },
  "id": "1a544966-62fd-4967-8fd4-702e97e02cc9",
  "kind": "convert",
  "name": "AWS Signature"
}
```

</details>
