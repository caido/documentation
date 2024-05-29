# HTTPQL

HTTPQL is the query language we use in Caido to let you filtering requests and responses. It is an evolving language that we hope will eventually become an industry standard.

</br>

## Primitives

<img width="500" alt="Parts of a filter clause" src="/_images/httpql_clause.png" no-shadow center/>

## 1. Namespace

The first part of a Filter Clause is the `Namespace`. We currently support 3 Namespaces:

- **req**: For HTTP requests.
- **resp**: For HTTP responses.
- **preset**: For Filter Presets.

The **Preset** Namespace is a bit different, it doesn't have a `Field` nor an `Operator`. View the [Filters](/reference/features/overview/filters.md) documentation for more information.

## 2. Field

The second part of Filter Clause is the `Field`. Fields differ based on the `Namespace`.
We will add more Fields eventually. [Let us know](https://github.com/caido/caido/issues/new?template=feature.md&title=New%20HttpQL%20field:) which ones you need!

### req

- **ext**: The file extension (if we detected one). Extensions in Caido always contain the leading `.` (like `.js`). We are liberal in what we accept as an extension.
- **host**: The hostname of the target server.
- **method**: The HTTP Method used for the request in uppercase. If the request is malformed, this will contain the bytes read until the first space.
- **path**: The path of the query, including the extension.
- **port**: The port of the target server.
- **raw**: The full raw data of the request. This allows you to search on things we currently don't index (like headers).

### resp

- **code**: Status code of the reponse. If the response is malformed, this will contain everything after `HTTP/1.1` and the following space.

- **raw**: The full raw data of the response. This allows you to search on things we currently don't index (like headers).

## 3. Operator

We have three categories of `Operators` depending on the data type.

### Integers

This category of Operators works on Fields that are numbers like `code` and `port`.

- **eq**: Equal to `value`.
- **gt**: Greater than `value`.
- **gte**: Greater than or equal to `value`.
- **lt**: Less than `value`.
- **lte**: Less than or equal to `value`.
- **ne**: No equal to `value`.

### String/Bytes

This category of Operators works on Fields that are text values (or bytes) like `path` and `raw`.

- **cont**: Contains `value` (case insensitive).
- **eq**: Equal to `value`.
- **like**: Sqlite `LIKE` [Operator](https://www.sqlite.org/lang_expr.html#the_like_glob_regexp_match_and_extract_operators). The symbol `%` matches zero or more characters (like `%.js` to match `.map.js`) and the symbol `_` matches one character (like `v_lue` to match `vAlue`).
- **ncont**: Doesn't contain `value` (case insensitive).
- **ne**: No equal to `value`.
- **nlike**: SQLITE `NOT LIKE` Operator, see `like` for more details.

### Regex

This category of Operators works on Fields that are text values (or bytes) like `path` and `raw`.

- **regex**: Matches the regex `/value.+/`.
- **nregex**: Doesn't match the regex `/value.+/`.

## 4. Value

This is the value against which the Field will be compared. The value is either an integer (like `1`), a string (`"value"`) or a regex (`/value/`) depending on the Field and Operator.

### Preset

The `Preset` value is a different. You can reference Presets in one of two ways:

- **Name**: `preset:"Preset name"`.
- **Alias**: `preset:preset-alias`.

View the [Filters](/reference/features/overview/filters.md) documentation for more information.

### Standalone

We support string standalone values **without** `Namespace`, `Field` and `Operator` (like `"my value"`).
It is a shortcut to search across both requests and responses, it is replaced at runtime by:

```
(req.raw.cont:"my value" OR resp.raw.cont:"my value")
```

</br>

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
