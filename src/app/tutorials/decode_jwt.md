---
description: "Learn how to create a convert workflow to decode JSON Web Tokens (JWT) and extract header and payload information."
---

# Decode a JWT Workflow

In this tutorial, we will create a convert workflow that will decode a [JSON Web Token](https://en.wikipedia.org/wiki/JSON_Web_Token) (JWT).

## Creating a Convert Workflow

To begin, navigate to the Workflows interface, select the `Convert` tab, and **click** the `+ New workflow` button.

<img alt="Creating a new convert workflow." src="/_images/new_convert_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

To add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/decode_jwt_nodes.png" center>

- The `Convert Start` node outputs `$convert_start.data` that represents the input that will undergo conversion.
- The JWT input will be passed to the `JWT Decode` node, which will extract the header and body segments of the JWT, decode them, and output them separately as `$jwt_decode.header` and `$jwt_decode.payload`.
- The `Join` node will concatenate the decoded header and body segments with a specified separator and output `$join.data`.
- Once the decoded segments have been processed by the `Join` node, the data will be output, and the workflow will end.

## Decoding a JWT

1. **Click** on the `JWT Decode` node to access its editor and ensure the `$convert_start.data` is [referenced as input data](/app/guides/workflows_references.md).

<img alt="Referencing the input data." src="/_images/workflows_convert_reference_data.png" center>

2. Close the editor window and **click** on the `Join` node to access its editor.

3. Reference `$jwt_decode.header` as the value of the `Left (bytes)` input data and `$jwt_decode.payload` as the value of the `Right (bytes)` input data.

<img alt="Referencing the header and payload segments as input data." src="/_images/workflows_join_reference_header_payload.png" center>

4. Next, type in a `.` character in the `Separator` input field.

<img alt="Specifying the separator value." src="/_images/decode_jwt_separator.png" center>

5. Close the editor window and **click** on the `Convert End` node to access its editor.

6. Reference `$join.data` as input data.

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Testing the Workflow

To test the workflow, add the following JWT in the `Input` text area:

```text
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

and **click** on the `Run` button.

To test the workflow, paste a valid JWT in the `Input` text area and **click** on the `Run` button.  A message will appear notifying you that the workflow executed successfully.

<img alt="Workflow execution success toast message." src="/_images/workflows_toast_message_success.png" center/>

## The Result

The decoded and joined header and payload of the JWT will appear in the `Output` text area:

<img alt="The decoded header and payload segments of the JWT." src="/_images/decode_jwt_result.png" center/>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "Decodes the header and payload segments of a JWT.",
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
          "node_id": 3
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 3
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
          "x": -90,
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
          "x": 530,
          "y": 0
        },
        "id": 1,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$join.data",
              "kind": "ref"
            }
          }
        ],
        "name": "Convert End",
        "version": "0.1.0"
      },
      {
        "alias": "jwt_decode",
        "definition_id": "caido/jwt-decode",
        "display": {
          "x": 120,
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
          }
        ],
        "name": "JWT Decode",
        "version": "0.1.0"
      },
      {
        "alias": "join",
        "definition_id": "caido/join-two",
        "display": {
          "x": 330,
          "y": 0
        },
        "id": 3,
        "inputs": [
          {
            "alias": "left",
            "value": {
              "data": "$jwt_decode.header",
              "kind": "ref"
            }
          },
          {
            "alias": "right",
            "value": {
              "data": "$jwt_decode.payload",
              "kind": "ref"
            }
          },
          {
            "alias": "separator",
            "value": {
              "data": ".",
              "kind": "string"
            }
          }
        ],
        "name": "Join",
        "version": "0.1.0"
      }
    ]
  },
  "id": "786191d6-a205-4360-9122-715629645280",
  "kind": "convert",
  "name": "JWT Decode"
}
```

</details>
