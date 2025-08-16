# Authentication

The authentication in Caido is based on the <a href="https://www.rfc-editor.org/rfc/rfc6749" target="_blank">OAuth 2.0 Authorization Framework</a>. It replaces the need for licenses and will allow us to provide hosted and sharing services down the line.
Each instance registers itself with our cloud API using the <a href="https://www.rfc-editor.org/rfc/rfc7591.html" target="_blank">Dynamic Client Registration Protocol</a> and obtains a client ID and secret. Upon the first login, the user will "claim" the client ID for its instance.

::: warning
Even if the API is authenticated, the actual proxy is currently not protected. That is why we **strongly** advise not to put your Caido instances on the open internet.
:::

## Grants

We use a few OAuth2 grants depending on the API.

- <a href="https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4" target="_blank">Client Credentials</a>: We use this grant to get an access token that authenticates the instance itself with the cloud.
- <a href="https://www.rfc-editor.org/rfc/rfc8628.html" target="_blank">Device Authorization</a>: We use this grant to get an access and refresh tokens that authenticate a user. This grant is nice because it doesn't require a redirect from the browser contrary to most other grants.
- <a href="https://www.rfc-editor.org/rfc/rfc6749#section-1.5" target="_blank">Refresh Token</a>: We use this grant to refresh the access token of the user without having to ask the user to re-login. At this moment, we do not make any guarantees on the lifetime of the tokens.

<img alt="Authenticate user flow." src="/_images/authentication_user.png" no-shadow/>

## Secrets Storage

- **Client Secret**: Stored encrypted in the `secrets.db` database on the instance disk.
- **Instance Access Token**: Stored encrypted in the `secrets.db` database on the instance disk.
- **User Access & Refresh Tokens**: Stored in the browser `local storage` of the **user**. Never stored on the instance, but can be present in memory.
