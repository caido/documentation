---
description: "Learn how to create a workflow that automatically refreshes a JSON Web Token (JWT) when it expires."
---

# Refresh a JWT Workflow

In this tutorial, we will create a workflow that will automatically refresh a JSON Web Token (JWT) when it expires.

We will use the [https://dummyjson.com](https://dummyjson.com) API to demonstrate the workflow.

According to the [https://dummyjson.com/docs/auth](https://dummyjson.com/docs/auth) documentation, any user credentials returned from the `/users` endpoint can be used to authenticate with the `/auth/login` endpoint. By including the `expiresInMins` parameter, we can simulate a short-lived JWT.

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

```json
{
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 29,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/ic on/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
        "color": "Brown",
        "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
        "address": "626 Main Street",
        "city": "Phoenix",
        "state": "Mississippi",
        "stateCode": "MS",
        "postalCode": "29112",
        "coordinates": {
            "lat": -77.16213,
            "lng": -92.084824
        },
        "country": "United States"
    },
    "macAddress": "47:fa:41:18:ec:eb",
    "university": "University of Wisconsin--Madison",
    "bank": {
        "cardExpire": "05/28",
        "cardNumber": "3693233511855044",
        "cardType": "Diners Club International",
        "currency": "GBP",
        "iban": "GB74MH2UZLR9TRPHYNU8F8"
    },
    "company": {
        "department": "Engineering",
        "name": "Dooley, Kozey and Cronin",
        "title": "Sales Manager",
        "address": {
            "address": "263 Tenth Street",
            "city": "San Francisco",
            "state": "Wisconsin",
            "stateCode": "WI",
            "postalCode": "37657",
            "coordinates": {
                "lat": 71.814525,
                "lng": -161.150263
            },
            "country": "United States"
        }
    },
    "ein": "977-175",
    "ssn": "900-590-289",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
    "crypto": {
        "coin": "Bitcoin",
        "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
        "network": "Ethereum (ERC20)"
    },
    "role": "admin"
}
```

Once a minute has passed, a **401 Unauthorized** response is returned instead of user data with a body notifiying the `accessToken` has expired:

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

Typically, to continue authenticated testing in [Replay](/app/guides/replay_resending.md), the `accessToken` would need to be manually updated in the request headers.

However, by creating a [workflow](/app/guides/workflows_creating.html) that sets the `accessToken` and `refreshToken` as environment variables and automates the exchange, you can achieve continuous, uninterrupted testing in Replay requests using the [placeholder functionality](/app/guides/replay_environment_variables.md).

## Creating an Active Workflow

To begin, navigate to the Workflows interface, select the `Active` tab, and **click** on the `+ New workflow` button.

<img alt="Creating a new active workflow." src="/_images/new_active_workflow.png" center/>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/discord_notification_nodes.png" center>

- The `Active Start` node outputs `$active_start.request` and `$active_start.response` objects which represent proxied requests the workflow was initiated on and their corresponding responses.
- The request and response objects will be passed to the `Javascript` node.
- Once the script in the `Javascript` node finishes, the workflow will end.

## Refreshing the JWT

1. **Click** on the `Javascript` node to access its editor.

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js
import { Request as FetchRequest, fetch } from "caido:http";

const EXPIRES_IN_MINS = 1;
const POLL_INTERVAL_MS = 45_000;
const POLL_COUNT = 4;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function saveTokens(sdk, data) {
  if (data.accessToken) {
    await sdk.env.setVar({
      name: "ACCESS_TOKEN",
      value: data.accessToken,
      secret: true,
      global: true,
    });
  }
  if (data.refreshToken) {
    await sdk.env.setVar({
      name: "REFRESH_TOKEN",
      value: data.refreshToken,
      secret: true,
      global: true,
    });
  }
}

/**
 * @param {NodeInputHTTP} input
 * @param {SDK} sdk
 * @returns {MaybePromise<NodeResult | Data | undefined>}
 */
export async function run({ request, response, extra }, sdk) {
  let accessToken = sdk.env.getVar("ACCESS_TOKEN");
  let refreshToken = sdk.env.getVar("REFRESH_TOKEN");

  // Login once — https://dummyjson.com/docs/auth
  if (!accessToken || !refreshToken) {
    const loginRequest = new FetchRequest("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: EXPIRES_IN_MINS,
      }),
    });
    const loginResp = await fetch(loginRequest);
    if (!loginResp.ok) {
      sdk.console.error("Login failed.");
      return;
    }
    const loginData = await loginResp.json();
    await saveTokens(sdk, loginData);
    accessToken = loginData.accessToken;
    refreshToken = loginData.refreshToken;
    sdk.console.log("Logged in once. Tokens saved to Global environment.");
  }

  for (let i = 0; i < POLL_COUNT; i++) {
    const meRequest = new FetchRequest("https://dummyjson.com/auth/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let meResp = await fetch(meRequest);

    // Refresh on 401 — https://dummyjson.com/docs/auth
    if (meResp.status === 401) {
      sdk.console.log("Access token expired. Refreshing...");
      const refreshRequest = new FetchRequest(
        "https://dummyjson.com/auth/refresh",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            refreshToken: refreshToken,
            expiresInMins: EXPIRES_IN_MINS,
          }),
        },
      );
      const refreshResp = await fetch(refreshRequest);
      if (!refreshResp.ok) {
        sdk.console.error("Token refresh failed.");
        return;
      }
      const refreshData = await refreshResp.json();
      await saveTokens(sdk, refreshData);
      accessToken = refreshData.accessToken;
      refreshToken = refreshData.refreshToken;
      sdk.console.log("JWT refreshed and saved to Global environment.");

      const retryRequest = new FetchRequest("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      meResp = await fetch(retryRequest);
    }

    const meData = await meResp.json();
    sdk.console.log(`/auth/me [${i + 1}]:`, JSON.stringify(meData, null, 2));

    if (i < POLL_COUNT - 1) {
      await sleep(POLL_INTERVAL_MS);
    }
  }
}
```

3. Next, ensure the `$active_start.request` and `$active_start.response` objects are [referenced as input data](/app/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_active_reference_request_response.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Script Breakdown

<img alt="The global environment variables." src="/_images/refresh_jwt_environment.png" center/>

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

5. **Click**, **hold**, and **drag** over the value you want to replace and **click** the `+` button to add it as a placeholder.

6. Then, **click** on the associated edit button <code><Icon icon="fas fa-pen-to-square" /></code> of the placeholder to open the `Placeholder Settings` window.

<img alt="Adding a placeholder in a Replay request." src="/_images/refresh_jwt_placeholder.png" width=585 center/>

7. **Click** on the `Type` drop-down menu and select `Environment Variable`.

8. **Click** on the `Environment Variable` drop-down menu and select the `ACCESS_TOKEN` environment variable.

9. **Click** on the `Add` button to save the configuration.

<img alt="Adding an environment variable to a Replay request." src="/_images/refresh_jwt_placeholder_settings.png" center/>

10. Close the settings window and send the request.
