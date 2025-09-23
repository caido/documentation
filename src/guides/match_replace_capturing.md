---
description: "Guide for using capturing groups in Caido's Match & Replace feature to extract and reference specific parts of regular expressions."
---

# Using Capturing Groups

By encasing sections of a regular expression with parentheses, you can extract and reference specific subpatterns. Known as "capturing groups", these value groups can then be referenced using `$` followed by the group's number, starting from `1`.

## JSON Capturing Groups

::: tip
To test your regular expressions, visit [regex101.com](https://regex101.com).
:::

To capture key-value string pairs from JSON such as:

```json
{"key":"value"}
```

With the `Matcher` set to `Regex`, type the following regular expression in the input field:

```regex
\{\"([^\"]+)\":\"([^\"]+)\"\}
```

To reference the capturing groups in the `Replacer` input field, select `Term` and use:

- `$1` to reference `key`.
- `$2` to reference `value`.

::: warning NOTE
Caido does not currently support look-around and backreference regular expressions.
:::

<img alt="Using capturing groups for replacement." src="/_images/match_replace_capturing.png" center/>

::: tip
To use `$` and an integer literally, escape the `$` with another `$`:

`{"$$1":"$2"}` becomes `{"$1":"value"}`.
:::
