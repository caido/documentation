# MD5 Hash

In this tutorial, we will create a new [Convert Workflow](/concepts/workflows_intro.md#convert-workflows) that will perform MD5 hashing on the given input.

::: info
This example Workflow is available for download and import. [Download the workflow](https://github.com/caido/documentation/tree/main/diagrams/data/Base64_Decode_Example.json).
:::

## Creating a New Workflow

> Navigate to the **Workflow Editor** for the Convert type by following these steps:
>
> - Select the `Workflow` tab from the left-hand menu within the Caido window.
> - Select the `Convert` tab.
> - Click `+ New Workflow`.

1. Enter an arbitrary name for your Workflow.
2. (_Optional_) Enter a description of the workflow.
3. Click `Save`.

<img alt="Convert MD5 hash." src="/_images/md5_hash_example.png"/>

4. **Click, hold and drag** the `MD5 Hash` Node into the pane directly right.
5. Drag the Nodes into a top-down heirachical structure. Connect them together by making Node `Connections`.

::: warning
Convert Workflows require an End Node to function properly.
:::

6. Select the `MD5 Hash` Node by clicking on it to display its properties in the right-hand pane. Here, the Node's Name, `Alias` and input type (`Constant Value` or `Reference Value`) can be configured (_for this example creation, leave the default configuration as is_).
7. Supply test input to be converted by the Workflow.
8. Click `Save and Run` - the conversion output will be displayed in the Output pane.
