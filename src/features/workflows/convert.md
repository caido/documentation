# Convert Workflows

> **NOTE**: Convert workflows are part of our new **workflow** system, it is still a work-in-progress. This documentation might be outdated when you read it.

Convert workflows allow you to create arbitrary conversion pipelines using `nodes` chained together.
When running a workflow, the `input` is injected in the `Convert Start` node and it will run until it reaches a `Convert End` node.

![convert basic](/_images/workflow_convert_basic.png)

## Flow

When you add new nodes, you need to make sure you always create a valid path in between the start and the end nodes.
The execution will follow the nodes' `Execution` property, usually named `exec`.

![convert flow](/_images/workflow_convert_flow.png)

## Data mapping

Nodes can have multiple inputs and outputs. Caido will do its best to automatically map the data between the nodes, but it might not always be possible.
You can change the data mapping by clicking on the `pen` icon on the line connecting two nodes.

![convert data mapping](/_images/workflow_convert_data_mapping.png)

## Nodes

We currently only offer "official" nodes made by us, but we hope to allow the community to create custom nodes in the near future!

### Regular

There are many "regular" nodes offered in Convert workflows, you can select them from the left panel.
They are grouped by `tag` and can appear in multiple places.

<div align="center">
  <img src="/_images/workflow_convert_node_tags.png" alt="convert node tags" height="500" />
</div>

They usually have some parameters that you can configure directly in the node.
Those will affect how the node behaves.

![convert node parameters](/_images/workflow_convert_node_parameters.png)

### Code

> **PRO FEATURE**

Code nodes allow you to run custom scripts in your convert pipeline.
They have a minimal code editor that you can open when clicking on `Edit Code`.

The code **must** export a function called `run` that takes an `input` and the `sdk` as arguments and return either a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of numbers (representing the UTF-8 bytes).

**By default, the input is an array of bytes.**

![convert node js](/_images/workflow_convert_node_js.png)

```javascript
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

The `sdk` object provides some basic utilities, namely:

- `console`: This is similar to the `console` provided in standard Javascript runtimes. Only the `log` method is available at the moment.
- `asString`: This loosely converts an array of bytes into a String, invalid characters will be represented with the � character.

Please [let us know](https://github.com/caido/caido/issues/new?template=feature.md) which utilities you would like to see in the SDK!

### Control flow

> **PRO FEATURE**

Control flow nodes allow you to take various paths based on some conditions.
Right now we only offer an `if/else`, but we will likely offer loops and other control flow nodes in the future.

The `if/else` node is very similar to the code node, with the exception that **it must return a boolean**.

<div align="center">
  <img src="/_images/workflow_convert_node_if.png" alt="convert node if" height="400" />
</div>

```javascript
export function run(input, sdk) {
  return false;
}
```

Based on the result, the execution will take the `True` or `False` branch.
**Make sure to connect both** to the rest of the workflow!
