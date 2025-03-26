# Creating Match & Replace Rules

In this guide, we'll cover how to create match and replace rules for three different use cases.

::: info
For additional documentation on Caido's Match & Replace feature - click [here](/reference/match_replace.md).
:::

## Creating a New Rule

There are numerous ways to create a new rule in the Match & Replace interface:

<img alt="Creating a new match and replace rule." src="/_images/create_match_replace_rule.png" center/>

::: tip TIPS

- If you're having an issue with your Match & Replace rule not taking affect make sure you're looking at the un-prettified version of the request/response body by pressing the `{} Prettify` button within any request/response pane to ensure your spacing is correct.
- The order of the rules in the Active Rules section determines the order in which they will be applied to the requests and responses. You can change the order of the rules by dragging and dropping. This allows you to adjust the order to suit your needs and can be useful when working with multiple rules that may have conflicting or overlapping conditions.

:::

## Adding a Custom Request Header

To add an additional header to a request, select the `Request Header` option from the `Section` dropdown menu. Then select the `Add` action. Provide the key name of the header and a string value.

<img alt="Creating a new match and replace rule." src="/_images/custom_bounty_header.png" center/>

## Base64 Encode Request Body Data

To Base64 encode the body data of a request, select the `Request Body` option from the `Section` dropdown menu. Next, set the `Matcher` to `Full` and the `Replacer` to `Workflow`. Then select the `Base64 Encode` Workflow.

::: tip
Using [HTTPQL](/reference/httpql.html) statements, a `Condition` can be defined in order to target specific requests or responses.
:::

<img alt="Creating a new match and replace rule." src="/_images/base64_request_body.png" center/>

## Using Capture Groups

Caido Match & Replace rules also support regex capture groups (_expressions enclosed in parenthesis that can be referenced using `$` followed by the group integer_).

::: warning NOTE
Caido does not currently support look-around and backreference regular expressions.
:::

::: tip TIPS

- To test your regular expressions, visit [regex101.com](https://regex101.com/).
- Refer to the [Rust regex documentation](https://docs.rs/regex/latest/regex/).

:::

<img alt="Creating a new match and replace rule." src="/_images/regex_request_body.png" center/>
