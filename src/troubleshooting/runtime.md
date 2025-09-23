---
description: "Troubleshooting runtime issues in Caido including Match & Replace problems, response preview errors, and UI access issues."
---

# Runtime

## Match & Replace Rule Not Working

If your Match & Replace rule is not working, ensure you're looking at the un-prettified version of the request/response body by pressing the `{} Prettify` button within the request/response panes to ensure your spacing is correct. While the prettified format provides easier readability, it is not an accurate representation of JSON body data.

## Can't Preview Responses

If you're unable to preview responses, you may encounter a rendering error, accompanied by a [log](/guides/data_location.md) error message entry similar to the following:

```
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

This error happens when Caido is running as root.

To fix it, you can either:

1. Not run Caido as the root user.
2. Remove the following flag when launching Caido:

- `--no-renderer-sandbox`

## Unable to Access 'Individual' Subscription Features

Caido caches the state of your account. Any changes to your account can take some time to update.

Refresh your account state by logging out/logging into your Caido instance.

## The GraphQL Playground Doesn't Work

This might happen because you haven't added your Authorization header.

In GraphQL Playground, you can add an Authorization header as follows:

1. Open [GraphQL Playground](http://127.0.0.1:8080/graphql) in your browser.
2. Locate the "HTTP HEADERS" pane on the bottom left side of the interface.
3. Enter your Authorization header in the following format:

```
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

To acquire your token:

1. Right-click inside the Caido application.
2. Select `Inspect`.
3. Select the `Application` tab.
4. Under `Storage` - `Local storage` within the left-hand side menu, select the [listening address/port](/guides/listening_address.md) of Caido.
5. Copy the value of the `accessToken` (_within the value of the `CAIDO_AUTHENTICATION` key_).

## A Section of the UI is Missing

Caido allows you to [resize parts of the UI](/guides/ui.md). You might have accidentally minimized one of the sections.
