# Match & Replace

The `Match & Replace` feature allows you to define match & replace rules. These rules can be used to modify requests as they pass through the proxy.

`Match & Replace` rules can be organized into collections, which allows you to group rules however you see fit. For example, you can create a collection to group User-Agent rules, header rules, etc.

<img alt="Match & Replace" src="/_images/tamper.png" no-shadow/>

To create a `Match & Replace` rule, click on the "More options" icon of the collection where you want to create the rule and select the option "Create rule."

When creating a new rule, you can update the following fields:

- `Name`: A name for the rule.
- `Replace strategy`: Defines what part of the request to perform the match/replace on, such as request header, response header, request body, request first line, etc.
- `Search term`: The term to search for in the defined part of the request.
- `Replace term`: The term to replace the search term with.

## Testing your rule

When you're done updating your rule, you can use the right-side panes to test your rule against a mock request/response.

Click on the "Test" button and see if your rule works as intended.

> Make sure to save your rule, before you run the test!

## Active rules

You can enable or disable individual rules by clicking on the checkbox next to each rule in the tree view.

Enabled rules will be shown in the "Active rules" section of the page. This section displays the list of the rules that are currently active and will be applied to the requests that pass through the proxy.

> **IMPORTANT**
>
> The order of the rules in the "Active rules" section determines the order in which they will be applied to the requests.
>
> You can change the order of the rules by dragging and dropping. This allows you to adjust the order to suit your needs, and can be useful when working with multiple rules that may have conflicting or overlapping conditions.

## Examples

### Append a request header with a custom string

Many popular bug bounty programs require a custom header to be sent with your requests. You can do this in Caido using the `Match and Replace` feature. An example of this for [Bugcrowd](https://www.bugcrowd.com/) is to send the word `bugcrowd` as your User-Agent header.

**Strategy**

> Request header (_Enable_ `Search as Regex`)

**Search**

> ^(User-Agent: .+)

**Replace**

> $1 bugcrowd
