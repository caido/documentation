# Authentication

Each instance requires access control to authenticate the Caido GUI (_client component_) to the Caido CLI (_server component_).

::: danger
Although the API is authenticated, the proxy traffic is currently unprotected. We **strongly** advise not to expose your Caido instances to the open internet.
:::

Authentication in Caido is based on [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749) protocol.

## User authentication

Like we mentioned in [instance registration](./instance_registration.md), each Caido instance registers itself with our Cloud as an `OAuth 2.0 client`.

When you click on `Login` on the instance, it performs a <a href="https://www.rfc-editor.org/rfc/rfc8628.html" target="_blank">Device Authorization</a> flow. Currently this flow requires a human approval via the website (we are working on removing this limitation).

<img alt="Authenticate user flow." src="/_images/authentication_user.png" width=800px center no-shadow/>

::: warning NOTE
We do not make any guarantees on the lifetime of the tokens.
Currently the access token is valid for 7 days and the refresh token is valid for 3 months.
:::

## Instance authentication

Under the cover, the instance will also perform a <a href="https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4" target="_blank">Client Credentials</a> flow to have a token to identify itself with the cloud.
This allows the instance to retrieve metadata like the [Workspace](/dashboard/concepts/workspace) in which it lives.
