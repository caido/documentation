# Refreshing Authentication Workflow

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

## Nodes and Connections

For both workflows, the overall node layout will be:

<img alt="Refresh authentication workflow." src="/_images/nodes_auth_refresh.png" center>

- The `On Intercept Response` node will output `$on_intercept_response.request` which represents a response's associated request.
- The request will be sent to the `In Scope` node. This will check if the request is within your current scope.
- If the request is within scope the request and response pair will be passed to the `JavaScript` node. If it is not - the workflow will end.
Once the response has been processed by the script in the `JavaScript` node, the workflow will come to an end.

## Session Cookies

Consider a response to a successful credential submission that issues a session cookie via the `Set-Cookie` header:

```http
Set-Cookie: session=757365723D636169646F3B726F6C653D75736572
```

### Extracting a Session Cookie

Click on the `Javascript` node to access its detailed view. Then click within the coding environment, select all of the existing code, and replace it with the following script:

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

### Script Breakdown

First, an asynchronous function is defined that takes a `request` and `response` object pair and the `sdk` object as parameters. The script will execute everytime an in-scope response passes through the proxy.

```js
export async function run({ request, response }, sdk) {
  if (response) {
```

Then, using the `.getHeader()` method, we extract the `Set-Cookie` header and store it in a variable named `cookie`. If the header exists, we use the `.setVar()` method of the environment service to set an environment variable.

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

### The Result

To view the set environment variable, navigate to the `Environment` interface and refresh the `Global` environment.

<img alt="Workflow cookie environment variable." src="/_images/workflow_cookie_env.png" center>

## Session Tokens

Consider a response to a successful credential submission that issues a session token via an `access_token` JSON parameter:

```http
{"access_token":"BQA_QoGKzM2I7sqcQ5cKB0oM4F_1VjwYXyUBdFJZ63nMwbrAejF0hel0dA0Ox9IRH_IT-rbt7F7dBudUOGX-kQExt3ezVuL0OBOOXYPaTVjQ5ZpE_ybkkKNEsyIjzIwOtx_7_xhuXvdaVp0BM_Lq2empsCauwvMujhPNf0HcTG0D-zIfLx9wh465oeGk0qVPM0ypFRxRWjkzM0BVMcRzG07pNk9HT_t3cBhuXt3r57o8XqKUQXlhNhWfMNca9N2v","token_type":"Bearer","expires_in":3600,"scope":"email"}
```

### Extracting a Session Token

Click on the `Javascript` node to access its detailed view. Then click within the coding environment, select all of the existing code, and replace it with the following script:

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

### Script Breakdown

First an asynchronous function is defined that takes a `request` and `response` object pair and the `sdk` object as parameters. The script will execute everytime an in-scope response passes through the proxy.

```js
export async function run({ request, response }, sdk) {
```

Using `sdk.requests.matches()` we can scope the execution of the script to common authentication endpoints with HTTPQL statements.

```js
  const authFilter = `req.path.cont:"/auth" OR req.path.cont:"/login" OR req.path.cont:"/token" OR req.path.cont:"/oauth" OR req.path.cont:"/refresh"`;
  if (sdk.requests.matches(authFilter, request, response)) {
```

Then, using the `.getBody()` method, we extract the response body and if it exists we parse it as JSON using `.toJson()`. If an `access_token` parameter exists, we use the `.setVar()` method of the environment service to set an environment variable.

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

### The Result

To view the set environment variable, navigate to the `Environment` interface and refresh the `Global` environment.

<img alt="Workflow token environment variable." src="/_images/workflow_token_env.png" center>

## Using the Environment Variables

Now, with these workflows providing up-to-date session identifiers, navigate to the Replay interface. Within a request editing pane, **click**, **hold**, and **drag** the left mouse button over the value you want to be replaced and then click the `+` button to add it as a placeholder.

<img alt="Adding a placeholder in a Replay request." src="/_images/replay_placeholder_tutorial.png" center/>

Next, click the edit button located to the right of the placeholder. Doing so will present the `Placeholder Settings` window. Select `Environment Variable` from the top dropdown menu. Then, select the desired environment variable by name from the other dropdown menu. Click on the `Add` button to save the configuration. The addition will be reflected in the list below.

<img alt="Adding an environment variable to a Replay request." src="/_images/replay_bearer_variable.png" center/>

Close the settings window and send the request. To verify the addition was successful, you can view the request by navigating to the [Search](/guides/search.md) interface.

<img alt="Viewing the Replay request environment variable addition." src="/_images/search_env_variable_request_bearer.png" center/>
