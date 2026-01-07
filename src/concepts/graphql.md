---
description: "Understand the core concepts behind Caido's GraphQL API for client/server communication, authentication, playground access, and schema exploration."
---

# GraphQL

To facilitate communication between the Caido GUI (_client component_) and Caido CLI (_server component_), a variety of [GraphQL](https://graphql.org/) operations are used.

<img alt="Client/server architecture." src="/_images/client_server.png" no-shadow center width="900"/>

Operations generate requests to the `/graphql` endpoint of Caido's listening address.

::: warning NOTE
By default, since Caido listens for both GUI and CLI operations on a single port, a [traffic splitting algorithm](/concepts/traffic_splitting.md) is used.
:::

## Example

For example, creating a new Replay session, entering a target URL, and **clicking** on the `Send` button generates the following request and response pairs.

::: info
Requests are also generated in this flow to update the UI view according to user settings and sitemap.
:::

### Creating a New Replay Session

**Request**:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 1489
sec-ch-ua-platform: "Windows"
authorization: Bearer vBjivOkb1QNDER9s8mFGo61IKUGZTlH9gnZlG0z8aTOeWmDRdW99y3T33raDLwD0SwWl0oQHY6W990A/Xl86sQ==.7DUZx113DOeBgT3gSMsusO3HJpZOLuFsg6OltHMbyjA=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"operationName":"createReplaySession","query":"mutation createReplaySession($input: CreateReplaySessionInput!) {\n  createReplaySession(input: $input) {\n    session {\n      ...replaySessionMeta\n      collection {\n        ...replaySessionCollectionMeta\n      }\n    }\n  }\n}\nfragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\nfragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n  stream {\n    id\n  }\n}\nfragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  createdAt\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\nfragment replaySessionMeta on ReplaySession {\n  __typename\n  id\n  name\n  activeEntry {\n    ...replayEntryMeta\n  }\n  collection {\n    id\n  }\n  entries {\n    nodes {\n      ...replayEntryMeta\n    }\n  }\n}\nfragment replaySessionCollectionMeta on ReplaySessionCollection {\n  __typename\n  id\n  name\n  sessions {\n    ...replaySessionMeta\n  }\n}","variables":{"input":{}}}
```

**Response**:

```http
HTTP/1.1 200 OK
content-length: 358
connection: close
access-control-allow-origin: http://127.0.0.1:8080
content-type: application/json
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
date: Tue, 06 Jan 2026 23:55:18 GMT

{"data":{"createReplaySession":{"session":{"__typename":"ReplaySession","id":"1","name":"1","activeEntry":null,"collection":{"id":"1","__typename":"ReplaySessionCollection","name":"Default Collection","sessions":[{"__typename":"ReplaySession","id":"1","name":"1","activeEntry":null,"collection":{"id":"1"},"entries":{"nodes":[]}}]},"entries":{"nodes":[]}}}}}
```

## Specifying a Connection URL

Typing in a target URL and pressing the `ENTER` key to generate the basic request generates the following request and response pair:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 3956
sec-ch-ua-platform: "Windows"
authorization: Bearer vBjivOkb1QNDER9s8mFGo61IKUGZTlH9gnZlG0z8aTOeWmDRdW99y3T33raDLwD0SwWl0oQHY6W990A/Xl86sQ==.7DUZx113DOeBgT3gSMsusO3HJpZOLuFsg6OltHMbyjA=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"operationName":"startReplayTask","query":"mutation startReplayTask($sessionId: ID!, $input: StartReplayTaskInput!) {\n  startReplayTask(sessionId: $sessionId, input: $input) {\n    task {\n      ...replayTaskMeta\n    }\n    error {\n      ... on TaskInProgressUserError {\n        ...taskInProgressUserErrorFull\n      }\n      ... on PermissionDeniedUserError {\n        ...permissionDeniedUserErrorFull\n      }\n      ... on CloudUserError {\n        ...cloudUserErrorFull\n      }\n      ... on OtherUserError {\n        ...otherUserErrorFull\n      }\n    }\n  }\n}\nfragment taskMeta on Task {\n  __typename\n  id\n  createdAt\n}\nfragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\nfragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n  stream {\n    id\n  }\n}\nfragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  createdAt\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\nfragment rangeFull on Range {\n  start\n  end\n}\nfragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\nfragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\nfragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\nfragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\nfragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\nfragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\nfragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\nfragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\nfragment requestFull on Request {\n  ...requestFullFields\n}\nfragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n  request {\n    ...requestFull\n  }\n}\nfragment userErrorFull on UserError {\n  __typename\n  code\n}\nfragment replayTaskMeta on ReplayTask {\n  ...taskMeta\n  replayEntry {\n    ...replayEntryFull\n  }\n}\nfragment taskInProgressUserErrorFull on TaskInProgressUserError {\n  ...userErrorFull\n  taskId\n}\nfragment permissionDeniedUserErrorFull on PermissionDeniedUserError {\n  ...userErrorFull\n  permissionDeniedReason: reason\n}\nfragment cloudUserErrorFull on CloudUserError {\n  ...userErrorFull\n  cloudReason: reason\n}\nfragment otherUserErrorFull on OtherUserError {\n  ...userErrorFull\n}","variables":{"input":{"connection":{"host":"example.com","isTLS":true,"port":443},"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"connectionClose":true,"placeholders":[],"updateContentLength":true}},"sessionId":"1"}}
```

**Response**:

```http
HTTP/1.1 200 OK
content-length: 475
connection: close
access-control-allow-origin: http://127.0.0.1:8080
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
date: Tue, 06 Jan 2026 23:55:33 GMT

{"data":{"startReplayTask":{"task":{"__typename":"ReplayTask","id":"4","createdAt":"2026-01-06T23:55:33.7344783Z","replayEntry":{"__typename":"ReplayEntry","id":"36","error":null,"createdAt":1767743733733,"connection":{"__typename":"ConnectionInfo","host":"example.com","port":443,"isTLS":true,"SNI":null},"session":{"id":"1"},"request":null,"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"placeholders":[]}}},"error":null}}}
```

## Retrieving the Created Request

**Request**:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 2639
sec-ch-ua-platform: "Windows"
authorization: Bearer vBjivOkb1QNDER9s8mFGo61IKUGZTlH9gnZlG0z8aTOeWmDRdW99y3T33raDLwD0SwWl0oQHY6W990A/Xl86sQ==.7DUZx113DOeBgT3gSMsusO3HJpZOLuFsg6OltHMbyjA=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"operationName":"replayEntry","query":"query replayEntry($id: ID!) {\n  replayEntry(id: $id) {\n    ...replayEntryFull\n  }\n}\nfragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\nfragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n  stream {\n    id\n  }\n}\nfragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  createdAt\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\nfragment rangeFull on Range {\n  start\n  end\n}\nfragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\nfragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\nfragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\nfragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\nfragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\nfragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\nfragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\nfragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\nfragment requestFull on Request {\n  ...requestFullFields\n}\nfragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n  request {\n    ...requestFull\n  }\n}","variables":{"id":"36"}}
```

**Response**:

```http
HTTP/1.1 200 OK
content-length: 935
connection: close
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
access-control-allow-origin: http://127.0.0.1:8080
date: Tue, 06 Jan 2026 23:55:35 GMT

{"data":{"replayEntry":{"__typename":"ReplayEntry","id":"36","error":null,"createdAt":1767743733733,"connection":{"__typename":"ConnectionInfo","host":"example.com","port":443,"isTLS":true,"SNI":null},"session":{"id":"1"},"request":{"__typename":"Request","id":"60982","host":"example.com","port":443,"path":"/","query":"","method":"GET","edited":false,"isTls":true,"sni":null,"length":56,"alteration":"NONE","metadata":{"__typename":"RequestMetadata","id":"60982","color":null},"fileExtension":null,"source":"REPLAY","createdAt":1767743735594,"response":{"__typename":"Response","id":"57007","statusCode":200,"roundtripTime":1858,"length":803,"createdAt":1767743735596,"alteration":"NONE","edited":false},"stream":null,"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","edits":[]},"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"placeholders":[]}}}}
```

::: info
The request is sent to the destination server by the Caido CLI (_server component_).
:::

## Retrieving the Response

**Request**:

```http
POST /graphql HTTP/1.1
Host: 127.0.0.1:8080
Connection: keep-alive
Content-Length: 385
sec-ch-ua-platform: "Windows"
authorization: Bearer vBjivOkb1QNDER9s8mFGo61IKUGZTlH9gnZlG0z8aTOeWmDRdW99y3T33raDLwD0SwWl0oQHY6W990A/Xl86sQ==.7DUZx113DOeBgT3gSMsusO3HJpZOLuFsg6OltHMbyjA=
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Caido/0.54.1 Chrome/138.0.7204.251 Electron/37.8.0 Safari/537.36
accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138"
content-type: application/json
sec-ch-ua-mobile: ?0
Origin: http://127.0.0.1:8080
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: cors
Sec-Fetch-Dest: empty
Referer: http://127.0.0.1:8080/
Accept-Encoding: gzip, deflate, br, zstd
Accept-Language: en-US

{"operationName":"response","query":"query response($id: ID!) {\n  response(id: $id) {\n    ...responseFull\n  }\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment responseFull on Response {\n  ...responseMeta\n  raw\n  edits {\n    ...responseMeta\n  }\n}","variables":{"id":"57007"}}
```

**Response**:

```http
HTTP/1.1 200 OK
content-length: 1264
connection: close
content-type: application/json
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
access-control-allow-origin: http://127.0.0.1:8080
date: Tue, 06 Jan 2026 23:55:35 GMT

{"data":{"response":{"__typename":"Response","id":"57007","statusCode":200,"roundtripTime":1858,"length":803,"createdAt":1767743735596,"alteration":"NONE","edited":false,"raw":"SFRUUC8xLjEgMjAwIE9LDQpEYXRlOiBUdWUsIDA2IEphbiAyMDI2IDIzOjU1OjM0IEdNVA0KQ29udGVudC1UeXBlOiB0ZXh0L2h0bWwNCkNvbm5lY3Rpb246IGNsb3NlDQpDRi1SQVk6IDliOWYyNWE2YmMyNjRiZDgtQlVGDQpsYXN0LW1vZGlmaWVkOiBNb24sIDA1IEphbiAyMDI2IDIwOjIwOjM3IEdNVA0KYWxsb3c6IEdFVCwgSEVBRA0KQWNjZXB0LVJhbmdlczogYnl0ZXMNCkFnZTogODE0MQ0KY2YtY2FjaGUtc3RhdHVzOiBISVQNClNlcnZlcjogY2xvdWRmbGFyZQ0KQ29udGVudC1MZW5ndGg6IDUxMw0KDQo8IWRvY3R5cGUgaHRtbD48aHRtbCBsYW5nPSJlbiI+PGhlYWQ+PHRpdGxlPkV4YW1wbGUgRG9tYWluPC90aXRsZT48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEiPjxzdHlsZT5ib2R5e2JhY2tncm91bmQ6I2VlZTt3aWR0aDo2MHZ3O21hcmdpbjoxNXZoIGF1dG87Zm9udC1mYW1pbHk6c3lzdGVtLXVpLHNhbnMtc2VyaWZ9aDF7Zm9udC1zaXplOjEuNWVtfWRpdntvcGFjaXR5OjAuOH1hOmxpbmssYTp2aXNpdGVke2NvbG9yOiMzNDh9PC9zdHlsZT48Ym9keT48ZGl2PjxoMT5FeGFtcGxlIERvbWFpbjwvaDE+PHA+VGhpcyBkb21haW4gaXMgZm9yIHVzZSBpbiBkb2N1bWVudGF0aW9uIGV4YW1wbGVzIHdpdGhvdXQgbmVlZGluZyBwZXJtaXNzaW9uLiBBdm9pZCB1c2UgaW4gb3BlcmF0aW9ucy48cD48YSBocmVmPSJodHRwczovL2lhbmEub3JnL2RvbWFpbnMvZXhhbXBsZSI+TGVhcm4gbW9yZTwvYT48L2Rpdj48L2JvZHk+PC9odG1sPgo=","edits":[]}}}
```

::: warning NOTE
The GraphQL schema is publicly available to support the development of third-party tools. However, new releases may include changes to the API, requiring adjustments to the calls made.
:::

## Playground

To interact with the schema, navigate to [http://127.0.0.1:8080/graphql](http://127.0.0.1:8080/graphql) or **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface and select <code><Icon icon="fas fa-up-right-from-square" /> GraphQL Playground</code>.

For the majority of operations, since they execute in the context of your user session/instance, the GraphQL API requires authentication.

If your token is not already included in the `Header` tab of the GraphQL Playgound interface, to obtain it:

1. Authenticate into your account.
2. Open the developer tools in the Caido GUI with `CTRL`+`SHIFT`+`I`.
3. Enter the following into the Console tab terminal:

```javascript
JSON.parse(localStorage.CAIDO_AUTHENTICATION).accessToken;
```

<img width="900" alt="Client/server architecture." src="/_images/graphql_playground.png" center/>

::: warning NOTE
This token expires after a period of 7 days. If your project requires conistent authentication, utilize the  `startAuthenticationFlow` mutation and `createdAuthenticationToken` subscription to complete the [OAuth](/concepts/authentication.md) flow.
:::

## Explorer

As Caido's GraphQL schema is extensive, a visual representation is available at [https://graphql-explorer.caido.io](https://graphql-explorer.caido.io).

<img style="filter: brightness(90%);" alt="Client/server architecture." src="/_images/graphql_explorer.png" center/>
