# Data Location

All the data Caido creates is stored in a single folder. The default location of this folder is dependent on your OS:

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

::: info
Currently, it is **not possible** to create Caido Projects outside this folder. However, you can change the location of the whole folder if needed.
:::

::: warning
Make sure to copy your existing data to the new location before restarting your Instance.
Otherwise it will restart as if you were on a new device.
:::

## Changing the Default Location of the Data Folder: CLI

For the CLI, use the `--data-path` option:

```
caido --data-path /some/data/path
```

## Changing the Default Location of the Data Folder: Desktop Application

Open the Connection Manager and proceed with the following steps:

<img alt="Connection manager instance more options." src="/_images/connection_manager_instance_more_options.png" center/>

1. Click on the `⋮` icon to the right of the Instance of which you want to change the location of the data folder and select `Edit`.

<img alt="Advanced options." src="/_images/advanced_options.png" center/>

2. Click the `Advanced` drop down menu to expand it.
3. Select the `Data path` radio button.
3. Supply the value of the desired location.
