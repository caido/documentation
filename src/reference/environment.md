# Environment

The `Environment` interface allows you to define and manage sets of variables that can be used to quickly switch between different contexts.

<img alt="Environment interface." src="/_images/env_interface.png" center/>

## Global

The `Global` environment is always active within a project, and all variables in this environment are accessible, regardless of the active environment selected.

<img alt="Global environment." src="/_images/global_environment.png" center/>

---

<img alt="Adding a global environment variable." src="/_images/add_global_env_variable.png" center/>

## Custom Environments

The variables of any custom environments created by you will only be accessible if actively selected.

<img alt="Custom environment." src="/_images/user_a_environment.png" center/>

---

<img alt="Selecting a custom environment." src="/_images/environment_selection.png" center/>

---

<img alt="Adding a custom environment variable." src="/_images/add_user_a_env_variable.png" center/>

::: warning NOTE
If a `Global` environment variable and a custom environment variable share the same name, the custom variable value will take precedence.
:::

::: info
When creating an environment variable, you will be able to select between `Plaintext` and `Secret`. When an environment variable is `Secret`, it is obfuscated in the frontend as well as on disk.
:::

## What's next?

[Learn how to use environment variables in Replay.](/guides/replay_environment_variables.md)

[Learn how to resign AWS requests by defining the components of the signing key as environment variables.](/tutorials/aws_signature.md)
