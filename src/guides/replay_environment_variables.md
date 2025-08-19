# Using Environment Variables in Replay

To insert an environment variable in a Replay request, **click**, **hold**, and **drag** over the value you want to replace and then **click** the `+` button to add it as a placeholder.

<img alt="Adding a placeholder in a Replay request." src="/_images/replay_placeholder.png" center/>

Then, **click** on the associated edit button **<Icon icon="fas fa-pen-to-square" />** of the placeholder to open the `Placeholder Settings` window.

With `Environment Variable` as the `Type`, **click** on the `Select an environment variable` drop-down menu, select a environment variable from the list, and **click** `Add` to save the configuration.

<img alt="Adding an environment variable to a Replay request." src="/_images/replay_global_variable.png" center/>

Applied environment variables are listed in the `Active preprocessors` list and will be applied in top to bottom order. To avoid collisions between variables, you can rearrange their order by **left-clicking**, **dragging**, **holding**, and **releasing** a variable either above or below other variables in the list.

Close the settings window and send the request. To verify the addition was successful, you can view the request by navigating to the [Search](/guides/search.md) interface.

<img alt="Viewing the Replay request environment variable addition." src="/_images/search_env_variable_request.png" center/>
