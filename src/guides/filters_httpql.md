---
description: "A guide on writing HTTPQL queries in Caido to filter rows in the traffic tables."
---

# Writing HTTPQL Queries

With HTTPQL, you can include or exclude traffic proxied through Caido from traffic tables and operations.

HTTPQL query statements filter either requests (`req`), responses (`resp`), or specific table rows (`id`). The filtering is further refined by specifying an available field, operator, and comparison value, using dot notation.

``` sql
<namespace>.<field>.<operator>:"<value>"
```

::: warning NOTE
These statements will serve as a starting point for your HTTPL queries. View the full [HTTPQL](/reference/httpql.md) reference to customize your query statements to achieve the intended results.
:::

<LabContainer message="Learn how to use this feature in a hands-on, simulated training environment:" :labs="[{name: 'Too Many Request Lab', url: 'https://labs.cai.do/tooManyRequests.php'}]" />

## Filtering Requests by Host

To filter requests made to `example.com`, use the `host` field.

::: code-group
``` sql [Including]
req.host.eq:"www.example.com"
req.host.regex:"^example.com$"
```

``` sql [Excluding]
req.host.ne:"www.example.com"
req.host.nregex:"^example.com$"
```

``` sql [Including All Subdomains]
req.host.cont:".example.com"
req.host.like:"%.example.com"
```

``` sql [Excluding All Subdomains]
req.host.ncont:".example.com"
req.host.nlike:"%.example.com"
```
:::

## Filtering Requests by Time

To filter requests by date/time, use the `created_at` field.

::: code-group
``` sql [Request Before Dec 5th 2025]
req.created_at.lt:"2025-12-05"
```

``` sql [Request After Dec 5th 2025]
req.created_at.gt:"2025-12-05"
```

``` sql [Requests Before Dec 5th 2025 8:30AM]
req.created_at.lt:"2025-12-05T08:30:00+00:00"
```

``` sql [Requests After Dec 5th 2025 After 8:30AM]
req.created_at.gt:"2025-12-05T08:30:00+00:00"
```
:::

## Filtering Responses by Status Code

To filter responses by status code, use the `code` field.

::: code-group
``` sql [Including 200]
resp.code.eq:200
```

``` sql [Excluding 200]
resp.code.ne:200
```
:::

To specify a range of status codes, use the `gt`, `lt`, `gte`, or `lte` operators.

## Filter Requests by ID

To filter traffic by the numerical table row value, use the `id` field.

::: code-group
``` sql [Include a Specific Request]
row.id.eq:50
```

``` sql [Exclude a Specific Request]
row.id.ne:50
```

``` sql [Subsequent Requests]
row.id.gt:50
```

``` sql [Prior Requests]
row.id.lt:50
```
:::

To include the specific request ID, use the `gte` or `lte` operators.

## Filter by Request/Response Content

To match against a value in a full request or response, use the `raw` field.

::: code-group
``` sql [Include Requests with JSON Body Data]
req.raw.cont:"application/json"
```

``` sql [Include Responses with isAdmin: true]
resp.raw.cont:"\"isAdmin\":true"
```
:::
