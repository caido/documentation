# Using the JavaScript Node

The `Javascript` node allows you to write and execute JavaScript code within a workflow via the `run` function.

## Input

The data made available to the node is passed as the `input` parameter and can either be:

- `BytesInput`: The value to be converted for convert workflows.
- `HttpInput`: Request and response object pairs for passive/active workflows.

## SDK

The [Workflow SDK](https://developer.caido.io/reference/sdks/workflow/) is made available to the node via the `sdk` parameter, which provides a variety of methods to convert data, interact with proxied traffic, and carry out actions within Caido.

::: code-group
```js [Passive/Active Workflows]
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */
export async function run({ request, response }, sdk) {}
```

```js [Convert Workflows]
/**
 * @param {BytesInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data>}
 */
export function run(input, sdk) {}

```
:::

## Logging to the Console

To log messages to the backend logs, access the various level methods via the `sdk.console` object.

```js
export async function run({ request, response }, sdk) {
  sdk.console.debug('Debug message.');
  sdk.console.error('Error message.');
  sdk.console.log('Log message.');
  sdk.console.warn('Warning message.')
}
```

<img alt="Console log levels." src="/_images/workflows_console_log_levels.png" center>

## Convert Bytes to a String

To output byte data as a string, use the `.asString()` method.

```js
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);

  return parsed;
}
```

## Obtaining Request/Response Data

To obtain request/response data, use the various property methods.

::: code-group
```js [Request Elements]
export async function run({ request, response }, sdk) {
  if (request) {
    sdk.console.log(`${request.getId()}`);
    sdk.console.log(`${request.getCreatedAt()}`);
    sdk.console.log(`${request.getUrl()}`);
    sdk.console.log(`${request.getTls()}`);
    sdk.console.log(`${request.getPort()}`);
    sdk.console.log(`${request.getMethod()}`);
    sdk.console.log(`${request.getHost()}`);
    sdk.console.log(`${request.getPath()}`);
    sdk.console.log(`${request.getQuery()}`);
    sdk.console.log(`${request.getHeader('User-Agent')}`);
    sdk.console.log(`${request.getBody().toText()}`);
  }
}
```

```js [Request Headers]
export async function run({ request, response }, sdk) {
  if (request) {
    let headers = request.getHeaders();
    sdk.console.log(JSON.stringify(headers, null, 2));

    return JSON.stringify(headers, null, 2);
  }
}
```

```js [Full Request]
export async function run({ request, response }, sdk) {
  if (request) {
    sdk.console.log(`${request.getRaw().toBytes()}`);
    sdk.console.log(`${request.getRaw().toText()}`);
  }
}
```

```js [Response Elements]
export async function run({ request, response }, sdk) {
  if (response) {
    sdk.console.log(`${response.getId()}`);
    sdk.console.log(`${response.getCreatedAt()}`);
    sdk.console.log(`${response.getRoundtripTime()}`);
    sdk.console.log(`${response.getCode()}`);
    sdk.console.log(`${response.getHeader('Content-Type')}`);
    sdk.console.log(`${response.getBody().toText()}`);
  }
}
```

```js [Response Headers]
export async function run({ request, response }, sdk) {
  if (response) {
    let headers = response.getHeaders();
    sdk.console.log(JSON.stringify(headers, null, 2));

    return JSON.stringify(headers, null, 2);
  }
}
```

```js [Full Response]
export async function run({ request, response }, sdk) {
  if (response) {
    sdk.console.log(`${response.getRaw().toBytes()}`);
    sdk.console.log(`${response.getRaw().toText()}`);
  }
}
:::

## Creating and Sending a Request

To create a new request object, use the `new RequestSpec()` constructor.

::: info
Caido will infer the scheme, host, path, and query from the URL parameter. The default HTTP method is GET and requests without an explicit path will be made to the web root.
:::

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = new RequestSpec('https://example.com/endpoint?parameter=value');

    let resend = await sdk.requests.send(spec);
  }
}
```

<img alt="RequestSpec console log." src="/_images/workflows_requestspec_constructor.png" center>

## Modifying and Sending a Request

To modify a request object, use the `.toSpec()` method to make a mutable copy and then use the various property methods.

::: code-group
```js [Request Elements]
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    let method = spec.setMethod('GET');
    let path = spec.setPath('/endpoint');
    let query = spec.setQuery('parameter=value');
    let port = spec.setPort(80);
    let host = spec.setHost('www.example.com');
    let tls = spec.setTls(false);
    let header = spec.setHeader('Custom-Header', '123ABC321XYZ');

    let resend = await sdk.requests.send(spec);
  }
}
```

```js [Removing a Header]
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    spec.removeHeader('If-None-Match');

    let resend = await sdk.requests.send(spec);
  }
}
```
:::

## Adding or Modifying Request Body Data

To add or modify request body data, use the `new Body()` constructor.

::: info
The inclusion of the `updateContentLength` parameter is optional and its default value is `true`.
:::

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    let body = new Body('{"parameter":"value"}');
    let options = {updateContentLength: true};
    spec.setBody(body, options);
    
    let resend = await sdk.requests.send(spec);
  }
}
```

## Creating Findings

To create a finding, use the `.create()` method.

```js
export async function run({ request, response }, sdk) {
  if (request) {  
    let finding = {
      title: `Request Monitor Passive Workflow.`,
      description: `Request ${request.getId()} ${request.getMethod()} ${request.getPath()} to ${request.getHost()} was sent.`,
      reporter: "Request Monitor",
      request: request
    };
    await sdk.findings.create(finding);
  }
}
```

## Creating Replay Sessions

To create replay sessions, use the `.createSession()` method.

::: code-group
```js [Default Collection]
export async function run({ request, response }, sdk) {
  if (request) {
    let session = await sdk.replay.createSession(request);
    sdk.console.log(`Created replay session with ID: ${session.getId()}`);
  }
}
```

```js [Specific Collection]
export async function run({ request, response }, sdk) {
  if (request) {
    let collections = await sdk.replay.getCollections();
    let session = await sdk.replay.createSession(request, collections[1]);
    
    sdk.console.log(`Created replay session in ${collections[1].getName()}`);
  }
}
```
:::

## Obtaining Project Data

To obtain the current project information, use the `sdk.projects.getCurrent()` method.

```js
export async function run({ request, response }, sdk) {
  let currentProject = await sdk.projects.getCurrent();
  
  sdk.console.log(`Current Project: ${currentProject.getName()}`);
  sdk.console.log(`Project ID: ${currentProject.getId()}`);
  sdk.console.log(`Status: ${currentProject.getStatus()}`);
}
```

## Obtaining Scope Preset Data

To obtain scope preset information, use the `sdk.scope.getAll()` method.

::: code-group
```js [All Scopes]
export async function run({ request, response }, sdk) {
  let scopes = await sdk.scope.getAll();
  
  scopes.forEach(scope => {
    sdk.console.log(`Scope: ${scope.name}`);
  });
}
```

```js [Scope Details]
export async function run({ request, response }, sdk) {
  let scopes = await sdk.scope.getAll();
  
  scopes.forEach(scope => {
    sdk.console.log(`Scope Name: ${scope.name}`);
    sdk.console.log(`ID: ${scope.id}`);
    sdk.console.log(`Allowlist: ${JSON.stringify(scope.allowlist)}`);
    sdk.console.log(`Denylist: ${JSON.stringify(scope.denylist)}`);
    sdk.console.log('---');
  });
}
```
:::
