# MD5 Hash Input Workflow

In this tutorial, we will create a convert workflow that will MD5 hash input.

## Creating a Convert Workflow

To begin, navigate to the Workflows interface, select the `Convert` tab, and click the `+ New workflow` button.

<img alt="Creating a new convert workflow." src="/_images/new_convert_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

Too add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/md5_hash_nodes.png" center>

- The `Convert Start` node outputs `$convert_start.data` that represents the input that will undergo conversion.
- The input will be passed to the `MD5 Hash` node.
- Once the input has been hashed and encoded by the `MD5 Hash` node, the `$md5_hash.data` will be output, and the workflow will end.

## MD5 Hashing

1. Click on the `MD5 Hash` node to access its editor and ensure the `$convert_start.data` is [referenced as input data](/guides/workflows_references.md).

2. Then, select an encoding type from the `Encoding (choice)` drop-down menu.

<img alt="The MD5 hash node reference and encoding." src="/_images/workflows_convert_reference_data_encoding.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Testing the Workflow

To test the workflow, type in the value to be MD5 hashed in the `Input` text area and **click** on the `Run` button. A message will appear notifying you that the workflow executed successfully.

<img alt="Workflow execution success toast message." src="/_images/workflows_toast_message_success.png" center/>

## The Result

The MD5 hash digest will appear in the `Output` text area:

<img alt="The MD5 hash digest." src="/_images/md5_hash_result.png" center/>

The full workflow is provided below, ready to be imported.

<details>
<summary>Full workflow</summary>

``` json
{
  "description": "Converts a value to an MD5 hash digest.",
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
          "x": -210,
          "y": 90
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
          "x": 200,
          "y": 90
        },
        "id": 1,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$md5_hash.data",
              "kind": "ref"
            }
          }
        ],
        "name": "Convert End",
        "version": "0.1.0"
      },
      {
        "alias": "md5_hash",
        "definition_id": "caido/md5-hash",
        "display": {
          "x": 0,
          "y": 90
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
            "alias": "encoding",
            "value": {
              "data": "HEX",
              "kind": "string"
            }
          }
        ],
        "name": "MD5 Hash",
        "version": "0.1.0"
      }
    ]
  },
  "id": "1b185861-258c-48a6-8450-a73d0eae9ad5",
  "kind": "convert",
  "name": "MD5 Hash"
}
```

</details>
