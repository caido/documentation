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

But, by creating a [workflow](/app/guides/workflows_creating.html) that sets the `accessToken` and `refreshToken` as environment variables and automates the exchange, you can achieve continuous, uninterrupted testing in Replay requests using the [placeholder functionality](/app/guides/replay_environment_variables.md).

## Creating a Passive Workflow

To begin, navigate to the Workflows interface, select the `Passive` tab, and **click** the `+ New workflow` button.

<img alt="Creating a new passive workflow." src="/_images/new_passive_workflow.png" center>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

For this workflow, the overall node layout will be:

<img alt="Refresh authentication workflow." src="/_images/nodes_auth_refresh.png" center>

- The `On Intercept Response` node outputs `$on_intercept_response.request` and `$on_intercept_response.response` objects which represent proxied requests and their corresponding responses.
- The `In Scope` node checks if the value of a request's Host header is included in the in-scope list of a scope preset. If it is not - the workflow will end.
- In-scope request and response objects will be passed to the `Javascript` node.
- Once a request or response has been processed by the script in the `Javascript` node, the workflow will end.

## Refreshing the JWT

1. **Click** on the `In Scope` node to access its editor and ensure the `$on_intercept_response.request` object is [referenced as input data](/app/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_response_reference_request.png" center>

2. Close the editor window and **click** on the `Javascript` node to access its editor.

3. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

```js

```
