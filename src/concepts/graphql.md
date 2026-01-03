---
description: "Understand the core concepts behind Caido's GraphQL API for client/server communication, authentication, playground access, and schema exploration."
---

# GraphQL

[GraphQL](https://graphql.org/) operations facilitate communication between the Caido GUI (_client component_) and Caido CLI (_server component_).

<img alt="Client/server architecture." src="/_images/client_server.png" no-shadow center width="900"/>

For instance, [sending a request in Replay](/guides/replay_resending.md) generates a request to the `/graphql` endpoint of Caido's listening address:

**Request**:

```http
POST http://127.0.0.1:8080/graphql HTTP/1.1
Host: 127.0.0.1:8080
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:146.0) Gecko/20100101 Firefox/146.0
Accept: application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
Referer: http://127.0.0.1:8080/
authorization: Bearer <TOKEN>
content-type: application/json
Content-Length: 2639
Origin: http://127.0.0.1:8080
Connection: keep-alive
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
Priority: u=4

{"operationName":"replayEntry","query":"query replayEntry($id: ID!) {\n  replayEntry(id: $id) {\n    ...replayEntryFull\n  }\n}\nfragment connectionInfoFull on ConnectionInfo {\n  __typename\n  host\n  port\n  isTLS\n  SNI\n}\nfragment requestMetadataFull on RequestMetadata {\n  __typename\n  id\n  color\n}\nfragment responseMeta on Response {\n  __typename\n  id\n  statusCode\n  roundtripTime\n  length\n  createdAt\n  alteration\n  edited\n}\nfragment requestMeta on Request {\n  __typename\n  id\n  host\n  port\n  path\n  query\n  method\n  edited\n  isTls\n  sni\n  length\n  alteration\n  metadata {\n    ...requestMetadataFull\n  }\n  fileExtension\n  source\n  createdAt\n  response {\n    ...responseMeta\n  }\n  stream {\n    id\n  }\n}\nfragment replayEntryMeta on ReplayEntry {\n  __typename\n  id\n  error\n  createdAt\n  connection {\n    ...connectionInfoFull\n  }\n  session {\n    id\n  }\n  request {\n    ...requestMeta\n  }\n}\nfragment rangeFull on Range {\n  start\n  end\n}\nfragment replayPrefixPreprocessorFull on ReplayPrefixPreprocessor {\n  __typename\n  value\n}\nfragment replaySuffixPreprocessorFull on ReplaySuffixPreprocessor {\n  __typename\n  value\n}\nfragment replayUrlEncodePreprocessorFull on ReplayUrlEncodePreprocessor {\n  __typename\n  charset\n  nonAscii\n}\nfragment replayWorkflowPreprocessorFull on ReplayWorkflowPreprocessor {\n  __typename\n  id\n}\nfragment replayEnvironmentPreprocessorFull on ReplayEnvironmentPreprocessor {\n  __typename\n  variableName\n}\nfragment replayPreprocessorFull on ReplayPreprocessor {\n  __typename\n  options {\n    ... on ReplayPrefixPreprocessor {\n      ...replayPrefixPreprocessorFull\n    }\n    ... on ReplaySuffixPreprocessor {\n      ...replaySuffixPreprocessorFull\n    }\n    ... on ReplayUrlEncodePreprocessor {\n      ...replayUrlEncodePreprocessorFull\n    }\n    ... on ReplayWorkflowPreprocessor {\n      ...replayWorkflowPreprocessorFull\n    }\n    ... on ReplayEnvironmentPreprocessor {\n      ...replayEnvironmentPreprocessorFull\n    }\n  }\n}\nfragment replayPlaceholderFull on ReplayPlaceholder {\n  __typename\n  inputRange {\n    ...rangeFull\n  }\n  outputRange {\n    ...rangeFull\n  }\n  preprocessors {\n    ...replayPreprocessorFull\n  }\n}\nfragment requestFullFields on Request {\n  ...requestMeta\n  raw\n  edits {\n    ...requestMeta\n  }\n}\nfragment requestFull on Request {\n  ...requestFullFields\n}\nfragment replayEntryFull on ReplayEntry {\n  ...replayEntryMeta\n  raw\n  settings {\n    placeholders {\n      ...replayPlaceholderFull\n    }\n  }\n  request {\n    ...requestFull\n  }\n}","variables":{"id":"31"}}
```

---

```http
HTTP/1.1 200 OK
content-length: 934
connection: close
vary: Origin, Access-Control-Request-Method, Access-Control-Request-Headers
content-type: application/json
access-control-allow-origin: http://127.0.0.1:8080
date: Sat, 03 Jan 2026 21:17:29 GMT

{"data":{"replayEntry":{"__typename":"ReplayEntry","id":"31","error":null,"createdAt":1767475049279,"connection":{"__typename":"ConnectionInfo","host":"example.com","port":443,"isTLS":true,"SNI":null},"session":{"id":"6"},"request":{"__typename":"Request","id":"60882","host":"example.com","port":443,"path":"/","query":"","method":"GET","edited":false,"isTls":true,"sni":null,"length":56,"alteration":"NONE","metadata":{"__typename":"RequestMetadata","id":"60882","color":null},"fileExtension":null,"source":"REPLAY","createdAt":1767475049403,"response":{"__typename":"Response","id":"56907","statusCode":200,"roundtripTime":122,"length":803,"createdAt":1767475049404,"alteration":"NONE","edited":false},"stream":null,"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","edits":[]},"raw":"R0VUIC8gSFRUUC8xLjENCkhvc3Q6IGV4YW1wbGUuY29tDQpDb25uZWN0aW9uOiBjbG9zZQ0KDQo=","settings":{"placeholders":[]}}}}
```



::: warning NOTE
The GraphQL schema is publicly available to allow you to build third-party tools. However, we make no guarantee on the stability of the API as it **will** change with each release.
:::

## Authentication

For the majority of operations, the GraphQL API requires authentication.

```http
Authorization: Bearer <TOKEN>
```

The easiest way to get a working token is from the Caido `client` itself!
If you are authenticated, open the developer tools and paste the following in the console:

```javascript
JSON.parse(localStorage.CAIDO_AUTHENTICATION).accessToken;
```

::: info
This token will last 7 days. If you need a more permanent token, we suggest doing the [OAuth authentication flow](http://localhost:5173/concepts/authentication.md).

We are currently working on libraries to abstract that process. In the meantime, look at the mutation `startAuthenticationFlow` and the subscription `createdAuthenticationToken`.
:::

Once you have your token, you can send a simple request to verify that your credentials are working:

```graphql
query Viewer {
  viewer {
    id
    profile {
      identity {
        email
      }
    }
  }
}
```

## Playground

To simplify your life, we included a playground (based on [GraphiQL](https://github.com/graphql/graphiql)) inside of Caido at `http://<ENDPOINT>:<PORT>/graphql`.

It will even setup the authentication for you if you used the same browser for the Caido `client`. :sunglasses:

<img width="900" alt="Client/server architecture." src="/_images/graphql_playground.png" center/>

## Explorer

The schema of Caido is quite large and so exploring it can be hard. For that purpose, we offer a GraphQL Explorer (based on [GraphQL Voyager](https://github.com/graphql-kit/graphql-voyager)).

<a href="https://graphql-explorer.caido.io" target="_blank">Open Graphql Explorer</a>

<img style="filter: brightness(90%);" alt="Client/server architecture." src="/_images/graphql_explorer.png" center/>
