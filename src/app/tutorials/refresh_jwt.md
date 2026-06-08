---
description: "Learn how to create a workflow that automatically refreshes a JSON Web Token (JWT) when it expires."
---

# Refresh a JWT Workflow

In this tutorial, you will learn how to create a workflow to refresh a JSON Web Token (JWT) when it expires.

Typically, to continue authenticated testing in [Replay](/app/guides/replay_resending.md), session tokens would need to be manually updated in the request headers.

However, this process can be automated by:

1. [Creating environment variables](/app/guides/environment_variables.md) to store the tokens.
2. [Creating a workflow](http://localhost:5173/app/guides/workflows_creating.html) (_specifically a [convert workflow](/app/concepts/workflows_intro.md#convert-workflows)_) that will automatically exchange an expired token for a new one.
3. [Using the workflow in Replay](/app/guides/replay_environment_variables.md) to apply the workflow conversion to the request.

## Example Authentication Flow

We will use the [https://dummyjson.com](https://dummyjson.com) API to demonstrate the workflow. According to the [https://dummyjson.com/docs/auth](https://dummyjson.com/docs/auth) documentation, any user credentials returned from the `/users` endpoint can be used to authenticate with the `/auth/login` endpoint. By including the `expiresInMins` parameter, we can simulate a short-lived JWT.

```http
POST /auth/login HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 63

{"username":"emilys","password":"emilyspass","expiresInMins":1}
```

In the response to this request, an `accessToken` and `refreshToken` are returned.

Until the `accessToken` expires, it can be used to access sensitive user data from the `/auth/me` endpoint:

```http
GET /auth/me HTTP/1.1
Host: dummyjson.com
Connection: close
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Nzk2NDM0MDEsImV4cCI6MTc3OTY0MzQ2MX0.t-mV4fcqjvQmRu-I2is_iWV7_1MoJ2h8eVmCQMNhlnk


```

Once a minute has passed, a **401 Unauthorized** response is returned instead of user data with a body notifying the `accessToken` has expired:

```http
{
    "message": "Token Expired!"
}
```

With the `refreshToken` that was returned in the initial login response, a new valid `accessToken` can be obtained from the response to a POST request to the `/auth/refresh` endpoint:

```http
POST /auth/refresh HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 397

{"refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Nzk2NDA4OTIsImV4cCI6MTc4MjIzMjg5Mn0.kmaBxCM5Sq1ybQFZcspzf1HnJBPpZ9maMwOUjxreoYI","expiresInMins":1}
```

## Creating a Convert Workflow

To begin, navigate to the Workflows interface, select the `Convert` tab, and **click** on the `+ New workflow` button.

<img alt="Creating a new active workflow." src="/_images/new_convert_workflow.png" center/>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/refresh_jwt_nodes.png" center>

- The `Convert Start` node outputs `$convert_start.data` that represents the user-selected data that will undergo conversion (_in this case, the `accessToken` JWT that is the value of the `Authorization` header in a request_).
- The `Javascript` node executes a script on the `accessToken` and outputs the converted data as `$javascript.data`.
- Once the script in the `Javascript` node finishes, the workflow will end.

## Refreshing the JWT

1. **Click** on the `Javascript` node to access its editor.

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js
import { Request as FetchRequest, fetch } from "caido:http";

async function saveTokens(sdk, body) {
  await sdk.env.setVar({
    name: "ACCESS_TOKEN",
    value: body.accessToken,
    secret: false,
    global: true,
  });
  await sdk.env.setVar({
    name: "REFRESH_TOKEN",
    value: body.refreshToken,
    secret: false,
    global: true,
  });
}

async function login(sdk) {
  const resp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 1,
      }),
    }),
  );
  if (!resp.ok) {
    sdk.console.error(`Login failed: ${resp.status} ${resp.statusText}`);
    sdk.console.error(await resp.text());
    return null;
  }
  const body = await resp.json();
  sdk.console.log(`/auth/login: ${resp.status} ${resp.statusText}`);
  sdk.console.log(JSON.stringify(body));
  await saveTokens(sdk, body);
  return body.accessToken;
}

async function refresh(sdk, refreshToken) {
  const resp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
        expiresInMins: 1,
      }),
    }),
  );
  if (!resp.ok) {
    sdk.console.error(`Refresh failed: ${resp.status} ${resp.statusText}`);
    sdk.console.error(await resp.text());
    return null;
  }
  const body = await resp.json();
  sdk.console.log(`/auth/refresh: ${resp.status} ${resp.statusText}`);
  sdk.console.log(JSON.stringify(body));
  await saveTokens(sdk, body);
  return body.accessToken;
}

export async function run({ data, extra }, sdk) {
  let accessToken = sdk.env.getVar("ACCESS_TOKEN");

  if (!accessToken) {
    const token = await login(sdk);
    return { data: token ?? sdk.asString(data), extra };
  }

  const meResp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  );
  sdk.console.log(`/auth/me: ${meResp.status} ${meResp.statusText}`);

  if (meResp.status !== 401) {
    if (!meResp.ok) {
      sdk.console.error(await meResp.text());
    }
    return { data: accessToken, extra };
  }

  const refreshToken = sdk.env.getVar("REFRESH_TOKEN");
  if (refreshToken) {
    const token = await refresh(sdk, refreshToken);
    if (token) {
      return { data: token, extra };
    }
  }

  sdk.console.log("Refresh unavailable or failed; logging in again");
  const token = await login(sdk);
  return { data: token ?? accessToken, extra };
}
```

3. Next, ensure the `$convert_start.data` is [referenced as input data](/app/guides/workflows_references.md).

<img alt="Referencing the input data." src="/_images/workflows_convert_reference_data.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Script Breakdown

To be able to send a fetch request, the `Request` class and the `fetch()` function are imported from the `caido:http` module.

```js
import { Request as FetchRequest, fetch } from "caido:http";
```

The `saveTokens()` function is defined to set environment variables `ACCESS_TOKEN` and `REFRESH_TOKEN` in the global environment.

```js
async function saveTokens(sdk, body) {
  await sdk.env.setVar({
    name: "ACCESS_TOKEN",
    value: body.accessToken,
    secret: false,
    global: true,
  });
  await sdk.env.setVar({
    name: "REFRESH_TOKEN",
    value: body.refreshToken,
    secret: false,
    global: true,
  });
}
```

The `login()` function is defined to log in with valid user credentials. If authentication is successful, the `accessToken` and `refreshToken` are saved to the global environment using the `saveTokens()` function.

```js
async function login(sdk) {
  const resp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 1,
      }),
    }),
  );
  if (!resp.ok) {
    sdk.console.error(`Login failed: ${resp.status} ${resp.statusText}`);
    sdk.console.error(await resp.text());
    return null;
  }
  const body = await resp.json();
  sdk.console.log(`/auth/login: ${resp.status} ${resp.statusText}`);
  sdk.console.log(JSON.stringify(body));
  await saveTokens(sdk, body);
  return body.accessToken;
}
```

The `refresh()` function is defined to refresh the `accessToken` using the `refreshToken` that was saved to the global environment. If the refresh is successful, the `accessToken` is saved to the global environment using the `saveTokens()` function.

```js
async function refresh(sdk, refreshToken) {
  const resp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
        expiresInMins: 1,
      }),
    }),
  );
  if (!resp.ok) {
    sdk.console.error(`Refresh failed: ${resp.status} ${resp.statusText}`);
    sdk.console.error(await resp.text());
    return null;
  }
  const body = await resp.json();
  sdk.console.log(`/auth/refresh: ${resp.status} ${resp.statusText}`);
  sdk.console.log(JSON.stringify(body));
  await saveTokens(sdk, body);
  return body.accessToken;
}
```

The `run()` function is defined to execute the workflow. If the `accessToken` is not set, the `login()` function is called to log in with valid user credentials. If the `accessToken` is set, the `refresh()` function is called to refresh the `accessToken` using the `refreshToken` that was saved to the global environment. If the refresh is successful, the `accessToken` is saved to the global environment using the `saveTokens()` function.

```js
export async function run({ data, extra }, sdk) {
  let accessToken = sdk.env.getVar("ACCESS_TOKEN");

  if (!accessToken) {
    const token = await login(sdk);
    return { data: token ?? sdk.asString(data), extra };
  }

  const meResp = await fetch(
    new FetchRequest("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }),
  );
  sdk.console.log(`/auth/me: ${meResp.status} ${meResp.statusText}`);

  if (meResp.status !== 401) {
    if (!meResp.ok) {
      sdk.console.error(await meResp.text());
    }
    return { data: accessToken, extra };
  }

  const refreshToken = sdk.env.getVar("REFRESH_TOKEN");
  if (refreshToken) {
    const token = await refresh(sdk, refreshToken);
    if (token) {
      return { data: token, extra };
    }
  }

  sdk.console.log("Refresh unavailable or failed; logging in again");
  const token = await login(sdk);
  return { data: token ?? accessToken, extra };
}
```


## Testing the Workflow

To test the workflow:

1. Send the following request via Replay:

```http
POST /auth/login HTTP/1.1
Host: dummyjson.com
Content-Type: application/json
Content-Length: 63

{"username":"emilys","password":"emilyspass","expiresInMins":1}
```

2. Copy the value of the `accessToken` from the response.

3. Send the following request via Replay using the `accessToken` you copied in the previous step as the value of the `Authorization` header:

```http
GET /auth/me HTTP/1.1
Host: dummyjson.com
Connection: close
Authorization: Bearer <accessToken>


```

4. After one minute has passed send the previous request again and notice that a **401 Unauthorized** response is returned.

5. **Click**, **hold**, and **drag** over the `accessToken` value of the `Authorization` header and **click** the `+` button to add it as a placeholder.

6. Then, **click** on the associated edit button <code><Icon icon="fas fa-pen-to-square" /></code> of the placeholder to open the `Placeholder Settings` window.

<img alt="Adding a placeholder in a Replay request." src="/_images/refresh_jwt_placeholder.png" width=585 center/>

7. **Click** on the `Type` drop-down menu and select `Workflow`.

8. **Click** on the `Workflow` drop-down menu and select the workflow from the list.

9. **Click** on the `Add` button to save the configuration.

<img alt="Adding a workflow to a placeholder." src="/_images/refresh_jwt_placeholder_config.png" center/>

10. Close the settings window and send the request.

## The Result

The workflow will execute every time the request is sent and automatically refresh the `accessToken` when it expires.

The result will be continuous, successful `200 OK` responses with the new `accessToken` in the `Authorization` header.

The log messages of the JavaScript node can be viewed in the [frontend logs](/app/troubleshooting/report_bug.md#frontend-logs).

<img alt="Workflow log output." src="/_images/refresh_jwt_logs.png" center/>

If you navigate to the **Environment** interface, you will notice the `ACCESS_TOKEN` and `REFRESH_TOKEN` environment variables that have been set by the workflow.

<img alt="Environment variables." src="/_images/refresh_jwt_environment.png" center/>