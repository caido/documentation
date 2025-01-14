# Workflow Execution and Data Flow

::: info
[Learn the difference between Plugins and Workflows in Caido.](https://developer.caido.io/concepts/backend/workflow.html)
:::

The order of Workflow operation can be split into two concepts:

## Workflow Execution

A Workflow processes Nodes in sequential order:

1. Beginning at the root of the Node tree with either a "Start" or "Intercept" Node.
2. Every subsequent node in the chain is processed in order. The execution may take the path of another branch based on conditionals.
3. The Workflow ends either when it reaches an explicit "End" Node or when no more Nodes are available in the chain.

<img alt="Register command SDK." src="/_images/execution_flow.png" center/>

## Workflow Data Flow

Each Node in a Workflow has an input and output data type.

::: info
The `Choice` and `Code` types are just variations of `String`.
:::

With this typed data system, even though Nodes are processed sequentially, you do not need a direct line between two Nodes in order to pass data from one to another. Instead, data can be referenced using dot notation of a Node's alias and it's output alias:

```
[node_alias].[output_alias]
```

::: tip
You can view the data type by clicking on a Node and viewing the value within the parenthesis next to the name of the object.
:::

<img alt="Register command SDK." src="/_images/data_flow.png" center/>
