# Match & Replace

The `Match & Replace` tab allows you to define match and replace rules using HTTPQL and regex syntax. These rules can be used to automate the modification of requests and responses as they pass through the proxy.

Match & Replace rules can be organized into `Collections`, which allows you to group rules however you see fit. For example, you can create a Collection to group header rules, user authorization rules, etc. - making testing against certain elements a seamless process.

## Creating a New Match & Replace Rule

<img alt="Match & Replace." src="/_images/matchreplace_marked_layout.png" center/>

::: info
In this example - the Match & Replace rule created will change the value of the **isAdmin** response parameter from **false** to **true**.
:::

1. Select the `Match & Replace` tab from the left-hand menu within the Caido window.
2. Click `New Rule`. The drop down arrow attached to this button allows you to switch between `New Rule` and `New Collection`.
3. When creating a new rule, you can update the following fields:

- `Name`: A name for the rule.
- `Strategy`: Defines what part of the request to perform the match/replace on, such as request header, response header, request body, request first line, etc.
- `Search as regex`: If the `Search term` is a regex or a simple string match.
- `Search term`: The term to search for in the defined part of the request or response.
- `Replace term`: The term to replace the search term with.
- `Condition`: An [HTTPQL](/concepts/essentials/httpql.html) query that defines which requests/responses this rule applies to.

4. When you're done updating your rule, you can use the bottom panes to test your rule against a mock request/response. Click on the `Test` button and see if your rule works as intended.
5. You can enable or disable individual rules by clicking on the checkbox next to each rule in the tree view. Enabled rules will be shown in the `Active rules` section of the page. This section displays the list of the rules that are currently active and will be applied to the requests/responses that pass through the proxy.
6. These are your rule Collections. To move rules between collections - **click, hold and drag** a rule into the Collection folder you wish to include the rule in.

::: tip TIPS

- If you're having an issue with your Match & Replace rule not taking affect, and you've already double checked your `Strategy`,
make sure you're looking at the un-prettified version of the request/response body by pressing the `{} Prettify` button within any request/response pane to ensure your spacing is correct.
- The order of the rules in the "Active rules" section determines the order in which they will be applied to the requests and responses. You can change the order of the rules by dragging and dropping. This allows you to adjust the order to suit your needs and can be useful when working with multiple rules that may have conflicting or overlapping conditions.

:::

## Append a Request Header with a Custom String Example

Many popular bug bounty programs require a custom header to be sent with your requests. You can do this in Caido using the `Match and Replace` feature.

::: info
In this example - the Match & Replace rule created will change the value of the **User-Agent** header to **bughunter**.
:::

### Strategy

- Request Header (_enable_ `Search as regex`)

### Search

- ^(User-Agent: .+)

### Replace

- $1 bughunter
