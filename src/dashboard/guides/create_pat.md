# Creating a Personal Access Token

[PAT](/dashboard/concepts/pat) can be used as the authentication method for the [Caido Cloud API](https://developer.caido.io/reference/api.html).

To create a new PAT, visit the <code><Icon icon="fas fa-key" /> Developer</code> page on your account.

<img alt="PAT Page for user" src="/_images/pat_page.png" width=900px center />

You can then click on `+ Create Token`. You will be presented with a form.

The options are:

- `Name`: A descriptive name for the  PAT
- `Resource Owner`: Either Yourself or one of the Teams you belong to.
- `Expiration`: When will the PAT expire, we strongly recommend setting an expiration date

::: tip
If you want to access resources (instances, users, subscription, etc.) for a Team, you need to select that Team as the resource owner.
On the contrary, if you want to access resources for your own account, choose `Yourself` as the owner.
:::

<img alt="New PAT Form" src="/_images/new_pat.png" width=600px center />
