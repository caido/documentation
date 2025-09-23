---
description: "A step-by-step guide to sending numerical payloads in Caido's Automate feature with configurable ranges, increments, and zero-padding options."
---

# Sending Numerical Payloads

To send numerical payload values, **click**, **drag**, and **hold** over the request element you want to replace and then **click** on the `+ Add Placeholder` button.

<img alt="Marking a placeholder." src="/_images/automate_placeholder_numbers.png" center/>

Once a placeholder has been marked, you will be presented with options in the `Payload` tab. From the `Type` drop-down menu, select the `Numbers` option.

This option will present multiple input fields that give you control over the number to start with, the number to end with, the incremental value, and the minimum number of digits to use.

::: tip
To account for multi-digit numbers, ensure to set an appropriate value for the `Minimum digits (zero padded)` field.
:::

<img alt="Configuring the numerical payloads." src="/_images/automate_numbers.png" center/>

Once the configuration has been made, **click** on the `Run` button to launch the Automate session. A new tab will be generated that contains a traffic table of the payload requests. To view the results of the session, **click** on this paired tab.

<img alt="The traffic table of Automate session requests." src="/_images/automate_numbers_results.png" center/>
