# HTTP History

The `HTTP History` tab allows you to view requests and responses as they pass through the proxy. The HTTP History tab shows a table of all requests that have been proxied through Caido.

The table format allows for easy examination of the traffic flow by offering categories of sortable properties. These properties include details such as the intended host of the request, the request method used, pathing and extension information - as well as details of the associated response such as status code, response length and response time.

Advanced filtering and data exportation capabilities are also integrated into the HTTP History interface.

## HTTP History Layout

To familiarize yourself with the HTTP History interface, continue below:

<img alt="HTTP History." src="/_images/history_marked_layout.png" center/>

1. Select the `Intercept` tab from the left-hand menu within the Caido window.
2. This pane lists all the **requests** that have been proxied through Caido. Select one from the list by clicking on it to view its contents.
3. The contents of the selected **request** will be displayed in this pane.
4. The contents of the **response** paired with the selected **request** will be displayed in this pane.
5. Clicking `Export` will present you with options to export HTTP History data. View the [Exports](/reference/features/logging/exports.md) documentation for more information.
6. The `Enter an HTTPQL query...` input bar and `Advanced` button provide filtering options for the history feed. View the [HTTQL](/concepts/essentials/httpql.md) and [Filters](/reference/features/overview/filters.md) documentation for more information.
7. All active Filter Presets are listed here. Click on the cog wheel icon in the bottom-right corner of this pane to select/deselect filtering options.

## Modifications of Requests/Responses

**If you previously edited content directly in the Intercept interface:**

In the `HTTP History` and `Search` tabs, a dropdown menu will appear in any requests or responses that you modified within Intercept before forwarding. The `Manual` selection will display the edits while the `Original` selection will show the request/response in its initial state.

::: info
This includes any modifications made by any active [Match & Replace](/reference/features/proxy/match_replace.md) rule(s).
:::

<img alt="Manual edit." src="/_images/edited_history_marked_layout.png" center/>

## Additional Information

::: tip TIPS

- [Applying a Scope Preset](/reference/features/overview/scope.md) is supported by HTTP History.
- [Applying a Filter Preset](/reference/features/filters.md) is supported by HTTP History.
- Clicking the column names (_located at the top and spanning horizontally_) within the top request list pane will sort the requests by the selected column category. View the [Sorting by Properties](/reference/features/overview/sorting.md) documentation for more information.
- To send a request to `Replay` from `HTTP History`, either right-click inside the request pane or focus the request pane and use `CTRL+R`.
- To send a request to `Automate` from `HTTP History`, either right-click inside the request pane or focus the request pane and use `CTRL+M`.
- Clicking the `{}` button will toggle the Pretty/Raw display option.
- If you have installed the rendering engine - clicking the image icon located at the top-right corner of the response pane will present a visual representation of the response. View the [Basic Configuration](/quickstart/beginner_guide/setup/config.md) documentation for more information.

:::
