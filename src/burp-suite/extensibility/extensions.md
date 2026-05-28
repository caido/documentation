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

Caido offers the **JWT Analyzer** community plugin for JWT decoding, editing, and analysis within Caido. JWT handling is plugin-based rather than a built-in editor. This also covers Burp's older **JSON Web Tokens** BApp, which provided the same decode-and-manipulate workflow before JWT Editor.

#### Resources

- [JWT Analyzer](https://github.com/caido-community/JWT-Analyzer) (GitHub)
- [Decode JWT Tutorial](/app/tutorials/decode_jwt.md)

### JS Miner

JS Miner mines JavaScript files for endpoints, secrets, and interesting strings.

Caido offers the **Data Grep** and **JS Analyzer** community plugins to extract patterns and analyze JavaScript in captured traffic. Together they cover much of JS Miner's endpoint and secret discovery through passive analysis.

#### Resources

- [Data Grep](https://github.com/caido-community/data-grep) (GitHub)
- [JS Analyzer](https://github.com/caido-community/JS-Analyzer) (GitHub)

### JS Link Finder

JS Link Finder passively scans JavaScript files for endpoint links and URLs.

Caido offers the **JS Analyzer** community plugin as a direct replacement for JS Link Finder's passive endpoint discovery in JavaScript.

#### Resources

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

### Retire.js

Retire.js integrates with the Retire.js vulnerability database to flag outdated JavaScript libraries in proxied traffic.

Caido offers the **RetireJS Scanner** community plugin, which performs Retire.js-style checks against captured requests and responses. Library version detection is plugin-provided rather than built into Caido's scanner.

#### Resources

- [RetireJS Scanner](https://github.com/bensh/caido-retirejs) (GitHub)

## Indirectly Available

### Error Message Checks

Error Message Checks passively detects verbose server error messages that may leak stack traces or internal details.

Caido lets you flag error patterns through the **Scanner** plugin's custom checks or **Passive Workflows**. There is no dedicated passive check pack matching Burp's Error Message Checks BApp.

#### Resources

- [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### Reshaper

Reshaper triggers actions and reshapes HTTP request and response traffic using configurable rules.

Caido offers **Match & Replace** and **Passive Workflows** for rule-based traffic modification and actions. Reshaper's rule engine maps to Caido's workflow and match-and-replace model rather than a single reshaping extension.

#### Resources

- [Match & Replace](/app/quickstart/match_replace.md)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### MCP Server

Burp's MCP Server extension integrates Burp Suite with AI clients through the Model Context Protocol (MCP).

Caido offers the **Vibe Hacking** community plugin for MCP-powered agent tools inside Caido, and the community **Caido MCP Server** for connecting external AI clients to a Caido instance. These are separate projects with different scope than PortSwigger's Burp MCP Server.

#### Resources

- [Vibe Hacking](https://github.com/vvvvvvvvvvel/VibeHacking) (GitHub)
- [Caido MCP Server](https://github.com/c0tton-fluff/caido-mcp-server) (GitHub)
- [Using a Caido MCP Server](/app/tutorials/mcp.md)

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

AWS Signer signs AWS API requests with SigV4 credentials inside Burp. The separate **AWS Sigv4** BApp provides the same SigV4 signing capability.

Caido supports AWS signing through the **Resign AWS Requests** workflow tutorial pattern to sign AWS requests in Caido. AWS signing is implemented as a workflow rather than a standalone BApp.

#### Resources

- [Resign AWS Requests Tutorial](/app/tutorials/aws_signature.md)
- [Workflows](/app/quickstart/workflows.md)

## Unavailable

The following BApps from the Burp plugin catalog have no Community Store plugin and no reliable Caido equivalent today. Workarounds, where they exist, are noted but do not provide comparable coverage.

### SSL Scanner

SSL Scanner checks TLS/SSL configuration and vulnerabilities using techniques from testssl.sh and a2sv.

Caido has no SSL/TLS scanning plugin in the Community Store. You can chain external tools such as testssl.sh or sslscan manually; the community **Dispatch** plugin (GitHub only, not in the store) can pipe requests to CLI scanners if installed separately.

### CSRF Scanner

CSRF Scanner passively scans proxied traffic for CSRF vulnerabilities.

Caido's **CSRF PoC Generator** builds proof-of-concept HTML from requests but does not perform passive CSRF scanning. Custom **Scanner** checks could approximate some checks but are not a drop-in replacement.

### Collaborator Everywhere

Collaborator Everywhere injects Burp Collaborator payloads into headers and parameters on in-scope traffic to surface SSRF, blind RCE, and other out-of-band issues.

Caido has no extension that auto-injects OAST payloads across in-scope traffic like Collaborator Everywhere. A similar workflow could be assembled from a **Passive Workflow**, **QuickSSRF**, and an environment variable for the interaction domain, but that integration is not built or shipped as a single equivalent.

#### Resources

- [QuickSSRF](https://github.com/caido-community/quickssrf) (GitHub)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)
- [Collaborator](/burp-suite/core/tools.md#collaborator)

### Backslash Powered Scanner

Backslash Powered Scanner finds unknown classes of injection vulnerabilities using backslash-based fuzzing and response diffing.

Caido has no port of Backslash Powered Scanner's backslash fuzzing or response-diffing algorithm. Custom **Scanner** checks and **Mass Assignment Radar** do not provide equivalent coverage.

### Shadow Repeater

Shadow Repeater automatically mutates Repeater requests with AI, diffs responses, and sends interesting results to Organizer.

Caido has no AI-powered shadow Repeater equivalent. **Automate** covers structured fuzzing but not automatic Repeater-side mutation and anomaly detection.

### Software Vulnerability Scanner

Software Vulnerability Scanner uses the Vulners.com audit API to identify vulnerable software versions in HTTP traffic.

Caido has no Vulners.com integration or broad software inventory scanning. **RetireJS Scanner** covers outdated JavaScript libraries only and is not a replacement for this BApp.

### Turbo Intruder

Turbo Intruder sends large numbers of HTTP requests with Python-scripted attack logic for high-speed or complex fuzzing beyond Burp Intruder.

Caido has no equivalent for Turbo Intruder's Python-driven attacks or extreme request throughput. Native **Automate** maps to Burp Intruder, not Turbo Intruder.

### HTTP Request Smuggler

HTTP Request Smuggler detects and exploits HTTP request smuggling (CL.TE, TE.CL, and related desync attacks).

Caido has no dedicated request-smuggling scanner or exploitation assistant. Smuggling tests generally require crafting raw requests in **Replay**; external proxies such as WafRift can be chained as an upstream if needed.

### HTTPoxy Scanner

HTTPoxy Scanner detects the HTTPoxy vulnerability where proxy headers are mishandled by backends.

Caido has no built-in HTTPoxy scan check or dedicated plugin. Custom **Scanner** checks or **Passive Workflows** could flag related patterns but are not a drop-in replacement.

### PDF Metadata

PDF Metadata adds a passive scanner check for sensitive metadata in PDF responses.

Caido has no PDF metadata scanner check. **Data Grep** can match patterns in responses but does not parse PDF structure or extract document metadata like ExifTool-based checks.

### ReportLM

ReportLM uses BurpAI to generate custom reports from Burp Scanner issues.

Caido offers AI assistants such as **Shift** and **Chatio**, but nothing that turns Caido findings into formatted engagement reports the way ReportLM does for Burp issues.

### CO2

CO2 bundles utilities including a SQL Mapper, user generator, and JavaScript prettifier inside Burp.

Caido has no CO2-style SQL mapping or user-generation toolkit. **HackerUtils** and **Automate** cover some manual-testing utilities but not CO2's integrated feature set.

### Proxy Enriched Sequence Diagrams Exporter

Proxy Enriched Sequence Diagrams Exporter converts Burp proxy traffic into interactive sequence diagrams.

Caido has no traffic-to-diagram export extension. You can review flows in **HTTP History** and **Sitemap**, but not generate sequence diagrams from captured traffic.

### ExifTool Scanner

ExifTool Scanner reads metadata from uploaded or proxied files (JPEG, PNG, PDF, DOC, and more) using ExifTool.

Caido has no ExifTool integration or file-metadata scanner plugin.

### Nucleus Burp Extension

Nucleus Burp Extension pushes Burp Suite scan results to the Nucleus vulnerability management platform.

Caido has no Nucleus platform integration. This BApp is tied to a specific third-party SaaS workflow.

### OAUTH Scan

OAUTH Scan provides automated security checks for applications implementing OAuth 2.0 and OpenID Connect.

Caido has no dedicated OAuth/OIDC scanning extension. OAuth-related testing is manual or methodology-specific via custom **Scanner** checks.

### Kerberos Authentication

Kerberos Authentication adds Kerberos support for authenticating requests through Burp.

Caido's **NTLM Authentication** plugin handles NTLM only. Kerberos authentication is not supported by a Caido plugin today.

#### Resources

- [NTLM Authentication](https://github.com/caido-community/ntlm) (GitHub) (NTLM only)

### Freddy, Deserialization Bug Finder

Freddy detects and helps exploit Java and .NET deserialization vulnerabilities in HTTP traffic.

Caido has no deserialization-focused scanner or exploitation extension. Custom **Scanner** checks could flag obvious patterns but do not match Freddy's framework-specific coverage.

### Autowasp

Autowasp maps Burp issues to the OWASP Web Security Testing Guide (WSTG) for structured web security testing workflows.

Caido's **Findings** track issues in a project but do not map them to WSTG test cases or provide Autowasp's checklist-driven workflow.
