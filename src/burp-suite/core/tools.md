---
description: "Map Burp Suite Pro tools to Caido equivalents."
---

# Tools

Burp Suite Pro tools — Proxy, Repeater, Intruder, utilities, and related features — and their Caido equivalents.

## Available

### Command palette

Quick-access launcher for Burp tools, settings, and actions via keyboard.

Caido includes a native command palette opened with `Ctrl/Cmd+K`. It exposes navigation, plugin commands, and shortcuts rather than Burp's tool-centric launcher, but serves the same quick-access purpose.

#### Resources

- [Command Shortcuts](/app/reference/command_shortcuts.md)

### Search

Global search across Burp tools for requests, issues, and configuration.

Use Caido's native **Search** feature with **HTTPQL** to query captured traffic across your project. Search replaces Burp's cross-tool search with a traffic-focused query language rather than a unified issue-and-config index.

#### Resources

- [Search](/app/quickstart/search.md)
- [HTTPQL](/app/reference/httpql.md)
- [Search Filtering](/app/guides/search_filtering.md)

### Context menu

Right-click actions on requests, responses, and site map entries.

Caido provides native context menu actions on requests and responses in HTTP History, Replay, and related views. Available actions depend on the current view and installed plugins.

#### Resources

- [Context Menu Options](/app/reference/context_menu.md)

### Filter settings

Shared filter configuration applied across Burp tables and views.

Caido's native **Filters** apply across traffic tables and can be combined with HTTPQL. Filters are view-scoped rather than a single global filter profile shared by every Burp tool.

#### Resources

- [Filters](/app/quickstart/filters.md)
- [Applying Filters](/app/guides/filters_applying.md)
- [Defining Filters](/app/guides/filters_defining.md)

### Proxy

Burp's intercepting proxy that captures HTTP/S traffic between your browser and target applications.

Caido's native **Intercept** and **HTTP History** handle proxied traffic capture. Intercept pauses traffic for review; HTTP History stores the full log. Together they cover Burp Proxy's core workflow without a separate Proxy tool tab.

#### Resources

- [Intercept](/app/quickstart/intercept.md)
- [HTTP History](/app/quickstart/http_history.md)
- [Intercepting Traffic](/app/guides/intercept_traffic.md)

### Proxy intercept

Pause, inspect, and modify individual requests and responses in flight.

Use Caido's native **Intercept** view to pause, inspect, and forward or drop individual requests and responses. Behavior matches Burp's intercept queue, integrated into Caido's main traffic workflow.

#### Resources

- [Intercept](/app/quickstart/intercept.md)
- [Intercepting Traffic](/app/guides/intercept_traffic.md)

### HTTP history

Persistent log of all proxied HTTP traffic with filtering and search.

**HTTP History** is Caido's native persistent traffic log. It supports filtering, search, and sending entries to Replay or Automate. It is the primary workspace for reviewing proxied HTTP traffic.

#### Resources

- [HTTP History](/app/quickstart/http_history.md)
- [Filtering HTTP History](/app/guides/http_history_filtering.md)

### WebSockets history

Capture and inspect WebSocket messages proxied through Burp.

Caido's native **WS History** captures WebSocket frames proxied through the instance. It provides a dedicated view for WebSocket traffic separate from HTTP History.

#### Resources

- [WS History](/app/quickstart/ws_history.md)

### Match and replace

Automatically modify requests or responses matching defined rules as they pass through the proxy.

Caido's native **Match & Replace** applies rules to traffic in transit, similar to Burp's match-and-replace rules. Rules can target requests, responses, and specific scopes.

#### Resources

- [Match & Replace](/app/quickstart/match_replace.md)
- [Match & Replace Reference](/app/reference/match_replace.md)
- [Testing Match & Replace Rules](/app/guides/match_replace_testing.md)

### Repeater

Manually modify and resend individual HTTP requests to observe response changes.

Use Caido's native **Replay** to edit and resend individual requests. Replay is accessed from HTTP History and the context menu rather than a dedicated Repeater tab, but supports the same manual request manipulation workflow.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Resending Requests](/app/guides/replay_resending.md)
- [Sending Requests to Replay](/app/guides/replay_requests.md)

### Intruder

Automated payload injection for fuzzing, brute-forcing, and enumeration attacks.

Use Caido's native **Automate** for payload-based attacks. Automate supports wordlists, numeric ranges, multiple payload sets, and preprocessors — covering Burp Intruder's core fuzzing and brute-force workflows with a different UI model.

#### Resources

- [Automate](/app/quickstart/automate.md)
- [Sending Requests to Automate](/app/guides/automate_requests.md)
- [Sending Payloads from a Wordlist](/app/guides/automate_wordlists.md)

### Inspector

Structured view of request and response components (headers, parameters, cookies).

Caido does not have a separate Inspector panel. Request and response components are edited inline in **Replay**, **HTTP History**, and **Automate** using built-in structured editors. Headers, parameters, and cookies are accessible without switching to a dedicated tool.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [HTTP History](/app/quickstart/http_history.md)

### Message editor

Raw and parsed editing of HTTP messages across Burp tools.

Caido's native message editors are built into **Replay**, **Intercept**, and **Automate**. You can switch between structured and raw editing within each view rather than using a shared editor component across separate Burp tabs.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Intercept](/app/quickstart/intercept.md)
- [Automate](/app/quickstart/automate.md)
- [Request and Response Modes](/app/guides/request_response_modes.md)

### Decoder

Encode, decode, and hash data in common formats.

Use Caido's native **Convert Workflows** to transform data between formats. Unlike Burp's standalone Decoder tab, conversion in Caido is workflow-driven and can be applied to traffic automatically or on demand.

#### Resources

- [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows)
- [Workflows](/app/quickstart/workflows.md)

### Comparer

Word-level and byte-level diff of requests, responses, or arbitrary data.

Use the community **Compare** plugin to diff requests and responses. Caido does not ship a native Comparer tab; diffing is handled by a dedicated plugin.

#### Resources

- [Compare](https://github.com/amrelsagaei/Compare) (GitHub)

### Collaborator

Out-of-band interaction server for detecting blind SSRF, XXE, and similar vulnerabilities.

Use community OAST plugins such as **QuickSSRF** or **OmniOAST** for out-of-band interaction testing. Caido does not ship a built-in Collaborator server; dedicated plugins provide the same capability.

#### Resources

- [QuickSSRF](https://github.com/caido-community/quickssrf) (GitHub)
- [OmniOAST](https://github.com/hahwul/OmniOAST) (GitHub)

### Logger

Capture and review traffic from all Burp tools in a unified log.

Caido's native **Search** queries all captured traffic across the project, covering much of Burp Logger's review workflow. For enhanced logging with custom fields, use the **Cerebrum** plugin.

#### Resources

- [Search](/app/quickstart/search.md)
- [Search Filtering](/app/guides/search_filtering.md)
- [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum) (GitHub)

### Organizer

Store and annotate interesting requests for later review.

Use Caido's native **Findings** to track notable requests and issues. Findings serves a similar annotation and review purpose to Burp Organizer, tied to Caido's findings model rather than a separate request collection.

#### Resources

- [Findings](/app/quickstart/findings.md)

### Content discovery

Brute-force hidden directories and files on a web server.

Use Caido's native **Automate** with wordlists to brute-force paths and files. This replaces Burp's content discovery tool with Automate's payload-driven request sending.

#### Resources

- [Automate](/app/quickstart/automate.md)
- [Sending Payloads from a Wordlist](/app/guides/automate_wordlists.md)

## Indirectly Available

### Dashboard

Burp's central hub showing scan progress, issue summaries, and task status.

Caido does not have a single dashboard tab. Instead, traffic-centric views like HTTP History and Search are the default workspace, and some community plugins ship their own dashboard pages for scanning or authorization testing.

#### Resources

- [Plugins](/app/quickstart/plugins.md)
- [Scanner](https://github.com/caido-community/scanner) (GitHub)
- [Autorize](https://github.com/caido-community/autorize) (GitHub)

### Customizing Burp's layout

Rearrange tabs, split panes, and customize the Burp UI layout.

Caido has a fixed application layout and does not support Burp-style tab rearrangement. For custom views, community plugins can add dedicated pages through the plugin SDK.

#### Resources

- [Creating a Page](https://developer.caido.io/guides/page.html) (developer docs)

### Engagement tools

Suite of utilities for target analysis, content discovery, and PoC generation.

Caido does not bundle engagement utilities into a single tool suite. Equivalent workflows are spread across native features like Sitemap and Automate, plus purpose-built plugins.

#### Resources

- [Sitemap](/app/quickstart/sitemap.md)
- [Automate](/app/quickstart/automate.md)

### Target analyzer

Summarize a target's technology stack, content types, and dynamic URLs.

Caido has no dedicated target analyzer. Review technology hints in HTTP History responses and use passive workflows to flag stack indicators automatically as traffic passes through the proxy.

#### Resources

- [HTTP History](/app/quickstart/http_history.md)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### Manual testing simulator

Simulate user interactions for manual testing scenarios.

Use Caido's native **Replay** for manual request-level testing, or a **preconfigured browser** for browser-based interaction. Caido does not ship a dedicated interaction simulator like Burp's manual testing simulator.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md)

## Not Available

### Sequencer

Analyze the randomness of session tokens and CSRF tokens.

Caido has no token randomness analysis tool. Export captured tokens and analyze them with external statistical tools.

#### Resources

- [Exports](/app/quickstart/exports.md)

### DOM Invader

Browser-based testing for DOM XSS, prototype pollution, and web message vulnerabilities.

Caido has no browser-based DOM testing tool equivalent to DOM Invader. Test DOM-based issues manually with browser DevTools and Replay, or use passive workflows to flag suspicious patterns in proxied traffic.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows)

### Clickbandit

Generate clickjacking proof-of-concept overlays against a target page.

Caido has no clickjacking PoC generator. Build PoCs manually with HTML iframes and verify framing protections by replaying requests and inspecting response headers.

#### Resources

- [Replay](/app/quickstart/replay.md)

### Infiltrator

Modify compiled class files to test deserialization and injection in Java applications.

Caido has no equivalent to Infiltrator's bytecode manipulation. Use external Java instrumentation tools for class-level testing and Caido's Replay for HTTP-level request manipulation.

#### Resources

- [Replay](/app/quickstart/replay.md)

### Generate CSRF PoC

Build cross-site request forgery proof-of-concept HTML from captured requests.

Caido has no one-click CSRF PoC generator. Craft PoC HTML manually from requests captured in Replay. Caido's Assistant can help draft CSRF payloads if configured.

#### Resources

- [Replay](/app/quickstart/replay.md)
- [Assistant CSRF Guidance](/app/guides/assistant_csrf.md)
