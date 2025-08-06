# Intercepting Traffic

To begin intercepting proxied traffic, **click** on the `>> Forwarding` button to toggle it to `⏸︎ Queuing`.

<img alt="The >> Forwarding button." src="/_images/intercept_forwarding_button.png" center>

---

<img alt="The ⏸︎ Queuing button." src="/_images/intercept_queuing_button.png" center>

::: tip
If no subsequent traffic is intercepted, ensure the proxy settings of your client are properly configured and enabled.
:::

<img alt="Intercepting a HTTP request." src="/_images/intercept_request.png" center>

To give you control over what traffic is intercepted, Caido provides buttons for HTTP requests, HTTP responses, and Websocket messages.

To intercept traffic of a specific type, **click** on its associated button to toggle it to the `⏸︎` state.

<img alt="Intercepting HTTP requests, responses, and Websocket messages." src="/_images/intercept_queuing_state.png" center>

When interception is enabled, Caido will list all of the awaiting traffic in a queue table. Select any queued HTTP request, HTTP response, or Websocket message from its associated table to view its contents.

<img alt="Selecting a queued request." src="/_images/intercept_queue.png" center>
