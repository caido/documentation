---
description: "Find detailed reference information on workflow node data types and their compatibility conversions in Caido workflow automation."
---

# Workflow Node Data Types

Nodes are defined by various different input and output data types.

When referencing a node's data for use in another, the types must be compatible with each other.

## Data Type Conversions

Data can be shared across nodes as long as the types are `Exact` (expected) or are `Compatible` based on the following conversions:

::: tip
You can view the data type by **clicking** on a node and viewing the value within the parenthesis. This will be above the reference data drop-down menu.
<img alt="Node reference drop-down menu." src="/_images/node_reference_selection.png" center no-shadow/>
:::

::: info
[View the SDK for the types here.](https://developer.caido.io/app/reference/sdks/workflow/#data)
:::

### String

Strings are compatible with:

| Type | Description |
|------|-------------|
| String: Choice | Variation of string. |
| String: Code | Variation of string. |
| Bytes | Encoded as UTF-8 with lossy conversion (invalid characters are replaced with `�`). |
| Bool | Converts to `"true"` or `"false"`. |
| Integer | Base-10 decimal encoding. |

### Bytes

Bytes are compatible with:

| Type | Description |
|------|-------------|
| String | UTF-8 encoded bytes. |
| Bool | Converts to `"true"` or `"false"` in bytes. |
| Integer | First converts to string type and then to UTF-8 encoded bytes. |

### Bool

Booleans are compatible with:

| Type | Description |
|------|-------------|
| Integer | Is `true` if integer is not zero - otherwise `false`. |
| Bytes/String | Is `true` for `"true"`, `"on"`, `"yes"`, and `"1"` - otherwise `false`. |

### Integer

Integers are compatible with:

| Type | Description |
|------|-------------|
| Bool | Is `true` if integer is `1` - `false` if `0`. |
| Bytes | Converted to string loosely, supports hex (`0x`), binary (`0b`), octal (`0o`), supports sign (`+`, `-`). |
| String | Parsed from string, supports hex (`0x`), binary (`0b`), octal (`0o`), supports sign (`+`, `-`). |

### Request & Responses

There is no conversion besides their own.
