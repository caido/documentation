# Backups

`Backups` are self-contained files that contain all the data within a Project. Creating backups is a **Caido Pro** feature, but **all** plans can restore backups. You can create backups of your Projects at anytime inside Caido.

::: tip
Backups allow you to share your security audits with others - making sure you are on the same page when it comes to collaborative testing.
:::

## Creating a Backup

<ProContainer>
You create backups directly from the Projects interface of your Workspace by clicking ⋮ located to the far-right of the desired Project row.
</ProContainer>

::: tip
It is possible to backup any Project including the currently selected one.
:::

<img alt="Backup creation." src="/_images/backup_tab.png" center/>

## Downloading a Backup

Once the backup file creation is complete, it will be available in the `Backups` tab interface. If your Instance is remote, you can `Download` the backup to your local machine. Otherwise, you can click on the `⋮` to get the path on disk if you wish to copy it directly.

<img alt="Backup import." src="/_images/backup_download.png" center/>

## Restoring a Backup

Restoring a backup can be done in one of two ways:

1. Importing a `.caidobak` file by clicking the `Import` button and selecting the file.

<img alt="Backup import." src="/_images/backup_import.png" center/>

2. Restoring an existing backup from the backups tab within the Projects interface by clicking the `Restore` button.

<img alt="Import project." src="/_images/backup_restore.png"/>

::: tip
Restoring always creates a new Project, that is why you also need to enter a unique name.
:::
