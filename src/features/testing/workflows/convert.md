# Convert Workflows

> Before you dive in, read up on the [workflow](/concepts/workflows.md) concept first.

Convert Workflows allow you to create actions using strings as input.

These workflows are triggered manually and are integrated in various areas of Caido:

<img alt="Convert context menu" src="/_images/workflow_convert_context_menu.png"/>

## Special Nodes

Most convert nodes have simple inputs that are covered by the [workflow](/concepts/workflows.md) guide.

There are a few exceptions that require further explanation:

- [JavaScript node](#javascript)
- [Shell node](#shell)
- [Control flow nodes](#control-flow)

### JavaScript

`Javascript` code nodes allow you to run custom scripts in your convert workflow.
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
- `asString`: This loosely converts an array of bytes into a String, invalid characters will be represented with the � character.

Please [let us know](https://github.com/caido/caido/issues/new?template=feature.md) which utilities you would like to see in the SDK!

### Shell

Shell nodes allow you to call external programs in the workflow.
Depending on the platform on which Caido is running (unix or windows) you will have access to different shells.

<img alt="Shell selection" src="/_images/workflow_convert_node_shell.png" height="300" center/>

Since those shell are run in non-interactive mode, they do not source any files prior to running the script (see [bash manual](https://linux.die.net/man/1/bash)). For some shells, Caido will try to source the default `.[shell]rc` file in your home directory. If that doesn't work for you, you can override manually the `Init`.

<img alt="Init script override" src="/_images/workflow_convert_node_shell_init.png" width="600" center/>

The command receives the data via `STDIN` and is expected to output on `STDOUT`. The `STDERR` will be printed in the Caido logs. The command should also exit with 0.

<img alt="Input for command" src="/_images/workflow_convert_node_shell_code.png" width="600" center/>

### Control flow

Control flow nodes allow you to take various paths based on some conditions.
Right now we only offer an `if/else`, but we will likely offer loops and other control flow nodes in the future.

The `If/Else Javascript` node is very similar to the code node, with the exception that **it must return a boolean**.

```javascript
export function run(input, sdk) {
  return false;
}
```

Based on the result, the execution will take the `True` or `False` branch.
**Make sure to connect both** to the rest of the workflow!
