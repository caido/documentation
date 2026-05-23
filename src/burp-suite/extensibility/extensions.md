---
description: "Map Burp Suite Pro BApp Store extensions to Caido plugins."
---

# Extensions (BApp Store)

Burp Suite Pro BApp Store extensions and popular community plugin equivalents in Caido.

### Extensions (BApp Store)

Burp's extension marketplace for installing third-party and official BApps.

Caido uses a native **plugin store** for community extensions, plus manual installation from GitHub. Plugins are the primary extensibility model in Caido, equivalent to Burp's BApp Store but with a different distribution and API.

#### Resources

- [Plugins](/app/quickstart/plugins.md)
- [Installing Plugins](/app/guides/plugins_installing.md)
- [Managing Plugins](/app/guides/plugins_managing.md)

### Param Miner

Discovers hidden parameters, headers, and cache-busting inputs.

Use the **ParamFinder** community plugin. Caido does not include hidden-parameter discovery natively; this capability comes from a plugin modeled after Burp's Param Miner.

#### Resources

- [ParamFinder](https://github.com/bebiksior/ParamFinder) (GitHub)

### JWT Editor

Decodes, edits, and resigns JSON Web Tokens inside Burp.

Use the **JWT Analyzer** community plugin for JWT decoding, editing, and analysis within Caido. JWT handling is plugin-based rather than a built-in editor.

#### Resources

- [JWT Analyzer](https://github.com/amrelsagaei/JWT-Analyzer) (GitHub)
- [Decode JWT Tutorial](/app/tutorials/decode_jwt.md)

### JS Miner

Mines JavaScript files for endpoints, secrets, and interesting strings.

Use the **Data Grep** community plugin to extract patterns from JavaScript and other response content. Equivalent to JS Miner's mining capabilities through passive analysis.

#### Resources

- [Data Grep](https://github.com/caido-community/data-grep) (GitHub)

### Active Scan++

Additional active scan checks beyond Burp Scanner's defaults.

Implement additional checks through the **Scanner** plugin's custom check definitions. Active Scan++'s extra checks map to user-defined scanner rules rather than a separate plugin.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)

### Content Type Converter

Converts request and response bodies between content types.

Use the **Convert Tools** community plugin for content-type conversion. Caido's native Convert Workflows also handle many encoding transformations.

#### Resources

- [Convert Tools](https://github.com/caido-community/convert-tools) (GitHub)
- [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows)

### Logger++

Enhanced logging with custom fields and filtering beyond Burp Logger.

Use native **Search** for traffic querying, or the **Cerebrum** plugin for enhanced logging with custom fields. Logger++'s advanced logging maps to Search plus an optional plugin.

#### Resources

- [Search](/app/quickstart/search.md)
- [Search Filtering](/app/guides/search_filtering.md)
- [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum) (GitHub)

### Hackvertor

Transforms data with tag-based encoding, decoding, and encryption pipelines.

Use native **Convert Workflows** for tag-based transformations. Hackvertor's pipeline model is similar to Caido's workflow-driven conversion, though with different syntax.

#### Resources

- [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows)
- [Workflows](/app/quickstart/workflows.md)

### 403 Bypasser

Attempts path and header mutations to bypass 403 Forbidden responses.

Use the **403Bypasser** community plugin for automated 403 bypass attempts. This is a dedicated plugin rather than a native feature.

#### Resources

- [403Bypasser](https://github.com/bebiksior/Caido403Bypasser) (GitHub)

### InQL

GraphQL introspection, query building, and analysis inside Burp.

Use the **GraphQL Analyzer** community plugin for GraphQL testing in Caido. GraphQL-specific analysis is plugin-provided rather than built in.

#### Resources

- [GraphQL Analyzer](https://github.com/amrelsagaei/GraphQL-Analyzer) (GitHub)

### Autorize / Auth Analyzer

Tests access controls by replaying requests with different session tokens.

Use the **Autorize** community plugin for authorization testing. It provides a dedicated workflow for comparing responses across different session contexts, similar to Burp's Autorize extension.

#### Resources

- [Autorize](https://github.com/caido-community/autorize) (GitHub)
- [Autorize Tutorial](/app/tutorials/autorize.md)

### Auth Analyzer

Compares responses across multiple authorization contexts to find access control flaws.

Use the **Authify** community plugin for multi-context authorization comparison. It extends Autorize-style testing with additional analysis features.

#### Resources

- [Authify](https://github.com/saltify7/Authify) (GitHub)

### Bypass WAF

Passive and active techniques to evade web application firewalls during testing.

Use **Passive Workflows** to transform traffic and native **Automate** for payload tuning. Caido has no single WAF-bypass plugin; the workflow is distributed across native features.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Automate](/app/quickstart/automate.md)

### Reflected Parameters

Highlights parameters reflected in responses for XSS and injection testing.

Use **Passive Workflows** to flag reflected parameters in proxied traffic. Reflection detection is workflow-driven rather than a dedicated extension tab.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)

### Sensitive Discoverer

Finds sensitive data patterns in HTTP traffic.

Use **Passive Workflows** to match sensitive data patterns in traffic automatically. Custom workflow rules replace Burp's Sensitive Discoverer checks.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)

### Additional Scanner Checks

Community passive checks that extend Burp Scanner coverage.

Add checks through the **Scanner** plugin's custom check API and **Passive Workflows**. Extended scanner coverage in Caido is defined by you rather than installed as a BApp.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### CORS / Additional CORS Checks

Detects cross-origin misconfigurations and related issues.

Implement CORS checks through the **Scanner** plugin's custom checks or **Passive Workflows**. Caido does not ship built-in CORS scanning; define checks to match your methodology.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### Request Minimizer

Strips unnecessary headers and parameters to find minimal viable requests.

Use the **Squash** community plugin to minimize requests. Request minimization is plugin-based rather than a native Burp-style tool.

#### Resources

- [Squash](https://github.com/evanconnelly/squash) (GitHub)

### Add Custom Header

Adds or modifies headers on requests passing through the proxy.

Build a native **workflow** to add headers to proxied traffic, or use **Match & Replace** for simpler header injection. Caido favors workflows over a dedicated "add header" extension.

#### Resources

- [Add a Header Tutorial](/app/tutorials/add_header.md)
- [Match & Replace](/app/quickstart/match_replace.md)

### CSP Auditor

Analyzes Content-Security-Policy headers for weaknesses.

Use the **CSP Auditor** community plugin for CSP analysis. CSP-specific auditing is provided by a plugin rather than a native tool.

#### Resources

- [CSP Auditor](https://github.com/GangGreenTemperTatum/csp-auditor) (GitHub)

### AuthMatrix

Tests authorization across roles with a matrix of requests and sessions.

Use the **AuthMatrix** community plugin for role-based authorization matrix testing. It provides a dedicated UI for cross-role comparison similar to Burp's AuthMatrix extension.

#### Resources

- [AuthMatrix](https://github.com/caido-community/authmatrix) (GitHub)

### AWS Signer

Signs AWS API requests with SigV4 credentials inside Burp.

Use the **Resign AWS Requests** workflow tutorial pattern to sign AWS requests in Caido. AWS signing is implemented as a workflow rather than a standalone BApp.

#### Resources

- [Resign AWS Requests Tutorial](/app/tutorials/aws_signature.md)
- [Workflows](/app/quickstart/workflows.md)

### Notes

Attach notes and annotations to requests inside Burp.

Use the **Notes++** community plugin for request annotations. Caido's native Findings can track issues, but rich per-request notes are plugin-provided.

#### Resources

- [Notes++](https://github.com/caido-community/NotesPlusPlus) (GitHub)
- [Findings](/app/quickstart/findings.md)

### YesWeBurp

Shares Burp requests with teammates through YesWeHack tooling.

Use the **YesWeCaido** community plugin for YesWeHack-compatible request sharing. This is a direct port of the collaboration workflow for Caido.

#### Resources

- [YesWeCaido](https://github.com/yeswehack/yeswecaido) (GitHub)

### Burp Share Requests

Collaborative request sharing between Burp users.

Use the **Drop** community plugin to share requests with teammates. Collaborative sharing is plugin-based rather than a native Caido feature.

#### Resources

- [Drop](https://github.com/caido-community/drop) (GitHub)
- [Drop Tutorial](/app/tutorials/drop.md)
