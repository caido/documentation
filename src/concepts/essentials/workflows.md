# Workflows

## What are Workflows?

_For advanced documentation on this topic - click [here](/reference/workflows/workflows.md)._

**Workflows** provide an intuitive way to create, save and reuse customizable actions or sequences of actions that will be performed under certain specified conditions. With Workflows, you have the ability to extend the functionality of Caido to suit your individual needs.

As Caido utilizes a client/server architecture, the Workflows you create are executed server-side - thereby offloading processing power, providing enhanced performance and allowing seamless usage across multiple devices.

Workflows created by others can also be downloaded and imported into your Caido instance.

<img alt="Convert workflow" src="/_images/workflow_convert_basic.png" center/>

_Example (pictured above): a Workflow that will take user-provided input, base64 encode it and then output the results._

## Workflow Types

There are three main types of Workflows, each of which are applied differently:

1. `Passive Workflows` - will automatically trigger based on the specifications set when creating the Workflow.
2. `Active Workflows` -  must be manually triggered.
3. `Convert Workflows` - will perform actions against supplied input.

## Nodes: The Building Blocks of Workspaces

In order to create a Workflow - Caido implements [Nodes](/concepts/essentials/workflows/nodes/nodes.md).
