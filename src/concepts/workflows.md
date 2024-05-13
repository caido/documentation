# Workflows

## What are Workflows?

---

**Workflows** are the main way to customize Caido to suit your needs. Think of Workflows as custom shortcuts that will perform an action/a sequence of actions under certain specified conditions. These "shortcuts" can be saved as a Workflow in Caido so they can be utilized repeatedly.

<img alt="Convert workflow" src="/_images/workflow_convert_basic.png" center/>

_Example (pictured above): a Workflow that will take user-provided input, base64 encode it and then output the results._

## Workflow Types

---

There are three main types of Workflows, each of which are applied differently:

1. `Passive Workflows` - will automatically trigger based on the conditions specified when creating the Workflow.
2. `Active Workflows` -  must be manually triggered and meet the conditions specified during creation.
3. `Convert Workflows` - take strings as input, perform the specified modifications and then outputs the end result.

## Nodes: The Building Blocks of Workspaces

---

In order to create a Workflow - Caido implements [Nodes](./nodes.md).
