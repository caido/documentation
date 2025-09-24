---
description: "Learn how to create a passive workflow that color highlights in-scope GET requests in Caido traffic tables for visual identification."
---

# Color Request Rows Workflow

In this tutorial, we will create a passive workflow that will color highlight in-scope GET requests within traffic tables.

## Creating a Passive Workflow

To begin, navigate to the Workflows interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new passive workflow." src="/_images/new_passive_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

Too add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/color_requests_nodes.png" center>

::: tip
Passive workflows do not require `Passive End` nodes in order to exit execution properly.
:::

- The `On Intercept Request` node outputs `$on_intercept_request.request` objects which represent proxied requests.
- The `In Scope` node checks if the value of a request's Host header is included in the in-scope list of a scope preset. If it is not - the workflow will end.
- In-scope requests will be passed to the `Matches HTTPQL` node, which checks if a request satisfies an HTTPQL statement. If it does not - the workflow will end.
- If a request satisfies the HTTQL query statement, it is passed to the `Set Color` node. If it does not - the workflow will end.
- Once a request has been processed by the `Set Color` node, the workflow will end.

## Coloring In-Scope GET Requests

1. **Click** on the `Matches HTTPQL` node to access its editor.

2. Then, **click** within the query environment and type in the following HTTPQL statement:

```httpql
req.method.eq:"GET"
```

3. Next, ensure the `$on_intercept_request.request` object is [referenced as input data](/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_reference_request.png" center>

4. Close the editor window and **click** on the `Set Color` node to access its editor.

5. Reference the `$on_intercept_request.request` object as input data.

6. Next, type in a color hex code in the `Color` input field.

<img alt="Specifying a color hex code." src="/_images/color_requests_hex_code.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Testing the Workflow

To test the workflow, enable proxying and navigate to an in-scope domain in the browser.

## The Result

All in-scope GET requests will be color highlighted within the traffic tables:

<img alt="The colored request rows." src="/_images/color_requests_result.png" center/>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "In-scope GET request rows in traffic tables are highlighted in blue.",
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
          "node_id": 3
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 1
        }
      },
      {
        "source": {
          "exec_alias": "true",
          "node_id": 3
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 6
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 6
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 5
        }
      },
      {
        "source": {
          "exec_alias": "false",
          "node_id": 2
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 7
        }
      }
    ],
    "nodes": [
      {
        "alias": "on_intercept_request",
        "definition_id": "caido/on-intercept-request",
        "display": {
          "x": -200,
          "y": -10
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
          "x": 450,
          "y": 80
        },
        "id": 1,
        "inputs": [],
        "name": "Passive End 1",
        "version": "0.1.0"
      },
      {
        "alias": "in_scope",
        "definition_id": "caido/in-scope",
        "display": {
          "x": 10,
          "y": 0
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
        "alias": "matches_httpql",
        "definition_id": "caido/httpql-matches",
        "display": {
          "x": 230,
          "y": -10
        },
        "id": 3,
        "inputs": [
          {
            "alias": "query",
            "value": {
              "data": "req.method.eq:\"GET\"",
              "kind": "string"
            }
          },
          {
            "alias": "request",
            "value": {
              "data": "$on_intercept_request.request",
              "kind": "ref"
            }
          }
        ],
        "name": "Matches HTTPQL",
        "version": "0.2.0"
      },
      {
        "alias": "passive_end_1",
        "definition_id": "caido/passive-end",
        "display": {
          "x": 660,
          "y": -90
        },
        "id": 5,
        "inputs": [],
        "name": "Passive End 2",
        "version": "0.1.0"
      },
      {
        "alias": "set_color",
        "definition_id": "caido/color-set",
        "display": {
          "x": 450,
          "y": -90
        },
        "id": 6,
        "inputs": [
          {
            "alias": "color",
            "value": {
              "data": "#185A6C",
              "kind": "string"
            }
          },
          {
            "alias": "request",
            "value": {
              "data": "$on_intercept_request.request",
              "kind": "ref"
            }
          }
        ],
        "name": "Set Color",
        "version": "0.1.0"
      },
      {
        "alias": "passive_end_2",
        "definition_id": "caido/passive-end",
        "display": {
          "x": 230,
          "y": 80
        },
        "id": 7,
        "inputs": [],
        "name": "Passive End",
        "version": "0.1.0"
      }
    ]
  },
  "id": "bbf38766-0f9d-45af-a823-f230b9134606",
  "kind": "passive",
  "name": "Color In-Scope GET Requests"
}
```

</details>
