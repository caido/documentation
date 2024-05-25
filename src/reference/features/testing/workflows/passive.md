# Passive Type Workflows

_For general documentation on utilizing the Workflows tab - click [here](../workflows.md)._

`Passive Workflows` take **requests** or **responses** as input. Their execution occurs in the "background" as you conduct your testing, extending the efficiency of your process.

## Using Passive Workflows

Passive Workflows are **automatically triggered** when their specifications/conditions are met. If the specifications/conditions of the Workflow are not met throughout every step of the Workflow - the Workflow will stop processing the request/response. These specifications/conditions are set by [Nodes](/concepts/essentials/nodes.md) and include prerequisites such as:

- If the request/response is within a set [Scope](../../overview/scope.md).
- If the request/response is a match according to [HTTPQL](/concepts/essentials/httpql.md) syntax.
- If the prior Node's specification/condition evaluated to True or False (_Boolean value_).

## Creating a New Passive Workflow: Applying Color to In-Scope GET Requests Workflow Example

::: tip
This example Workflow is available for download and import. Click [here](https://github.com/caido/documentation/tree/main/diagrams/data/Color_In_Scope_GET_Requests_Example.json) to download.
:::

::: info
In this example - the Workflow created will color highlight GET requests within the HTTP History tab if they are within the Project's Scope.
:::

> Navigate to the **Workflow Editor** for the Passive type by following these steps:
>
> - Select the `Workflow` tab from the left-hand menu within the Caido window.
> - Select the `Passive` tab.
> - Click `+ New Workflow`.

1. Enter an arbitrary name for your Workflow.
2. (_Optional_) Enter a description of the workflow.
3. Click `Save`.

<img alt="Passive set color example." src="/_images/passive_setcolor_example.png"/>

4. Click, hold and drag the `In Scope`, `Matches HTTPQL`, `If/Else` and `Set Color` Nodes into the pane directly right.

::: tip
The `On intercept request` and `Passive End` Nodes are already included by default. Passive Workflows do not require an End Node in order to function properly. However, it is recommended that you include it for flow readability.
:::

5. Drag the Nodes into the top-down heirachical structure displayed. Connect them together by making Node `Connections`.

## Node Relationship Explanation: Applying Color to In-Scope GET Requests Workflow Example

_The flow of the example Workflow provided above is described below:_

<img alt="On intercept request Node in example Passive Workflow." src="/_images/on_intercept_req_example_wf.png"/>

1. `On intercept request` - this Node "_Triggers a workflow when a request passes through the proxy_":

- It's output is the request object itself.
- This output is referenced by the `Alias.Property` syntax of `$on_intercept_request.request`.

<img alt="In Scope Node in example Passive Workflow." src="/_images/in_scope_example_wf.png"/>

2. `In Scope` - this Node "_Checks if a request is in scope"_:

- It takes the output of `$on_intercept_request.request` as the value of it's `Request` input property and checks if the Host of the request is included in any Scopes you have set in the current Caido Project.
- This Node's output is `$in_scope.result`.

<img alt="Flow of In Scope Node in example Passive Workflow." src="/_images/in_scope_flow_example_wf.png"/>

- If **True** (_the request Host is in scope_), then the flow will proceed to the `Matches HTTPQL` Node.
- If **False**, the flow will proceed to the `Passive End` Node, ending the action flow against the request since it did not meet the set criteria of the Workflow.

<img alt="Matches HTTPQL Node in example Passive Workflow." src="/_images/matches_httpql_example_wf.png"/>

3. `Matches HTTPQL` - this Node "_Matches a request/response against an HTTPQL query_":

- The query used in this Workflow example is `req.method.eq:"GET"`.
- It uses the output of `$on_intercept_request.request` from the `On intercept request` Node as the value of it's `Request` input property.
- This Node's output is `$matches_httpql.matches`.
- The query will check if the request method used is GET for all the requests that are in scope.

<img alt="If/Else Node in example Passive Workflow." src="/_images/if_else_example_wf.png"/>

4. `If/Else` - this Node "_Branches off based on a condition_":

- It uses the output of `$matches_httpql.matches` as the value of it's `Condition` input property (select the `Use reference` checkbox).
- **If** the request satisfied the HTTPQL query (_the request was an in scope GET request_), the output of this Node evaluates to the Boolean value of **True**.
- **Else**, if the request did not satisfy the HTTPQL query (_the request was not in scope/used another method other than GET if it was in scope_), the output of this Node evaluates to the Boolean value of **False**.

<img alt="Flow of If/Else Node in example Passive Workflow." src="/_images/if_else_flow_example_wf.png"/>

- If **True** then the flow will proceed to the `Set Color` Node.
- If **False**, the flow will proceed to the `Passive End` Node, ending the action flow against the request since it did not meet the set criteria of the Workflow.

<img alt="Set Color Node in example Passive Workflow." src="/_images/set_color_example_wf.png"/>

5. `Set Color` - this Node "_Sets the row color of a request_":

- It will apply the color to the row within the HTTP History tab.
- The `Color` input property takes the value of a color's Hex code.
- This will be the color used to highlight any requests that have reached this Node within the Workflow by applying it to the request object produced by the output of the `On intercept request` Node of `$on_intercept_request.request`.

<img alt="Passive End Node in example Passive Workflow." src="/_images/passive_end_example_wf.png"/>

6. `Passive End` - this Node "_Ends the passive workflow_", bringing the workflow to a finished state.

> In summary:
>
> _"If the Host of a proxied GET request is within a scope I have set, highlight the request in the HTTP History tab feed in navy blue. For all other requests, exit the Passive Workflow."_

## Results: : Applying Color to In-Scope GET Requests Workflow Example

<img alt="Passive set color result." src="/_images/passive_setcolor_result.png"/>

::: info
The color Hex code used in this example: #185a6c
:::
