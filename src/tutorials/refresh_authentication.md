# Refreshing Authentication Workflow

In this tutorial, we will create a [Passive Workflow](/guides/workflows.md#passive-workflows) that will automatically store and update either session cookies or tokens, as environment variables.

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

To begin, navigate to the [Workflows](/guides/workflows.md) interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new Passive Workflow." src="/_images/new_passive_workflow.png" center>

## Nodes and Connections

For both Workflows, the overall Node layout will be:

<img alt="Refresh Authentication Workflow." src="/_images/nodes_auth_refresh.png" center>

- The `On Intercept Response` Node will output `$on_intercept_response.request` which represents a response's associated request.
- The request will be sent to the `In Scope` Node. This will check if the request is within your current scope.
- If the request is within scope the request and response pair will be passed to the `JavaScript` Node. If it is not - the Workflow will end.
Once the response has been processed by the script in the `JavaScript` Node, the Workflow will come to an end.

## Session Cookies

Consider a response to a successful credential submission that issues a session cookie via the `Set-Cookie` header:

```http
Set-Cookie: session=757365723D636169646F3B726F6C653D75736572
```

### Extracting a Session Cookie

Click on the `Javascript` Node to access its detailed view. Then click within the coding environment, select all of the existing code, and replace it with the following script:

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

Click on the `Javascript` Node to access its detailed view. Then click within the coding environment, select all of the existing code, and replace it with the following script:

```js
export async function run({ request, response }, sdk) {
  if (response) {
    let body = response.getBody();
      if (body) {
        let json = body.toJson();
        let accessToken = json.access_token;
        if (accessToken) {
          await sdk.env.setVar({
            name: "Bearer",
            value: accessToken,
            secret: false,
            global: true
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
  if (response) {
```

Then, using the `.getBody()` method, we extract the response body and parse it as JSON using `.toJson()`. If an `access_token` parameter exists, we use the `.setVar()` method of the environment service to set an environment variable.

```js
export async function run({ request, response }, sdk) {
  if (response) {
    let body = response.getBody();
      if (body) {
        let json = body.toJson();
        let accessToken = json.access_token;
        if (accessToken) {
          await sdk.env.setVar({
            name: "Bearer",
            value: accessToken,
            secret: false,
            global: true
          });
        }
      }
   }
}
```

### The Result

To view the set environment variable, navigate to the `Environment` interface and refresh the `Global` environment.

<img alt="Workflow token environment variable." src="/_images/workflow_token_env.png" center>
