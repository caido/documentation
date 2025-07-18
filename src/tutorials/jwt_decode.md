# JWT Decode

The goal of this guide is to build a pleasant [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token) decoder as a [Convert Workflow](/concepts/workflows_intro.md#convert-workflows). We will only be using built-in Nodes. JSON Web Tokens (JWT) are composed of three base64 encoded parts separated by dots. The first is the header, the second is the payload and the third is the signature.

::: info
It is, obviously, also possible to build it easily using a single Javascript Code Node.

[Learn how to use Javascript in Workflows.](/reference/workflow_nodes.md).
:::

For this guide we will use the following token as our input:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
```

## Step 1: Decoding the Token

This is super easy since Caido offers a Node just for that called `JWT Decode`. Just drag it into your Workflow and connect it! :rocket:

<img width="300" alt="Workflow for step 1" src="/_images/jwt_decode_step_1_workflow.png" center/>

If you hit `Save and Run` just then, you will see that nothing is displayed in the output.

This is normal since we have not selected what we want as an output! :grimacing:

Go ahead and click on the `Convert End` Node to select the output, we'll choose `$jwt_decode.header`.

<img width="600" alt="Selection of convert end input" src="/_images/jwt_decode_step_1_end.png" center/>

Now you should see the header displayed in the output when you click on `Save and Run`. :fire:

## Step 2: Displaying the Header and Payload

It would be great if we could see both the header and the payload in one go wouldn't it?
This is where the `Join` Node comes in real handy. Try dragging it into your Workflow and connecting it.

<img width="300" alt="Workflow for step 2" src="/_images/jwt_decode_step_2_workflow.png" center/>

This Node requires a bit of configuration, you need to specify the `Left` and `Right` elements of the join and the `Separator` you want to see in between those elements.
We will use a reference to `$jwt_decode.header` as our left element, a reference to `$jwt_decode.payload` as our right element and a `.` as our separator.

<img width="600" alt="Settings for the join Node" src="/_images/jwt_decode_step_2_join.png" center/>

Lastly, we need to change our `Convert End` data to reference our new `$join.data`, now we are talking! :sunglasses:

<img width="600" alt="Output for the step" src="/_images/jwt_decode_step_2_output.png" center/>

## Step 3: Prettifying the Whole Thing

As a bonus step, we will make things pretty! :star_struck:

Since we know the first two parts of the JWT are JSON, we can use two `JSON Prettify` Nodes to format them before we join them.

<img width="300" alt="Workflow for step 3" src="/_images/jwt_decode_step_3_workflow.png" center/>

Since we have two Nodes of the same type, I suggest we rename them and change their [aliases](/concepts/workflows_nodes#aliases). For the first, we prettify the `$jwt_decode.header` and we give it the alias `pretty_header`.

<img width="500" alt="Settings for the pretty Node" src="/_images/jwt_decode_step_3_pretty.png" center/>

We also have to change the Join Node, to use the new references from the pretty Nodes. Namely, `$pretty_header.data` on the left and `$pretty_payload.data` on the right.

<img width="500" alt="Settings for the join Node" src="/_images/jwt_decode_step_3_join.png" center/>

## Conclusion

That's it! Now you should have a nice JWT Decoder all ready to use as a Convert Workflow! :tada:

The full Workflow is provided below, ready to be imported.

<details>
<summary>Full Workflow</summary>

```json
{
  "description": "",
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
          "node_id": 4
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 4
        },
        "target": {
          "exec_alias": "exec",
          "node_id": 5
        }
      },
      {
        "source": {
          "exec_alias": "exec",
          "node_id": 5
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
          "x": 20,
          "y": -250
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
          "x": 20,
          "y": 310
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
          "x": 20,
          "y": -150
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
        "alias": "pretty_header",
        "definition_id": "caido/json-prettify",
        "display": {
          "x": 20,
          "y": -40
        },
        "id": 3,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$jwt_decode.header",
              "kind": "ref"
            }
          }
        ],
        "name": "Prettify Header",
        "version": "0.1.0"
      },
      {
        "alias": "pretty_payload",
        "definition_id": "caido/json-prettify",
        "display": {
          "x": 20,
          "y": 70
        },
        "id": 4,
        "inputs": [
          {
            "alias": "data",
            "value": {
              "data": "$jwt_decode.payload",
              "kind": "ref"
            }
          }
        ],
        "name": "Prettify Paylaod",
        "version": "0.1.0"
      },
      {
        "alias": "join",
        "definition_id": "caido/join-two",
        "display": {
          "x": 20,
          "y": 190
        },
        "id": 5,
        "inputs": [
          {
            "alias": "left",
            "value": {
              "data": "$pretty_header.data",
              "kind": "ref"
            }
          },
          {
            "alias": "right",
            "value": {
              "data": "$pretty_payload.data",
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
  "id": "7d3a6af4-eefa-4065-8b37-42263c4a71ed",
  "kind": "convert",
  "name": "JWT Decode"
}
```

</details>

<img width="600" alt="Output for step 3" src="/_images/jwt_decode_step_3_output.png" center/>
