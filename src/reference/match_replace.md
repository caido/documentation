---
description: "Find detailed reference information on Caido's Match & Replace feature including request/response sections, actions, matchers, and replacers."
---

# Match & Replace

::: tip
If you're having an issue with your Match & Replace rule not taking affect,
make sure you're looking at the un-prettified version of the request/response body by pressing the `{}` button within any request/response pane to ensure your spacing is correct.
:::

## Request Sections

| Section | Target |
|---------|-------------|
| `Request Path` | The path of a request. |
| `Request Method` | The HTTP method of a request. |
| `Request Query` | The query of a request. |
| `Request First Line` | The first line of a request. |
| `Request Header` | The header or headers of a request. |
| `Request Body` | The body data of a request. |

## Response Sections

| Section | Target |
|---------|-------------|
| `Response First Line` | The first line of a response. |
| `Response Status Code` | The HTTP status code of a response. |
| `Response Header` | The header or headers of a response. |
| `Response Body` | The body data of a response. |

## Request Query Section Actions

| Action | Description |
|--------|-------------|
| `Update Raw` | Makes modifications to the query as a whole. |
| `Update Param` | Matches against a query parameter key name and modifies its value. |
| `Add Param` | Appends an additional query parameter. |
| `Remove Param` | Removes a query parameter by key name. |

## Request Header/Response Header Section Actions

| Action | Description |
|--------|-------------|
| `Update Raw` | Makes modifications to the headers as a whole. |
| `Update Value` | Matches against a header's key name and modifies its value. |
| `Add` | Inserts a new header key-value pair. |
| `Remove` | Removes a header by key name. |

## Matcher

| Matcher | Description |
|---------|-------------|
| `Full` | Matches against the entire section will be replaced. If there are multiple section items, such as when dealing with headers, all instances will be replaced. |
| `Regex` | Matches against Rust flavor regular expressions. |
| `String` | Matches against string values. |

::: warning NOTE
Caido does not currently support look-around and backreference regular expressions.
:::

::: tip
To test your regular expressions, visit [regex101.com](https://regex101.com/).
:::

## Replacer

| Replacer | Description |
|----------|-------------|
| `Term` | Replaces the match with a string value. |
| `Workflow` | Applies a workflow to the match. |
