---
description: "A step-by-step guide to viewing both the frontend and backend Caido log files."
---

# Viewing Logs

As Caido utilizes a [client/server architecture](/concepts/essentials/instances.md), both frontend and backend logs are produced.

::: danger
As log files can contain sensitive information, only send them in private conversations with a verified member of the Caido team. If you are contacting us on Discord, we will open a private channel before asking for logs.
:::

::: warning NOTE
Ensure to [enable debug mode](/troubleshooting/debugging.md) to assist with troubleshooting.
:::

## Backend Logs

To view the backend log files of your instance, either:

- Navigate to the `/logs` subdirectory of the data storage directory. The default location of this directory is dependent on your operating system:

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\Caido\Caido\data`                     |

- Or, **click** on the <code><Icon icon="fas fa-file-lines" /> Logs</code> button in the desktop application user interface and click on the <code><Icon icon="fas fa-circle-dot" /> Record</code> button to capture the backend logs for a certain interval of time.

<img alt="The in-app log panel." src="/_images/logs_panel.png" center/>

To save the recording, **click** on the <code><Icon icon="fas fa-download" /></code> button.

## Frontend Logs

To view the frontend log files of your instance, access the DevTools interface by either:

- Pressing the `F12` key.
- Using the keybinding `CTRL` + `SHIFT` + `I`.
- Or, selecting `Inspect` from the **right-click** context menu.

To save the frontend logs, **right-click** within the `Console` and select `Save as...`/`Save all Messages to File`/etc. to export the messages as a `.log` file.
