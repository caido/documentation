---
description: "A step-by-step guide to reporting bugs in Caido including log collection, reproduction steps, and GitHub issue submission."
---

# Reporting a Bug

Found a bug in Caido or need help debugging? You are at the right place!

To help us resolve the issue quickly, please provide the necessary details to reproduce the bug.

## Retrieve Logs

### Backend Logs

Caido is using a [client/server architecture](/concepts/essentials/instances.md), that means that we need logs from two places.

The first place to look for logs is in your [data folder](/reference/internal_files.md), you should see a `logs` folder.

<img width="500" alt="Backend Logs Location" src="/_images/backend_logs.png" center/>

### Frontend Logs

The second place to look for logs is in your browser's console included in your [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

You can open the console by pressing `F12` or right-clicking within the browser and selecting `Inspect Element`.

<img width="700" alt="Frontend Logs Location" src="/_images/frontend_logs.png" center/>

## Gather Steps to Reproduce

For us to be able to help you, we need to be able to reproduce the bug on our side.

Thus, it is **critical** that you give us **as much details as possible** on the various steps you took leading to the bug.

::: tip Example Steps to Reproduce

1. In `Intercept`, click on `Response`.
2. Start `Queuing`.
3. In a terminal, execute `curl -x 127.0.0.1:8080 https://example.com`.
4. Modify response status code.
5. Click `Forward`.
6. Confirm in terminal that the response was not modified.
:::

## Gather Operating System & Version

Many Caido bugs are depend on the OS and even sometimes the version of that OS.
When reporting a bug, please make sure to include this information.

::: tip Example Operating System & Version

- **OS:** Mac OS
- **OS Version:** 12 (Monterey)
- **Caido Client:** Caido Desktop
- **Caido Version:** 0.33.0
:::

## Submit a Github Issue

The last step is to [open an issue](https://github.com/caido/caido/issues/new?assignees=&labels=&projects=&template=bug.md&title=) on our Github Tracker.

Thanks a lot for the help! You rock! 🤘

## Providing Sensitive Information

If you need to include sensitive information in your bug report, you can reach out on [Discord](https://links.caido.io/www-discord).

We will create a private channel for you where you can provide that data to us in a secure manner.
