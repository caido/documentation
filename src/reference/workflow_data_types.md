# Workflow Data Types

Nodes are defined by various different input and output data types.

When referencing a Node's data for use in another, the types must be compatible with each other.

## Data Type Conversions

Data can be shared across Nodes as long as the types are `Exact` (expected) or are `Compatible` based on the following conversions:

::: tip
You can view the data type by clicking on a Node and viewing the value within the parenthesis. This will be above the reference data dropdown menu.

:::

### String

::: info
The `Choice` and `Code` are not types in of themselves but rather just specializations of `String`.
:::

Strings are compatible with:

- **Bytes**: String (UTF-8 with lossy conversion, invalid characters are replaced with `�`).
- **Bool**: String (converts to `"true"` or `"false"`).
- **Integer**: String (base-10 decimal encoding).

### Bytes

Bytes are compatible with:

- **String**: Bytes (UTF-8 encoding).
- **Bool**: String (converts to `"true"` or `"false"` in bytes).
- **Integer**: String (converts to string representation in bytes).

### Bool

Booleans are compatible with:

- **Integer**: Bool(`true` if integer is not zero - otherwise `false`).
- **Bytes/String**: Bool(`true` for "true", "on", "yes", and "1" - otherwise false).

### Integer

Integers are compatible with:

- **Bool**: Integer(`true` if integer !=0 - otherwise `false`).
- **Bytes/String**: Integer(parseIt ("0x123", "10", "#0b0", "0o123", "-123"), lossy string conversion for bytes).

### Request & Responses

There is no conversion besides their own.
