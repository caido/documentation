---
description: "A side-by-side reference of common Burp Suite features and where to find their counterparts in Caido."
---

# Burp Suite vs Caido

This page provides a mapping of Burp Suite features to their counterparts in Caido.

## Tools

| Burp Suite | Caido |
|------------|-------|
| Dashboard | [Plugins](/quickstart/plugins.md) |
| Target | [Sitemap](/quickstart/sitemap.md)/[Scopes](/quickstart/scopes.md)/[Findings](/quickstart/findings.md) |
| Burp's browser | [Using a Preconfigured Browser](/guides/preconfigured_browser.md) |
| Proxy | [Intercept](/quickstart/intercept.md)/[HTTP History](/quickstart/http_history.md)/[WS History](/quickstart/ws_history.md)/[Match & Replace](/quickstart/match_replace.md) |
| Scanner | [Scanner](https://github.com/caido-community/scanner) |
| Intruder | [Automate](/quickstart/automate.md) |
| Repeater | [Replay](/quickstart/replay.md) |
| Decoder | [Convert Workflows](/concepts/workflows_intro.md#convert-workflows) |
| Comparer | [Compare](https://github.com/amrelsagaei/Compare) |
| Logger | [Search](/quickstart/search.md)/[Cerebrum](https://github.com/DewSecOff/Caido-Plugin-Cerebrum) |
| Collaborator | [QuickSSRF](https://github.com/caido-community/quickssrf)/[OmniOAST](https://github.com/hahwul/OmniOAST) |
| Search | [HTTPQL](/reference/httpql.md) |
| Organizer | [Findings](/quickstart/findings.md) |
| Filter settings | [Filters](/quickstart/filters.md) |

## Extensions

::: info
The functionality of many Burp Suite Bambdas, custom scan checks, and extensions can be implemented using [workflows](http://localhost:5173/concepts/workflows_intro.html) in Caido or by [defining checks for the Scanner plugin](https://github.com/caido-community/scanner#check-definition).
:::

| Burp Suite | Caido |
|------------|-------|
| Param Miner | [ParamFinder](https://github.com/bebiksior/ParamFinder) |
| JWT Editor | [JWT Analyzer](https://github.com/amrelsagaei/JWT-Analyzer) |
| JS Miner | [Data Grep](https://github.com/caido-community/data-grep) |
| Active Scan++ | [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition) |
| Content Type Converter | [Convert Tools](https://github.com/caido-community/convert-tools) |
| Logger++ | [Search](/guides/search_filtering.md) |
| Hackvertor | [Convert Workflows](/concepts/workflows_intro.html#convert-workflows) |
| 403 Bypasser | [403Bypasser](https://github.com/bebiksior/Caido403Bypasser) |
| InQL | [GraphQL Analyzer](https://github.com/amrelsagaei/GraphQL-Analyzer) |
| Auth Analyzer | [Authify](https://github.com/saltify7/Authify) |
| Bypass WAF| [Passive Workflows](/concepts/workflows_intro.html#passive-workflows) |
| Reflected Parameters | [Passive Workflows](/concepts/workflows_intro.html#passive-workflows) |
| Sensitive Discoverer | [Passive Workflows](/concepts/workflows_intro.html#passive-workflows) |
| Additional Scanner Checks | [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition)/[Passive Workflows](/concepts/workflows_intro.html#passive-workflows) |
| CORS*, Additional CORS Checks | [Scanner: Custom Checks](https://github.com/caido-community/scanner#check-definition)/[Passive Workflows](/concepts/workflows_intro.html#passive-workflows) |
| Request Minimizer | [Squash](https://github.com/evanconnelly/squash) |
| Add Custom Header | [Add a Header Workflow](/tutorials/add_header.md) |
| CSP Auditor | [CSP Auditor](https://github.com/GangGreenTemperTatum/csp-auditor) |
| AuthMatrix | [AuthMatrix](https://github.com/caido-community/authmatrix) |
| AWS Signer | [Resign AWS Requests Workflow](/tutorials/aws_signature.md) |
| Notes | [Notes++](https://github.com/caido-community/NotesPlusPlus) |
| YesWeBurp | [YesWeCaido](https://github.com/yeswehack/yeswecaido) |
| Burp Share Requests | [Drop](https://github.com/caido-community/drop) |

## AI

| Burp Suite | Caido |
|------------|-------|
| Using Burp AI in Repeater | [Shift](https://github.com/caido-community/shift) |
| Generating AI-powered explanations | [Prompting the Assistant to Explain Requests](/guides/assistant_explain.md) |
| Automating tasks with custom actions | [Shift](https://github.com/caido-community/shift) |

::: tip Additional Caido AI Plugins

- [Chatio](https://github.com/amrelsagaei/Chatio)
- [Ebka AI Assistant](https://github.com/Slonser/Ebka-Caido-AI)
:::
