---
description: "Understand the core concepts behind the comparison between Caido CLI and Desktop application - the client/server architecture and choosing the right option."
---

# Caido CLI vs Desktop

Since Caido is built around a client/server architecture, the graphical user-interface (_GUI_) is decoupled from proxying and processing.

The proxying and processing is handled by the Caido CLI and the GUI is available either as a desktop or web application.

<img width="600" alt="CLI vs Desktop" src="/_images/cli_vs_desktop.png" center no-shadow/>

## Caido CLI

The Caido CLI acts as the server and can be deployed on a variety of different platforms (_virtual private servers, containers, cloud instances, etc._). Once the Caido CLI is launched, the GUI is available as a web application in the browser.

It is the most versatile way of using Caido and it is generally recommended as a fallback if your platform doesn't support our Desktop application well.

Certain [options](/reference/cli.md) for advanced configuration and management are only available to the Caido CLI.

::: info
[View all of the available Caido CLI options.](/reference/cli.md)
:::

<img width="800" alt="CLI" src="/_images/caido_cli_banner.png" center/>

## Desktop Application

Caido's desktop application runs the Caido CLI in the background and provides the GUI as a local installation.

::: tip
In addition to the installed webview, you can also access the GUI from the browser once the desktop application is launched.
:::

The desktop application has some advantages over the CLI:

- It provides centralized management for multiple [instances](/concepts/instances.md).
- It includes [browser pre-configurations](/guides/preconfigured_browser.md).

<img width="800" alt="Desktop" src="/_images/launch_window.png" center no-shadow/>
