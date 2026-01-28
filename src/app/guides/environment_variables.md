---
description: "A step-by-step guide to creating and managing environment variables in Caido including global and custom environments with secret variable support."
---

# Creating Environment Variables

::: info
Global environment variables are accessible across all projects. Custom environment variables are only accessible if the environment is selected.
:::

To create a new environment variable, **click** on the `+ Add` button. A new variable row will be added to the table.

Next, **click** on the edit button <code><Icon icon="fas fa-pen-to-square" /></code> to edit it.

<img alt="Editing an environment variable." src="/_images/edit_global_env_variable.png" center/>

Once you have made the desired edits, **click** on the save button <code><Icon icon="fas fa-save" /></code> to save the variable.

<img alt="Saving an environment variable." src="/_images/save_global_env_variable.png" center/>

Then, depending on if the environment is new or existing, **click** on either the `+ Create` or <code><Icon icon="fas fa-save" /> Update</code> button in the bottom left corner of the pane.

<img alt="Create button for environment variable." src="/_images/create_button.png" center/>

<img alt="Update button for environment." src="/_images/update_button.png" center/>

::: warning NOTE
If a `Global` environment variable and a custom environment variable share the same name, the custom variable value will take precedence.
:::

::: info
Environment variables set to `Secret` are obfuscated in both the frontend and on-disk.
:::

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/QbW4K0nhykg?si=7eXllbShqhGd2Gzs" title="YouTube video player." frameborder="0"></iframe>
</div>
