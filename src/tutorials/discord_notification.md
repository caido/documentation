---
description: "Learn how to create an active workflow that sends notifications to Discord using webhooks and Caido's HTTP module."
---

# Send a Notification to Discord Workflow

In this tutorial, we create an active workflow that will send a notification to Discord.

We will use Caido's [HTTP Module](https://developer.caido.io/reference/modules/caido/http.html) which provides an implementation of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). With this module, you can create and send asynchronous HTTP requests and handle their responses.

::: warning NOTE
The request and response objects of this module differ from those used in the [Backend SDK](https://developer.caido.io/reference/sdks/backend/) and [Workflow SDK](https://developer.caido.io/reference/sdks/workflow/). Due to this, their properties and methods differ as well. Additionally, they are not routed through the proxy and must adhere to the HTTP specification in order to be interpreted correctly.
:::

## Creating an Active Workflow

To begin, navigate to the Workflows interface, select the `Active` tab, and **click** on the `+ New workflow` button.

<img alt="Creating a new active workflow." src="/_images/new_active_workflow.png" center/>

Next, rename the workflow by typing in the `Name` input field. You can also provide an optional description of the workflow's functionality by typing in the `Description` input field.

## Nodes and Connections

Too add nodes to the workflow, **click** on `+ Add Node` button and then the `+ Add` button of a specific node.

For this workflow, the overall node layout will be:

<img alt="The nodes used and their connections." src="/_images/discord_notification_nodes.png" center>

- The `Active Start` node outputs `$active_start.request` and `$active_start.response` objects which represent proxied requests the workflow was initiated on and their corresponding responses.
- The request and response objects will be passed to the `Javascript` node.
- Once the request and response objects have been processed by the script in the `Javascript` node, the workflow will end.

## Creating and Sending a Request

1. **Click** on the `Javascript` node to access its editor.

2. Then, **click** within the coding environment, select all of the existing code, and replace it with the following script:

::: warning NOTE
Replace `<webhook-url>` with the URL of your own [Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).
:::

```js
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";

export async function run(input, sdk) {
  // Discord webhook data.
  const message = {
    username: "Caido Bot",
    avatar_url: "https://caido.io/images/logo.color.webp",
    content: "Message from Caido Workflow",
    embeds: [{
      title: "Webhook Fetch Request",
      description: "Hello World!",
      color: 14329120,
      fields: [
        {
          name: "Field A",
          value: "Value A",
          inline: true
        },
        {
          name: "Field B",
          value: "Value B",
          inline: true
        }
      ],
      footer: {
        text: "Sent via Caido"
      },
      timestamp: new Date().toISOString()
    }]
  };

  // Create a new request to Discord webhook.
  const fetchRequest = new FetchRequest("<webhook-url>", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });

  try {
    const response = await fetch(fetchRequest);
    
    // Create response data object.
    const responseData = {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    };

    // Log the response data with proper formatting.
    sdk.console.log("Response data:", JSON.stringify(responseData, null, 2));
    
    // For Discord webhooks, 204 means success.
    if (response.status === 204) {
      return "Webhook sent successfully";
    }

    // If not 204, get the error details from response.
    const errorBody = await response.text();
    return `Webhook failed: ${errorBody}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
```

3. Next, ensure the `$active_start.request` and `$active_start.response` objects are [referenced as input data](/guides/workflows_references.md).

<img alt="Referencing the request object." src="/_images/workflows_active_reference_request_response.png" center>

Once these steps are completed, close the editor window and **click** on the `Save` button to update and save the configuration.

## Script Breakdown

To be able to send a fetch request, the `Request` class and the `fetch()` function are imported from the `caido:http` module.

```js
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";
```

Next, an asynchronous function is defined that takes the `input` and the `sdk` interface object as parameters.

``` js
export async function run(input, sdk) {
```

::: tip
[View this guide for a list of Discord message options.](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html)
:::

The body data of the fetch request is defined as an object and stored in the `message` variable.

```js
  // Discord webhook data.
  const message = {
    username: "Caido Bot",
    avatar_url: "https://caido.io/images/logo.color.webp",
    content: "Message from Caido Workflow",
    embeds: [{
      title: "Webhook Fetch Request",
      description: "Hello World!",
      color: 14329120,
      fields: [
        {
          name: "Field A",
          value: "Value A",
          inline: true
        },
        {
          name: "Field B",
          value: "Value B",
          inline: true
        }
      ],
      footer: {
        text: "Sent via Caido"
      },
      timestamp: new Date().toISOString()
    }]
  };
```

Then, using `new FetchRequest()` the fetch request is defined, using a Discord Webhook URL as the `input` parameter of the constructor. The HTTP `method`, `headers`, and `body` data are specified in the [RequestOpts](https://developer.caido.io/reference/modules/caido/http.html#requestopts) object parameter.

```js
  // Create a new request to Discord webhook.
  const fetchRequest = new FetchRequest("<webhook-url>", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });
```

Then, `fetch(fetchRequest)` is used to send the constructed request.

Since we must wait for the request to be sent and response to be returned, the `await` directive is used.

The response is stored in the `response` variable.

```js
  try {
    const response = await fetch(fetchRequest);
```

By accessing the `response` object properties, we can print the data to the backend logs.

``` js
    // Create response data object.
    const responseData = {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    };

    // Log the response data with proper formatting.
    sdk.console.log("Response data:", JSON.stringify(responseData, null, 2));
    
    // For Discord webhooks, 204 means success.
    if (response.status === 204) {
      return "Webhook sent successfully";
    }

    // If not 204, get the error details from response.
    const errorBody = await response.text();
    return `Webhook failed: ${errorBody}`;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}
```

## Testing the Workflow

To test the workflow:

1. **Right-click** on a request to open the context menu.

2. Hover over the `Run workflow` option, and select the workflow.

<img alt="Running the active workflow." src="/_images/discord_notification_test.png" center/>

## The Result

You will receive a message in your Discord channel.

<img alt="The Discord message." src="/_images/discord_notification_result.png" center/>

Within the logs, the message will resemble:

```
2025-04-09T00:45:25.697833Z  INFO main service|workflow: Executing workflow (g:58) as task
2025-04-09T00:45:25.697858Z  INFO main service|task: Running task
2025-04-09T00:45:25.697862Z  INFO main service|workflow: Workflow (g:58) task assigned ID: 26
2025-04-09T00:45:26.134839Z  INFO executor:0|arbiter:7 js|sdk: Response data:, {
  "status": 204,
  "statusText": "No Content",
  "headers": {
    "date": "Wed, 09 Apr 2025 00:45:26 GMT",
    "content-type": "text/html; charset=utf-8",
    "connection": "keep-alive",
    "set-cookie": "_cfuvid=.E8ALL.xBWASGB1xARc0HgFKDv10bpItHt35AsAKJDE-1744159526028-0.0.1.1-604800000; path=/; domain=.discord.com; HttpOnly; Secure; SameSite=None",
    "strict-transport-security": "max-age=31536000; includeSubDomains; preload",
    "x-ratelimit-bucket": "3d2712a9e4fe17cc9d3fed4a8e672e5f",
    "x-ratelimit-limit": "5",
    "x-ratelimit-remaining": "4",
    "x-ratelimit-reset": "1744159527",
    "x-ratelimit-reset-after": "1",
    "via": "1.1 google",
    "alt-svc": "h3=\":443\"; ma=86400",
    "cf-cache-status": "DYNAMIC",
    "report-to": "{\"endpoints\":[{\"url\":\"https:\\/\\/a.nel.cloudflare.com\\/report\\/v4?s=ZIGoTFpSBw9RLoXTZmN0CKYNnESTcIYHDgSl42ygSs1E9uOAgvjN%2FMmks8w9SLiHDAzyu5n8WDyMRHcPiyYa0LkUcpMyXEaoPd0c7HE9rHkCh24fR55k2qRmgTJL\"}],\"group\":\"cf-nel\",\"max_age\":604800}",
    "nel": "{\"success_fraction\":0,\"report_to\":\"cf-nel\",\"max_age\":604800}",
    "x-content-type-options": "nosniff",
    "reporting-endpoints": "csp-sentry=\"https://o64374.ingest.sentry.io/api/5441894/security/?sentry_key=8fbbce30bf5244ec9429546beef21870&sentry_environment=stable\"",
    "content-security-policy": "frame-ancestors 'none'; default-src https://o64374.ingest.sentry.io; report-to csp-sentry; report-uri https://o64374.ingest.sentry.io/api/5441894/security/?sentry_key=8fbbce30bf5244ec9429546beef21870&sentry_environment=stable",
    "server": "cloudflare",
    "cf-ray": "92d5fb4c58d5f7ab-LAX"
  }
}
2025-04-09T00:45:26.135041Z  INFO executor:0|arbiter:7 service|task: Task (26) done
2025-04-09T00:45:26.135079Z  INFO main service|task: Finishing task 26

```
