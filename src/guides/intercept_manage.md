# Managing Intercepted Traffic

Once traffic has been intercepted, there are various actions that can be taken against it.

<img alt="Intercepting all traffic." src="/_images/intercept_all_traffic.png" center>

## Modifying Intercepted Traffic

To make modifications to an intercepted HTTP request, HTTP response, or Websocket message, **click** inside its associated pane.

::: tip
**Click** on the `⟲` button to restore traffic to its original state.
:::

## Forwarding Intercepted Traffic

**Clicking** on the `Forward` button will send the traffic to its target recipient.

::: info
Any forwarded traffic that was modified from its original state will be marked as `Edited` within the `State` column of traffic tables. Both states can be viewed for comparison.
:::

## Dropping Intercepted Traffic

**Clicking** on the `Drop` button will stop the traffic from being sent to its target recipient.

## Sending Traffic to Other Interfaces

To send intercepted traffic to other interfaces, **right-click** within a traffic pane to open the context menu, and select a `Send to...` or `Plugins` option.

::: tip
With a request pane focused, you can quickly send the request to Replay with the default keyboard shortcut `CTRL + R` or to Automate with `CTRL + M`.
:::
