# Data location

All the data Caido creates is stored in a single folder.
Currently, it is **not possible** to create projects outside this folder.
By default, this folder is in a standard location based on the OS.

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

You can however change the location of the whole folder if you need to!

> **WARNING**: Make sure to copy your existing data to the new location before restarting your instance.
> Otherwise it will start fresh as if you were on a new device.

## CLI

For the CLI, use the `--data-path` option:

```
caido --data-path /some/data/path
```

## Desktop

For the Desktop application, set the `Data path` in the advanced options:

![advanced_options](/_images/advanced_options.png)
