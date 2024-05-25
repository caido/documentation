# Replay

The `Replay` tab allows you to edit and replay requests individually. This feature provides a quick way to test your web applications by forwarding certain requests repeatedly with different modifications.

You can create requests from scratch, or start from any existing request inside the application.

## Replay Layout

To familiarize yourself with the Replay interface, continue below:

<img alt="Intercept tab." src="/_images/replay_tab.png" center/>

1. Select the `Replay` tab from the left-hand menu within the Caido window.
2. These numerically named tabs are the requests that have been sent to `Replay` in the order they were sent. To select a request, simply click on the desired tab. _You can arbitrarily rename a tab by right-clicking it and selecting `Rename`_.
3. Click the `Send` button to forward the request. Clicking `<` or `>` will sort through the forwarding history of the currently loaded request (_in Caido, the historical recording of forwarded requests is known as a **Session**_).
4. Make any desired modifications to the request in this pane.
5. Once a request has been forwarded - this pane presents the associated response.
6. This is the resulting list of options presented after right-clicking within the request pane.

## Replay Sessions & Collections

Requests are organized into `Sessions` and `Collections`.

A Session is a group of requests that are related to each other. Every time you edit and send a request, it is saved in the history of that replay Session. This allows you to keep track of the changes you made to the request, and easily go back to previous versions.

Replay Collections allow you to group Sessions. You can rename Collections and duplicate Sessions. This allows you to keep your Sessions organized and easily switch between them. You can group Sessions however you want: by Project, by feature or by environment. To do so, **click, hold and drag** the Session into the Collection folder you wish to include the requests in.

## Additional Information

::: tip TIPS

- Navigate quickly through the history of requests and responses in your Session by using the arrows at the top of the Replay table. You can see the number of pages in the Session at the bottom of the table.
- You can use Convert Workflows in Replay. View the [Workflows](/reference/features/testing/workflows/convert) documentation for more information.
- Right-click within a request and select `On toggle verb` to convert the request from a POST request with a body to a GET request with query parameters.
- To send a request to `Automate` from `Replay`, either right-click inside the request pane or focus the request pane and use `CTRL+M`.
- Clicking the `{}` button will toggle the Pretty/Raw display option.
- If you have installed the rendering engine - clicking the image icon located at the top-right corner of the response pane (_not pictured above_) will present a visual representation of the response. View the [Basic Configuration](../../../quickstart/beginner_guide/setup/config.md) documentation for more information.

:::
