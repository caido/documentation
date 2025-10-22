---
description: "A step-by-step guide to changing the LLM model in Caido's AI Assistant including available models, token costs, and credit usage."
---

# Changing the LLM Model

<ProContainer>
The <b>Assistant</b> are only available to users with Individual or Team tier subscriptions.
</ProContainer>

::: warning
Submitted data is sent to the LLM's third-party provider (OpenAI) and can be stored for up to 30 days. Due to this, **anonymize sensitive data** when using the Assistant. Sensitive data may be unintentionally submitted when using the Assistant context menu options. Before using any context menu option, manually review all content to ensure no sensitive data is included. For more information, review:

- [OpenAI's Privacy Policy](https://openai.com/policies/privacy-policy)
- [Caido's Privacy Policy](https://caido.io/privacy)
:::

::: info
"Tokens" are the measurement used by OpenAI LLMs when processing text. Each Individual and Team tier subscription user gets 500,000 credits per month which can be exchanged for tokens.

Since LLMs maintain context based on all tokens in a session, be aware that each subsequent message in a conversation will incur a greater credit cost as the sum of all tokens is consumed. [Estimate credit costs with the OpenAI Tokenizer tool.](https://platform.openai.com/tokenizer)
:::

The Assistant supports the following OpenAI LLM models, each with a different credit to token cost ratio:

- GPT-4o Mini (1:1)
- GPT-3.5 Turbo (2:1)
- GPT-4o (10:1)

To switch models, **click** on the drop-down menu within a new conversation and make a selection.

<img alt="The drop-down menu model options for the Assistant." src="/_images/assistant_models.png" center>

::: info
Currently, the Assistant does not support API keys for other AI providers or configuration for use with local LLMs. [View Issue #1480 on GitHub for more information.](https://github.com/caido/caido/issues/1480)
:::
