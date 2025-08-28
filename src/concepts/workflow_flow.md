# Workflow Execution and Data Flow

::: info
[Learn the difference between plugins and workflows in Caido.](https://developer.caido.io/concepts/backend/workflow.html)
:::

The order of workflow operation can be split into two concepts:

## Workflow Execution

A workflow processes nodes in sequential order:

1. Beginning at the root of the Node tree with an entry node.
2. Every subsequent node in the chain is processed in order. The execution may take the path of another branch based on conditionals.
3. The workflow ends either when it reaches an explicit exit node or when no more nodes are available in the chain.

<img alt="Register command SDK." src="/_images/execution_flow.png" center/>

## Workflow Data Flow

Each node in a workflow has an input and output data type.

::: info
[Learn more about the node data types.](/reference/workflow_data_types.md)
:::

With this typed data system, even though nodes are processed sequentially, you do not need a direct line between two nodes in order to pass data from one to another. Instead, data can be referenced using dot notation of a node's alias and it's output alias:

```
$[node_alias].[output_alias]
```

::: tip
You can view the data type by clicking on a node and viewing the value within the parenthesis next to the name of the object.
:::

<img alt="Register command SDK." src="/_images/data_flow.png" center/>
