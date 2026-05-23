---
description: "Map Burp Suite Pro built-in tools and product features to Caido."
---

# Core

Burp Suite Pro built-in tools, sub-features, and product concepts mapped to Caido.

## Interface & navigation

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

## Proxy

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

### Invisible proxying

Forward non-proxy-aware clients through Burp without explicit proxy configuration.

**Caido equivalent:** [Invisible Proxy](/app/tutorials/invisible_proxy.md).

### Managing CA certificates

Install and manage Burp's CA certificate for intercepting HTTPS traffic.

**Caido equivalent:** Export and install Caido's CA from **Settings → Network → TLS**. See [Setup](/app/quickstart/setup.md) for initial configuration.

## Target & scope

### Target

Burp's view of in-scope hosts, site structure, and discovered content.

**Caido equivalent:** [Sitemap](/app/quickstart/sitemap.md), [Scopes](/app/quickstart/scopes.md), and [Findings](/app/quickstart/findings.md).

### Site map

Tree view of discovered hosts, directories, and endpoints.

**Caido equivalent:** [Sitemap](/app/quickstart/sitemap.md).

### Scope

Define which hosts and URLs are in scope for testing.

**Caido equivalent:** [Scopes](/app/quickstart/scopes.md).

### Crawl paths

Visualize how Burp's crawler reached specific endpoints.

**Caido equivalent:** No direct equivalent. Use [Sitemap](/app/quickstart/sitemap.md) to review discovered paths and [Workflows](/app/quickstart/workflows.md) for custom crawling logic.

### Issue definitions

Customize how Burp Scanner reports and categorizes issue types.

**Caido equivalent:** [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) for defining custom finding types.

## Request editing

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

## Scanning

### Scanner

Burp's automated vulnerability scanner for passive and active testing.

**Caido equivalent:** [Scanner](https://github.com/caido-community/scanner) plugin.

### Live tasks

Continuous background crawling and auditing of in-scope traffic as you browse.

**Caido equivalent:** [Passive Workflows](/app/concepts/workflows_intro.md#passive-workflows) for real-time analysis. For active scanning, run [Scanner](https://github.com/caido-community/scanner) against selected requests.

### Configuring scans

Adjust scan speed, insertion points, and audit checks for Burp Scanner.

**Caido equivalent:** Configure checks in the [Scanner plugin](https://github.com/caido-community/scanner#check-definition). Tune workflow behavior in [Workflows](/app/quickstart/workflows.md).

### Application logins

Provide credentials or recorded login sequences so Burp Scanner can test authenticated areas.

**Caido equivalent:** [Environment Variables](/app/quickstart/environment.md) for storing credentials. Record login flows manually in [Replay](/app/quickstart/replay.md) and replay authenticated requests through [Automate](/app/quickstart/automate.md).

### Resource pools

Limit concurrent scan threads to control resource usage during scans.

**Caido equivalent:** No direct equivalent. Throttle [Automate](/app/guides/automate_rate_limiting.md) campaigns manually or use workflow delays.

## Analysis & utilities

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

## Collaboration & logging

### Collaborator

Out-of-band interaction server for detecting blind SSRF, XXE, and similar vulnerabilities.

**Caido equivalent:** [QuickSSRF](https://github.com/caido-community/quickssrf) and [OmniOAST](https://github.com/hahwul/OmniOAST).

### Logger

Capture and review traffic from all Burp tools in a unified log.

**Caido equivalent:** [Search](/app/quickstart/search.md) across all captured traffic. For enhanced logging, [Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum).

## Organization

### Organizer

Store and annotate interesting requests for later review.

**Caido equivalent:** [Findings](/app/quickstart/findings.md) for tracking issues and notable requests.

## Engagement tools

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

## Browser & transport

### Burp's browser

Chromium-based browser preconfigured to proxy through Burp with DOM Invader integration.

**Caido equivalent:** [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md).

### Testing with HTTP/2

Send and manipulate HTTP/2 requests, including exclusive attacks.

**Caido equivalent:** Caido supports HTTP/2 traffic capture and replay. Send HTTP/2 requests through [Replay](/app/quickstart/replay.md) when the connection supports it.

### Testing mobile applications

Proxy traffic from iOS and Android devices through Burp.

**Caido equivalent:** Configure mobile devices to proxy through Caido using the same approach as Burp: install Caido's CA certificate and point the device proxy to your Caido instance. See [Setup](/app/quickstart/setup.md).

### External browser configuration

Use a system browser other than Burp's embedded browser with the proxy.

**Caido equivalent:** [Using a Preconfigured Browser](/app/guides/preconfigured_browser.md) or configure any browser's proxy settings to point at Caido.

## Project & configuration

### Project files

Save and restore Burp state including traffic, site map, and configuration.

**Caido equivalent:** [Workspace](/app/quickstart/workspace.md) for project management. Export traffic with [Exports](/app/quickstart/exports.md).

### Session handling rules

Automatically modify requests based on session state using macros and rules.

**Caido equivalent:** No direct equivalent. Use [Environment Variables](/app/quickstart/environment.md) for token storage and [Workflows](/app/quickstart/workflows.md) to inject session values into requests.

### Macros

Recorded sequences of requests replayed to maintain session state.

**Caido equivalent:** No direct equivalent. Chain requests manually in [Replay](/app/quickstart/replay.md) or automate login sequences with [Automate](/app/quickstart/automate.md).

### Configuration library

Save and reuse Burp configuration profiles across projects.

**Caido equivalent:** No direct equivalent. Export plugin settings individually. Scope and filter configurations persist within each [Workspace](/app/quickstart/workspace.md).

### Save custom configuration

Export specific Burp settings as shareable configuration files.

**Caido equivalent:** No direct equivalent. Share [Workflows](/app/quickstart/workflows.md) and plugin configurations through files or version control.

## Reporting

### Generating a report

Export scan results and findings as formatted HTML or XML reports.

**Caido equivalent:** [Findings](/app/quickstart/findings.md) for tracking issues. Export raw data with [Exports](/app/quickstart/exports.md). Use plugins for formatted report output.

## Running scans (operations)

### Running scans

Launch full crawl-and-audit or targeted scans against web applications.

**Caido equivalent:** [Scanner](https://github.com/caido-community/scanner) plugin for active scanning. Combine with [Automate](/app/quickstart/automate.md) for targeted fuzzing campaigns.

### Scanning specific HTTP messages

Run an audit against selected requests rather than an entire site.

**Caido equivalent:** Send selected requests from [HTTP History](/app/quickstart/http_history.md) to [Scanner](https://github.com/caido-community/scanner) or [Automate](/app/quickstart/automate.md).

### Viewing scan results

Review discovered issues, audit items, and event logs from scans.

**Caido equivalent:** [Findings](/app/quickstart/findings.md) and the Scanner plugin results view.
