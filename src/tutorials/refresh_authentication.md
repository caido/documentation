---
description: "Tutorial for creating passive workflows that automatically extract and store session cookies or tokens as environment variables for continuous testing."
---

# Refresh Authentication Workflow

In this tutorial, we will create a passive workflow that will automatically store and update either session cookies or tokens, as environment variables.

Then, by using [placeholders in requests for the environment variables](/guides/replay_environment_variables.md), you can achieve continuous, uninterrupted testing without manually updating expired sessions.

## setVar()

The `setVar()` function sets an environment variable to a given value. It requires the following parameters:

- `name`: The name of the environment variable.
- `value`: The value of the environment variable.
- `secret`: Determines if the environment variable is displayed as plaintext or masked.
- `global`: Determines if the envrionment variable is set globally or in the currently selected envrionment.

```js
await sdk.env.setVar({
  name: "session",
  value: "123ABC321XYZ",
  secret: true,
  global: false
});
```

::: info
If the `name` does not already exist, a new environment variable will be created. If the `name` matches an existing environment variable, its value will be overwritten.
:::

::: tip
To set the variable to a specific environment, use the `env` field and supply an existing environment name as its value:

```
env: "Demo Environment"
```

This specification will take precedence over the `global` flag.

:::

## Creating a Passive Workflow

To begin, navigate to the Workflows interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new passive workflow." src="/_images/new_passive_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

For both workflows, the overall node layout will be:

<img alt="Refresh authentication workflow." src="/_images/nodes_auth_refresh.png" center>

- The `On Intercept Response` node outputs `$on_intercept_response.request` and `$on_intercept_response.response` objects which represent proxied requests and their corresponding responses.
- The `In Scope` node checks if the value of a request's Host header is included in the in-scope list of a scope preset. If it is not - the workflow will end.
- In-scope request and response objects will be passed to the `Javascript` node.
- Once a request or response has been processed by the script in the `Javascript` node, the workflow will end.

## Session Cookies

Consider a response to a successful credential submission that issues a session cookie via the `Set-Cookie` header:

```http
Set-Cookie: session=757365723D636169646F3B726F6C653D75736572;
```

### Extracting a Session Cookie

1. **Click** on the `In Scope` node to access its editor and ensure the `$on_intercept_response.request` object is [referenced as input data](/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_response_reference_request.png" center>

2. Close the editor window, **click** on the `Javascript` node to access its editor.

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js
export async function run({ request, response }, sdk) {
  if (response) {
    let cookie = response.getHeader("Set-Cookie");
    if (cookie && cookie.length > 0) {
      await sdk.env.setVar({
        name: "session",
        value: cookie.join("; "),
        secret: false,
        global: true
      });
    }
  }
}
```

4. Reference the `$on_intercept_response.request` and `$on_intercept_response.response` objects as input data.

<img alt="Referencing the request object." src="/_images/workflows_response_reference_request_response.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

### Script Breakdown

First, an asynchronous function is defined that takes a `request` and `response` object pair and the `sdk` object as parameters. The script will execute every time an in-scope response object is passed from the `In Scope` node.

```js
export async function run({ request, response }, sdk) {
  if (response) {
```

Then, using the `.getHeader()` method, the `Set-Cookie` header is extracted and stored in the `cookie` variable. If the header exists, the `.setVar()` method is used to set an environment variable.

```js
    let cookie = response.getHeader("Set-Cookie");
    if (cookie && cookie.length > 0) {
      await sdk.env.setVar({
        name: "session",
        value: cookie.join("; "),
        secret: false,
        global: true
      });
```

### Testing the Workflow

To test the workflow:

1. Type in an in-scope domain in the connection URL input field.

2. Then, add a `Set-Cookie: session=<value>;` header to the response.

<img alt="Creating the test response." src="/_images/refresh_authentication_cookie_test.png" center/>

3. Next, **click** on the `Run` button. A message will appear notifying you that the workflow executed successfully.

<img alt="Workflow execution success toast message." src="/_images/workflows_toast_message_success.png" center/>

### The Result

To view the set environment variable, navigate to the `Environment` interface and refresh the `Global` environment by **clicking** on its list row.

<img alt="Workflow cookie environment variable." src="/_images/workflow_cookie_env.png" center>

## Session Tokens

Consider a response to a successful credential submission that issues a session token via an `access_token` JSON parameter:

```http
{"access_token":"BQA_QoGKzM2I7sqcQ5cKB0oM4F_1VjwYXyUBdFJZ63nMwbrAejF0hel0dA0Ox9IRH_IT-rbt7F7dBudUOGX-kQExt3ezVuL0OBOOXYPaTVjQ5ZpE_ybkkKNEsyIjzIwOtx_7_xhuXvdaVp0BM_Lq2empsCauwvMujhPNf0HcTG0D-zIfLx9wh465oeGk0qVPM0ypFRxRWjkzM0BVMcRzG07pNk9HT_t3cBhuXt3r57o8XqKUQXlhNhWfMNca9N2v","token_type":"Bearer","expires_in":3600,"scope":"email"}
```

### Extracting a Session Token

1. **Click** on the `In Scope` node to access its editor and ensure the `$on_intercept_response.request` object is [referenced as input data](/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_response_reference_request.png" center>

2. Close the editor window and **click** on the `Javascript` node to access its editor.

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js
export async function run({ request, response }, sdk) {
  const authFilter = `req.path.cont:"/auth" OR req.path.cont:"/login" OR req.path.cont:"/token" OR req.path.cont:"/oauth" OR req.path.cont:"/refresh"`;
  if (sdk.requests.matches(authFilter, request, response)) {
    let body = response.getBody();
    if (body) {
      let json = body.toJson();
      let accessToken = json.access_token;
      if (accessToken) {
        await sdk.env.setVar({
          name: "Bearer",
          value: accessToken,
          secret: false,
          global: true,
        });
      }
    }
  }
}
```

4. Reference the `$on_intercept_response.request` and `$on_intercept_response.response` objects as input data.

<img alt="Referencing the request object." src="/_images/workflows_response_reference_request_response.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

### Script Breakdown

First an asynchronous function is defined that takes a `request` and `response` object pair and the `sdk` object as parameters.

```js
export async function run({ request, response }, sdk) {
```

Using `sdk.requests.matches()` the execution of the script is scoped to common authentication endpoints with HTTPQL statements. The script will execute every time an in-scope request object to one of these endpoints is passed from the `In Scope` node.

```js
  const authFilter = `req.path.cont:"/auth" OR req.path.cont:"/login" OR req.path.cont:"/token" OR req.path.cont:"/oauth" OR req.path.cont:"/refresh"`;
  if (sdk.requests.matches(authFilter, request, response)) {
```

Then, using the `.getBody()` method, we extract the response body and if it exists we parse it as JSON using `.toJson()`. If an `access_token` parameter exists, we use the `.setVar()` method to set an environment variable.

```js
    let body = response.getBody();
    if (body) {
      let json = body.toJson();
      let accessToken = json.access_token;
      if (accessToken) {
        await sdk.env.setVar({
          name: "Bearer",
          value: accessToken,
          secret: false,
          global: true,
        });
      }
    }
  }
}
```

### Testing the Workflow

To test the workflow:

1. Type in an in-scope domain in the connection URL input field.

2. Edit the request endpoint to be in-scope.

3. Then, add the following body data to the response:

``` json
{"access_token":"BQA_QoGKzM2I7sqcQ5cKB0oM4F_1VjwYXyUBdFJZ63nMwbrAejF0hel0dA0Ox9IRH_IT-rbt7F7dBudUOGX-kQExt3ezVuL0OBOOXYPaTVjQ5ZpE_ybkkKNEsyIjzIwOtx_7_xhuXvdaVp0BM_Lq2empsCauwvMujhPNf0HcTG0D-zIfLx9wh465oeGk0qVPM0ypFRxRWjkzM0BVMcRzG07pNk9HT_t3cBhuXt3r57o8XqKUQXlhNhWfMNca9N2v","token_type":"Bearer","expires_in":3600,"scope":"email"}
```

<img alt="Creating the test response." src="/_images/refresh_authentication_token_test.png" center/>

4. Next, **click** on the `Run` button. A message will appear notifying you that the workflow executed successfully.

<img alt="Workflow execution success toast message." src="/_images/workflows_toast_message_success.png" center/>

### The Result

To view the set environment variable, navigate to the `Environment` interface and refresh the `Global` environment by **clicking** on its list row.

<img alt="Workflow token environment variable." src="/_images/workflow_token_env.png" center>

## Using the Environment Variables

Now, with these workflows providing up-to-date session identifiers:

1. Navigate to the Replay interface.

2. Within a request, **click**, **hold**, and **drag** the left mouse button over the value you want to be replaced and **click** the `+` button to add it as a placeholder.

<img alt="Adding a placeholder in a Replay request." src="/_images/replay_placeholder_tutorial.png" center/>

3. Then, **click** on the associated edit button <code><Icon icon="fas fa-pen-to-square" /></code> of the placeholder to open the `Placeholder Settings` window.

3. Select `Environment Variable` from the top drop-down menu.

4. Select the environment variable by name from the `Environment Variable` drop-down menu

5. Then, **click** on the `Add` button to save the configuration.

The addition will be reflected in the list below.

<img alt="Adding an environment variable to a Replay request." src="/_images/replay_bearer_variable.png" center/>

Close the settings window and send the request.

::: tip
To verify the addition was successful, you can view the request by navigating to the Search interface.
:::

<img alt="Viewing the Replay request environment variable addition." src="/_images/search_env_variable_request_bearer.png" center/>
