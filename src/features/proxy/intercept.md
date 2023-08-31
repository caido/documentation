# Intercept

The Intercept feature allows you to view requests and responses as they pass through the proxy. The Intercept page shows a table of all requests that have been proxied through Caido, along with details such as the request method, host, path, status code and length.

![intercept](/_images/intercept.png)

## Filtering

The Intercept page provides several ways to filter and scope the requests displayed.
These filters and scoping options can be useful to focus on specific requests or to exclude certain requests from the list.

You can filter requests by:

- File Extension
- Method
- Port
- Path
- Status Code
- ...

![intercept_with_filter_drawer](/_images/intercept_with_filter_drawer.png)

You can also scope the requests by host. See the [Scope](/features/overview/scope.md) page for more details.

# Forward (ne va pas la)

The Forward page allows you to control the flow of requests through the proxy by pausing and resuming forwarding. When forwarding is paused, requests that go through the proxy are temporarily stored in the Forward table, where you can review, edit, or drop them before forwarding them.

## Pausing and Resuming Forwarding

To pause forwarding, toggle the "Forwarding" button on the top right of any page. This will prevent any new requests from being forwarded through the proxy and will queue them up in the Forward table.

For each request in the Forward table, you can then choose to edit its contents, as well as forward or drop it.

When you're done forwarding, toggle the "Queuing" button to resume forwarding. This will forward all the queued up requests in the Forward table.

![forward](/_images/forward.png)
