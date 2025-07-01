# Refreshing Authentication Workflow

In this tutorial, we will create a [Passive Workflow](/guides/workflows.md#passive-workflows) that will automatically store and update either session cookies or tokens, as environment variables.

Then, by using [placeholders in requests for the environment variables](/guides/replay_environment_variables.md), you can achieve continuous, uninterrupted testing without manually updating expired sessions.

## Creating a Passive Workflow

To begin, navigate to the [Workflows](/guides/workflows.md) interface, select the `Passive` tab, and click the `+ New workflow` button.

<img alt="Creating a new Passive Workflow." src="/_images/new_passive_workflow.png" center>

## Nodes and Connections

For this Workflow, the overall Node layout will be:

<img alt="Refresh Authentication Workflow." src="/_images/nodes_auth_refresh.png" center>

- The `On Intercept Response` Node will output `$on_intercept_response.request` which represents a response's associated request.
- The request will be sent to the `In Scope` Node. This will check if the request is within your current scope.
- If the request is within scope it will be passed to the `JavaScript` Node. If it is not - the Workflow will end.
Once the request has been processed by the script in the `JavaScript` Node, the Workflow will come to an end.

## Accessing Session Cookies

To demonstrate how to extract, store, and update session cookies, we'll use the following request and response pair that represents a login form submission:

#### Request

```http
POST /index.php HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Referer: http://example.com/index.php
Content-Type: application/x-www-form-urlencoded
Content-Length: 43
Origin: http://example.com
Connection: keep-alive

username=caido&password=qwerty
```

#### Response

```http
HTTP/1.1 302 Found
Date: Tue, 01 Jul 2025 18:35:18 GMT
Server: Apache/2.4.59 (Debian)
Set-Cookie: session=757365723D636169646F3B726F6C653D75736572
Location: /admin.php
Content-Length: 0
Keep-Alive: timeout=5, max=100
Connection: Keep-Alive
Content-Type: text/html; charset=UTF-8
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

Then, using the `.getHeader()` method, we extract the `Set-Cookie` header and store it in a variable named `cookie`. If the header exists, we use the `.setVar()` method of the environment service to set an environment variable. The method input requires:

- The `name` and `value` of the environment variable.
- The `secret` field to specify if the value should be displayed in plaintext or masked.
- The `global` field to specify if the environment variable should be set in either the global or currently selected environment.

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

## Token

WIP
