# Internal Files

## Caido Storage Folder

All the data Caido creates is stored in a single folder.
It can be moved to another computer, but you might encounter issues (we are working on project export/import).

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

::: tip
The `log` directory will contain the log files used to view output from the Coding Nodes using the [SDK](https://developer.caido.io/reference/sdks/workflow/).
:::

## Folder Structure

::: warning
We do not recommend modifying the files directly as this might result in problems in the application and/or corruption of data. Proceed at your own risk.
:::

Inside the storage folder you will see the following files:

- `config.db`: Contains all the non-critical configurations of the instance. Also contains the cached data from the cloud for offline support.
- `secrets.db`: Contains all the sensitive configurations. Currently, it is AES encrypted with a static secret, but we plan to support a user-specified password in the future.
- `projects.db`: Contains the metadata of the projects and hosted files.

::: info
Each one of those files is a sqlite3 database in `journal` mode. We usually use pretty recent sqlite3 versions, but we do not make any guarantees on exactly which.
:::

You can also see the following folders:

- `files`: Those are the hosted files that you uploaded to your instance.
- `browsers`: The binary of the browser used for rendering.
- `projects`: The data for each project. Each sub-folder will be the UUID of the project (structure detailed below).

For each project, you will see the following:

- `database.caido`: The majority of the data of the project is contained in that database.
- `database_raw.caido`: Contains the raw data of the requests and responses, it is split for performance reasons.
- `exports`: Folder containing the exported data.

::: info
Each one of those files is a sqlite3 database in `wal` mode. Thus if you copy them, make sure to also copy the `-wal` files.
:::
