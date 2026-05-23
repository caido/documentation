---
description: "Map Burp Suite Pro AI features to Caido assistants and plugins."
---

# Burp AI

Burp Suite Pro AI features and their Caido equivalents.

### Burp AI

Burp AI is PortSwigger's built-in assistant for explaining requests, suggesting payloads, and running custom actions inside Repeater.

Caido does not ship a single bundled AI product like Burp AI. Use the native **Assistant** for explanations and analysis, and community AI plugins such as **Shift** for request editing and automation. Each plugin manages its own API keys rather than a central credits system.

#### Resources

- [Assistant](/app/quickstart/assistant.md)
- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Chatio](https://github.com/amrelsagaei/Chatio) (GitHub)
- [Ebka AI Assistant](https://github.com/Slonser/Ebka-Caido-AI) (GitHub)

### Using Burp AI in Repeater

In Burp, AI actions run directly inside Repeater tabs to modify or analyze the current request.

Use the **Shift** plugin for AI-assisted request editing alongside native **Replay**. Shift provides in-context AI actions on requests, similar to Burp AI in Repeater, but as a plugin rather than a built-in tool.

#### Resources

- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Shift Tutorial](/app/tutorials/shift.md)
- [Replay](/app/quickstart/replay.md)

### Generating AI-powered explanations

Burp can generate natural-language explanations of HTTP requests and responses from Repeater.

Use Caido's native **Assistant** to explain requests and responses in natural language. The Assistant is built into Caido and does not require a separate plugin for basic explanations.

#### Resources

- [Assistant](/app/quickstart/assistant.md)
- [Prompting the Assistant to Explain Requests](/app/guides/assistant_explain.md)
- [Choosing an Assistant Model](/app/guides/assistant_model.md)

### Automating tasks with custom actions

Burp AI custom actions automate repetitive Repeater tasks with prompts and predefined workflows.

Use the **Shift** plugin for AI-driven automation on requests. For non-AI automation, native **Workflows** and **Automate** cover repetitive task automation without an LLM.

#### Resources

- [Shift](https://github.com/caido-community/shift) (GitHub)
- [Workflows](/app/quickstart/workflows.md)
- [Automate](/app/quickstart/automate.md)

### AI credits

Burp tracks AI usage through a credits system tied to your PortSwigger subscription.

Caido has no central AI credits system. AI plugins use your own API keys (OpenAI, Anthropic, etc.) or plugin-specific billing configured in each plugin's settings.

#### Resources

- [Assistant](/app/quickstart/assistant.md)
- [Choosing an Assistant Model](/app/guides/assistant_model.md)
