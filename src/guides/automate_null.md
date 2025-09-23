---
description: "How to repeat requests multiple times without payload values in Caido's Automate feature for load testing and request repetition."
---

# Repeating Requests with No Payload

To send the same request multiple times without any payload values, **click** anywhere within the request and then **click** on the `+ Add Placeholder` button.

<img alt="Marking a placeholder." src="/_images/automate_placeholder_null.png" center/>

Once a placeholder has been marked, you will be presented with options in the `Payload` tab. From the `Type` drop-down menu, select the `Null` option.

This option will present a `Number of payloads to generate` input field that allows you specify how many times the request should be resent.

<img alt="Specifying the number of times to resend the request." src="/_images/automate_null.png" center/>

Once the number has been specified, **click** on the `Run` button to launch the Automate session. A new tab will be generated that contains a traffic table of the requests. To view the results of the session, **click** on this paired tab.

<img alt="The traffic table of Automate session requests." src="/_images/automate_null_results.png" center/>
