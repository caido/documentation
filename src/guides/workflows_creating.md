---
description: "A step-by-step guide to creating new workflows in Caido including node addition, connection setup, and workflow configuration."
---

# Creating Workflows

To create a new workflow, select a [workflow type](/concepts/workflows_intro.md) by **clicking** on either the `Passive`, `Active`, or `Convert` tabs and **click** the `+ New workflow` button.

<img alt="The workflow type tabs and + New workflow button." src="/_images/workflows_create.png" center>

Once the workflow is created, you can edit its display name and provide an optional description.

<img alt="The workflow name and description input fields." src="/_images/workflows_name_description.png" center>

::: tip
View the Tutorials section of the documentation for detailed walk-throughs on creating a variety of workflows.
:::

<LabContainer message="Learn how to use this feature in hands-on, simulated training environments:" :labs="[{name: 'SHASigned Lab', url: 'https://labs.cai.do/shaSigned.php'}, {name: 'Session Monitor Lab', url: 'https://labs.cai.do/sessionMonitor.php'}]" />

## Adding Nodes

To add new nodes, **click** on the `+ Add Node` button and the `+ Add` button of a listed node.

<img alt="The node selection window." src="/_images/workflows_add_node.png" center>

In the workflow editor, **click**, **hold** and **drag** a node to rearrange its position. Once the nodes are arranged, **click** and **hold** on a node's <code><Icon icon="fas fa-caret-right" /></code> output socket and **drag** the line to the next node's <code><Icon icon="fas fa-caret-right" /></code> input socket to create connections.

<img alt="The connection lines between nodes." src="/_images/workflows_connect.png" center>

## Editing Nodes

**Click** on a node to access its individual editor.

<img alt="The editor for a On Intercept Request node." src="/_images/workflows_node_editor.png" center>

::: tip
To open the editor in a larger window, **click** on the <code><Icon icon="fa-solid fa-up-right-and-down-left-from-center" /></code> button.
:::

::: info
A node's `Alias` is a unique identifier used to reference it within a workflow. Aliases can only contain the following characters:

- Lowercase letters: `a`-`z`
- Numbers: `0`-`9`
- Symbols: `-`, `_`
:::

Once you are done creating the workflow, **click** on the <code><Icon icon="fas fa-floppy-disk" /> Save</code> button. A message will appear notifying you that the operation was successful and the new workflow will be added to its associated type list.

<img alt="Workflow creation toast message." src="/_images/workflows_toast_message.png" center>

Workflows are enabled by default, to disable a workflow **click** on it's sliding radio button.

::: info
By default, workflows are globally available across all your projects. **Click** on `( Switch to project-specific )` within a workflow row to limit its scope.
:::
