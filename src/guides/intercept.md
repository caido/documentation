# Intercept

The `Intercept` tab allows you to manually control the flow of proxied traffic between your client and the server. With the ability to pause and resume the flow - you can gain a clear understanding of what is occuring.

When forwarding is paused, Caido will list all of the requests and responses awaiting forwarding in a queue list. Select any request or response within this list to view its contents. From here - you can make modifications, transfer the request to another Caido feature, forward the request/response or drop the request/response completely.

Modifications to requests and responses can be made directly within their Intercept panes as they are captured.

## Intercept Layout

To familiarize yourself with the Intercept interface, continue below:

<img alt="Intercept layout." src="/_images/intercept_marked_layout.png" center/>

1. Select the `Intercept` tab from the left-hand menu within the Caido window.
2. Clicking this button will toggle between `Queuing` (_intercept traffic_) and `Forwarding` (_forward traffic_).
3. Click `Requests`, `Responses` or **both** to specify what `Queuing` is applied to. _**Intercept on** is signified by `||` and **intercept off** is signified by `>>`._
4. This pane lists all the queued **requests**. Select one from the list by clicking on it to view its contents.
5. The contents of the currently queued/selected **request** will be displayed in this pane.
6. The `Drop` and `Forward` buttons will drop or forward **requests**/**responses** respectively.

<img alt="Intercept layout - response panes." src="/_images/interceptresp_marked_layout.png" center/>

7. This pane will list all the queued **responses**. Select one from the list by clicking on it to view its contents.
8. The contents of the currently queued/selected **response** will be displayed in this pane.

## Additional Information

::: info

- The number highlighted in red within the Intercept tab represents the number of queued requests and responses.
- All queued traffic will be forwarded when toggling from Queuing back to Forwarding.

:::

::: tip TIPS

- [Applying a Scope Preset](/guides/scope.md) is supported by Intercept.
- Clicking the column names (_located at the top and spanning horizontally_) within the top request and response panes will sort the requests by the selected column category. View the [Sorting by Properties](/guides/sorting.md) documentation for more information.
- To send a request to `Replay` from `Intercept`, either right-click inside the request pane or focus the request pane and use `CTRL+R`.
- To send a request to `Automate` from `Intercept`, either right-click inside the request pane or focus the request pane and use `CTRL+M`.
- Clicking the `{}` button will toggle the Pretty/Raw display option.

:::
