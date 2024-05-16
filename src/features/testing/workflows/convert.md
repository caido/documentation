# Convert Type Workflows

_For general documentation on utilizing the Workflows tab - click [here](../workflows.md)._

---

While Passive and Active Workflows operate on requests and responses - `Convert Workflows` operate on **bytes** received as input.

## Using Convert Workflows

---

Convert Workflows are **manually triggered** and are integrated in various areas of Caido:

- Highlight the data to be changed, right-click in the associated pane and select either `Convert (Preview)` or `Convert (Replace)`. _**Preview** will present the output in a pop-up window and **Replace** will apply the conversion to the selected bytes._
- **When using [Constant Values](/concepts/nodes.md#1-constant-value-type)** - supply the input in the `Data` field under `Inputs` with the `Use reference` checkbox **_deselected_**. Then apply the conversion by clicking the `Save and Run` button.
- **When using [Reference Values](/concepts/nodes.md#2-reference-value-type)** - at the bottom of the Concept Workflow editor is an Input pane in which you can supply data and then apply the conversion by clicking the `Save and Run` button.

<img alt="Convert context menu" src="/_images/workflow_convert_context_menu.png"/>

## Creating a New Convert Workflow: MD5 Hash Example

---
