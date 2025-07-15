# Using Environment Variables in Replay

When testing targets using `Replay`, you can easily switch context by leveraging your custom environments and associated variables.

## Creating Environment Variables

To create a new environment and define its variables, navigate to the `Environment` interface in Caido.

<img alt="Environment interface." src="/_images/env_interface.png" center/>

To define a new variable, click on the `+ Add` button. A new variable row will be added to the table.

Next, click on the pencil icon to edit it.

<img alt="Editing an environment variable." src="/_images/edit_global_env_variable.png" center/>

Once you have made the desired edits, click the floppy disk icon to save the variable.

<img alt="Saving an environment variable." src="/_images/save_global_env_variable.png" center/>

Then, depending on if the environment is new or existing, click on either the `Create` or `Update` button in the bottom left corner of the pane.

<img alt="Create button for environment variable." src="/_images/create_button.png" center/>

<img alt="Update button for environment." src="/_images/update_button.png" center/>

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/QbW4K0nhykg?si=7eXllbShqhGd2Gzs" title="YouTube video player." frameborder="0"></iframe>
</div>

## Inserting an Environment Variable

With a defined environment variable, navigate to the [Replay](/guides/replay.md) interface. Within a request editing pane, **click**, **hold**, and **drag** the left mouse button over the value you want to be replaced and then click the `+` button to add it as a placeholder.

<img alt="Adding a placeholder in a Replay request." src="/_images/replay_placeholder.png" center/>

Next, click the edit button located to the right of the placeholder. Doing so will present the `Placeholder Settings` window. Select `Environment Variable` from the top dropdown menu. Then, select the desired environment variable by name from the other dropdown menu. Click on the `Add` button to save the configuration. The addition will be reflected in the list below.

<img alt="Adding an environment variable to a Replay request." src="/_images/replay_global_variable.png" center/>

Close the settings window and send the request. To verify the addition was successful, you can view the request by navigating to the [Search](/guides/search.md) interface.

<img alt="Viewing the Replay request environment variable addition." src="/_images/search_env_variable_request.png" center/>
