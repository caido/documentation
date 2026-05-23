---
description: "Map Burp Suite Pro BApp Store extensions to Caido plugins."
---

# Extensions (BApp Store)

Burp Suite Pro BApp Store extensions and popular community plugin equivalents in Caido.

## Available

### Extensions (BApp Store)

Burp provides an extension marketplace for installing third-party and official BApps.

Caido uses a native **Community Store** for extensions listed in the [caido/store](https://github.com/caido/store) catalog, plus manual installation from GitHub. Plugins are the primary extensibility model in Caido, equivalent to Burp's BApp Store but with a different distribution and API.

#### Resources

- [Plugins](/app/quickstart/plugins.md)
- [Installing Plugins](/app/guides/plugins_installing.md)
- [Managing Plugins](/app/guides/plugins_managing.md)
- [Caido plugin store catalog](https://github.com/caido/store) (GitHub)

### Param Miner

Param Miner discovers hidden parameters, headers, and cache-busting inputs.

Caido offers the **ParamFinder** community plugin. Caido does not include hidden-parameter discovery natively; this capability comes from a plugin modeled after Burp's Param Miner.

#### Resources

- [ParamFinder](https://github.com/caido-community/ParamFinder) (GitHub)

### JWT Editor

JWT Editor decodes, edits, and resigns JSON Web Tokens inside Burp.

Caido offers the **JWT Analyzer** community plugin for JWT decoding, editing, and analysis within Caido. JWT handling is plugin-based rather than a built-in editor.

#### Resources

- [JWT Analyzer](https://github.com/caido-community/JWT-Analyzer) (GitHub)
- [Decode JWT Tutorial](/app/tutorials/decode_jwt.md)

### JS Miner

JS Miner mines JavaScript files for endpoints, secrets, and interesting strings.

Caido offers the **Data Grep** and **JS Analyzer** community plugins to extract patterns and analyze JavaScript in captured traffic. Together they cover much of JS Miner's endpoint and secret discovery through passive analysis.

#### Resources

- [Data Grep](https://github.com/caido-community/data-grep) (GitHub)
- [JS Analyzer](https://github.com/caido-community/JS-Analyzer) (GitHub)

### Content Type Converter

Content Type Converter converts request and response bodies between content types.

Caido offers the **Convert Tools** community plugin for content-type conversion. Caido's native **Convert Workflows** also handle many encoding transformations.

#### Resources

- [Convert Tools](https://github.com/caido-community/convert-tools) (GitHub)
- [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows)

### 403 Bypasser

403 Bypasser attempts path and header mutations to bypass 403 Forbidden responses.

Caido offers the **403Bypasser** community plugin for automated 403 bypass attempts. This is a dedicated plugin rather than a native feature.

#### Resources

- [403Bypasser](https://github.com/caido-community/Caido403Bypasser) (GitHub)

### InQL

InQL provides GraphQL introspection, query building, and analysis inside Burp.

Caido offers the **GraphQL Analyzer** community plugin for GraphQL testing in Caido. GraphQL-specific analysis is plugin-provided rather than built in.

#### Resources

- [GraphQL Analyzer](https://github.com/caido-community/GraphQL-Analyzer) (GitHub)

### Autorize

Autorize tests access controls by replaying requests with different session tokens.

Caido offers the **Autorize** community plugin for automated authorization testing. **Authswap** can complement it by switching between authentication contexts during manual testing.

#### Resources

- [Autorize](https://github.com/caido-community/autorize) (GitHub)
- [Autorize Tutorial](/app/tutorials/autorize.md)
- [Authswap](https://github.com/caido-community/authswap) (GitHub)

### Auth Analyzer

Auth Analyzer compares responses across multiple authorization contexts to find access control flaws.

Caido offers the **Authify** community plugin for multi-context authorization comparison and analysis.

#### Resources

- [Authify](https://github.com/saltify7/Authify) (GitHub)

### Request Minimizer

Request Minimizer strips unnecessary headers and parameters to find minimal viable requests.

Caido offers the **Squash** community plugin to minimize requests. Request minimization is plugin-based rather than a native Burp-style tool.

#### Resources

- [Squash](https://github.com/evanconnelly/squash) (GitHub)

### CSP Auditor

CSP Auditor analyzes Content-Security-Policy headers for weaknesses.

Caido offers the **CSP Auditor** community plugin for CSP analysis. CSP-specific auditing is provided by a plugin rather than a native tool.

#### Resources

- [CSP Auditor](https://github.com/caido-community/csp-auditor) (GitHub)

### AuthMatrix

AuthMatrix tests authorization across roles with a matrix of requests and sessions.

Caido offers the **AuthMatrix** community plugin for role-based authorization matrix testing. It provides a dedicated UI for cross-role comparison similar to Burp's AuthMatrix extension.

#### Resources

- [AuthMatrix](https://github.com/caido-community/authmatrix) (GitHub)

### Notes

Notes lets you attach notes and annotations to requests inside Burp.

Caido offers the **Notes++** community plugin for request annotations. Caido's native **Findings** can track issues, but rich per-request notes are plugin-provided.

#### Resources

- [Notes++](https://github.com/caido-community/NotesPlusPlus) (GitHub)
- [Findings](/app/quickstart/findings.md)

### YesWeBurp

YesWeBurp shares Burp requests with teammates through YesWeHack tooling.

Caido offers the **YesWeCaido** community plugin for YesWeHack-compatible request sharing. This is a direct port of the collaboration workflow for Caido.

#### Resources

- [YesWeCaido](https://github.com/yeswehack/yeswecaido) (GitHub)

### Burp Share Requests

Burp Share Requests enables collaborative request sharing between Burp users.

Caido offers the **Drop** community plugin to share requests with teammates. Collaborative sharing is plugin-based rather than a native Caido feature.

#### Resources

- [Drop](https://github.com/caido-community/drop) (GitHub)
- [Drop Tutorial](/app/tutorials/drop.md)

## Indirectly Available

### Active Scan++

Active Scan++ adds active scan checks beyond Burp Scanner's defaults.

Caido lets you implement additional checks through the **Scanner** plugin's custom check definitions, and install scan-focused plugins such as **Mass Assignment Radar** or **RetireJS Scanner** for extra coverage. Active Scan++'s extra checks map to custom scanner rules and community plugins rather than a single BApp.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Mass Assignment Radar](https://github.com/sp1r1tt/Mass-Assignment-Radar) (GitHub)
- [RetireJS Scanner](https://github.com/bensh/caido-retirejs) (GitHub)

### Logger++

Logger++ provides enhanced logging with custom fields and filtering beyond Burp Logger.

Caido offers native **Search** for traffic querying, the **Data Grep** plugin to extract fields from traffic, or the **Cerebrum** plugin for enhanced logging with custom fields. Logger++'s advanced logging maps to Search plus optional plugins.

#### Resources

- [Search](/app/quickstart/search.md)
- [Search Filtering](/app/guides/search_filtering.md)
- [Data Grep](https://github.com/caido-community/data-grep) (GitHub)
- [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum) (GitHub)

### Hackvertor

Hackvertor transforms data with tag-based encoding, decoding, and encryption pipelines.

Caido offers native **Convert Workflows** for tag-based transformations, plus the **Convert Tools** and **HackerUtils** community plugins for encoding pipelines and manual-test utilities. Hackvertor's pipeline model is similar to Caido's workflow-driven conversion, though with different syntax.

#### Resources

- [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows)
- [Workflows](/app/quickstart/workflows.md)
- [Convert Tools](https://github.com/caido-community/convert-tools) (GitHub)
- [HackerUtils](https://github.com/caido-community/hackerutils) (GitHub)

### Bypass WAF

Bypass WAF applies passive and active techniques to evade web application firewalls during testing.

Caido offers **Passive Workflows** to transform traffic, native **Automate** for payload tuning, and WAF-focused plugins such as **403Bypasser**, **Host Header Injector**, **Nomad-ip**, and **SLCyber Tools** (Surf). Caido has no single WAF-bypass BApp; the workflow is distributed across native features and plugins.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Automate](/app/quickstart/automate.md)
- [403Bypasser](https://github.com/caido-community/Caido403Bypasser) (GitHub)
- [Host Header Injector](https://github.com/oksuzkayra/host-header-injector) (GitHub)
- [Nomad-ip](https://github.com/caido-community/nomad-ip) (GitHub)
- [SLCyber Tools](https://github.com/caido-community/slcyber-tools) (GitHub)

### Reflected Parameters

Reflected Parameters highlights parameters reflected in responses for XSS and injection testing.

Caido offers **Passive Workflows** to flag reflected parameters in proxied traffic. Reflection detection is workflow-driven rather than a dedicated extension tab.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)

### Sensitive Discoverer

Sensitive Discoverer finds sensitive data patterns in HTTP traffic.

Caido offers **Passive Workflows** to match sensitive data patterns in traffic automatically, and the **Data Grep** plugin to extract and surface patterns from requests and responses. Custom workflow rules and grep rules replace Burp's Sensitive Discoverer checks.

#### Resources

- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Workflows](/app/quickstart/workflows.md)
- [Data Grep](https://github.com/caido-community/data-grep) (GitHub)

### Additional Scanner Checks

Additional Scanner Checks provides community passive checks that extend Burp Scanner coverage.

Caido lets you add checks through the **Scanner** plugin's custom check API and **Passive Workflows**. Extended scanner coverage in Caido is defined by you rather than installed as a BApp.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### CORS / Additional CORS Checks

CORS checks detect cross-origin misconfigurations and related issues.

Caido lets you implement CORS checks through the **Scanner** plugin's custom checks or **Passive Workflows**. Caido does not ship built-in CORS scanning; Caido lets you define checks to match your methodology.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### Add Custom Header

Add Custom Header adds or modifies headers on requests passing through the proxy.

Caido lets you build a native **workflow** to add headers to proxied traffic, use **Match & Replace** for simpler header injection, or install the **Template** plugin for reusable match-and-replace rule templates. The **Host Header Injector** plugin automates Host-header payload variations.

#### Resources

- [Add a Header Tutorial](/app/tutorials/add_header.md)
- [Match & Replace](/app/quickstart/match_replace.md)
- [Template](https://github.com/MDGDSS/caido-template) (GitHub)
- [Host Header Injector](https://github.com/oksuzkayra/host-header-injector) (GitHub)

### AWS Signer

AWS Signer signs AWS API requests with SigV4 credentials inside Burp.

Caido supports AWS signing through the **Resign AWS Requests** workflow tutorial pattern to sign AWS requests in Caido. AWS signing is implemented as a workflow rather than a standalone BApp.

#### Resources

- [Resign AWS Requests Tutorial](/app/tutorials/aws_signature.md)
- [Workflows](/app/quickstart/workflows.md)
