# Workflows

Workflows are the main way to customize Caido to suit your needs.
A workflow consists of three components:

- [Nodes](#nodes)
- [Connections](#connections)
- [Inputs & Outputs](#inputs--outputs)

<img alt="Convert workflow" src="/_images/workflow_convert_basic.png" center/>

## Nodes

Nodes are draggable blocks that perform specific actions. Add nodes to your workflow by dragging blocks from the left panel.

<img alt="List of nodes" src="/_images/workflow_convert_node_list.png" height="500" center/>

Clicking a node reveals its properties.
A node takes a set of `inputs` and optionally produces a set of `outputs`.
Each node has a customizable `alias` which is used to uniquely identify itself inside a workflow.

<img alt="Base64 Node" src="/_images/workflow_convert_node_base64.png" width="500" center/>

Caido comes with a default list of nodes. Here are a few we support:

- Encoding nodes (Base64/URL/Hex)
- Hashing nodes (SHA1/SHA2)
- Code nodes (Shell/JavaScript)
- Control nodes (If-Else/If-Else-Javascript)
- Misc nodes (Set-Color/HTTPQL)

## Connections

Connections determine what order you want the nodes to run in.

Drag the bottom socket of one node into the top socket of another to connect them together.

<img alt="Workflow Connections" src="/_images/workflow_connections.png" width="300" center/>

## Inputs & Outputs

While connections define what **order** the nodes are run in, they do not define what `inputs` each node will use.

Node inputs fall under two types:

- Constant values
- Reference values

You can toggle between each type with the `Use references` checkbox.

<img alt="Workflow Node Inputs" src="/_images/workflow_node_inputs.png" width="400" center/>

When using a constant value, executing the node will use the value as-is.
When using a reference value, executing the node will use the output of a previous node.

To use reference values, the content of the text field should be under the format:

```
$[node_alias].[property_alias]
```

Here's an example where the `data` output of the `start` node is used as `data` input for the `url_decode` node:

<table>
  <thead>
    <tr>
      <th>Output Node</th>
      <th>Input Node</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td no-border>
        <img alt="Convert basic" src="/_images/workflow_convert_data_mapping_output.png"/>
      </td>
      <td no-border>
        </br>
        <img alt="Convert basic" src="/_images/workflow_convert_data_mapping_input.png"/>
      </td>
    </tr>
  </tbody>
</table>
