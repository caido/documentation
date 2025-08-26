# Add a Header Workflow

In this tutorial, we will create a passive workflow that will add a header to an in-scope request and resend the request with it.

## Nodes and Connections

For this workflow, the overall node layout will be:

<img alt="Nodes used and their connections." src="/_images/nodes_adding_header.png" center>

- The `On Intercept Request` will output `$on_intercept_request.request` which represents the request that passed through the Caido proxy.
- The request will be sent to the `In Scope` node. This will check if the request is within your current scope.
- If the request is within scope it will be passed to the `JavaScript` node. If it is not - the workflow will end.
- Once the request has been processed by the script in the `JavaScript` node, the workflow will come to an end.

## Typing

When a `JavaScript` node is executed inside a workflow, the `run` function will be triggered.

The JSDoc comments note the types of the parameters and return value.

::: tip 1.

``` js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
```

- This function will take the `input` and `sdk` parameters. The `SDK` object is an interface to the Caido backend.
- The `input` object is a `HttpInput` object, which represents a request and its associated reponse.
- The type alias of `{MaybePromise<Data | undefined>}` handles both synchronous and asynchronous values. It will either return a [byte](https://developer.caido.io/reference/sdks/workflow/#bytes) value or return `undefined`.
:::

## Scripting the JavaScript Node

<img alt="The workflow environment." src="/_images/build.png" center/>

The function is exported so it can be executed by QuickJS, the JavaScript engine used by Caido.

::: tip 2.

``` js
export async function run({ request, response }, sdk) {
  let reqID = request.getId();
  sdk.console.log(`Request ${reqID} is in-scope and will be sent with your header addition.`);
```

- The function is asynchronous since it needs to await the request and response objects.
- You can print to the Caido backend log file by using the `console` interface provided by the SDK.
:::

::: info
Within the logs, the message will resemble:

2024-08-18T14:30:31.896354Z  INFO executor:0|arbiter:0 js|sdk: Request 305 is in-scope and will be sent with your header addition.
:::

The script will execute everytime an in-scope request passes through the proxy.

::: tip 3.

``` js
  if (request) {
    const spec = request.toSpec();
    spec.setHeader("Header-Name", "header-value");
```

- The request will be converted from its immutable state into a mutable one using the `.toSpec()` method.

- Now that we are able to edit the request object, we can add an arbitrary header using the `.setHeader()` method.
:::

We must wait for the request to be sent and response to be returned before using them.

::: tip 4.

``` js
    let resend = await sdk.requests.send(spec);

    if (resend.response) {
      sdk.console.log("Response to Add Header & Resend Request Workflow received.")
      let finding = {
        title: `Custom Header Passive Workflow.`,
        description: `Request ${resend.request.getId()} ${resend.request.getMethod()} ${resend.request.getPath()} to ${resend.request.getHost()} was resent with custom header.`,
        reporter: "Add Header & Resend Request",
        request: resend.request
      };
      await sdk.findings.create(finding);
    }
  }
}
```

- To stall the function from executing until the promise that represents the request and response objects is returned - the `await` keyword is used.
- Once the response is received (_the exchange is complete_) a [Finding](/guides/findings.md) is created. Supply anything you want to the `title`, `description` and `reporter` properties of the `finding` object.
- The `request` property will include the request sent that includes our custom header.
- Finally, the creation of the Finding is awaited to give it time to be processed on the backend.
:::

## The Result

The generated finding should resemble:

<img alt="Finding of Add Header & Send Request Workflow." src="/_images/finding_adding_header.png" center/>

The full JavaScript node script is provided below:

<details>
<summary>Full Script</summary>

``` js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  let reqID = request.getId();
  sdk.console.log(`Request ${reqID} is in-scope and will be sent with your header addition.`);

  if (request) {  
    const spec = request.toSpec();
    spec.setHeader("Header-Name", "header-value");

    let resend = await sdk.requests.send(spec);
   
    if (resend.response) {
      let finding = {
        title: `Custom Header Passive Workflow.`,
        description: `Request ${resend.request.getId()} ${resend.request.getMethod()} ${resend.request.getPath()} to ${resend.request.getHost()} was resent with custom header.`,
        reporter: "Add Header & Resend Request",
        request: resend.request
      };
      await sdk.findings.create(finding);
    }
  }
}
```

</details>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "",
  "edition": 2,
  "graph": {
    "edges": [
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 2
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 1
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 0
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 3
        }
      },
      {
        "source": {
          "exec_alias": "false",
          "node_id": 3
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 4
        }
      },
      {
        "source": {
          "exec_alias": "true",
          "node_id": 3
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 2
        }
      }
    ],
    "nodes": [
      {
        "alias": "on_intercept_request",
        "definition_id": "caido/on-intercept-request",
        "display": {
          "x": 0,
          "y": -180
        },
        "id": 0,
        "inputs": [],
        "name": "On intercept request",
        "version": "0.1.0"
      },
      {
        "alias": "passive_end",
        "definition_id": "caido/passive-end",
        "display": {
          "x": 0,
          "y": 300
        },
        "id": 1,
        "inputs": [],
        "name": "Passive End",
        "version": "0.1.0"
      },
      {
        "alias": "javascript",
        "definition_id": "caido/http-code-js",
        "display": {
          "x": 0,
          "y": 110
        },
        "id": 2,
        "inputs": [
          {
            "alias": "request",
            "value": {
              "data": "$on_intercept_request.request",
              "kind": "ref"
            }
          },
          {
            "alias": "code",
            "value": {
              "data": "/**\n * @param {HttpInput} input\n * @param {SDK} sdk\n * @returns {MaybePromise<Data | undefined>}\n */\nexport async function run({ request, response }, sdk) {\n  let reqID = request.getId();\n  sdk.console.log(`Request ${reqID} is in-scope and will be sent with your header addition.`);\n\n  if (request) {  \n    const spec = request.toSpec();\n    spec.setHeader(\"Header-Name\", \"header-value\");\n\n    let resend = await sdk.requests.send(spec);\n   \n    if (resend.response) {\n      let finding = {\n        title: `Custom Header Passive Workflow.`,\n        description: `Request ${resend.request.getId()} ${resend.request.getMethod()} ${resend.request.getPath()} to ${resend.request.getHost()} was resent with custom header.`,\n        reporter: \"Add Header & Resend Request\",\n        request: resend.request\n      };\n      await sdk.findings.create(finding);\n    }\n  }\n}\n",
              "kind": "string"
            }
          }
        ],
        "name": "Javascript",
        "version": "0.1.0"
      },
      {
        "alias": "in_scope",
        "definition_id": "caido/in-scope",
        "display": {
          "x": 0,
          "y": -20
        },
        "id": 3,
        "inputs": [
          {
            "alias": "request",
            "value": {
              "data": "$on_intercept_request.request",
              "kind": "ref"
            }
          }
        ],
        "name": "In Scope",
        "version": "0.1.0"
      },
      {
        "alias": "passive_end_1",
        "definition_id": "caido/passive-end",
        "display": {
          "x": 200,
          "y": 110
        },
        "id": 4,
        "inputs": [],
        "name": "Passive End 1",
        "version": "0.1.0"
      }
    ]
  },
  "id": "73b8b470-8892-4e9c-ab9b-cdc3d13f3f57",
  "kind": "passive",
  "name": "Add Header & Resend Request"
}
```

</details>
