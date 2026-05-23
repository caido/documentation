---
description: "Map Burp Suite Pro AI features to Caido assistants and plugins."
---

# AI

Burp Suite Pro AI features and their Caido equivalents.

## Burp AI

Burp AI is PortSwigger's built-in assistant for explaining requests, suggesting payloads, and running custom actions inside Repeater. Caido does not ship a single bundled AI product; instead, use the built-in Assistant and community AI plugins.

**Caido equivalent:** [Assistant](/app/quickstart/assistant.md) and AI plugins such as [Shift](https://github.com/caido-community/shift).

## Using Burp AI in Repeater

In Burp, AI actions run directly inside Repeater tabs to modify or analyze the current request.

**Caido equivalent:** [Shift](https://github.com/caido-community/shift) for AI-assisted request editing, combined with [Replay](/app/quickstart/replay.md) for manual request manipulation.

## Generating AI-powered explanations

Burp can generate natural-language explanations of HTTP requests and responses from Repeater.

**Caido equivalent:** [Prompting the Assistant to Explain Requests](/app/guides/assistant_explain.md).

## Automating tasks with custom actions

Burp AI custom actions automate repetitive Repeater tasks with prompts and predefined workflows.

**Caido equivalent:** [Shift](https://github.com/caido-community/shift) for AI-driven automation. For non-AI automation, use [Workflows](/app/quickstart/workflows.md) and [Automate](/app/quickstart/automate.md).

## AI credits

Burp tracks AI usage through a credits system tied to your PortSwigger subscription.

**Caido equivalent:** No direct equivalent. Caido AI plugins use your own API keys or plugin-specific billing. Configure credentials in each plugin's settings.

## Additional Caido AI plugins

- [Chatio](https://github.com/amrelsagaei/Chatio)
- [Ebka AI Assistant](https://github.com/Slonser/Ebka-Caido-AI)
