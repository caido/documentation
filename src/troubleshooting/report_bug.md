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

## Steps to Reproduce

In order to assist you, it is **critical** that you provide a detailed timeline of the exact steps you took leading up to the bug. This ensures we are able to reproduce the issue in an accurate and timely manner.

::: tip EXAMPLE

To reproduce the bug, follow these steps:

1. In the `Intercept` interface, click on the `Response` button.
2. Begin intercepting responses, by **clicking** on the <code><Icon icon="fas fa-angles-right" /> Forwarding</code> button to toggle it to <code><Icon icon="fas fa-pause" /> Queuing</code>.
3. In a terminal, execute `curl -x 127.0.0.1:8080 https://example.com`.
4. Modify status code of the intercepted response.
5. Click the `Forward` button.
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
