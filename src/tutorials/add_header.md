# Add a Header Workflow

In this tutorial, we will create a passive workflow that will add a header to an in-scope request and resend the request with it.

## Creating a Passive Workflow

To begin, navigate to the Workflows interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new passive workflow." src="/_images/new_passive_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

Too add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/adding_header_nodes.png" center>

::: tip
Passive workflows do not require `Passive End` nodes in order to exit execution properly.
:::

- The `On Intercept Request` node outputs `$on_intercept_request.request` objects which represent proxied requests.
- The `In Scope` node checks if the value of a request's Host header is included in the in-scope list of a scope preset. If it is not - the workflow will end.
- In-scope requests will be passed to the `Javascript` node.
- Once a request has been processed by the script in the `Javascript` node, the workflow will end.

## Adding a Header to a Request

**Click** on the `Javascript` node to access its editor. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

``` js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
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

Next, ensure the `$on_intercept_request.request` object is [referenced as input](/guides/workflows_references.md) to the `Javascript` node.

<img alt="Referencing the request object." src="/_images/workflows_reference_request.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Script Breakdown

First, an asynchronous function is defined that takes a proxied `request` and `response` object pair and the `sdk` interface object as parameters. The script will execute every time an in-scope request object is passed from the `In Scope` node.

``` js
export async function run({ request, response }, sdk) {
  if (request) {
```

As request objects are initially immutable, the `.toSpec()` method is used to make a copy of the request object so modifications can be made. The mutable request is stored in the `spec` variable.

``` js
    const spec = request.toSpec();
```

Next, the `.setHeader("Header-Name", "header-value")`
method is used to add a header to the copy of the request object.

``` js
    spec.setHeader("Header-Name", "header-value");
```

Then, `sdk.requests.send(spec)` is used to send the modified request.

Since we must wait for the request to be sent and response to be returned, the `await` directive is used.

The request and its corresponding response are stored in the `resend` variable.

``` js
let resend = await sdk.requests.send(spec);
```

If a response is returned, a `finding` object is created. The `request` property is the request that includes our custom header.

``` js
    if (resend.response) {
      let finding = {
        title: `Custom Header Passive Workflow.`,
        description: `Request ${resend.request.getId()} ${resend.request.getMethod()} ${resend.request.getPath()} to ${resend.request.getHost()} was resent with custom header.`,
        reporter: "Add Header & Resend Request",
        request: resend.request
      };
```

Finally, the creation of the finding is awaited to give it time to be processed on the backend.

``` js
      await sdk.findings.create(finding);
    }
  }
}
```

## Testing the Workflow

To test the workflow, type in an in-scope domain in the connection URL input field. Also ensure it is the value of the request's Host header.

<img alt="Creating the test request." src="/_images/adding_header_test.png" center/>

Next, **click** on the `Run` button. A message will appear notifying you that the workflow executed successfully.

<img alt="Workflow execution success toast message." src="/_images/workflows_toast_message_success.png" center/>

## The Result

The generated finding should resemble:

<img alt="The finding generated by the workflow." src="/_images/adding_header_result.png" center/>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "Adds a header to a proxied request.",
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
          "exec_alias": "true",
          "node_id": 2
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 3
        }
      },
      {
        "source": {
          "exec_alias": "false",
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
          "node_id": 3
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 4
        }
      }
    ],
    "nodes": [
      {
        "alias": "on_intercept_request",
        "definition_id": "caido/on-intercept-request",
        "display": {
          "x": -210,
          "y": -20
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
          "x": 210,
          "y": 70
        },
        "id": 1,
        "inputs": [],
        "name": "Passive End",
        "version": "0.1.0"
      },
      {
        "alias": "in_scope",
        "definition_id": "caido/in-scope",
        "display": {
          "x": 0,
          "y": -10
        },
        "id": 2,
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
        "alias": "javascript",
        "definition_id": "caido/http-code-js",
        "display": {
          "x": 210,
          "y": -90
        },
        "id": 3,
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
              "data": "/**\n * @param {HttpInput} input\n * @param {SDK} sdk\n * @returns {MaybePromise<Data | undefined>}\n */\nexport async function run({ request, response }, sdk) {\n  if (request) {  \n    const spec = request.toSpec();\n    spec.setHeader(\"Header-Name\", \"header-value\");\n\n    let resend = await sdk.requests.send(spec);\n   \n    if (resend.response) {\n      let finding = {\n        title: `Custom Header Passive Workflow.`,\n        description: `Request ${resend.request.getId()} ${resend.request.getMethod()} ${resend.request.getPath()} to ${resend.request.getHost()} was resent with custom header.`,\n        reporter: \"Add Header & Resend Request\",\n        request: resend.request\n      };\n      await sdk.findings.create(finding);\n    }\n  }\n}",
              "kind": "string"
            }
          }
        ],
        "name": "Javascript",
        "version": "0.1.0"
      },
      {
        "alias": "passive_end_1",
        "definition_id": "caido/passive-end",
        "display": {
          "x": 420,
          "y": -90
        },
        "id": 4,
        "inputs": [],
        "name": "Passive End 1",
        "version": "0.1.0"
      }
    ]
  },
  "id": "eb670e67-9752-4324-9fb8-1aa529e7e9da",
  "kind": "passive",
  "name": "Add Header"
}
```

</details>
