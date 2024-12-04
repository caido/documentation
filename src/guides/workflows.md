# Workflows

Incorporating [Workflows](/concepts/workflows_intro.md) into your methodology greatly extends the functionality of Caido. The level of customization offered by Caido Workflows allows you to repeatedly apply certain actions/conversions that are commonly used in your testing process. Anything from encoding data to complex sequences of modifications based on certain conditions by utilizing flow paths are possible with Workflows.

Multi-step processes that, before, needed to be performed manually can be saved within a Workflow for immediate, discretionary and repeated use - ensuring your testing is as time-efficient as possible.

## Workflows Layout

<img alt="Workflows tab." src="/_images/workflows_tab_layout.png">

1. Select the `Workflows` tab from the left-hand menu within the Caido window.
2. The three types of Workflows (`Passive`/`Active`/`Convert`) are listed horizontally here as tabs. Click to toggle between them.
3. Click on the red `+ New Workflow` button paired with the desired type tab selected to create a new Workflow of that type.
4. Toggling the `Enabled` checkbox from filled to empty will dictate the inclusion/exclusion of the associated Workflow in the user interface respectively.

::: info
By default, Workflows are present globally (_meaning they will span across all your Projects_).
:::

5. To render a Workflow specific to a project - click the `Switch to project-specific` text within the parenthesis.
6. Clicking the `Edit` button will present the Workflow editor and the `Duplicate` button will create a copy of the Workflow.
7. Clicking on `Community Workflows` will open a browser window to <a href="https://github.com/caido/workflows" target="_blank">Caido's Workflow Github Repository</a>. Here you can download Workflows created by other Caido users or submit your own!

::: info
Workflow files are JSON based.
:::

8. Click `Download` to locally download the selected Workflow. To delete the selected Workflow - click `Delete`.
9. `Import` allows you to select downloaded Workflows to use in your Caido instance.

## The Workflow Editor

::: info
This interface will be displayed after clicking either the `+ New Workflow` button or the `Edit` button on an existing Workflow.
:::

You will first be presented with a pane that includes fields to name your new Workflow as well as provide an optional description. Click `Save` to apply these properties.

<img alt="Convert name/description pane." src="/_images/name_description_workflow.png"/>

The name and description pane will switch to a pane that displays a Node's properties when one is selected.

<img alt="Workflows editor." src="/_images/workflow_editor.png">

1. The available Nodes based on the selected Workflow type are displayed in this pane. They are represented as draggable blocks. To use a Node, simply **click, hold and drag** one into the pane directly right.
2. This pane is where your Workflow is created. Here, [Connections](/concepts/workflows_nodes.md#connecting-nodes) between Nodes are made. Clicking a Node will select it (_observe the highlighted border_). The ability to save the Workflow as well as view options are included within this pane as well.
3. After selecting a Node, the Node's properties are displayed here. The ability to delete the currently selected Node is included in this pane as well.
