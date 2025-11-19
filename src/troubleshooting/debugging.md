---
description: "Enabling debug logging in Caido CLI and Desktop application for troubleshooting and bug reporting purposes."
---

# Enabling Debug Mode

To assist with troubleshooting, Caido can be configured to include debug entries in the generated log files.

## Caido CLI

To enable the inclusion of debug entries in the log files with the Caido CLI, launch Caido with the `--debug` command-line option.

```bash
caido --debug
```

## Desktop Application

To enable the inclusion of debug entries in the log files within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, **click** on <code><Icon icon="fas fa-angle-right" /> Advanced</code> to expand the drop-down settings menu options and **click** on the `Debug logging` checkbox.

<img alt="The Advanced instance options." src="/_images/launch_window_advanced_options.png" center/>

**Click** on the `Save` button to update and save the configuration.

::: warning NOTE
Debug information is required when [reporting bugs](/troubleshooting/report_bug.md) to the Caido team.
:::
