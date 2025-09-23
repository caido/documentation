---
description: "Guide for recovering read-only projects in Caido when account types revert to Basic, including project deletion and backup restoration methods."
---

# Recovering Read-Only Projects

If your account type reverts to Basic, only the first three projects will keep read/write permissions. Any additional projects will become read-only.

To restore write permissions on a project, either:

::: tip
Deleted projects are unrecoverable unless a [backup file was created](/guides/projects_backups.md) prior to the account downgrade.
:::

- Delete one of the first three by **clicking** on the `...` button associated with a project row and selecting <code><Icon icon="fas fa-trash" /> Delete</code>.
- Or [create a backup file of the project](/guides/projects_backups.md), create a new Caido instance that [stores data outside of the default location](/guides/data_location.md), and [import the project backup file](/guides/projects_backups.md) to the instance.
