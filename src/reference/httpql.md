---
description: "Find detailed reference information on HTTPQL query language used in Caido for filtering requests and responses with namespaces, fields, and operators."
---

# HTTPQL

HTTPQL is the query language used in Caido that gives you the ability to filter traffic. The constructing primitives of an HTTPQL query statement, in order of position, are the:

1. [Namespace](#namespaces)
2. [Field](#fields)
3. [Operator](#operators)
4. [Value](#values)

<img width="500" alt="Parts of a filter clause" src="/_images/httpql_clause.png" no-shadow center/>

::: tip
The development of fields is ongoing. To request a field, [submit a templated issue.](https://github.com/caido/caido/issues/new?template=feature.md&title=New%20HttpQL%20field:)
:::

<div class="video small">
  <iframe src="https://www.youtube.com/embed/0SxdQVjzRss?si=7bb3aoxU8anKV4Sc" title="YouTube video player." frameborder="0"></iframe>
</div>

## Namespaces

::: info
Namespaces are project-specific.
:::

| Namespace | Description |
|-----------|-------------|
| `req` | All proxied HTTP requests. |
| `resp` | All proxied HTTP responses. |
| `preset` | Filter presets. |
| `row` | A request's numerical identifier in the traffic tables. |
| `source` | The Caido feature source (only available in the Search interface). |

::: warning NOTE
The `preset` and `source` namespaces do not have any fields available and instead take direct values.
:::

## Fields

### req

| Available Fields | Description | Value Type |
|------------------|-------------|------------|
| `created_at` | The date and time the request was sent. | Date/Time: [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339) (`2024-06-24T17:03:48+00:00`) / [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#appendix-A) (`2024-06-24T17:03:48+0000`) / [RFC2822](https://datatracker.ietf.org/doc/html/rfc2822) (`Mon, 24 Jun 2024 17:03:48 +0000`) / [RFC7231](https://datatracker.ietf.org/doc/html/rfc7231#section-7.1.1.2) (`Mon, 24 Jun 2024 17:03:48 GMT`) / [ISO9075](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_get-format) (`2024-06-24T17:03:48Z`) |
| `ext` | The extension of the requested file. | String/Byte |
| `host` | The value of the request's `Host` header. | String/Byte |
| `len` | The request size in bytes (includes request line, headers, and body data). | Integer |
| `method` | The HTTP method used for the request. | String/Byte |
| `path` | The URL path (includes files). | String/Byte |
| `port` | The port of the target server. | Integer |
| `query` | The URL query string (excludes the leading `?`). | String/Byte |
| `raw` | The full raw data of the request (includes request line, headers, and body data). | String/Byte |
| `tls` | If the connection used TLS/SSL encryption. | Boolean (`true`/`false`) |

### resp

| Available Fields | Description | Value Type |
|------------------|-------------|------------|
| `code` | The status code of the reponse. | Integer |
| `len` | The response size in bytes (includes response line, headers, and body data). | Integer |
| `raw` | The full raw data of the response (includes response line, headers, and body data). | String/Byte |
| `roundtrip` | The total request/response cycle time (in milliseconds). | Integer |

### row

| Available Field | Description | Value Type |
|------------------|-------------------|------------|
| `id` | The numerical identifier of a request's traffic table row. | Integer |

## Operators

| Operator | Description | Value Type | Additional Details |
|----------|-------------|------------|-------------------|
| `eq` | Equal to the supplied value. | String/Byte, Integer | Case sensitive. Requires leading `.` character for `ext` field. |
| `gt` | Greater than the supplied value. | Date/Time, Integer | |
| `gte` | Greater than or equal to the supplied value. | Integer | |
| `lt` | Less than the supplied value. | Date/Time, Integer | |
| `lte` | Less than or equal to the supplied value. | Integer | |
| `ne` | Not equal to the supplied value. | String/Byte, Integer | Case sensitive. Requires leading `.` character for `ext` field. |
| `cont` | Contains the supplied value. | String/Byte | Case insensitive. |
| `like` | The [SQLite LIKE Operator](https://www.sqlite.org/lang_expr.html#the_like_glob_regexp_match_and_extract_operators). | String/Byte | Case sensitive for Unicode characters beyond the ASCII range. |
| `ncont` | Does not contain the supplied value. | String/Byte | Case insensitive. |
| `nlike` | The [SQLite NOT LIKE Operator](https://www.sqlite.org/lang_expr.html#the_like_glob_regexp_match_and_extract_operators). | String/Byte | Case sensitive for Unicode characters beyond the ASCII range. |
| `regex` | Matches to the regular expression. | String/Byte | Rust-flavored syntax. |
| `nregex` | Does not match to the regular expression. | String/Byte | Rust-flavored syntax. |

::: tip
In SQLite - the `%` character matches zero or more characters (_`%.js` matches `.map.js`_) and the `_` character matches one character (_`v_lue` matches `vAlue`_). Visit [https://regex101.com/](https://regex101.com/) and select **Rust** syntax to test regular expressions.
:::

::: warning NOTE
Not all regex features are currently supported by Caido (_such as look-ahead expressions_) as they are not included in the regex library of Rust.
:::

## Values

### preset

| Available Values | Example |
|------------------|---------|
| A filter preset's alias. | `preset:"no-images"` |
| A filter preset's name. | `preset:"No Images"` |

### source

| Available Values | Additional Details | Example |
|------------------|--------------------|---------|
| `automate`, `intercept`, `plugin`, `replay`, `workflow` | Requires lowercase. Autocomplete is not supported. | `source:"plugin"` |

::: warning NOTE
The `source` namespace is only available in the Search interface. If no results are returned, ensure the inclusion of the source is enabled in the [Advanced options](/guides/search_filtering.md) menu.
:::

::: tip
Entering a string (_such as `"my value"`_) into the HTTPQL input field will search across both requests and responses. The supplied string is replaced at runtime by:

```sql
(req.raw.cont:"my value" OR resp.raw.cont:"my value")
```

:::

## Combining Statements

Query statements can be combined together using logical operators and logical grouping.

<img width="600" alt="A full HTTPQL query." src="/_images/httpql_logical.png" no-shadow center/>

### Logical Operators

| Operator | Description |
|----------|-------------|
| AND | Both the left and right clauses must be true. |
| OR | Either the left or right clause must be true. |

::: info
Operators are case insensitive. Both have the **same priority**.
:::

### Logical Grouping

Caido supports the priority of operations: `AND` has a higher priority than `OR`.

- `<Clause1> AND <Clause2> OR <Clause3>` is equivalent to `((<Clause1> AND <Clause2>) OR <Clause3>)`.
- `<Clause1> OR <Clause2> AND <Clause3>` is equivalent to `(<Clause1> OR (<Clause2> AND <Clause3>))`.
- `<Clause1> AND <Clause2> AND <Clause3>` is equivalent to `((<Clause1> AND <Clause2>) AND <Clause3>)`.

::: tip
While parentheses are optional, we recommend using them to make your logical grouping clear.
:::
