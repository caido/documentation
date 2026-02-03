# Drop

The [Drop](https://github.com/caido-community/drop) plugin gives you the ability to share project data, over an end-to-end encrypted channel, with other Caido users, including:

- [Replay Sessions](/app/quickstart/replay.md)
- [Match & Replace Rules](/app/quickstart/match_replace.md)
- [Scope Presets](/app/quickstart/scopes.md)
- [Filter Presets](/app/quickstart/filters.md)

::: info
Support for sharing [workflows](/app/quickstart/workflows.md), [files](/app/quickstart/files.md), [findings](/app/quickstart/findings.md), and [HTTPQL](/app/reference/httpql.md) query statements is planned for upcoming releases.
:::

In this tutorial you will learn how to collaborate with other Caido users as well as how to self-host the plugin's backend server.

::: info
Drop is available for [installation](/app/guides/plugins_installing.md) in the `Community` tab of the Plugin interface.
:::

<img alt="The Drop plugin listed in the Community tab." src="/_images/drop_install.png" center />

## Collaboration

To ensure data is shared securely, Drop users are identified by **Share Codes** that are associated with their [Pretty Good Privacy (PGP)](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) public encryption key.

To collaborate with another Caido user, paste their **Share Code** in the input field in the `Friends` section of the `Settings` tab. Or, send your code to them to do the same.

Once a user has been added to your friends list, data can be sent to them via messages by selecting their alias from the <code>Drop to...<Icon icon="fas fa-angle-down" /></code> drop-down menu that is available in certain Caido interfaces.

<img alt="Selecting a friend to share data with." src="/_images/drop_friend_selection.png" center />

To accept a message from another user, **click** on <code><Icon icon="fas fa-check" /> Claim</code> button in either the notification banner or the `Received Messages` tab of the Drop interface.

<img alt="Drop notification banner." src="/_images/drop_notification_banner.png" center />

---

<img alt="The Received Messages interface." src="/_images/drop_received_messages.png" center />

::: warning NOTE
Drop is not a storage mechanism, as all messages will be stored on the server for a maximum of 7 days. Due to this temporary lifespan, all messages should be assumed to be ephemeral.
:::

## Self-Hosting

As Drop requires a centralized server, Caido provides the default message broker service at `drop.cai.do`. All messages sent via Drop are encrypted using the public key of the recipient before they reach the server.

However, for users with privacy concerns or organizations that must be in compliance with regulations, it is possible to [host your own Drop API server](https://github.com/caido-community/drop/blob/main/packages/server/README.md).
