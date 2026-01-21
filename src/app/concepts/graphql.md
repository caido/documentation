---
description: "Understand the core concepts behind Caido's GraphQL API for client/server communication, authentication, playground access, and schema exploration."
---

# GraphQL

As you interact with the Caido GUI (_client component_), a variety of [GraphQL](https://graphql.org/) API queries, mutations, and subscriptions are generated and sent to the Caido CLI (_server component_). These operations are responsible for fetching data, performing actions, and updating the interface with the latest data.

<img alt="Client/server architecture." src="/_images/client_server.png" no-shadow center />

## GraphQL Playground

The [GraphQL API schema](https://github.com/caido/graphql-explorer/blob/main/src/assets/schema.graphql) is available via a Playground IDE. To access it, navigate to [http://127.0.0.1:8080/graphql](http://127.0.0.1:8080/graphql) or **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface and select <code><Icon icon="fas fa-up-right-from-square" /> GraphQL Playground</code>.

::: tip
A visual representation of the schema can be viewed at [https://graphql-explorer.caido.io](https://graphql-explorer.caido.io).
:::

::: warning NOTE
Caido's GraphQL API is intentionally public to assist with the development of third-party tools. However, stability is not guaranteed as each release is likely to include changes to the schema.
:::

### Authentication

For the majority of operations, since they execute in the context of your user session/instance, authentication is required.

If your token is not already included in the `Headers` tab of the GraphQL Playgound interface, to obtain it:

1. Authenticate into your account.
2. Open the developer tools in the Caido GUI with `CTRL`+`SHIFT`+`I`.
3. Enter the following into the Console tab terminal:

```javascript
JSON.parse(localStorage.CAIDO_AUTHENTICATION).accessToken;
```

4. The access token can then be set in the `Headers` tab:

```json
{
  "Authorization": "Bearer <token>"
}
```

::: warning NOTE
The access token expires after a period of 7 days. If your project requires consistent authentication, utilize the [OAuth](/app/concepts/instances.md#authentication)  `startAuthenticationFlow` mutation and `createdAuthenticationToken` subscription.
:::

## Example: Using Replay

To gain a better understanding of how Caido operates, the following GraphQL operations are involved in creating a new Replay session and sending the request.

### CreateReplaySession

The `CreateReplaySession` mutation creates a new request editor in the Replay interface.

```graphql
mutation CreateReplaySession($input: CreateReplaySessionInput!) {
  createReplaySession(input: $input) {
    session {
      id
      name
      activeEntry {
        id
      }
      entries(first: 10) {
        edges {
          node {
            id
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      collection {
        id
      }
    }
  }
}
```

#### Variables

Typically, **clicking** on the `+ New Session` button generates an empty request as no fields are specified in the `input` object. However, the connection and request can be included directly.

```json
{
  "input": {
    "requestSource": {
      "raw": {
        "connectionInfo": {
          "host": "example.com",
          "port": 80,
          "isTLS": false,
          "SNI": "example.com"
        },
        "raw": "R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo="
      }
    }
  }
}
```

#### Response Data

```json
{
  "data": {
    "createReplaySession": {
      "session": {
        "id": "1",
        "name": "1",
        "activeEntry": {
          "id": "1"
        },
        "entries": {
          "edges": [
            {
              "node": {
                "id": "1"
              }
            }
          ],
          "pageInfo": {
            "hasNextPage": false,
            "hasPreviousPage": false,
            "startCursor": "eyJpZCI6IjEiLCJvcmRlcl92YWx1ZSI6bnVsbH0=",
            "endCursor": "eyJpZCI6IjEiLCJvcmRlcl92YWx1ZSI6bnVsbH0="
          }
        },
        "collection": {
          "id": "1"
        }
      }
    }
  }
}
```

The corresponding request and response pair are:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 746
sec-ch-ua-platform: "Windows"
Authorization: Bearer <token>
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/json, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/graphql/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"query":"mutation CreateReplaySession($input: CreateReplaySessionInput!) {\n  createReplaySession(input: $input) {\n    session {\n      id\n      name\n      activeEntry {\n        id\n      }\n      entries(first: 10) {\n        edges {\n          node {\n            id\n          }\n        }\n        pageInfo {\n          hasNextPage\n          hasPreviousPage\n          startCursor\n          endCursor\n        }\n      }\n      collection {\n        id\n      }\n    }\n  }\n}","variables":{"input":{"requestSource":{"raw":{"connectionInfo":{"host":"example.com","port":80,"isTLS":false,"SNI":"example.com"},"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo="}}}},"operationName":"CreateReplaySession"}
```

```http
HTTP/1.1 200 OK
content-length: 326
connection: close
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
access-control-allow-origin: http://127.0.0.1:8080
date: Mon, 12 Jan 2026 16:52:13 GMT

{"data":{"createReplaySession":{"session":{"id":"1","name":"1","activeEntry":{"id":"1"},"entries":{"edges":[{"node":{"id":"1"}}],"pageInfo":{"hasNextPage":false,"hasPreviousPage":false,"startCursor":"eyJpZCI6IjMiLCJvcmRlcl92YWx1ZSI6bnVsbH0=","endCursor":"eyJpZCI6IjMiLCJvcmRlcl92YWx1ZSI6bnVsbH0="}},"collection":{"id":"1"}}}}}
```

<img alt="New Replay session." src="/_images/create_replay_session_mutation.png" no-shadow center />

### StartReplayTask

**Clicking** on the `Send` button generates a `StartReplayTask` mutation.

```graphql
mutation StartReplayTask($sessionId: ID!, $input: StartReplayTaskInput!) {
  startReplayTask(sessionId: $sessionId, input: $input) {
    error {
      __typename
    }
    task {
      id
      createdAt
      replayEntry {
        id
      }
    }
  }
}
```

#### Variables

```json
{
  "sessionId": "1",
  "input": {
    "connection": {
      "host": "example.com",
      "port": 80,
      "isTLS": false,
      "SNI": "example.com"
    },
    "raw": "R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=",
    "settings": {
      "connectionClose": true,
      "updateContentLength": true,
      "placeholders": []
    }
  }
}
```

#### Data

```json
{
  "data": {
    "startReplayTask": {
      "error": null,
      "task": {
        "id": "8",
        "createdAt": "2026-01-12T18:50:28.4289894Z",
        "replayEntry": {
          "id": "2"
        }
      }
    }
  }
}
```

The corresponding request and response pair are:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 3976
sec-ch-ua-platform: "Windows"
authorization: Bearer r/iu/AlQOL/SINNOS6yK1b5/ZmzueaAbbEQ99su9aLTAkSlQS0zj4Rtfc7MRSVwNgM140ZiU9rcMSgKxcySFKQ==.eBF2nuQt5k74iNS4IA1SunHWQIKdPX+IvTq/zaBltkk=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
sec-ch-ua: "Google Chrome";v="143", "Chromium";v="143", "Not A(Brand";v="24"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-GB,en-US;q=0.9,en;q=0.8

{"operationName":"startReplayTask","query":"mutation startReplayTask($sessionId: ID!, $input: StartReplayTaskInput!) {\n  startReplayTask(sessionId: $sessionId, input: $input) {\n    task {\n      ...replayTaskMeta\n    }\n    error {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\nfragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\nfragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\nfragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n  stream {\n    id\n  }\n}\nfragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  createdAt\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\nfragment rangeFull on Range {\n  start\n  end\n}\nfragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\nfragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\nfragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\nfragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\nfragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\nfragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\nfragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\nfragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\nfragment requestFull on Request {\n  ...requestFullFields\n}\nfragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n  request {\n    ...requestFull\n  }\n}\nfragment userErrorFull on UserError {\n  __typename\n  code\n}\nfragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryFull\n  }\n}\nfragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\nfragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\nfragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\nfragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}","variables":{"input":{"connection":{"SNI":"example.com","host":"example.com","isTLS":false,"port":80},"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"connectionClose":true,"placeholders":[],"updateContentLength":true}},"sessionId":"1"}}
```

```http
HTTP/1.1 200 OK
content-length: 483
connection: close
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
access-control-allow-origin: http://127.0.0.1:8080
date: Tue, 13 Jan 2026 16:15:03 GMT

{"data":{"startReplayTask":{"task":{"__typename":"ReplayTask","id":"2","createdAt":"2026-01-13T16:15:03.7537873Z","replayEntry":{"__typename":"ReplayEntry","id":"2","error":null,"createdAt":1768320903752,"connection":{"__typename":"ConnectionInfo","host":"example.com","port":80,"isTLS":false,"SNI":"example.com"},"session":{"id":"1"},"request":null,"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"placeholders":[]}}},"error":null}}}
```

A [traffic splitting algorithm](/app/concepts/traffic_splitting.md) recognizes that the request is intended for a destination server. The Caido CLI (_server component_) forwards the request and handles the corresponding response. 

```http
GET / HTTP/1.1
Host: example.com
Connection: close


```

```http
HTTP/1.1 200 OK
Date: Mon, 12 Jan 2026 19:03:54 GMT
Content-Type: text/html
Transfer-Encoding: chunked
Connection: close
CF-RAY: 9bceeaa5af5c27ec-LAX
Last-Modified: Sat, 03 Jan 2026 05:43:21 GMT
Allow: GET, HEAD
Age: 24
cf-cache-status: HIT
Accept-Ranges: bytes
Server: cloudflare

200
<!doctype html><html lang="en"><head><title>Example Domain</title><meta name="viewport" content="width=device-width, initial-scale=1"><style>body{background:#eee;width:60vw;margin:15vh auto;font-family:system-ui,sans-serif}h1{font-size:1.5em}div{opacity:0.8}a:link,a:visited{color:#348}</style><body><div><h1>Example Domain</h1><p>This domain is for use in documentation examples without needing permission. Avoid use in operations.<p><a href="https://iana.org/domains/example">Learn more</a></div></body></html>
1


0


```

### GetReplayEntry

To display the response, the `GetReplayEntry` query is used.

```graphql
query GetReplayEntry($id: ID!) {
  replayEntry(id: $id) {
    id
    error
    request {
      id
      response {
        id
        statusCode
        length
        roundtripTime
        raw
        createdAt
      }
    }
  }
}
```

#### Variables

The `id` changes from `1` to `2` since the sent request is second in the session's history.

```json
{
  "id": "2"
}
```

#### Data

```json
{
  "data": {
    "replayEntry": {
      "id": "2",
      "error": null,
      "request": {
        "id": "2",
        "response": {
          "id": "1",
          "statusCode": 200,
          "length": 801,
          "roundtripTime": 116,
          "raw": "SFRUUC8xLjEgMjAwIE9LDQpEYXRlOiBNb24sIDEyIEphbiAyMDI2IDE5OjAzOjU0IEdNVA0KQ29udGVudC1UeXBlOiB0ZXh0L2h0bWwNCkNvbm5lY3Rpb246IGNsb3NlDQpDRi1SQVk6IDliY2VlYWE1YWY1YzI3ZWMtTEFYDQpMYXN0LU1vZGlmaWVkOiBTYXQsIDAzIEphbiAyMDI2IDA1OjQzOjIxIEdNVA0KQWxsb3c6IEdFVCwgSEVBRA0KQWdlOiAyNA0KY2YtY2FjaGUtc3RhdHVzOiBISVQNCkFjY2VwdC1SYW5nZXM6IGJ5dGVzDQpTZXJ2ZXI6IGNsb3VkZmxhcmUNCkNvbnRlbnQtTGVuZ3RoOiA1MTMNCg0KPCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjx0aXRsZT5FeGFtcGxlIERvbWFpbjwvdGl0bGU+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj48c3R5bGU+Ym9keXtiYWNrZ3JvdW5kOiNlZWU7d2lkdGg6NjB2dzttYXJnaW46MTV2aCBhdXRvO2ZvbnQtZmFtaWx5OnN5c3RlbS11aSxzYW5zLXNlcmlmfWgxe2ZvbnQtc2l6ZToxLjVlbX1kaXZ7b3BhY2l0eTowLjh9YTpsaW5rLGE6dmlzaXRlZHtjb2xvcjojMzQ4fTwvc3R5bGU+PGJvZHk+PGRpdj48aDE+RXhhbXBsZSBEb21haW48L2gxPjxwPlRoaXMgZG9tYWluIGlzIGZvciB1c2UgaW4gZG9jdW1lbnRhdGlvbiBleGFtcGxlcyB3aXRob3V0IG5lZWRpbmcgcGVybWlzc2lvbi4gQXZvaWQgdXNlIGluIG9wZXJhdGlvbnMuPHA+PGEgaHJlZj0iaHR0cHM6Ly9pYW5hLm9yZy9kb21haW5zL2V4YW1wbGUiPkxlYXJuIG1vcmU8L2E+PC9kaXY+PC9ib2R5PjwvaHRtbD4K",
          "createdAt": 1768244634848
        }
      }
    }
  }
}
```

The corresponding request and response pair are:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 315
sec-ch-ua-platform: "Windows"
Authorization: Bearer 3w41ccRmsftO0MOiWn7zSfDyEaEkZV0eYzU7MZWeyy/l/74QVbQ7pjOVDFl3ufyONEwH7NpXtRiiroi3F6rRBw==.Z78fF5XYnyFlW4QhqPefauH5q0tEVy4+Btyk0Bh1L0I=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/json, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/graphql/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"query":"query GetReplayEntry($id: ID!) {\n  replayEntry(id: $id) {\n    id\n    error\n    request {\n      id\n      response {\n        id\n        statusCode\n        length\n        roundtripTime\n        raw\n        createdAt\n      }\n    }\n  }\n}","variables":{"id":"2"},"operationName":"GetReplayEntry"}
```

```http
HTTP/1.1 200 OK
content-length: 1244
connection: close
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
access-control-allow-origin: http://127.0.0.1:8080
date: Mon, 12 Jan 2026 19:17:51 GMT

{"data":{"replayEntry":{"id":"2","error":null,"request":{"id":"2","response":{"id":"1","statusCode":200,"length":801,"roundtripTime":116,"raw":"SFRUUC8xLjEgMjAwIE9LDQpEYXRlOiBNb24sIDEyIEphbiAyMDI2IDE5OjAzOjU0IEdNVA0KQ29udGVudC1UeXBlOiB0ZXh0L2h0bWwNCkNvbm5lY3Rpb246IGNsb3NlDQpDRi1SQVk6IDliY2VlYWE1YWY1YzI3ZWMtTEFYDQpMYXN0LU1vZGlmaWVkOiBTYXQsIDAzIEphbiAyMDI2IDA1OjQzOjIxIEdNVA0KQWxsb3c6IEdFVCwgSEVBRA0KQWdlOiAyNA0KY2YtY2FjaGUtc3RhdHVzOiBISVQNCkFjY2VwdC1SYW5nZXM6IGJ5dGVzDQpTZXJ2ZXI6IGNsb3VkZmxhcmUNCkNvbnRlbnQtTGVuZ3RoOiA1MTMNCg0KPCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjx0aXRsZT5FeGFtcGxlIERvbWFpbjwvdGl0bGU+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj48c3R5bGU+Ym9keXtiYWNrZ3JvdW5kOiNlZWU7d2lkdGg6NjB2dzttYXJnaW46MTV2aCBhdXRvO2ZvbnQtZmFtaWx5OnN5c3RlbS11aSxzYW5zLXNlcmlmfWgxe2ZvbnQtc2l6ZToxLjVlbX1kaXZ7b3BhY2l0eTowLjh9YTpsaW5rLGE6dmlzaXRlZHtjb2xvcjojMzQ4fTwvc3R5bGU+PGJvZHk+PGRpdj48aDE+RXhhbXBsZSBEb21haW48L2gxPjxwPlRoaXMgZG9tYWluIGlzIGZvciB1c2UgaW4gZG9jdW1lbnRhdGlvbiBleGFtcGxlcyB3aXRob3V0IG5lZWRpbmcgcGVybWlzc2lvbi4gQXZvaWQgdXNlIGluIG9wZXJhdGlvbnMuPHA+PGEgaHJlZj0iaHR0cHM6Ly9pYW5hLm9yZy9kb21haW5zL2V4YW1wbGUiPkxlYXJuIG1vcmU8L2E+PC9kaXY+PC9ib2R5PjwvaHRtbD4K","createdAt":1768244634848}}}}}
```
