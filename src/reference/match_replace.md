# Match & Replace

The `Match & Replace` interface allows you to define rules to automate the modification of requests and responses as they pass through the proxy.

<img alt="Match and replace interface" src="/_images/match_and_replace.png" center/>

## Section

The `Section` refers to the portion of the request or response that the rule will apply to. To target a Section, expand the dropdown menu and select one of the available options.

### Request Sections

- `Request Path`: The path of a request.
- `Request Method`: The HTTP method of a request.
- `Request Query`: The query of a request.
- `Request First Line`: The first line of a request.
- `Request Header`: The header or headers of a request.
- `Request Body`: The body data of a request.

<img alt="Match and replace request sections." src="/_images/request_sections.png" center/>

### Response Sections

- `Response First Line`: The first line of a response.
- `Response Status Code`: The HTTP status code of a response.
- `Response Header`: The header or headers of a response.
- `Response Body`: The body data of a response.

<img alt="Match and replace response sections." src="/_images/response_sections.png" center/>

## Section Actions

Certain Sections will include additional modification options that will be located to the right of the Section dropdown menu.

When targeting the `Request Query` section:

- `Update Raw`: Makes modifications to the query as a whole.
- `Update Param`: Matches a query parameter key name and modifies its value.
- `Add Param`: Appends an additional query parameter.
- `Remove Param`: Removes a query parameter by key name.

<img alt="Request query actions." src="/_images/request_query_actions.png" center/>

When targeting either the `Request Header` or `Response Header` sections:

- `Update Raw`: Makes modifications to the headers as a whole.
- `Update Value`: Matches a header's key name and modifies its value.
- `Add`: Inserts a new header key-value pair.
- `Remove`: Removes a header by key name.

<img alt="Request header actions." src="/_images/request_header_actions.png" center/>

---

<img alt="Response header actions." src="/_images/response_header_actions.png" center/>

## Matcher

The `Matcher` specifies which search term will be matched for replacement. To specify a Matcher, expand the dropdown menu and select one of the available options:

- `Full`: The entire Section will be replaced. If there are multiple Section parameters, such as when dealing with headers, all instances will be replaced.
- `Regex`: Matches to Rust flavor regular expressions will be replaced.

::: warning NOTE
Caido does not currently support look-around and backreference regular expressions.
:::

- `String`: Matches to string values will be replaced.

::: tip
To test your regular expressions, visit [regex101.com](https://regex101.com/).
:::

<img alt="Matcher options." src="/_images/matcher.png" center/>

## Replacer

The `Replacer` specifies the modification that will replace Matcher. To specify a Replacer, expand the dropdown menu and select one of the available options:

- `Term`: Replace the Matcher with a string value.
- `workflow`: Apply a [Convert] workflow (/concepts/workflows_intro.html#convert-workflows) to the Matcher.

<img alt="Replacer options." src="/_images/replacer.png" center/>

---

<img alt="Replacer workflow options." src="/_images/replacer_workflow.png" center/>

::: tip
If you're having an issue with your Match & Replace rule not taking affect,
make sure you're looking at the un-prettified version of the request/response body by pressing the `{} Prettify` button within any request/response pane to ensure your spacing is correct.
:::

## Conditions

Using [HTTPQL](/reference/httpql.html) statements, a `Condition` can be defined in order to target specific requests or responses.

<img alt="Replacer workflow options." src="/_images/match_replace_condition.png" center/>

## Testing

Once a rule has been defined, you can test its efficacy by supplying a mock request or response in the `Before` pane, clicking the `Test` button, and viewing the results in the `After` pane.

<img alt="Match and replace rule testing." src="/_images/match_replace_rule_test.png" center/>

## Collections

Collections allow you to help you stay organized during testing by grouping rules together. By default, once a rule is saved by clicking the `+ Add` button, it will be added to the `Default Collection`.

To create a new Collection, select the down carat button attached to the `+ New Rule` button in the upper-left corner of the interface and select `New Collection`.

<img alt="New match and replace Collection." src="/_images/match_replace_create_collection.png" center/>

To move rules between collections - **click, hold and drag** a rule into the Collection folder you wish to include the rule in.

To list all the rules of a certain Collection, expand its contents by clicking on the leading carat button of the Collection entry. Clicking the carat button again will collapse the list.

<img alt="Match and replace Collection rules list." src="/_images/match_replace_collection_list_rules.png" center/>

By clicking on the `...` button of a Collection, you can add a rule, rename the Collection, and delete the Collection.

<img alt="Match and replace Collection rules list." src="/_images/match_replace_collection_options.png" center/>

Similarly, by clicking on the `...` button of a rule in a Collection, you can enable/disable, rename, and delete it. You can also enable/disable a rule by clicking on the checkbox of the associated rule.

<img alt="Match and replace Collection rules list." src="/_images/match_replace_rule_options.png" center/>

All enabled rules will appear in the `Active Rules` pane.

<img alt="Match and replace Collection rules list." src="/_images/match_replace_active_rules.png" center/>

::: tip
The order of the rules in the Active Rules section determines the order in which they will be applied to the requests and responses. You can change the order of the rules by dragging and dropping. This allows you to adjust the order to suit your needs and can be useful when working with multiple rules that may have conflicting or overlapping conditions.
:::
