---
description: "Understand what Personal Access Tokens (PATs) are, how they work in Caido, and when to use them for headless and automated workflows."
---

# Personal Access Token

A Personal Access Token (PAT) is a long-lived credential that allows you to authenticate with a Caido instance without going through the browser-based consent flow described in [Authentication](./instance_authentication.md). This makes PATs the primary authentication method for headless environments, CI/CD pipelines, and any automated interaction with the [Caido Cloud API](https://developer.caido.io/reference/api.html).

All Caido PATs use the `caido_` prefix, making them easy to identify and manage across your systems.

::: info
Each PAT is tied to the user who created it and acts with the same level of permissions as that user.
:::

## How it works

When you log into a Caido instance through the browser or desktop application, a <a href="https://www.rfc-editor.org/rfc/rfc8628.html" target="_blank">Device Authorization</a> flow takes place. You are redirected to the [Dashboard](https://dashboard.caido.io) to manually approve a consent form. A PAT replaces that manual approval step, making the entire authentication process automated.

<img alt="PAT authentication flow." src="/_images/authentication_pat.png" width=800px center no-shadow/>

1. The **Script** sends a login request to the **Caido** instance.
2. The instance initiates a Device Authorization **Flow** with the **Cloud**.
3. The Script presents the **PAT** to the Cloud, which validates it and automatically approves the authorization.
4. The Cloud returns **Tokens** (an access token and a refresh token) to the instance.
5. The instance passes the **Tokens** back to the Script.

From this point forward, the session behaves identically to a browser-based login. The access token authenticates subsequent API calls and the refresh token is used to renew it when it expires.

## Resource ownership

A PAT can be created to access resources under your own account or under a specific Team. When you [create a PAT](/dashboard/guides/create_pat) for a Team, it operates within that Team's [Workspace](/dashboard/concepts/workspace) and can access the Team's instances, members, and subscription resources. A PAT created for yourself can only access your personal resources.

::: info
Team admins can view PATs created for their Team, but only the creator of a PAT can revoke it.
:::

## Security considerations

- **Always set an expiration date** when [creating a PAT](/dashboard/guides/create_pat). Open-ended tokens increase your risk exposure if they are leaked.
- **Treat PATs like passwords.** Store them in environment variables or a secret management system. Never commit them to source code.
- **Revoke PATs you no longer need.** You can manage your tokens from the [Developer section](https://dashboard.caido.io/developer) of the Dashboard.
