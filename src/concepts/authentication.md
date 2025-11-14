---
description: "Understand the core concepts behind Caido's OAuth 2.0 authentication system, client registration, grants, and secure token storage mechanisms."
---

# Authentication

As Caido is built around a client/server architecture, each instance requires access control to authenticate the client (_desktop or web application GUI_) to the server (_Caido CLI_), to ensure it is only accessible to you.

::: danger
Although the API is authenticated, the proxy traffic is currently unprotected. We **strongly** advise not to expose your Caido instances to the open internet.
:::

<img alt="Client/server architecture." src="/_images/client_server.png" center no-shadow/>

Authentication in Caido is based on [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749). Every instance that is created [registers](https://www.rfc-editor.org/rfc/rfc7591.html) to our cloud service and obtains a client ID and secret. On initial login to the instance using your account credentials, you claim the instance's client ID.

## OAuth Grants Used by Caido

- <a href="https://www.rfc-editor.org/rfc/rfc6749#section-1.3.4" target="_blank">Client Credentials</a>: This grant is used to obtain an access token that authenticates the instance with the cloud.
- <a href="https://www.rfc-editor.org/rfc/rfc8628.html" target="_blank">Device Authorization</a>: This grant is used to obtain access and refresh tokens to authenticate users. Contrary to most other grants, this grant eliminates the browser redirect.
- [Refresh Token](https://www.rfc-editor.org/rfc/rfc6749#section-1.5): This grant is used to refresh user access tokens without requiring re-authentication.

::: warning NOTE
At this moment, we do not make any guarantees on the lifetime of the tokens.
:::

<img alt="Authenticate user flow." src="/_images/authentication_user.png" no-shadow/>

## Secrets Storage

- The **client secret** and **instance access token** are both encrypted and stored in the `secrets.db` database in the instance data directory on disk.
- **User access and refresh tokens** are stored in the client's `local storage`. These tokens are never stored on the instance, but can be present in memory.
