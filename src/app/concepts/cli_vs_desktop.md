---
description: "Understand the core concepts behind the comparison between Caido CLI and Desktop application - the client/server architecture and choosing the right option."
---

# Caido CLI vs Desktop

Caido is built around a client/server architecture and the two components are decoupled by a [traffic splitting](/app/concepts/traffic_splitting.md) algorithm:

- The **client** component is the Caido GUI (_desktop or web application graphical user-interface_).
- The **server** component is the Caido CLI that handles proxying and processing.

<img width="600" alt="CLI vs Desktop" src="/_images/cli_vs_desktop.png" center no-shadow/>

## Caido CLI

The standalone Caido CLI installation is versatile as it can be ran on a variety of different platforms (_[virtual private servers](/app/guides/vps.md), [containers](/app/guides/docker.md), etc._).

Once the Caido CLI is launched, the GUI is available as a web application in the browser.

::: info
Certain [options](/app/reference/cli.md) for advanced configuration and management are only available to the Caido CLI.
:::

<img width="800" alt="CLI" src="/_images/caido_cli_banner.png" center/>

## Desktop Application

The desktop application also runs the Caido CLI (_as a background process_) and provides the GUI as a local installation via a webview window.

::: tip
In addition to the installed webview, you can still access the GUI from the browser once the desktop application is launched.
:::

<img width="800" alt="Desktop" src="/_images/launch_window.png" center/>

::: info
Although either installation provides the same functionality, the desktop application has some slight advantages over the standalone Caido CLI:

- It provides centralized management for multiple [instances](/app/concepts/instance.md).
- It includes [browser pre-configurations](/app/guides/preconfigured_browser.md).
- It can be used in environments without internet access.
:::
