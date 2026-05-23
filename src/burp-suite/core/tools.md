---
description: "Map Burp Suite Pro tools to Caido equivalents."
---

# Tools

Burp Suite Pro tools — Proxy, Repeater, Intruder, utilities, and related features — and their Caido equivalents.

### Dashboard

Burp's central hub showing scan progress, issue summaries, and task status.

**Caido equivalent:** [Plugins](/app/quickstart/plugins.md) such as [Scanner](https://github.com/caido-community/scanner) and [Autorize](https://github.com/caido-community/autorize) provide dedicated dashboards. Caido itself focuses on traffic-centric views rather than a single dashboard tab.

### Command palette

Quick-access launcher for Burp tools, settings, and actions via keyboard.

**Caido equivalent:** Caido's command palette (open with `Ctrl/Cmd+K`). See [Command Shortcuts](/app/reference/command_shortcuts.md).

### Search

Global search across Burp tools for requests, issues, and configuration.

**Caido equivalent:** [Search](/app/quickstart/search.md) with [HTTPQL](/app/reference/httpql.md) for querying captured traffic.

### Context menu

Right-click actions on requests, responses, and site map entries.

**Caido equivalent:** [Context Menu Options](/app/reference/context_menu.md).

### Filter settings

Shared filter configuration applied across Burp tables and views.

**Caido equivalent:** [Filters](/app/quickstart/filters.md).

### Customizing Burp's layout

Rearrange tabs, split panes, and customize the Burp UI layout.

**Caido equivalent:** No direct equivalent. Caido's layout is fixed, but you can install plugins that add custom [pages](https://developer.caido.io/guides/page.html) for specialized views.

### Proxy

Burp's intercepting proxy that captures HTTP/S traffic between your browser and target applications.

**Caido equivalent:** [Intercept](/app/quickstart/intercept.md) and [HTTP History](/app/quickstart/http_history.md).

### Proxy intercept

Pause, inspect, and modify individual requests and responses in flight.

**Caido equivalent:** [Intercept](/app/quickstart/intercept.md).

### HTTP history

Persistent log of all proxied HTTP traffic with filtering and search.

**Caido equivalent:** [HTTP History](/app/quickstart/http_history.md).

### WebSockets history

Capture and inspect WebSocket messages proxied through Burp.

**Caido equivalent:** [WS History](/app/quickstart/ws_history.md).

### Match and replace

Automatically modify requests or responses matching defined rules as they pass through the proxy.

**Caido equivalent:** [Match & Replace](/app/quickstart/match_replace.md). See also the [Match & Replace reference](/app/reference/match_replace.md).

### Repeater

Manually modify and resend individual HTTP requests to observe response changes.

**Caido equivalent:** [Replay](/app/quickstart/replay.md).

### Intruder

Automated payload injection for fuzzing, brute-forcing, and enumeration attacks.

**Caido equivalent:** [Automate](/app/quickstart/automate.md).

### Inspector

Structured view of request and response components (headers, parameters, cookies).

**Caido equivalent:** Caido's built-in request and response editors in [Replay](/app/quickstart/replay.md) and [HTTP History](/app/quickstart/http_history.md). Parameters and headers are editable inline without a separate Inspector panel.

### Message editor

Raw and parsed editing of HTTP messages across Burp tools.

**Caido equivalent:** Built into [Replay](/app/quickstart/replay.md), [Intercept](/app/quickstart/intercept.md), and [Automate](/app/quickstart/automate.md).

### Decoder

Encode, decode, and hash data in common formats.

**Caido equivalent:** [Convert Workflows](/app/concepts/workflows_intro.md#convert-workflows).

### Comparer

Word-level and byte-level diff of requests, responses, or arbitrary data.

**Caido equivalent:** [Compare](https://github.com/amrelsagaei/Compare) plugin.

### Sequencer

Analyze the randomness of session tokens and CSRF tokens.

**Caido equivalent:** No direct equivalent. Export tokens via [Exports](/app/quickstart/exports.md) and analyze randomness with external statistical tools.

### DOM Invader

Browser-based testing for DOM XSS, prototype pollution, and web message vulnerabilities.

**Caido equivalent:** No direct equivalent. Test DOM-based issues manually with [Replay](/app/quickstart/replay.md) and browser DevTools, or use [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows) to flag suspicious patterns in traffic.

### Clickbandit

Generate clickjacking proof-of-concept overlays against a target page.

**Caido equivalent:** No direct equivalent. Build clickjacking PoCs manually using HTML iframes and [Replay](/app/quickstart/replay.md) to verify framing headers.

### Infiltrator

Modify compiled class files to test deserialization and injection in Java applications.

**Caido equivalent:** No direct equivalent. Use external Java instrumentation tools alongside Caido's [Replay](/app/quickstart/replay.md) for request manipulation.

### Collaborator

Out-of-band interaction server for detecting blind SSRF, XXE, and similar vulnerabilities.

**Caido equivalent:** [QuickSSRF](https://github.com/caido-community/quickssrf) and [OmniOAST](https://github.com/hahwul/OmniOAST).

### Logger

Capture and review traffic from all Burp tools in a unified log.

**Caido equivalent:** [Search](/app/quickstart/search.md) across all captured traffic. For enhanced logging, [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum).

### Organizer

Store and annotate interesting requests for later review.

**Caido equivalent:** [Findings](/app/quickstart/findings.md) for tracking issues and notable requests.

### Engagement tools

Suite of utilities for target analysis, content discovery, and PoC generation.

**Caido equivalent:** Combine [Sitemap](/app/quickstart/sitemap.md), [Automate](/app/quickstart/automate.md), and purpose-built plugins. See individual tools below.

### Target analyzer

Summarize a target's technology stack, content types, and dynamic URLs.

**Caido equivalent:** Review technology hints in [HTTP History](/app/quickstart/http_history.md) and use [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows) to flag stack indicators.

### Content discovery

Brute-force hidden directories and files on a web server.

**Caido equivalent:** [Automate](/app/quickstart/automate.md) with wordlists. See [Sending Payloads from a Wordlist](/app/guides/automate_wordlists.md).

### Generate CSRF PoC

Build cross-site request forgery proof-of-concept HTML from captured requests.

**Caido equivalent:** No direct equivalent. Craft CSRF PoC HTML manually from requests captured in [Replay](/app/quickstart/replay.md).

### Manual testing simulator

Simulate user interactions for manual testing scenarios.

**Caido equivalent:** [Replay](/app/quickstart/replay.md) for manual request manipulation. For browser-based interaction, use a [Preconfigured Browser](/app/guides/preconfigured_browser.md).
