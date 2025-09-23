---
description: "A step-by-step guide to creating findings in Caido workflows using nodes or JavaScript to document security discoveries and anomalous requests."
---

# Creating Findings

Findings consist of the following set of properties:

- `Title` (_required_): A string value header.
- `Request` (_required_): The alias of the associated request.
- `Reporter` (_optional_): An string value that identifies the reporting process.
- `Description` (_optional_): Details about the finding.
- `Dedupe Key` (_optional_): A string value that is matched against the raw request or response to prevent duplicate findings.

::: info
The `Dedupe Key` can also be set with the `Check Finding` node.
:::

## Creating a Finding with a Node

To create a finding, **click** on the `+ Add Node` button within the workflow editor and **click** on the `+ Add` button attached to the `Create Finding` node. Connect this node to your workflow.

<img alt="The Create Finding node." src="/_images/workflows_create_finding_node.png" center>

The editor of the `Create Finding` node contains input fields for all of the properties available to a finding.

::: info
Descriptions support Markdown syntax.
:::

<img alt="The Create Finding node editor." src="/_images/workflows_create_finding_editor.png" center>

## Creating a Finding with JavaScript

To create a finding programmatically, **click** on the `+ Add Node` button within the workflow editor and **click** on the `+ Add` button attached to the `Javascript` node. Connect this node to your workflow.

<img alt="The Javascript node." src="/_images/workflows_finding_javascript_node.png" center>

The editor of the `Javascript` node contains a coding environment. Findings are defined as objects and created using the `sdk.findings.create()` method.

```js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {
  if (request) {
    const path = request.getPath();
    if (path === "/admin") {
      let finding = {
        title: "Admin Path Detected",
        request: request,
        reporter: "Admin Path Detection Workflow",
        description: `A request to the ${request.getPath()} path was proxied.`,
        dedupeKey: request.getPath()
      };
      await sdk.findings.create(finding);
    }
  }
}
```

<img alt="The Javascript node editor." src="/_images/workflows_finding_javascript_node.png" center>

::: tip
[View the workflow SDK reference](https://developer.caido.io/) in the developer documentation to learn more about JavaScript in workflows.
:::

## Viewing Findings

All generated findings can be viewed in the `Findings` interface.

::: info
Findings are project-specific.
:::

<img alt="The Findings interface." src="/_images/workflows_finding.png" center>
