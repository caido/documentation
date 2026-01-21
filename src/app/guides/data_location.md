---
description: "A step-by-step guide to configuring the data directory location in Caido CLI and Desktop application for custom data storage paths."
---

# Changing the Data Storage Location

All the data Caido creates is stored in a single directory. The default location of this directory is dependent on your operating system:

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\Caido\Caido\data`                     |

::: warning NOTE
Caido does not currently support storing projects outside of the this directory. However, you can change the location of the directory if needed. Before changing the location, ensure to copy the existing data before restarting your instance. Otherwise the instance will restart as if you were on a new device.
:::

## Caido CLI

To change the default location of the data storage directory with the Caido CLI, launch Caido with the `--data-path <location>` option.

```bash
caido --data-path /alternate/data/location
```

## Desktop Application

To change the default location of the data storage directory within the Caido desktop application, in the launch window, **click** on the <code><Icon icon="fas fa-ellipsis-vertical" /></code> button attached to an instance and select `Edit`.

<img alt="The Edit instance option." src="/_images/launch_window_edit.png" center/>

Then, **click** on <code><Icon icon="fas fa-angle-right" /> Advanced</code> to expand the drop-down settings menu options, **click** on the `Data path` checkbox, and type the location in the input field.

<img alt="Adding a domain to the allowlist." src="/_images/launch_window_data_path.png" center/>

Once you have defined the location, **click** on the `Save` button to update and save the configuration.

::: info
The `/logs` subdirectory stores the log files that contain the output from workflow nodes using the [Workflow SDK](https://developer.caido.io/app/reference/sdks/workflow/).
:::
