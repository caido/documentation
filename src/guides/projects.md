# Projects

Caido utilizes a client-server architecture model. An **Instance** of Caido is essentially an installation. Click [here](/concepts/essentials/instances.md) for more information on Instances.

Think of `Projects` as separate directories for your audits. Projects allow you to stay organized when testing against multiple targets within the same Caido instance.

## Creating a New Project

<img alt="Projects tab." src="/_images/projects_tab.png">

1. Select the `Workspace` tab from the left-hand menu within the Caido window.
2. Ensure the `Projects` tab in the top-left area of the Caido window is selected.
3. Click on the red `+ Create a project` button in the top-right area of the Caido window. Name the Project - consider using a descriptive name of the context the Project will be utilized for (_such as the name of the client you are auditing, a specific bug bounty program, the name of the product, etc._). Once you have entered a name - click on the `Create` button.
4. Your new Project will now appear in the `Workspace` panel.
5. Clicking on `⋮` will present the following additional options:

- **Rename**: Rename your Project.
- **Copy path**: Copy the Project's data location on your device to your clipboard. View the [Files](/concepts/internals/files.md) documentation for more information.
- **Create backup**: Create a Backup of the Project data. View the [Backups](/reference/features/workspace/backups.md) documentation for more information.
- **Delete**: Delete the Project from your Instance.

<ProContainer>
<b>Create backup</b> is only available to Caido Pro users.
</ProContainer>

## Switching Between Projects

Caido offers the ability to switch between your Projects with ease. Switching Projects can be accomplished in two different ways:

1. Selecting the `Workspace` tab from the left-hand menu within the Caido window and clicking the `Select` button next to the desired Project.
2. Selecting the desired Project in the drop-down menu, located in the upper-right corner of the Caido window.

::: tip TIPS

- It is encouraged to keep your work organized by creating many smaller Projects.
- **No restart is required in order to switch Projects.** You can navigate different assessments quickly without losing track of the information you've collected.

:::

## Restoring a Project from a Backup

To restore your Projects from a Backup, click the `Restore` button within the [Backups](/reference/features/workspace/backups.md) interface or use the `Import` button near the search bar within the Projects interface and provide a path to a `.caidobak` file.

## Project Updating

When structural changes occur after a Caido update, sometimes it is necessary for Caido to update a Project to a new format. This can take time but will ensure you're working with the latest capabilities in Caido.

::: info
Projects are automatically upgraded when you use them with a newer Caido version and **CANNOT** be downgraded.
:::

<img width="400" alt="Upgrade Projects" src="/_images/projects_upgrade.png" center>
