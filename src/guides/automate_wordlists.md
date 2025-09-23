---
description: "How to use wordlists in Caido's Automate feature for systematic payload testing with hosted files or simple lists."
---

# Sending Payloads from a Wordlist

To use a wordlist of payload values, **click**, **drag**, and **hold** over the request element you want to replace and then **click** on the `+ Add Placeholder` button.

<img alt="Marking a placeholder." src="/_images/automate_placeholder_wordlist.png" center/>

Once a placeholder has been marked, you will be presented with options in the `Payload` tab. From the `Type` drop-down menu, select either:

- `Hosted File`: This option will present a `Selected file` drop-down menu from which you can select a wordlist that you have uploaded to your Caido instance.

<img alt="Selecting an uploaded wordlist with Hosted File." src="/_images/automate_hosted_file.png" center/>

- `Simple List`: This option will present an input field that allows you to manually type in a wordlist, one payload per new line. You can also load a wordlist file directly by clicking on the `Load from file...` button.

<img alt="Manually creating a wordlist with Simple List." src="/_images/automate_simple_list.png" center/>

Once a selection has been made, **click** on the `Run` button to launch the Automate session. A new tab will be generated that contains a traffic table of the payload requests. To view the results of the session, **click** on this paired tab.

<img alt="The traffic table of Automate session requests." src="/_images/automate_wordlist_results.png" center/>
