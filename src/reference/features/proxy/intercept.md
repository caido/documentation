# Intercept

The Intercept page allows you to control the flow of requests through the proxy by pausing and resuming forwarding. When forwarding is paused, requests and responses that go through the proxy are temporarily stored in the Intercept table, where you can review, edit, or drop them before forwarding them.

To eventually add Websocket interceptions to Caido, vote for this issue [here](https://github.com/caido/caido/issues/568).

## Pausing and Resuming Intercept

---

To pause forwarding, toggle the "Forwarding" button on the top-right of any page. This will prevent any new requests from being forwarded through the proxy and will queue them up in the Intercept table.

The interface allows you to queue multiple requests and responses in the Intercept table. All requests are visible in one place and can be sorted.

For each request in the Intercept table, you can then choose to edit its contents, as well as forward or drop it.

When you're done forwarding, toggle the "Queuing" button to resume forwarding. This will forward all the queued up requests in the Intercept table.

<img alt="Intercept." src="/_images/intercept1.png"/>

## Scope

---

The Scope setting allows you to define and use Scopes to narrow interception of requests and responses.  

By selecting a Scope, requests and responses for hosts in-scope will be intercepted and those for hosts out-of-scope will pass through.

<img alt="Intercept scope." src="/_images/intercept_scope.png"/>

## Modifications of Requests/Responses

---

If you choose to edit content in the Intercept table, modifications will be visible after your rule in Match & Replace is done and active.

In Search and HTTP History, a new entry will then be available in the dropdown menu called `Manual` for your edits.

<img alt="Manual edit." src="/_images/manual_edit.png" center/>
