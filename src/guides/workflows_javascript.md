# Using the JavaScript Node

The `Javascript` node allows you to write and execute JavaScript code within a workflow via the `run` function.

::: warning NOTE
These code blocks will serve as a starting point for your workflow scripts. View the full [Workflow SDK](https://developer.caido.io/reference/sdks/workflow/) to customize your scripts to achieve the intended results.
:::

## Input

The data made available to the node is passed as the `input` parameter and can either be:

- `BytesInput`: An array of bytes represented in decimal notation.
- `HttpInput`: Request and response object pairs for passive/active workflows.

::: tip
View the [Passing Data Between Nodes](/guides/workflows_references.md) guide to learn how to use the output of a workflow node as the input of a connected downstream node.
:::

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

::: warning NOTE
To include DEBUG level messages in the backend logs, ensure to [enable debug mode](/troubleshooting/debugging.md).
:::

<img alt="Console log levels." src="/_images/workflows_console_log_levels.png" center>

## Testing/Debugging JavaScript Node Workflows

To test the execution and debug your JavaScript node scripts before using workflows against targets, provide mock requests and responses in the editors, and **click** on the <code><Icon icon="fas fa-play" /> Run</code> button.

::: tip Mock Examples
::: code-group
```http [Request]
POST /api/user HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 54

{"username":"admin","password":"secret","role":"user"}
```

```http [Response]
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 71

{"status":"success","userId":123,"message":"User created successfully"}
```
:::

::: tip
Monitor the [logs](/guides/logs_viewing.md) when debugging.
:::

<img alt="The test environment." src="/_images/workflows_javascript_testing.png" center>

## Conversion

To output byte data as a string, use the `.asString()` method.

### Convert Bytes to a String

```js
export function run(input, sdk) {
  let parsed = sdk.asString(input);
  sdk.console.log(parsed);

  return parsed;
}
```

## Requests & Responses

The `request` and `response` object types provide a variety of methods for handling proxied traffic.

### Obtaining Request Data

::: code-group
```js [Current Request Elements]
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

```js [Current Request Headers]
export async function run({ request, response }, sdk) {
  if (request) {
    let headers = request.getHeaders();
    sdk.console.log(JSON.stringify(headers, null, 2));

    return JSON.stringify(headers, null, 2);
  }
}
```

```js [Current Full Request]
export async function run({ request, response }, sdk) {
  if (request) {
    sdk.console.log(`${request.getRaw().toBytes()}`);
    sdk.console.log(`${request.getRaw().toText()}`);
  }
}
```

```js [Full Requests from Project by HTTPQL Query]
export async function run({ request, response }, sdk) {
  const page = await sdk.requests
    .query()
    .filter('req.host.eq:"example.com"')
    .first(10) // Or .last()
    .execute();
  
  sdk.console.log(`Found ${page.items.length} matching requests:`);
  
  page.items.forEach(item => {
    if (item.request) {
      sdk.console.log(`${item.request.getRaw().toBytes()}`);
      sdk.console.log(`${item.request.getRaw().toText()}`);
    }
  });
}
```
:::

### Obtaining Response Data

::: code-group
```js [Current Response Elements]
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

```js [Current Response Headers]
export async function run({ request, response }, sdk) {
  if (response) {
    let headers = response.getHeaders();
    sdk.console.log(JSON.stringify(headers, null, 2));

    return JSON.stringify(headers, null, 2);
  }
}
```

```js [Current Full Response]
export async function run({ request, response }, sdk) {
  if (response) {
    sdk.console.log(`${response.getRaw().toBytes()}`);
    sdk.console.log(`${response.getRaw().toText()}`);
  }
}
```

```js [Full Responses from Project by HTTPQL Query]
export async function run({ request, response }, sdk) {
  const page = await sdk.requests
    .query()
    .filter('req.host.eq:"example.com"')
    .first(10) // Or .last()
    .execute();
  
  sdk.console.log(`Found ${page.items.length} matching responses:`);
  
  page.items.forEach(item => {
    if (item.response) {
      sdk.console.log(`${item.response.getRaw().toBytes()}`);
      sdk.console.log(`${item.response.getRaw().toText()}`);
    }
  });
}
```
:::

### Obtaining Request and Response Pair Data

::: code-group
```js [Current Request and Response Elements]
export async function run({ request, response }, sdk) {
  if (request) {
    let requestId = request.getId();
    
    let retrieved = await sdk.requests.get(requestId);
    
    if (retrieved) {
      if (retrieved.request) {
        sdk.console.log(`${retrieved.request.getId()}`);
        sdk.console.log(`${retrieved.request.getCreatedAt()}`);
        sdk.console.log(`${retrieved.request.getUrl()}`);
        sdk.console.log(`${retrieved.request.getTls()}`);
        sdk.console.log(`${retrieved.request.getPort()}`);
        sdk.console.log(`${retrieved.request.getMethod()}`);
        sdk.console.log(`${retrieved.request.getHost()}`);
        sdk.console.log(`${retrieved.request.getPath()}`);
        sdk.console.log(`${retrieved.request.getQuery()}`);
        sdk.console.log(`${retrieved.request.getHeader('User-Agent')}`);
        sdk.console.log(`${retrieved.request.getBody().toText()}`);
      }
      
      if (retrieved.response) {
        sdk.console.log(`${retrieved.response.getId()}`);
        sdk.console.log(`${retrieved.response.getCreatedAt()}`);
        sdk.console.log(`${retrieved.response.getRoundtripTime()}`);
        sdk.console.log(`${retrieved.response.getCode()}`);
        sdk.console.log(`${retrieved.response.getHeader('Content-Type')}`);
        sdk.console.log(`${retrieved.response.getBody().toText()}`);
      }
    }
  }
}
```

```js [Current Full Request and Response]
export async function run({ request, response }, sdk) {
  if (request) {
    let requestId = request.getId();
    
    let retrieved = await sdk.requests.get(requestId);
    
    if (retrieved) {
      if (retrieved.request) {
        sdk.console.log(`${retrieved.request.getRaw().toBytes()}`);
        sdk.console.log(`${retrieved.request.getRaw().toText()}`);
      }
      
      if (retrieved.response) {
        sdk.console.log(`${retrieved.response.getRaw().toBytes()}`);
        sdk.console.log(`${retrieved.response.getRaw().toText()}`);
      }
    }
  }
}
```

```js [Full Requests and Responses from Project by HTTPQL Query]
export async function run({ request, response }, sdk) {
  const page = await sdk.requests
    .query()
    .filter('req.host.eq:"example.com"')
    .first(10) // Or .last()
    .execute();
  
  sdk.console.log(`Found ${page.items.length} matching pairs:`);
  
  page.items.forEach(item => {
    if (item.request) {
      sdk.console.log(`${item.request.getRaw().toBytes()}`);
      sdk.console.log(`${item.request.getRaw().toText()}`);
    }
    
    if (item.response) {
      sdk.console.log(`${item.response.getRaw().toBytes()}`);
      sdk.console.log(`${item.response.getRaw().toText()}`);
    }
  });
}
```
:::

### Filtering Requests

::: code-group
```js [Filter by Request Element]
export async function run({ request, response }, sdk) {
  let requestPath = request.getPath();

  if (requestPath === '/api/user') {
    sdk.console.log(`${response.getRaw().toBytes()}`);
    sdk.console.log(`${response.getRaw().toText()}`);
  }
}
```

```js [Filter by Response Element]
export async function run({ request, response }, sdk) {
  let responseCode = response.getCode();

  if (responseCode === 200) {
    sdk.console.log(`${request.getRaw().toBytes()}`);
    sdk.console.log(`${request.getRaw().toText()}`);
  }
}
```

```js [Check if Request is in Scope]
export async function run({ request, response }, sdk) {
  if (request) {
    if (sdk.requests.inScope(request)) {
      sdk.console.log(`${request.getHost()} is in scope.`);
    } else {
      sdk.console.log(`${request.getHost()} is out of scope.`);
    }
  }
}
```

```js [Match Request Against HTTPQL Query]
export async function run({ request, response }, sdk) {
  if (request) {
    let matchesFilter = sdk.requests.matches(
      'req.method.eq:"POST" AND req.path.cont:"/api/"',
      request,
      response
    );
    
    if (matchesFilter) {
      sdk.console.log(`${request.getRaw().toBytes()}`);
      sdk.console.log(`${request.getRaw().toText()}`);
      
      if (response) {
        sdk.console.log(`${response.getRaw().toBytes()}`);
        sdk.console.log(`${response.getRaw().toText()}`);
      }
    } else {
      sdk.console.log(`Request does not match the filter.`);
    }
  }
}
```
:::

### Creating and Sending a Request

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = new RequestSpec('https://example.com/endpoint?parameter=value');
    // Caido will infer the scheme, host, path, and query from the URL parameter.
    // The default HTTP method is GET and requests without an explicit path will be made to the web root.
    let resend = await sdk.requests.send(spec);
  }
}
```

<img alt="RequestSpec console log." src="/_images/workflows_requestspec_constructor.png" center>

### Modifying and Sending a Request

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

### Adding or Modifying Request Body Data

::: code-group
```js [String]
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    let body = new Body('{"parameter":"value"}');
    // The inclusion of the `updateContentLength` parameter is optional and its default value is `true`.
    let options = {updateContentLength: true};
    
    spec.setBody(body, options);
    let resend = await sdk.requests.send(spec);
  }
}
```

```js [Number]
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    let body = new Body([123, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 34, 58, 34, 118, 97, 108, 117, 101, 34, 125]);
    let options = {updateContentLength: true};
    
    spec.setBody(body, options);
    let resend = await sdk.requests.send(spec);
  }
}
```

```js [Uint8Array]
export async function run({ request, response }, sdk) {
  if (request) {
    let spec = request.toSpec();
    let body = new Body(new Uint8Array([123, 34, 112, 97, 114, 97, 109, 101, 116, 101, 114, 34, 58, 34, 118, 97, 108, 117, 101, 34, 125]));
    let options = {updateContentLength: true};
    spec.setBody(body, options);
    
    let resend = await sdk.requests.send(spec);
  }
}
```
:::

### Parsing JSON from Body Data

::: code-group
```js [Request Body]
export async function run({ request, response }, sdk) {
  if (request) {
    try {
      let body = request.getBody();
      sdk.console.log(`Length: ${body.length}`);
      let jsonData = body.toJson();
      
      sdk.console.log(`Username: ${jsonData.username}`);
      sdk.console.log(`Password: ${jsonData.password}`);
      sdk.console.log(`Role: ${jsonData.role}`);
    } catch (error) {
      sdk.console.error('Body is not valid JSON');
    }
  }
}
```

```js [Response Body]
export async function run({ request, response }, sdk) {
  if (response) {
    try {
      let body = response.getBody();
      sdk.console.log(`Length: ${body.length}`);
      let jsonData = body.toJson();
      
      sdk.console.log(`Status: ${jsonData.status}`);
      sdk.console.log(`User ID: ${jsonData.userId}`);
      sdk.console.log(`Message: ${jsonData.message}`);
    } catch (error) {
      sdk.console.error('Body is not valid JSON');
    }
  }
}
```
:::

<img alt="JSON request body data console log." src="/_images/workflows_json_body_request.png" center>

---

<img alt="JSON response body data console log." src="/_images/workflows_json_body_response.png" center>

### Creating Replay Sessions

::: code-group
```js [Default Collection]
export async function run({ request, response }, sdk) {
  if (request) {
    let session = await sdk.replay.createSession(request);
    sdk.console.log(`Created replay session with ID: ${session.getId()}`);
  }
}
```

```js [First Custom Collection]
export async function run({ request, response }, sdk) {
  if (request) {
    let collections = await sdk.replay.getCollections();
    let session = await sdk.replay.createSession(request, collections[1]);
    
    sdk.console.log(`Created replay session in ${collections[1].getName()}`);
  }
}
```

```js [Custom Collection by Name]
export async function run({ request, response }, sdk) {
  if (request) {
    let collections = await sdk.replay.getCollections();
    
    let targetCollection = collections.find(col => col.getName() === "Queries");
    
    if (targetCollection) {
      let session = await sdk.replay.createSession(request, targetCollection);
      sdk.console.log(`Created replay session in ${targetCollection.getName()} collection.`);
    } else {
      sdk.console.log('Collection not found.');
    }
  }
}
```
:::

## Findings

The `findings` interface provides methods for handling findings.

### Creating Findings

::: code-group
```js [Creating a Finding]
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

```js [Avoiding Duplicates]
export async function run({ request, response }, sdk) {
  if (request) {  
    let finding = {
      title: `Request Monitor Passive Workflow.`,
      description: `Request ${request.getId()} ${request.getMethod()} ${request.getPath()} to ${request.getHost()} was sent.`,
      reporter: "Request Monitor",
      request: request,
      dedupeKey: `monitor-${request.getHost()}`
    };
    
    let created = await sdk.findings.create(finding);
    
    if (created) {
      sdk.console.log('New finding created');
    } else {
      sdk.console.log('Finding already exists (deduplicated)');
    }
  }
}
```
:::

### Obtaining Finding Data

::: code-group
```js [Last Finding for Request by Reporter]
// Active workflow selected via request context menu.
export async function run({ request, response }, sdk) {
  if (request) {
    // Get finding for this request from "Request Monitor" reporter
    let finding = await sdk.findings.get({
      reporter: "Request Monitor",
      request: request
    });
    
    if (finding) {
      sdk.console.log(`Finding ID: ${finding.getId()}`);
      sdk.console.log(`Title: ${finding.getTitle()}`);
      sdk.console.log(`Description: ${finding.getDescription()}`);
      sdk.console.log(`Reporter: ${finding.getReporter()}`);
      sdk.console.log(`Request ID: ${finding.getRequestId()}`);
      sdk.console.log(`Dedupe Key: ${finding.getDedupeKey()}`);
    } else {
      sdk.console.log('No finding found for this request from Request Monitor');
    }
  }
}
```

```js [Most Recent Finding]
export async function run({ request, response }, sdk) {
  const result = await sdk.graphql.execute(`
    query GetMostRecentFinding {
      findings(first: 1, order: { by: CREATED_AT, ordering: DESC }) {
        edges {
          node {
            id
            title
            description
            reporter
            createdAt
          }
        }
      }
    }
  `);
  
  if (result.data?.findings?.edges?.length > 0) {
    const recentFinding = result.data.findings.edges[0].node;
    
    sdk.console.log(`Finding ID: ${recentFinding.id}`);
    sdk.console.log(`Title: ${recentFinding.title}`);
    sdk.console.log(`Description: ${recentFinding.description}`);
    sdk.console.log(`Reporter: ${recentFinding.reporter}`);
    sdk.console.log(`Created At: ${recentFinding.createdAt}`);
  } else {
    sdk.console.log('No findings found');
  }
}
```
:::

<img alt="Finding data for specific request console log." src="/_images/workflows_reporter_finding.png" center>

## Projects

The `projects` interface returns data about your Caido projects.

### Obtaining Project Data

```js
export async function run({ request, response }, sdk) {
  let currentProject = await sdk.projects.getCurrent();
  
  sdk.console.log(`Project ID: ${currentProject.getId()}`);
  sdk.console.log(`Version: ${currentProject.getVersion()}`);
  sdk.console.log(`Current Project: ${currentProject.getName()}`);
  sdk.console.log(`Data Storage Location: ${currentProject.getPath()}`);
  sdk.console.log(`Status: ${currentProject.getStatus()}`);
}
```

## Environments

The `env` interface provides methods for handling environment variables across the environments in your project.

### Set an Environment Variable

```js [Set Environment Variable]
export async function run({ request, response }, sdk) {
  if (response) {
    let body = response.getBody();
    let jsonData = body.toJson();
    
    // Set userId in response body as environment variable.
    // By default, it will be set in the Global environment.
    // Use env: to specify a custom environment.
    await sdk.env.setVar({
      name: 'USER_ID',
      value: jsonData.userId.toString(),
      secret: false,
      global: true
    });
    
    sdk.console.log(`User ID ${jsonData.userId} saved to Global environment.`);
  }
}
```

### Obtain Environment Variable Data

```js [Get All Variables]
export async function run({ request, response }, sdk) {
  let variables = sdk.env.getVars();
  
  sdk.console.log(`Found ${variables.length} environment variables:`);
  
  variables.forEach(variable => {
    sdk.console.log(`Name: ${variable.name}`);
    sdk.console.log(`Value: ${variable.value}`);
    sdk.console.log(`Is Secret: ${variable.isSecret}`);
    sdk.console.log('---');
  });
}
```

### Use an Environment Variable

```js
export async function run({ request, response }, sdk) {
  if (request) {
    let apiKey = sdk.env.getVar('API_KEY');
  
    if (apiKey) {
      let spec = request.toSpec();
      spec.setHeader('Authorization', `Bearer ${apiKey}`);
    
      let result = await sdk.requests.send(spec);
      
      if (result && result.request) {
        sdk.console.log(`${result.request.getRaw().toText()}`);
      }
      if (result && result.response) {
        sdk.console.log(`${result.response.getRaw().toText()}`);
      }
    } else {
      sdk.console.log('API_KEY not found.');
    }
  }
}
```

## Scopes

The `scope` interface provides methods for handling scope presets in your project.

### Obtaining Scope Preset Data

::: code-group
```js [All Scope Names]
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

### Updating a Scope Preset

::: code-group
```js [Adding a Domain to the Denylist]
export async function run({ request, response }, sdk) {
  if (request) {
    let host = request.getHost();
    
    // Check if host contains "cdn".
    if (host.includes('cdn')) {
      let scopes = await sdk.scope.getAll();
      
      // Find the scope preset named "Target".
      let targetScope = scopes.find(scope => scope.name === "Target");
      
      if (targetScope) {
        if (!targetScope.denylist.includes(host)) {
          let updatedDenylist = [...targetScope.denylist, host];
          
          const result = await sdk.graphql.execute(`
            mutation UpdateScope($id: ID!, $input: UpdateScopeInput!) {
              updateScope(id: $id, input: $input) {
                scope {
                  id
                  name
                  denylist
                }
              }
            }
          `, {
            id: targetScope.id,
            input: {
              name: targetScope.name,
              allowlist: targetScope.allowlist,
              denylist: updatedDenylist
            }
          });
          
          if (result.data?.updateScope?.scope) {
            sdk.console.log(`Added ${host} to Target scope denylist`);
          } else if (result.errors) {
            sdk.console.error(`Error updating scope: ${JSON.stringify(result.errors)}`);
          }
        } else {
          sdk.console.log(`${host} already in denylist`);
        }
      } else {
        sdk.console.error('Target scope not found');
      }
    }
  }
}
```
:::

<img alt="Update scope preset denylist console log." src="/_images/workflows_update_denylist.png" center>
