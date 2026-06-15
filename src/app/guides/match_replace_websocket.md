---
description: "A step-by-step guide to modifying WebSocket messages in Caido using the Match & Replace feature."
---

# Modifying WebSocket Messages

To modify an outgoing or incoming WebSocket message, **click** on the `Section` drop-down menu and select either `Request Websocket` or `Response Websocket`.

Next, select an option from the `Matcher` drop-down menu to specify what data to modify:

- `Full`: The entire message.
- `Regex`: Matches a value determined by a regular expression.
- `String`: Matches a string value.

Then, specify the replacement value in the `Replacer` input field.

Select the traffic source/s and click on the `+ Add` button to add the rule to the Default Collection.

<img alt="Adding a WebSocket rule." src="/_images/match_replace_websocket.png" center />

::: tip
Give rules descriptive names for quick identification of their purpose.
:::

To enable the rule, **click** on its associated checkbox. Applied rules will be listed in the `Active Rules` table.

<img alt="The Active Rules table." src="/_images/match_replace_websocket_enable.png" center width=350 />

To view the modified message, within the [WS History](/app/quickstart/ws_history.md) interface **click** on the `Original` button above a message and select `Tamper`.

<img alt="Viewing the modified message." src="/_images/match_replace_websocket_tamper.png" center width=350 />