---
description: "Map Burp Suite Pro extensions, BApps, Bambdas, and custom scan checks to Caido plugins and workflows."
---

# Extensions

Burp Suite Pro extensions, extensibility patterns, and popular BApps mapped to Caido.

::: info Workflows and custom checks
The functionality of many Burp Suite Bambdas, custom scan checks, and extensions can be implemented using [Workflows](/app/concepts/workflows_intro.md) in Caido or by [defining checks for the Scanner plugin](https://github.com/caido-community/scanner#check-definition).
:::

## Extensions (BApp Store)

Burp's extension marketplace for installing third-party and official BApps.

**Caido equivalent:** [Plugins](/app/quickstart/plugins.md). Browse community plugins from the in-app store or install manually from GitHub.

## Bambdas

Lightweight JavaScript snippets that run inside Burp for filtering, custom actions, and UI automation.

**Caido equivalent:** [Workflows](/app/concepts/workflows_intro.md) for passive and active request processing. For UI-level automation, use plugin commands and [custom pages](https://developer.caido.io/guides/page.html).

## Custom scan checks

User-defined passive and active scan rules written in BCheck format or via the custom scan checks API.

**Caido equivalent:** [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) and [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows).

## Param Miner

Discovers hidden parameters, headers, and cache-busting inputs.

**Caido equivalent:** [ParamFinder](https://github.com/bebiksior/ParamFinder).

## JWT Editor

Decodes, edits, and resigns JSON Web Tokens inside Burp.

**Caido equivalent:** [JWT Analyzer](https://github.com/amrelsagaei/JWT-Analyzer).

## JS Miner

Mines JavaScript files for endpoints, secrets, and interesting strings.

**Caido equivalent:** [Data Grep](https://github.com/caido-community/data-grep).

## Active Scan++

Additional active scan checks beyond Burp Scanner's defaults.

**Caido equivalent:** [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition).

## Content Type Converter

Converts request and response bodies between content types.

**Caido equivalent:** [Convert Tools](https://github.com/caido-community/convert-tools).

## Logger++

Enhanced logging with custom fields and filtering beyond Burp Logger.

**Caido equivalent:** [Search](/app/guides/search_filtering.md) for querying traffic. For advanced logging, [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum).

## Hackvertor

Transforms data with tag-based encoding, decoding, and encryption pipelines.

**Caido equivalent:** [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows).

## 403 Bypasser

Attempts path and header mutations to bypass 403 Forbidden responses.

**Caido equivalent:** [403Bypasser](https://github.com/bebiksior/Caido403Bypasser).

## InQL

GraphQL introspection, query building, and analysis inside Burp.

**Caido equivalent:** [GraphQL Analyzer](https://github.com/amrelsagaei/GraphQL-Analyzer).

## Autorize / Auth Analyzer

Tests access controls by replaying requests with different session tokens.

**Caido equivalent:** [Autorize](https://github.com/caido-community/autorize).

## Auth Analyzer

Compares responses across multiple authorization contexts to find access control flaws.

**Caido equivalent:** [Authify](https://github.com/saltify7/Authify).

## Bypass WAF

Passive and active techniques to evade web application firewalls during testing.

**Caido equivalent:** [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows) and manual payload tuning in [Automate](/app/quickstart/automate.md).

## Reflected Parameters

Highlights parameters reflected in responses for XSS and injection testing.

**Caido equivalent:** [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows).

## Sensitive Discoverer

Finds sensitive data patterns in HTTP traffic.

**Caido equivalent:** [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows).

## Additional Scanner Checks

Community passive checks that extend Burp Scanner coverage.

**Caido equivalent:** [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) and [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows).

## CORS / Additional CORS Checks

Detects cross-origin misconfigurations and related issues.

**Caido equivalent:** [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) and [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows).

## Request Minimizer

Strips unnecessary headers and parameters to find minimal viable requests.

**Caido equivalent:** [Squash](https://github.com/evanconnelly/squash).

## Add Custom Header

Adds or modifies headers on requests passing through the proxy.

**Caido equivalent:** [Add a Header Workflow](/app/tutorials/add_header.md).

## CSP Auditor

Analyzes Content-Security-Policy headers for weaknesses.

**Caido equivalent:** [CSP Auditor](https://github.com/GangGreenTemperTatum/csp-auditor).

## AuthMatrix

Tests authorization across roles with a matrix of requests and sessions.

**Caido equivalent:** [AuthMatrix](https://github.com/caido-community/authmatrix).

## AWS Signer

Signs AWS API requests with SigV4 credentials inside Burp.

**Caido equivalent:** [Resign AWS Requests Workflow](/app/tutorials/aws_signature.md).

## Notes

Attach notes and annotations to requests inside Burp.

**Caido equivalent:** [Notes++](https://github.com/caido-community/NotesPlusPlus).

## YesWeBurp

Shares Burp requests with teammates through YesWeHack tooling.

**Caido equivalent:** [YesWeCaido](https://github.com/yeswehack/yeswecaido).

## Burp Share Requests

Collaborative request sharing between Burp users.

**Caido equivalent:** [Drop](https://github.com/caido-community/drop).
