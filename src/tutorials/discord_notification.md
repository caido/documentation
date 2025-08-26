# Sending a Notification to Discord

In this tutorial, we create an active workflow to send a notification to Discord. This method can also be used with other types of workflows.

We will use Caido's [HTTP Module](https://developer.caido.io/reference/modules/caido/http.html) which provides an implementation of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). With this module, you can create and send asynchronous HTTP requests and handle their responses.

::: warning NOTE
The request and response objects of this module differ from those used in the [Backend SDK](https://developer.caido.io/reference/sdks/backend/) and [Workflow SDK](https://developer.caido.io/reference/sdks/workflow/). Due to this, their properties and methods differ as well. Additionally, they are not routed through the proxy and must adhere to the HTTP specification in order to be interpreted correctly.
:::

## Creating an Active Workflow

To begin, navigate to the Workflows interface, select the `Active` tab, and click the `+ New workflow` button.

<img alt="Creating a new active workflow." src="/_images/new_active_workflow.png" center/>

Next, **click**, **hold** and **drag** a `Javascript` node into the workflow editor field and make [Connections](/concepts/workflows_nodes.md#connecting-nodes) to the `Active Start` and `Active End` nodes. Then click on the `Javascript` node to access its detailed view.

<img alt="Building the active workflow." src="/_images/discord_workflow.png" center/>

## Creating and Sending a Request

Now, click within the coding environment of the `JavaScript` node, select all of the existing code, and delete it.

To send a request, you will first need to import the `Request` class and the `fetch()` function from the `caido:http` module.

```js
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";
```

Next, define an asynchronous function and the parameters of your Discord message.

```js
export async function run(input, sdk) {
  // Discord webhook data.
  const webhookData = {
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
        // You could also add elements from the request like
        // {
        //   name: "Host",
        //   value: input.request.getHost(),
        //   inline: true
        // },
      ],
      footer: {
        text: "Sent via Caido"
      },
      timestamp: new Date().toISOString()
    }]
  };
```

::: tip
[Visit this guide for a list of Discord message parameter options.](https://birdie0.github.io/discord-webhooks-guide/discord_webhook.html)
:::

Then, define the request object, using your Discord Webhook URL as the input parameter of the constructor and specify the HTTP method and Content-Type header in the [RequestOpts](https://developer.caido.io/reference/modules/caido/http.html#requestopts) parameter object.

::: tip
[Learn how to create a Discord Webhook.](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks)
:::

```js
// Create a new request to Discord webhook.
const fetchRequest = new FetchRequest("YOUR-DISCORD-WEBHOOK-URL", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(webhookData),
});
```

We must await for the request to be sent and processed before we are able to obtain data from the response. By accessing the response properties, we can print the data to the backend logs.

```js
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

Finally, click the `Save` button in the bottom right corner of the workflow editor.

::: tip
To view the entire script, expand the following:

<details>
<summary>Full Script</summary>

```js
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";

export async function run(input, sdk) {
  // Discord webhook data.
  const webhookData = {
    username: "Caido Bot",
    avatar_url: "https://caido.io/images/logo.color.webp",
    content: "Message from Caido Workflow",
    embeds: [
      {
        title: "Webhook Fetch Request",
        description: "Hello World!",
        color: 14329120,
        fields: [
          {
            name: "Field A",
            value: "Value A",
            inline: true,
          },
          {
            name: "Field B",
            value: "Value B",
            inline: true,
          },
        ],
        footer: {
          text: "Sent via Caido",
        },
        timestamp: new Date().toISOString(),
      },
    ],
  };

  // Create a new request to Discord webhook.
  const fetchRequest = new FetchRequest("YOUR-DISCORD-WEBHOOK-URL", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(webhookData),
  });

  try {
    const response = await fetch(fetchRequest);

    // Create response data object.
    const responseData = {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries()),
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

</details>
:::

## Using the Active Workflow

To use your newly created workflow, right click on a request to open up the context menu. Hover over the `Run workflow` option and select the given name.

<img alt="Running the active workflow." src="/_images/trigger_discord_workflow.png" center/>

Soon after, you will receive a message in your Discord channel.

<img alt="Discord message." src="/_images/caido_discord_message.png" center/>

::: info
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

:::
