# In-app Issues

## Match & Replace Rule Not Working

If a Match & Replace rule is not working or is not being applied, the formatting may be incorrect.

### Resolution

Ensure you are viewing and working with the [raw](/guides/request_response_modes.md) representation of data.

## Can't Preview Responses

```text
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

This error may occur when Caido is running as root.

### Resolution

If you encounter this error message after attempting to preview a response, do not run Caido as the root user or launch Caido without the `--no-renderer-sandbox` argument.

## Unable to Access 'Individual'/'Team' Tier Subscription Features

This error may occur when the cached state of your account has not been updated.

### Resolution

If you are unable access premium subscription features, refresh your account state by reauthenticating to your Caido instance.

## The GraphQL Playground Doesn't Work

This error may occur when unauthenticated requests are being sent to the GraphQL server.

### Resolution

If you are unable to make GraphQL API calls, access the GraphQL Playground in your browser by navigating to [http://127.0.0.1:8080/graphql](http://127.0.0.1:8080/graphql), **click** on the `Headers` tab, and add an `Authorization` header.

```json
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

To acquire your token, open the browser's DevTools interface, select the `Application` tab, and copy the value of the `accessToken` in the `CAIDO_AUTHENTICATION` object within local storage.

## A Section of the User Interface is Missing

If you are unable to view a section of the user-interface, it may have been minimized.

### Resolution

Ensure the section pane wasn't [resized](/guides/ui.md#resizing-panes) inadvertently.
