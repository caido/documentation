# MD5 Hash Input Workflow

In this tutorial, we will create a new [convert](/concepts/workflows_intro.md#convert-workflows) workflow that will perform MD5 hashing on the given input.

::: info
This example workflow is available for download and import. [Download the workflow](https://github.com/caido/documentation/tree/main/diagrams/data/Base64_Decode_Example.json).
:::

## Creating a Passive Workflow

To begin, navigate to the Workflows interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new passive workflow." src="/_images/new_passive_workflow.png" center>

1. Enter an arbitrary name for your workflow.
2. (_Optional_) Enter a description of the workflow.
3. Click `Save`.

<img alt="Convert MD5 hash." src="/_images/md5_hash_example.png"/>

4. **Click, hold and drag** the `MD5 Hash` node into the pane directly right.
5. Drag the nodes into a top-down heirachical structure. Connect them together by making node `Connections`.

::: warning
Convert workflows require an End node to function properly.
:::

6. Select the `MD5 Hash` node by clicking on it to display its properties in the right-hand pane. Here, the node's Name, `Alias` and input type (`Constant Value` or `Reference Value`) can be configured (_for this example creation, leave the default configuration as is_).
7. Supply test input to be converted by the workflow.
8. Click `Save and Run` - the conversion output will be displayed in the Output pane.
