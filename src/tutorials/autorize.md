---
description: "Learn how to configure and use the Autorize plugin for automated authorization and access control vulnerability detection, including passive and active scanning with template-based checks."
---

# Autorize

[Autorize](https://github.com/caido-community/autorize) is Caido's official authorization vulnerability testing plugin.

::: info
Autorize is available for [installation](/guides/plugins_installing.md) in the `Official` tab of the Plugin interface.
:::

<img alt="The Autorize plugin listed in the Official tab." src="/_images/autorize_install.png" center />

Autorize creates templates for proxied requests that are modified to simulate requests sent by users with three different permission levels. The three requests sent for each template are the:

1. `Baseline Request`: This request is the original, high-privilege user request.
2. `Mutated Request`: This request is modified to replace the baseline request with the credentials of a lower-privilege user.
3. `No-Auth Request`: This request is stripped of all authentication headers.

By comparing the corresponding responses of these requests to each other, Autorize is able to determine if low-privilege or unauthenticated users are able to access the same resources or functionality available to the high-privilege user.

By default, the result of a template scan will be assigned one of three access states that will indicate whether the request succeeded or failed.

<img alt="Autorize access states." src="/_images/autorize_access_states.png" center />

1. `ALLOW`: The server accepted the request and returned a successful response. This might indicate an authorization vulnerability if a low-privilege user was able to access protected resources.
2. `DENY`: The server denied the request, usually with status codes like 401, 403, or 404. This means access controls are working as expected.
3. `UNCERTAIN`: Autorize could not determine if the request was allowed or denied. This happens when the response is different from the baseline but does not show clear denial indicators. You should manually review these cases.

## Configuration

Within the `Configuration` tab of the Autorize plugin interface, the template settings are divided across several tabs.

<img alt="The Autorize configuration options." src="/_images/autorize_configuration.png" center />

### Mutations

The modifications to each request are referred to as "mutations" and are applied to configuration profiles that represent the three requests. To configure mutations on a request, select a profile from the drop-down menu of the `Mutations` tab.

<img alt="The Autorize profile options." src="/_images/autorize_profiles.png" center />

- `Mutated`: The low-privilege user request.
- `No Auth`: The unauthenticated user request.
- `Baseline`: The original high-privilege user request.

::: warning NOTE
Baseline mutations will apply to all requests.
:::

Once a profile is selected, select a mutation from the Add Mutation drop-down menu, type in the name and value of the header or cookie in the input fields, and **click** on the `+` button to update and save the configuration.

<img alt="The Autorize mutation options." src="/_images/autorize_add_mutation.png" center />

::: info
By default, Autorize automatically removes common authentication headers like `Authorization` and `Cookie` from the `No Auth` profile. However, mutations can still be configured to account for application-specific headers and cookies.
:::

- `Header: Set`: Replace a header in the request. If header does not exist, it will be added.
- `Header: Add`: Add a header to the request.
- `Header: Remove`: Remove a header from the request.
- `Cookie: Set`: Replace a cookie in the request. If cookie does not exist, it will be added.
- `Cookie: Add`: Add a cookie to the request.
- `Cookie: Remove`: Remove a cookie from the request.
- `Match and Replace`: Match a pattern in the request and replace it with a value.

::: tip TIPS
- The `Match and Replace` mutation supports regex and environment variables using `{{ VAR_NAME }}` syntax.
- To quickly add a `Header: Set` mutation to the `Mutated` profile, **click**, **drag**, and **hold** over a header name and value within a low-privilege user request pane. Then, **right-click** on the highlighted selection to open the context menu, hover your mouse cursor over `Plugins` and `Autorize`, and select <code><Icon icon="fas fa-key" /> Send Headers to Autorize</code>.

---

<img alt="The Send Headers to Autorize context menu option." src="/_images/autorize_send_headers.png" center no-shadow/>
:::

### Filtering

The `Filtering` tab options apply [scope presets](/guides/scopes_defining.md), [filter presets](/guides/filters_defining.md), or [HTTPQL](/reference/httpql.md) query statements to passive scans.

::: info
By default, Autorize automatically excludes requests for common static files (images, CSS, JS) and analytic endpoints.
:::

### Detection

By default, Autorize uses smart logic to determine if a request was authorized or denied. However, for unique response patterns, custom HTTPQL query statements can be defined in the `Authorized Response Detection` and `Unauthorized Response Detection` input fields within the `Detection` tab.

::: warning NOTE
- If both queries match, the unauthorized query takes precedence.
- If neither query matches, the default detection logic will be used.
- This is optional. If not configured, the default detection logic will be used.
:::

### Queue

The `Queue` tab provides options to specify concurrency, rate limit, and timeout settings for the request templates generated by the plugin.

### General

The `General` tab provides the option to include/exclude the `No Auth` request from template tests and an option to enable/disable detailed logging.

### UI

The `UI` tab provides options to customize the results table within the `Dashboard` tab.

<img alt="The Autorize UI options." src="/_images/autorize_ui.png" center />

## Passive Scanning

To enable passive scanning, **click** on the `Enable Passive Scanning` radio button in the top-right corner of the plugin interface.

## Active Scanning

To execute a scan manually against a specific request **right-click** within a request pane or on a traffic table row, hover your mouse cursor over `Plugins` and `Autorize`, and select <code><Icon icon="fas fa-key" /> Send Request to Autorize</code>.

## Dashboard

To view the results of template scans, **click** on the `Dashboard` tab of the Autorize plugin interface.

<img alt="The Autorize results table." src="/_images/autorize_results.png" center />

To switch between HTTP request and response data for each profile, **click** on their associated buttons.

<img alt="Selecting the request and response for each profile." src="/_images/autorize_profile_views.png" center />
