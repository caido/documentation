# GraphQL

Caido mainly uses [GraphQL](https://graphql.org/) for the `client/server` communication.
We make this API available publicly on purpose to allow you to build third-party tools.

::: warning
We make no guarantee on the stability of the API and it **will** change with each release.
:::

<img width="900" alt="Client/server architecture." src="/_images/client_server.png" no-shadow center/>

## Authentication

Except for a few exceptions, the GraphQL API requires authentication via a `Bearer` access token.

```http
Authorization: Bearer <YOUR ACCESS TOKEN>
```

The easiest way to get a working token is from the Caido `client` itself!
If you are authenticated, open the developer tools and paste the following in the console:

```javascript
JSON.parse(localStorage.CAIDO_AUTHENTICATION).accessToken;
```

::: info
This token will last 7 days. If you need a more permanent token, we suggest doing the [OAuth authentication flow](http://localhost:5173/concepts/internals/authentication.html).

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
