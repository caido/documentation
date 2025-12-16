---
description: "Find detailed reference information on Caido Interpolation within workflow nodes allowing rich and dynamic reporting."
---

# Interpolation

Interpolation enables dynamic content generation within workflow nodes by
embedding [JavaScript](#javascript-engine) expressions in text. Those
expressions can take the following shapes:

1. [Inline](#inline-evaluation)
2. [Code Blocks](#tagged-code-blocks)

## Inline Evaluation

Inline interpolation uses `<% %>` delimiters to execute JavaScript expressions
and output results in-place within text.

### Escaping

Use `\<% %>` to display literal interpolation syntax without execution (shows as `<% %>`).

### Comments

| Syntax | Description |
|--------|-------------|
| `<% value // comment %>` | Line comments - `%>` closes the interpolation block. |
| `<% /* comment with %> */ value %>` | Block comments for including `%>` in comments. |

## Tagged Code Blocks

| Tag | Description |
|-----|-------------|
| `exec` | Markdown code blocks with this tag are evaluated by the JavaScript engine. |

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

Interpolation uses Caido's JavaScript runtime environment. See [JavaScript in
Workflows](/concepts/workflows_js) for understanding JavaScript concepts in
workflows and refer to the [Runtime
documentation](https://developer.caido.io/concepts/runtime.html) for detailed
technical specifications.

### Accessing previous nodes

All previous node outputs within a workflow are accessible using their
[alias](/concepts/workflows_nodes.html#aliases), allowing interpolation to use
values from earlier nodes in the workflow chain.

### Shared context

All Interpolable fields within a workflow node share the same execution context
which entails the following:

- **Execution Order**: Interpolations execute sequentially in the order they
  appear within the node, allowing building upon previous computations.
- **Shared Context**: All interpolations in a single node share the same
  JavaScript environment, meaning variables, functions, and state are accessible
  across all expressions within that node.

