---
description: "Find detailed reference information on Caido Interpolation within workflow nodes allowing rich and dynamic reporting."
---

# Interpolation

Interpolation enables dynamic content generation within workflow nodes by
embedding [JavaScript](#javascript-engine) expressions in text. Those
expressions can take the following shapes:

- [Inline](#inline-evaluation)
- [Code Blocks](#tagged-code-blocks)

## Inline Evaluation

Inline interpolation uses `<% %>` delimiters to execute JavaScript expressions
and output results in-place within text. For example:

```md
# Found <% issue_count %> issues
```
::: warning NOTE
The example above assumes a `issue_count` variable was previously declared.
:::

### Escaping

Use `\<% %>` to display literal interpolation syntax without execution (shows as `<% %>`).

### Comments

| Syntax | Description |
|--------|-------------|
| `<% value // comment %>` | Line comments - `%>` closes the interpolation block. |
| `<% /* comment with %> */ value %>` | Block comments allow including `%>` in comments. |

## Tagged Code Blocks

Markdown-style code blocks with the `exec` tag are evaluated by the JavaScript engine. For example:

````md
```exec
const issue_count = 5;
println("# Found " + issue_count + " issues");
```
````

### Output Functions

| Function | Description |
|----------|-------------|
| `print(...values)` | Outputs values without newline. |
| `println(...values)` | Outputs values with newline. |

::: warning NOTE
Only explicitly printed content appears in final output. The `exec` code block
itself is not visible.
:::

::: tip
As [all fields share the same context](#shared-context), pre-compute complex
values in `exec` blocks without print statements, then reference variables in
simple `<% variable %>` interpolations for improved readability.
:::

## Javascript Engine

Interpolation uses [Caido's JavaScript runtime environment](/app/concepts/workflows_js.md). Refer to the [runtime documentaion](https://developer.caido.io/concepts/runtime.html) for detailed
technical specifications.

### Accessing Previous Nodes

All previous node outputs within a workflow are accessible using their
[alias](/app/concepts/workflows_nodes.html#aliases), allowing interpolation to use
values from earlier nodes in the workflow chain.

### Shared Context

All interpolable fields within a workflow node share the same execution context
which entails the following:

- **Execution Order**: Interpolations execute sequentially in the order they
  appear within the node, allowing building upon previous computations.
- **Shared Context**: All interpolations in a single node share the same
  JavaScript environment, meaning variables, functions, and state are accessible
  across all expressions within that node.
