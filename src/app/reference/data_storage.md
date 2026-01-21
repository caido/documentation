---
description: "Find detailed reference information on Caido's internal file structure, storage locations, and database organization across different operating systems."
---

# Data Storage

All the data Caido creates is stored in a single directory. The default location of this directory is dependent on your operating system:

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

::: info
The `/logs` subdirectory stores the log files that contain the output from workflow nodes using the [Workflow SDK](https://developer.caido.io/app/reference/sdks/workflow/).
:::

## Structure

::: danger
We do not recommend modifying the files directly as this might result in problems in the application and/or corruption of data. Proceed at your own risk.
:::

### Files

- `config.db`: Contains all the non-critical configurations of the instance and the cached data from the cloud for offline support.
- `secrets.db`: Contains all the sensitive configurations. Currently, it is AES encrypted with a static secret, but we plan to support a user-specified password in the future.
- `projects.db`: Contains the metadata of the projects and hosted files.

::: info
Each file is a sqlite3 database in `journal` mode. We usually use pretty recent sqlite3 versions, but we do not make any guarantees on exactly which.
:::

### Subdirectories

- `files`: Hosted files that have been uploaded to your instance.
- `browsers`: The binary of the browser used for rendering.
- `projects`: The data for each project. Each subdirectory name is the UUID of the project.

For each project, you will see the following:

- `database.caido`: The majority of the data of the project is contained in that database.
- `database_raw.caido`: Contains the raw data of the requests and responses, it is split for performance reasons.
- `exports`: Folder containing the exported data.

::: info
Each file is a sqlite3 database in `wal` mode. If you copy them, ensure to also copy the `-wal` files.
:::
