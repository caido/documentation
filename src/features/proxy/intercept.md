# Intercept

The Intercept page allows you to control the flow of requests through the proxy by pausing and resuming forwarding. When forwarding is paused, requests and responses that go through the proxy are temporarily stored in the Forward table, where you can review, edit, or drop them before forwarding them.

To eventually add websocket interceptions to Caido, vote for this issue [here](https://github.com/caido/caido/issues/568).

## Pausing and Resuming Forwarding

To pause forwarding, toggle the "Forwarding" button on the top right of any page. This will prevent any new requests from being forwarded through the proxy and will queue them up in the Forward table.

The interface allows you to Queue multiple requests and responses in the Intercept table. All requests are visible in one place and can be sorted.

For each request in the Intercept table, you can then choose to edit its contents, as well as forward or drop it.

When you're done forwarding, toggle the "Queuing" button to resume forwarding. This will forward all the queued up requests in the Intercept table.

<img alt="intercept1" src="/_images/intercept1.png"/>

## Scope

The Scope setting allows you to define and use scopes to narrow interception of requests and responses.  

By selecting a scope, requests and responses In-scope will be intercepted and ones Out-of-scope will pass through.

<img alt="intercept_scope" src="/_images/intercept_scope.png"/>

## Modifications of requests and responses

If you choose to edit content in the Intercept table, modifications will be visible after your rule in Match & Replace is done and active.

In Search and HTTP History, a new entry will then be available in the dropdown menu called "Manual" for your edits.

<img alt="manual_edit" src="/_images/manual_edit.png"/>
