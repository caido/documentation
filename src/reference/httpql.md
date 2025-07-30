# HTTPQL

HTTPQL is the query language we use in Caido to let you filtering requests and responses. It is an evolving language that we hope will eventually become an industry standard.

::: tip
The development of Fields is ongoing. [Let us know](https://github.com/caido/caido/issues/new?template=feature.md&title=New%20HttpQL%20field:) which ones you need!
:::

## Primitives

The constructing primitives of HTTPQL Filter Clause, in order of position, are the:

1. [Namespace](#namespace)
2. [Field](#field)
3. [Operator](#operator-and-value)
4. [Value](#operator-and-value)

<img width="500" alt="Parts of a filter clause" src="/_images/httpql_clause.png" no-shadow center/>

## Namespace

The **Namespaces** that Caido supports include:

- `req`: HTTP requests.
- `resp`: HTTP responses.
- `preset`: Filter Presets.
- `row`: A table row.
- `source`: The Caido feature source.

::: info

- The `preset` and `source` Namespaces do not have a `Field` or an `Operator`. View [Exception Values](#exception-values) for usage.
- The `source` Namespace is available in Search.
:::

## Field

The **Fields** that Caido supports include:

### req

- `ext`: The file extension (_if present_). Extensions in Caido always contain the leading `.` (_such as `.js`_).
- `host`: The hostname of the target server.
- `method`: The HTTP Method used for the request in uppercase. If the request is malformed, this will contain the bytes read until the first whitespace.
- `path`: The path of the query, including the extension.
- `port`: The port of the target server.
- `raw`: The full raw data of the request. This allows you to search by elements that Caido currently does not index (_such as headers_).
- `created_at`: The date and time the request was sent.

::: tip
Caido is liberal in what is accepted as an extension.
:::

### resp

- `code`: The status code of the reponse. If the response is malformed, this will contain everything after `HTTP/1.1` and the following whitespace.
- `raw`: The full raw data of the response. This allows you to search by elements that Caido currently does not index (_such as headers_).
- `roundtrip`: The total time taken (_in milliseconds_) for the request to travel from the client to the server and for the response to travel back from the server to the client.

### row

- `id`: The numerical ID of a table row.

## Operator and Value

The **Value** types and associated **Operators** that Caido supports include:

### Integers

These Operators work on **Fields** that are numerical (_`port`, `code`, `roundtrip` and `id`_).

- `eq`: **Equal to** the supplied value.
- `gt`: **Greater than** the supplied value.
- `gte`: **Greater than or equal to** the supplied value.
- `lt`: **Less than** the supplied value.
- `lte`: **Less than or equal to** the supplied value.
- `ne`: **Not equal** to the supplied value.

### String/Bytes

These Operators work on **Fields** that are text or byte values (_`ext`, `host`, `method`, `path`, `query` and `raw`_).

- `cont`: **Contains** the supplied value.
- `eq`: **Equal** to the supplied value.
- `like`: The [SQLite LIKE Operator](https://www.sqlite.org/lang_expr.html#the_like_glob_regexp_match_and_extract_operators).
- `ncont`: **Does not** contain the supplied value.
- `ne`: **Not equal to** the supplied value.
- `nlike`: The [SQLite NOT LIKE Operator](https://www.sqlite.org/lang_expr.html#the_like_glob_regexp_match_and_extract_operators).

::: tip TIPS

- The `cont` and `ncont` Operators are case insensitive.
- In SQLite - the `%` character matches zero or more characters (_such as `%.js` to match `.map.js`_) and the `_` character matches one character (_such as `v_lue` to match `vAlue`_).
- The `like` Operator is case sensitive for unicode characters that are beyond the ASCII range.
:::

### Regex

These Operators work on **Fields** that are text or byte values (_that are text or byte values (_`ext`, `host`, `method`, `path`, `query` and `raw`_).

- `regex`: Matches the regex `/value.+/`.
- `nregex`: Doesn't match the regex `/value.+/`.

::: info
Not all regex features are currently supported by Caido (_such as look-ahead expressions_) as they are not included in the regex library of Rust.
:::

::: tip
Visit [https://regex101.com/](https://regex101.com/) and select **Rust** syntax for assistance in creating expressions.
:::

### Date/Time

These Operators work on the **`created_at` Field**.

- `gt`: **Greater than** the supplied value.
- `lt`: **Less than** the supplied value.

The supported time formats for the values used with `created_at` Operators are:

- [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) - _example:_ 2024-06-24T17:03:48+00:00
- [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#appendix-A) - _example:_ 2024-06-24T17:03:48+0000
- [RFC2822](https://datatracker.ietf.org/doc/html/rfc2822) - _example:_ Mon, 24 Jun 2024 17:03:48 +0000
- [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.2) - _example:_ Mon, 24 Jun 2024 17:03:48 GMT
- [ISO9075](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format) - _example:_ 2024-06-24T17:03:48Z

### Standalone

Caido supports standalone string values. This serves as a search shortcut as the `Namespace`, `Field` and `Operator` do not have to be provided.

Using a standalone string (_such as `"my value"`_) will search across both requests and responses. The supplied string is replaced at runtime by:

```sql
(req.raw.cont:"my value" OR resp.raw.cont:"my value")
```

## Exception Values

### preset

When using the `preset` Namespace - the value can be reference by either the `Name` or the `Alias` of the Preset:

- **Name**: `preset:"Preset name"`.
- **Alias**: `preset:preset-alias`.

View the [Filters](/guides/filters.md) documentation for more information.

### source

- `intercept` - Traffic that has been proxied by Caido.
- `replay` - Traffic generated by sending requests using Replay.
- `automate` - Traffic generated by an Automate campaign.
- `workflow` - Traffic generated by a Workflow.

::: info
Autocomplete is not currently available when using the `source` Namespace.
:::

::: tip

- When using the `source` Namespace - use all lowercase characters when naming the desired Caido feature.
- If you are not receiving results of a `source` query - click the `Advanced` settings button next to the HTTPQL query bar to ensure the desired `Sources` are enabled.
:::

# Queries

<img width="600" alt="A full HTTPQL Query" src="/_images/httpql_logical.png" no-shadow center/>

Queries are composed of multiple Filter Clauses that are combined together using `Logical Operators` and `Logical Grouping`.

## Logical Operators

We offer two Logical Operators:

- **AND**: Both the left and right clauses must be true.
- **OR**: Either the left or right clause must be true.

::: info
Operators can be written in upper or lower case. Both have the **same priority**.
:::

## Logical Grouping

Caido supports the priority of operations, `AND` has a higher priority than `OR`. Here are some examples:

- `clause1 AND clause2 OR clause3` is equivalent to `((clause1 AND clause2) OR clause3)`.
- `clause1 OR clause2 AND clause3` is equivalent to `(clause1 OR (clause2 AND clause3))`.
- `clause1 AND clause2 AND clause3` is equivalent to `((clause1 AND clause2) AND clause3)`.

::: tip
We still recommend that you insert parentheses to make sure the Logicial Groups represent what you are trying to accomplish.
:::
