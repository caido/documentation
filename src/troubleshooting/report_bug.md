---
description: "A step-by-step guide to reporting bugs in Caido including log collection, reproduction steps, and GitHub issue submission."
---

# Submitting a Report

To report a bug or receive support, please contact a member of the Caido team by submitting a [contact form](https://caido.io/contact) or [send us a message on Discord](https://links.caido.io/www-discord) and be prepared to provide the following resources/information.

::: tip
Your issue may already be known, resolved, or a feature request has been made! Search for it here:

- [Github Issues](https://github.com/caido/caido/issues)
:::

## Setup Information

We will typically need the following information for every case. Please provide us with your:

- Operating system.
- Version number/name.
- Caido client in use (_CLI/desktop application/web application_).
- The version of Caido in use.
- Both [log files](/guides/logs_viewing.md) that include the issue.

::: tip EXAMPLE

I am using:

- **OS:** Mac OS
- **OS Version:** 12 (Monterey)
- **Caido Client:** Caido Desktop
- **Caido Version:** 0.33.0
:::

## Log Files

As Caido utilizes a [client/server architecture](/concepts/instances.md), both frontend and backend logs are produced.

::: danger
As log files can contain sensitive information, only send them in private conversations with a verified member of the Caido team. If you are contacting us on Discord, we will open a private channel before asking for logs.
:::

::: warning NOTE
Ensure to [enable debug mode](/troubleshooting/debugging.md) to assist with troubleshooting.
:::

### Backend Logs

To obtain the backend log files of your instance, navigate to the `/logs` subdirectory of the data storage directory. The default location of this directory is dependent on your operating system:

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

### Frontend Logs

To obtain the frontend logs, either:

- Access the DevTools interface by pressing the `F12` key, using the keybinding `CTRL` + `SHIFT` + `I`, or selecting `Inspect` from the **right-click** context menu. Within the `Console` **right-click** and select `Save as...`/`Save all Messages to File`/etc. to export the messages as a `.log` file.

- Or, **click** on the <code><Icon icon="fas fa-file-lines" /> Logs</code> button at the bottom of the Caido user-interface, record your activity, and then **click** on the <code><Icon icon="fas fa-download" /></code> button to export the messages as a `.log` file.

<img alt="The Caido frontend logs interface." src="/_images/frontend_logs.png" center/>

## Steps to Reproduce

In order to assist you, it is **critical** that you provide a detailed timeline of the exact steps you took leading up to the bug. This ensures we are able to reproduce the issue in an accurate and timely manner.

::: tip EXAMPLE

To reproduce the bug, follow these steps:

1. In the `Intercept` interface, **click** on the `Response` button.
2. Begin intercepting responses, by **clicking** on the <code><Icon icon="fas fa-angles-right" /> Forwarding</code> button to toggle it to <code><Icon icon="fas fa-pause" /> Queuing</code>.
3. In a terminal, execute `curl -x 127.0.0.1:8080 https://example.com`.
4. Modify status code of the intercepted response.
5. **Click** the `Forward` button.
6. Confirm in terminal that the response was not modified.
:::

## Submit a Github Issue

::: danger
Ensure to remove/redact any sensitive information in submissions.
:::

Feel free to [create a new issue](https://github.com/caido/caido/issues/new?assignees=&labels=&projects=&template=bug.md&title=) on Github. For simplicity, a template is provided with sections to provide all the necessary information.

<center>
  <h2>Thank you for bringing attention to the issue!</h2>
</center>
