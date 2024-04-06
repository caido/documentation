# Assistant

> **PRO FEATURE**

The Assistant helps you understand requests, explains elements like headers and suggests attack vectors.
The AI assistant in Caido is taylored for security research. See [our privacy policy](https://caido.io/privacy) for more info.

Make sure to **anonymize sensitive information** when you use this tool.

> Data is sent to a third party (OpenAI) and can be stored for up to 30 days. See [their privacy policy](https://openai.com/policies/privacy-policy) for more info.

## What are models?

Large Language Models (LLM) like GPT-3.5 are created through deep learning techniques and have the capability to understand, generate and manipulate text in a wide range of natural language tasks.

However, there are certains limitations to LLMs such as hallucinations (LLMs generating info that is not accurate or even completely fabricated), lack of understanding and biases.

LLMs are **not going to "hack for you"** since they have no consciousness or intent. They generate responses based solely on patterns in the data and input they receive.

## Credits system

To prevent abuse, we use a credit system. Each pro user gets 500 000 credits per month.
Credit usage depends on the model used. We currently offer ChatGPT-3.5 Turbo, but we will add support for the other models eventually.

- **1 credit is equal to 1 token**
- A token is roughly a word or ¾ of a word.
  <img alt="Token computation" src="/_images/token_system.png">
- If you send follow-up messages in the same session, the tokens of all previous messages count in your credit usage
- You can send a maximum of **4000 tokens** in a single session

For more info on what tokens are, check the [ChatGPT Tokenizer](https://platform.openai.com/tokenizer).

## Explain requests

<details>
<summary>Prompt</summary>

```
Explain the operation being performed by the endpoint in this request:
===
<YOUR REQUEST HERE>
===
```

</details>

The Assistant can help you understand what a request is doing by explaining it in natural language.

Be careful if your payload is huge, it can cost a lot of credits.

<img src="/_images/assistant_request.png" alt="assistant request" width="1500" center/>

<br>

You can access the Assistant feature easily by right-clicking on a request in `HTTP History` or `Search`.

<img src="/_images/right_click_explain.png" alt="explain right click" width="1500" center/>

> Warning: the request is sent automatically along with any sensitive information contained in it

If you need to anonymize data, copy the prompt the `Assistant` should use, paste it in a new attempt with your request and remove any sensitive information before submitting it.

## Generate CSRF

<details>
<summary>Prompt</summary>

```
Generate a CSRF PoC in HTML for the following request:
===
<YOUR REQUEST HERE>
===
```

</details>

The Assistant page currently allows you to generate proof of concept [CSRF](https://owasp.org/www-community/attacks/csrf). We are planning to add more attacks in the future.

You can generate CSRF payloads for a specified request with the right click menu, similar to the `Explain` request.

<img src="/_images/assistant_csrf.png" alt="assistant csrf" width="1500" center/>
