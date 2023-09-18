# Assistant

> **PRO FEATURE**

The Assistant page is a feature offered for **Pro users**.
It helps you understand requests, explains elements like headers and suggests attack vectors.

The AI assistant in Caido is taylored for security research.

Data is sent to a third party (OpenAI) and can be stored for up to 30 days.

Make sure to anonymize sensitive information when you use this tool.

## Credits system

To prevent abuse, we use a credit system.

Credit usage depends on the model used (currently only ChatGPT 3.5).

- 1 credit = 1 token
- A token is roughly a word or ¾ of a word.
- For more info on what a token is : [ChatGPT Tokenizer](https://platform.openai.com/tokenizer)

## Explain requests

The Assistant page helps you understand what a request is doing by explaining it in natural language.

Be careful if your payload is huge, it can cost a lot of credits.

## Generate CSRF

The Assistant page currently allows you to generate proof of concept CSRF's. We are planning to add more attacks in the future.

You can generate CSRF payloads for a specified request.
