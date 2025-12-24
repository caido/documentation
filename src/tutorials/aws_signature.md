---
description: "Learn how to create a convert workflow to automatically resign AWS requests with Signature V4 authentication for API access."
---

# Resign AWS Requests Workflow

In this tutorial, we will create a convert workflow that will resign authenticated AWS requests sent in Replay by adding a valid [(AWS Signature V4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html) `Authorization` header.

Then, by using [workflows in Replay](/guides/replay_environment_variables.md), you can achieve continuous, uninterrupted testing without manually updating expired sessions.

::: tip
A similar method can be used for other cloud providers as many follow the same signature process.
:::

## Creating a Convert Workflow

To begin, navigate to the Workflows interface, select the `Convert` tab, and **click** the `+ New workflow` button.

<img alt="Creating a new convert workflow." src="/_images/new_convert_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

To add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/resign_aws_requests_nodes.png" center>

- The `Convert Start` node outputs `$convert_start.data` that represents the request that will undergo conversion.
- The `Javascript` node accesses environment variables to retrieve AWS credentials, creates a signing key, signs the request, and generates a valid authentication header.
- Once the header has been returned by the `Javascript` node, the resigned request will be output, and the workflow will end.

## Creating the Environment Variables

For this workflow, you will need to obtain your:

- AWS Access Key ID
- AWS Secret Access Key
- Resource region ID
- Resource service ID

With these values, [create environment variables](https://docs.caido.io/tutorials/aws_signature.html) in the `Global` environment with the following names:

| Name | Value | Value Example |
|----------|-------------|---------|
| `AWS_ACCESS_KEY` | Your AWS Access Key ID | `AKIAXXXXXXXXXXXXXXXX` |
| `AWS_SECRET_ACCESS_KEY` | Your AWS Secret Access Key | `xX3X51XXxXx77XXXXXxXXXX83x0XxX+1XXxxx8Xx` |
| `AWS_REGION` | Your AWS Resource Region ID | `us-east-1` |
| `AWS_SERVICE` | Your AWS Service ID | `s3` |

<img alt="The AWS environment variables." src="/_images/resign_aws_requests_environment_variables.png" center>

## Resigning AWS Requests

1. **Click** on the `Javascript` node to access its editor and ensure the `$convert_start.data` is [referenced as input data](/guides/workflows_references.md).

<img alt="Referencing the input data." src="/_images/workflows_convert_reference_data.png" center>

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js
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

3. Close the editor window and **click** on the `Convert End` node to access its editor.

4. Reference the `$javascript.data` as input data.

<img alt="Referencing the Javascript node output data." src="/_images/workflows_reference_javascript_data.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

### Script Breakdown

It will output three headers (`Authorization`, `x-amz-date` and `x-amz-content-sha256`) that we will inject in our request.

First, the script imports the required cryptographic functions from the backend `crypto` module and the `RequestSpec` utility to modify requests.

```js
import { createHmac, createHash } from "crypto";
import { RequestSpec } from "caido:utils";
```

Then, the `getSignatureKey` function is defined that will create the signing key using a series of `createHMAC` operations with the secret key, timestamp, region, and service name.

```js
function getSignatureKey(key, dateStamp, regionName, serviceName) {
  const kDate = createHmac("SHA256", `AWS4${key}`).update(dateStamp).digest();
  const kRegion = createHmac("SHA256", kDate).update(regionName).digest();
  const kService = createHmac("SHA256", kRegion).update(serviceName).digest();
  const kSigning = createHmac("SHA256", kService)
    .update("aws4_request")
    .digest();
  return kSigning;
}
```

The main `sign` function uses the `.getVar()` method to retrieve the environment variables, generates the current timestamp for the `x-amz-date` component, creates the canonical request with various `RequestSpec` methods and hashes any body data.

```js
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
```

Next, it creates the credential scope and string to sign.

```js
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    "AWS4-HMAC-SHA256",
    amzDate,
    credentialScope,
    hashedCanonicalRequest,
  ].join("\n");
```

Then, it generates the signing key, creates the final signature, pieces the `Authorization` header together, and returns it.

```js
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
```

The `run` function takes the initial `request` object as input, converts it to a mutable `RequestSpec` object, and parses it. Then, the `sign` function is called to sign the request and insert the valid `Authorization` header.

```js
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

## Testing the Workflow

To test the workflow:

1. Send an unauthorized request in Replay to a private S3 bucket object. Without authentication, a 403 response will be returned.

<img alt="Unauthorized request and response pair." src="/_images/resign_aws_requests_unauthenticated.png" center />

2. Next, add an arbitrary `Authorization` header to the request, **click**, **hold**, and **drag** over it, and **click** the `+` button to add it as a placeholder.

3. **Click** on the associated edit button <code><Icon icon="fas fa-pen-to-square" /></code> of the placeholder to open the `Placeholder Settings` window.

<img alt="Adding the placeholder." src="/_images/resign_aws_requests_placeholder.png" center />

4. Use `CTRL` + `A` to select the whole request. With `Workflow` as the `Type`, **click** on the `Select a workflow` drop-down menu, select the workflow from the list, and **click** `Add` to save the configuration.

<img alt="Placeholder settings" src="/_images/resign_aws_requests_placeholder_settings.png" center no-shadow width="800"/>

5. Close the editor window and **click** on the `Send` button to resend the Replay request.

## The Result

The content of the file will be returned in a 200 response.

<img alt="Content of the private S3 file" src="/_images/resign_aws_requests_result.png" center no-shadow width="900"/>

To view the request as it was sent, navigate to the Search interface and **click** on the associated request row.

<img alt="S3 Request signed" src="/_images/resign_aws_requests_search_result.png" center no-shadow width="900"/>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "Resigns authenticated requests using the AWS Signature V4 header method.",
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
          "x": -70,
          "y": 0
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
          "x": 350,
          "y": 0
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
          "x": 140,
          "y": 0
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
  "id": "2121672b-53d8-4004-aa80-d5021a954ead",
  "kind": "convert",
  "name": "Resign AWS Requests"
}
```

</details>
