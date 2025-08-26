# Workflows

Incorporating [workflows](/concepts/workflows_intro.md) into your methodology greatly extends the functionality of Caido. The level of customization offered by Caido workflows allows you to repeatedly apply certain actions/conversions that are commonly used in your testing process. Anything from encoding data to complex sequences of modifications based on certain conditions by utilizing flow paths are possible with workflows.

Multi-step processes that, before, needed to be performed manually can be saved within a workflow for immediate, discretionary and repeated use - ensuring your testing is as time-efficient as possible.

## Workflows Layout

<img alt="Workflows interface." src="/_images/workflows_interface_layout.png">

1. Select the `Workflows` tab from the left-hand menu within the Caido window.
2. The three types of workflows (`Passive`/`Active`/`Convert`) are listed horizontally here as tabs. Click to toggle between them.
3. Click on the red `+ New workflow` button paired with the desired type tab selected to create a new workflow of that type.
4. Toggling the `Enabled` checkbox from filled to empty will dictate the inclusion/exclusion of the associated workflow in the user interface respectively.

::: info
By default, workflows are present globally (_meaning they will span across all your Projects_).
:::

5. To render a workflows specific to a project - click the `Switch to project-specific` text within the parenthesis.
6. Clicking the `Edit` button will present the workflow editor and the `Duplicate` button will create a copy of the workflow.
7. Clicking on `Community Workflows` will open a browser window to <a href="https://github.com/caido/workflows" target="_blank">Caido's workflow Github Repository</a>. Here you can download workflows created by other Caido users or submit your own!

::: info
workflow files are JSON based.
:::

8. Click `Download` to locally download the selected workflow. To delete the selected workflow - click `Delete`.
9. `Import` allows you to select downloaded workflows to use in your Caido instance.

## The Workflow Editor

::: info
This interface will be displayed after clicking either the `+ New workflow` button or the `Edit` button on an existing workflow.
:::

You will first be presented with a pane that includes fields to name your new workflow as well as provide an optional description. Click `Save` to apply these properties.

<img alt="Convert name/description pane." src="/_images/name_description_workflow.png"/>

The name and description pane will switch to a pane that displays a node's properties when one is selected.

<img alt="Workflows editor." src="/_images/workflow_editor.png">

1. The available nodes based on the selected workflow type are displayed in this pane. They are represented as draggable blocks. To use a node, simply **click, hold and drag** one into the pane directly right.
2. This pane is where your workflow is created. Here, [Connections](/concepts/workflows_nodes.md#connecting-nodes) between nodes are made. Clicking a node will select it (_observe the highlighted border_). The ability to save the workflow as well as view options are included within this pane as well.
3. After selecting a node, the node's properties are displayed here. The ability to delete the currently selected node is included in this pane as well.
