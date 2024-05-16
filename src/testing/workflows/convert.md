# Convert Workflows

Convert Workflows allow you to create arbitrary conversion pipelines using `Nodes` chained together.
When running a Workflow, the `input` is injected in the `Convert Start` Node and it will run until it reaches a `Convert End` Node.

<img alt="Convert basic" src="/_images/workflow_convert_basic.png"/>

## Execution Flow

---

When you add new Nodes, you need to make sure you always create a valid path in between the Start and the End Nodes.
You can always have multiple paths, but make sure they all terminate.

> **NOTE**: The execution flow is independent from the flow of data, see the next section.

![convert flow](/_images/workflow_convert_flow.png)

## Data Mapping

---

Clicking on a Node will open the Node property panel on the right. Nodes generally have multiple inputs and outputs as well as an Alias.

Caido uses a system of references to allow data to flow between the Nodes. The references are always `$node_alias.property_alias`, for exemple `$start.data`. Caido uses some heuristic to match the references when you add a new Node, but it is not always be possible.

> **NOTE**: This means data for a given Node doesn't have to come from it's immediate parent!

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
        <img alt="Convert basic." src="/_images/workflow_convert_data_mapping_output.png"/>
      </td>
      <td no-border>
        </br>
        <img alt="Convert basic." src="/_images/workflow_convert_data_mapping_input.png"/>
      </td>
    </tr>
  </tbody>
</table>

## Nodes

---

We currently only offer "official" Nodes made by us, but we hope to allow the community to create custom Nodes in the near future!

### Regular

There are many "regular" Nodes offered in Convert Workflows, you can select them from the left panel.

<img alt="List of nodes." src="/_images/workflow_convert_node_list.png" height="500" center/>

Once you drag the Node on the editor, you can click on it to view its properties on this right. This is where you also do the data mapping, like mentioned in the previous section.

<img alt="Node properties" src="/_images/workflow_convert_node_properties.png" height="700" center/>

### Code

`Javascript` code nodes allow you to run custom scripts in your Convert Workflow.
They have a minimal code editor available in the properties.

The code **must** export a function called `run` that takes an `input` and the `sdk` as arguments and return either a [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or an [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) of numbers (representing the UTF-8 bytes).

**By default, the input is an array of bytes.**

```javascript
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);
  return parsed;
}
```

The `sdk` object provides some basic utilities, namely:

- `console`: This is similar to the `console` provided in standard Javascript runtimes. Only the `log` method is available at the moment.
- `asString`: This loosely converts an array of bytes into a String, invalid characters will be represented with the `�` character.

Please [let us know](https://github.com/caido/caido/issues/new?template=feature.md) which utilities you would like to see in the SDK!

### Control Flow

Control flow Nodes allow you to take various paths based on certain conditions.
Right now we only offer an `if/else`, but we will likely offer loops and other control flow Nodes in the future.

The `If/Else Javascript` Node is very similar to the Code Node, with the exception that **it must return a Boolean**.

```javascript
export function run(input, sdk) {
  return false;
}
```

Based on the result, the execution will take the `True` or `False` branch.
**Make sure to connect both** to the rest of the Workflow!

### Shell

Shell Nodes allow you to call external programs in the Workflow.
Depending on the platform on which Caido is running (unix or windows) you will have access to different shells.

<img alt="Shell selection." src="/_images/workflow_convert_node_shell.png" height="300" center/>

Since those shells are run in non-interactive mode, they do not source any files prior to running the script (see [bash manual](https://linux.die.net/man/1/bash)). For some shells, Caido will try to source the default `.[shell]rc` file in your home directory. If that doesn't work for you, you can manually override the `Init`.

<img alt="Init script override." src="/_images/workflow_convert_node_shell_init.png" width="600" center/>

The command receives the data via `STDIN` and is expected to output on `STDOUT`. The `STDERR` will be printed in the Caido logs. The command should also exit with 0.

<img alt="Input for command." src="/_images/workflow_convert_node_shell_code.png" width="600" center/>
