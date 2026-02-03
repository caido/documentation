# Personal Access Token

Personal Access Tokens (PAT) are used to access the public [API of Caido Cloud](https://developer.caido.io/reference/api.html).
For example, they can be used to invite new members to a Team or approve an headless login to a Caido instance.

You can easily recognize a Caido PAT as they start with `caido_`.

::: info
Each PAT is tied to a user and will act with the same level of permissions as that user.
:::

<img alt="Pat view for users" src="/_images/pat_user.png" width=900px center />

A PAT can either be created to access resources for your own account or a specific Team (the resource owner).

::: info
PATs created for a Team will be visible by the admins of that Team, but they won't be able to revoke them.
:::

<img alt="Pat view for team admins" src="/_images/pat_team.png" width=900px center />

To get started with PAT, [learn how to create one](/dashboard/guides/create_pat).
