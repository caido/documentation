---
description: "A step-by-step guide to intercepting, modifying, and controlling HTTP/HTTPS traffic in Caido including forwarding, dropping, and editing capabilities."
---

# Intercepting Traffic

To begin intercepting proxied traffic, **click** on the <code><Icon icon="fas fa-angles-right" /> Forwarding</code> button to toggle it to <code><Icon icon="fas fa-pause" /> Queuing</code>.

<img alt="The >> Forwarding button." src="/_images/intercept_forwarding_button.png" center>

---

<img alt="The || Queuing button." src="/_images/intercept_queuing_button.png" center>

::: tip
If no subsequent traffic is intercepted, ensure the proxy settings of your client are properly configured and enabled.
:::

<img alt="Intercepting a HTTP request." src="/_images/intercept_request.png" center>

To give you control over what traffic is intercepted, Caido provides buttons for HTTP requests, HTTP responses, and Websocket messages.

To intercept traffic of a specific type, **click** on its associated button to toggle it to the <code><Icon icon="fas fa-pause" /></code> state.

<img alt="Intercepting HTTP requests, responses, and Websocket messages." src="/_images/intercept_queuing_state.png" center>

When interception is enabled, Caido will list all of the awaiting traffic in a queue table. Select any queued HTTP request, HTTP response, or Websocket message from its associated table to view its contents.

<img alt="Selecting a queued request." src="/_images/intercept_queue.png" center>

Once traffic has been intercepted, there are various actions that can be taken against it.

<img alt="Intercepting all traffic." src="/_images/intercept_all_traffic.png" center>

## Modifying Intercepted Traffic

To make modifications to an intercepted HTTP request, HTTP response, or Websocket message, **click** inside its associated pane.

::: tip
**Click** on the <code><Icon icon="fas fa-arrow-rotate-left" /></code> undo button to restore traffic to its original state.
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
With a request pane focused, you can quickly send the request to Replay with the default keyboard shortcut `CTRL` + `R` or to Automate with `CTRL` + `M`.
:::

## Disabling Interception

To resume passive forwarding for a specific traffic type, **click** on its associated button to toggle it to the <code><Icon icon="fas fa-angles-right" /></code> state.

<img alt="Disabling interception of specific traffic types." src="/_images/intercept_forwarding_state.png" center>

To resume passive forwarding for all traffic, **click** on the <code><Icon icon="fas fa-pause" /> Queuing</code> button to revert back to the <code><Icon icon="fas fa-angles-right" /> Forwarding</code> state.

<img alt="The >> Forwarding button." src="/_images/intercept_forwarding_button.png" center>
