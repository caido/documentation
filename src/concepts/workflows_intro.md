# Workflows

**Workflows** provide an intuitive way to create, save and reuse customizable actions or sequences of actions that will be performed under certain specified conditions. With Workflows, you have the ability to extend the functionality of Caido to suit your individual needs.

As Caido utilizes a client/server architecture, the Workflows you create are executed server-side - thereby offloading processing power, providing enhanced performance and allowing seamless usage across multiple devices.

Workflows created by others can also be downloaded and imported into your Caido instance.

<img alt="Convert workflow" src="/_images/workflow_convert_basic.png" center/>

_A Workflow that will take user-provided input, base64 encode it and then output the results._

## Passive Workflows

`Passive Workflows` take **requests** or **responses** as input. Their execution occurs in the "background" as you conduct your testing, extending the efficiency of your process.

Passive Workflows are **automatically triggered** when their specifications/conditions are met. If the specifications/conditions of the Workflow are not met throughout every step of the Workflow - the Workflow will stop processing the request/response. These specifications/conditions are set by [Nodes](/guides/workflows.md) and include prerequisites such as:

- If the request/response is within a set [Scope](/guides/search.md).
- If the request/response is a match according to [HTTPQL](/reference/httpql.md) syntax.
- If the prior Node's specification/condition evaluated to True or False (_Boolean value_).

## Active Workflows

`Active Workflows` also take **requests** or **responses** as input. However, they are manually triggered, usually by right-clicking on a request/response in the HTTP History or Search pages.

## Convert Workflows

`Convert Workflows` take on **bytes** as input. They will perform actions against the supplied input and output the results.
