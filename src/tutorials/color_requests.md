# Coloring Requests Workflow

In this tutorial, we will create a passive workflow that will highlight GET requests within the HTTP History tab if they are within the project's Scope.

::: info
This example workflow is available for download and import. [Download the workflow](https://github.com/caido/documentation/tree/main/diagrams/data/Color_In_Scope_GET_Requests_Example.json)
:::

## Creating a Passive Workflow

> Navigate to the **workflow editor** for the passive type by following these steps:
>
> - Select the `Workflow` tab from the left-hand menu within the Caido window.
> - Select the `Passive` tab.
> - Click `+ New workflow`.

1. Enter an arbitrary name for your workflow.
2. (_Optional_) Enter a description of the workflow.
3. Click `Save`.

<img alt="Passive set color example." src="/_images/passive_setcolor_example.png"/>

4. Click, hold and drag the `In Scope`, `Matches HTTPQL`, `If/Else` and `Set Color` nodes into the pane directly right.

::: tip
The `On intercept request` and `Passive End` nodes are already included by default. Passive workflows do not require an exit node in order to function properly. However, it is recommended that you include it for flow readability.
:::

5. Drag the nodes into the top-down heirachical structure displayed. Connect them together by making node `Connections`.

## Connecting the Nodes

_The flow of the example workflow provided above is described below:_

<img alt="On intercept request node in example passive workflow." src="/_images/on_intercept_req_example_wf.png"/>

1. `On intercept request` - this node "_Triggers a workflow when a request passes through the proxy_":

- It's output is the request object itself.
- This output is referenced by the `Alias.Property` syntax of `$on_intercept_request.request`.

<img alt="In Scope node in example passive workflow." src="/_images/in_scope_example_wf.png"/>

2. `In Scope` - this node "_Checks if a request is in scope"_:

- It takes the output of `$on_intercept_request.request` as the value of it's `Request` input property and checks if the Host of the request is included in any scopes you have set in the current Caido project.
- This node's output is `$in_scope.result`.

<img alt="Flow of In Scope node in example passive workflow." src="/_images/in_scope_flow_example_wf.png"/>

- If **True** (_the request Host is in scope_), then the flow will proceed to the `Matches HTTPQL` node.
- If **False**, the flow will proceed to the `Passive End` node, ending the action flow against the request since it did not meet the set criteria of the workflow.

<img alt="Matches HTTPQL node in example passive workflow." src="/_images/matches_httpql_example_wf.png"/>

3. `Matches HTTPQL` - this node "_Matches a request/response against an HTTPQL query_":

- The query used in this workflow example is `req.method.eq:"GET"`.
- It uses the output of `$on_intercept_request.request` from the `On intercept request` node as the value of it's `Request` input property.
- This node's output is `$matches_httpql.matches`.
- The query will check if the request method used is GET for all the requests that are in scope.

<img alt="If/Else node in example passive workflow." src="/_images/if_else_example_wf.png"/>

4. `If/Else` - this node "_Branches off based on a condition_":

- It uses the output of `$matches_httpql.matches` as the value of it's `Condition` input property (select the `Use reference` checkbox).
- **If** the request satisfied the HTTPQL query (_the request was an in scope GET request_), the output of this node evaluates to the Boolean value of **True**.
- **Else**, if the request did not satisfy the HTTPQL query (_the request was not in scope/used another method other than GET if it was in scope_), the output of this node evaluates to the Boolean value of **False**.

<img alt="Flow of If/Else node in example passive workflow." src="/_images/if_else_flow_example_wf.png"/>

- If **True** then the flow will proceed to the `Set Color` node.
- If **False**, the flow will proceed to the `Passive End` node, ending the action flow against the request since it did not meet the set criteria of the workflow.

<img alt="Set Color node in example passive workflow." src="/_images/set_color_example_wf.png"/>

5. `Set Color` - this node "_Sets the row color of a request_":

- It will apply the color to the row within the HTTP History tab.
- The `Color` input property takes the value of a color's Hex code. (The color used in this example is #185a6c.)
- This will be the color used to highlight any requests that have reached this node within the workflow by applying it to the request object produced by the output of the `On intercept request` node of `$on_intercept_request.request`.

<img alt="Passive End node in example passive workflow." src="/_images/passive_end_example_wf.png"/>

6. `Passive End` - this node "_Ends the passive workflow_", bringing the workflow to a finished state.

In summary:

> _"If the Host of a proxied GET request is within a scope I have set, highlight the request in the HTTP History tab feed in navy blue. For all other requests, exit the passive workflow."_

## Results

Once we're done, this workflow will highlight GET requests within the HTTP History tab if they are within the project's scope.

<img alt="Passive set color result." src="/_images/passive_setcolor_result.png"/>
