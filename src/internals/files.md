# Files

## Caido Storage Folder

---

All the data Caido creates is stored in a single folder.
It can be moved to another computer, but you might encounter issues (we are working on Project export/import).

| OS      | Location                                         |
| ------- | ------------------------------------------------ |
| Linux   | `~/.local/share/caido`                           |
| MacOS   | `~/Library/Application\ Support/io.caido.Caido/` |
| Windows | `%APPDATA%\caido\Caido\data`                     |

## Folder Structure

---

> We do not recommend modifying the files directly as this might result in problems in the application and/or corruption of data. Proceed at your own risk.

Inside the storage folder you will see the following files:

- `config.db`: Contains all the non-critical configurations of the Instance. Also contains the cached data from the cloud for offline support.
- `secrets.db`: Contains all the sensitive configurations. Currently, it is AES encrypted with a static secret, but we plan to support a user-specified password in the future.
- `projects.db`: Contains the metadata of the Projects and hosted files.

Each one of those files is a sqlite3 database in `journal` mode. We usually use pretty recent sqlite3 versions, but we do not make any guarantees on exactly which.

You can also see the following folders:

- `files`: Those are the hosted files that you uploaded to your Instance.
- `browsers`: The binary of the browser used for rendering.
- `projects`: The data for each Project. Each sub-folder will be the UUID of the Project (structure detailed below).

For each Project, you will see the following:

- `database.caido`: The majority of the data of the Project is contained in that database.
- `database_raw.caido`: Contains the raw data of the requests and responses, it is split for performance reasons.
- `exports`: Folder containing the exported data.

Each one of those files is a sqlite3 database in `wal` mode. Thus if you copy them, make sure to also copy the `-wal` files.
