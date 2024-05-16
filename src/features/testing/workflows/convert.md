# Convert Type Workflows

_For general documentation on utilizing the Workflows tab - click [here](../workflows.md)._

---

While Passive and Active Workflows operate on requests and responses - `Convert Workflows` operate on **bytes** received as input.

## Using Convert Workflows

---

Convert Workflows are **manually triggered** and are integrated in various areas of Caido:

**When using [Constant Values](/concepts/nodes.md#1-constant-value-type)**:

- Within the **Workflow Editor** supply the input in the `Data` field under `Inputs` with the `Use reference` checkbox **_deselected_**. Then apply the conversion by clicking the `Save and Run` button.

**When using [Reference Values](/concepts/nodes.md#2-reference-value-type)**:

- At the bottom of the Concept **Workflow Editor** is an Input pane in which you can supply data and then apply the conversion by clicking the `Save and Run` button.
- Highlight the data to be changed, right-click in the associated pane and select either `Convert (Preview)` or `Convert (Replace)`. _**Preview** will present the output in a pop-up window and **Replace** will apply the conversion to the selected bytes._

<img alt="Convert context menu." src="/_images/workflow_convert_context_menu.png"/>

## Creating a New Convert Workflow: MD5 Hash Example

---

Navigate to the **Workflow Editor** for the Convert type by following these steps:

> - Select the `Workflow` tab from the left-hand menu within the Caido window.
> - Select the `Convert` tab.
> - Click `+ New Workflow`.

<img alt="Convert context menu" src="/_images/name_convert.png"/>

1. Enter an arbitrary name for your Workflow.
2. (_Optional_) Enter a description of the workflow.
3. Click `Save`.

<img alt="Convert context menu" src="/_images/md5_hash_example.png"/>

4. **Click, hold and drag** the `MD5 Hash` Node into the pane directly right.
5. Drag the Nodes into a top-down heirachical structure. Connect them together by making Node `Connections`.

> _NOTE: Convert Workflows require an End Node to function properly._

6. Select the `MD5 Hash` Node by clicking on it to display its properties in the right-hand pane. Here, the Node's Name, `Alias` and input type (`Constant Value` or `Reference Value`) can be configured. _For this example creation, leave the default configuration as is._
7. Supply test input to be converted by the Workflow.
8. Click `Save and Run` - the conversion output will be displayed in the Output pane.
