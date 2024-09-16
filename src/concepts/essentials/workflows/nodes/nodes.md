# Nodes

## What are Nodes?

**Nodes** are simply **actions** or **conditions**. By connecting Nodes together, complex action sequences based on certain conditions are created.

Nodes are visually represented by Caido as draggable blocks, colorized by category. They utilize an input/output model that can be used to send data altered by one Node to a subsequent Node.

<img alt="Convert workflow" src="/_images/workflow_convert_basic.png" center/>

## Connecting Nodes

A `Connection` is visually represented by the gray line between Nodes and determine the order of execution.

Workflows use a top-down heirachical structure (_the Node at the very top represents the beginning of the flow and the Node at the bottom represents the end of the flow_).

<img alt="Workflow Connections" src="/_images/node_connect.png" center/>

1. The down arrow within a circle icon represents a Node's `socket`.
2. Click and drag a bottom socket to the top socket of the next/a subsequent Node in the flow to create a `Connection`.

## Node Alias

A Node's `Alias` is an arbitrarily set identifier used to uniquely reference the associated Node within a Workflow.

Aliases can consist of lowercase letters, hyphens, underscores and numbers.

::: info
This differs from a Node's Name which simply serves cosmetic purposes to assist in the visual representation.
:::

## Node Input Types: Constant Value & Reference Value

### 1. Constant Value Type

`Constant Values` - the input used by the Node's execution will be the **_supplied value_**.

- To use this input type, manually enter the data to be used in the `Data` field under `Inputs` with the `Use reference` checkbox **_deselected_**.

<img alt="Base64 Node" src="/_images/const_value_node.png" center/>

### 2. Reference Value Type

`Reference Values` - the input used by the Node's execution will be the **_output of a previous Node_**.

- To use this input type, the content of the `Data` field under `Inputs` with the `Use reference` checkbox **_selected_** should be formatted using the following syntax:

```
$[node_alias].[property_alias]
```

<img alt="Workflow Node Inputs" src="/_images/reference_value_node.png" center/>

_Example (pictured above):_

- _The value_ `$start.data` _is the output of the_ **Start** _Node being taken as input by the_ **Base64 Encode** _Node_.
- _The output of the_ **Base64 Encode** _Node will be referenced by the_ **End** _Node as_ `$base64_encode.data`.

## Node Categories

Certain Nodes are specific to a Workflow type (Passive/Active/Convert). Though, in general, Nodes can be categorized broadly and associated together by color:

### Start/End Nodes

These Nodes are color categorized together by their yellow marked tabs. They mark the beginning and end of a Workflow.

### Control Nodes

These Nodes are color categorized together by their green marked tabs and allow you to dictate the execution flow.

### Code Nodes

These Nodes are color categorized together by their red marked tabs and provide a way to integrate Shell commands and Javascript.

### Miscellaneous Nodes (Blue)

These Nodes are color categorized together by their blue marked tabs. The actions they perform include encoding/decoding, hashing/dehashing and filtering.

<img alt="List of nodes." src="/_images/nodes_all_types.png" center/>

::: info
The development of Nodes will be ongoing and new nodes will be included in future Caido releases.
:::
