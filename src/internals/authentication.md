# Authentication

The authentication in Caido is based on the [OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749). It replaces the need for licenses and will allow us to provide hosted and sharing services down the line.
Each instance registers itself with our cloud api using the [Dynamic Client Registration Protocol](https://www.rfc-editor.org/rfc/rfc7591.html) and obtains a client ID and secret. Upon first login, the user will "claim" the client ID for it's instance.

> WARNING: Even if the API is authenticated, the actual proxy is currently not protected. That is why we **strongly** advise not to put your caido instances on the open internet.

## Grants

We use a few OAuth2 grants depending on the API.

- [Client Credentials](https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4): We use this grant to get an access token that authenticates the instance itself with the cloud.
- [Device Authorization](https://www.rfc-editor.org/rfc/rfc8628.html): We use this grant to get an access and refresh tokens that authenticate a user. This grant is nice because it doesn't require a redirect from the browser contrary to most other grants.
- [Refresh Token](https://www.rfc-editor.org/rfc/rfc6749#section-1.5): We use this grant to refresh the access token of the user without having to ask the user to re-login. At this moment, we do not make any garantees on the lifetime of the tokens.

![authentication_user](/_images/authentication_user.png)

## Secrets storage

- Client secret: Stored encrypted in the `secrets.db` database on the instance disk.
- Instance access token: Stored encrypted in the `secrets.db` database on the instance disk.
- User access & refresh tokens: Stored in the browser `local storage` of the **user**. Never stored on instance, but can be present in-memory.
