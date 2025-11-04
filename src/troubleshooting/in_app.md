---
description: "Troubleshooting common Caido in-app errors including match and replace rules not working, responses not loading, permission issues, and missing user-interface sections."
---

# In-app Issues

## Proxying Doesn't Work

If you are unable to proxy traffic, tamper rules may be the cause.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> Disable any Match & Replace rules, network configuration settings, and ensure your [proxy settings are configured correctly](/troubleshooting/startup.md#resolution-1).

## Match & Replace Rule Not Working

If a Match & Replace rule is not working or is not being applied, the formatting may be incorrect.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> Ensure you are viewing and working with the [raw](/guides/request_response_modes.md) representation of data.

## No Responses to Automate Requests

If Automate requests are not receiving responses, unexpected input/output errors may be the cause.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> Select the `Settings` tab of the Automate interface and set the value of `Max retries` to `1`+.

## Can't Preview Responses

This error may occur when Caido is running as root.

```text
Rendering error: LaunchIo(Custom { kind: UnexpectedEof, error: "unexpected end of stream" }, BrowserStderr("[0101/110718.156035:ERROR:zygote_host_impl_linux.cc(90)] Running as root without --no-sandbox is not supported. See https://crbug.com/638180.\n"))
```

<code><Icon icon="fas fa-screwdriver-wrench" /></code> If you encounter this error message after attempting to preview a response, do not run Caido as the root user or launch Caido without the `--no-renderer-sandbox` argument.

## Looping Requests

If a steady stream of requests are being sent to `api.caido.io` and/or `gstatic.com`, network configuration settings may be the cause.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> Disable your VPN and check your browser, upstream, SOCKS, and invisible proxy settings.

## Unable to Access Individual/Team Tier Subscription Features

This error may occur when the cached state of your account has not been updated.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> If you are unable access premium subscription features, refresh your account state by reauthenticating to your Caido instance.

## "You don't have the required permissions for this action."

This error may occur when you have exceeded the installation limits of workflows, plugins, or filters for your account type.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> If you encounter this error message after attempting to install an extension, remove extensions that are unused or less important to your current work, and then retry the installation.

## The GraphQL Playground Doesn't Work

This error may occur when unauthenticated requests are being sent to the GraphQL server.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> If you are unable to make GraphQL API calls, access the GraphQL Playground in your browser by navigating to [http://127.0.0.1:8080/graphql](http://127.0.0.1:8080/graphql), **click** on the `Headers` tab, and add an `Authorization` header.

```json
{
  "Authorization": "Bearer ACCESS_TOKEN_HERE"
}
```

To acquire your token, open the browser's DevTools interface, select the `Application` tab, and copy the value of the `accessToken` in the `CAIDO_AUTHENTICATION` object within local storage.

## A Section of the User Interface is Missing

If you are unable to view a section of the user-interface, it may have been minimized.

<code><Icon icon="fas fa-screwdriver-wrench" /></code> Ensure the section pane wasn't [resized](/guides/ui.md#resizing-panes) inadvertently.
