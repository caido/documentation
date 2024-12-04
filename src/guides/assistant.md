# Assistant

<ProContainer>
<b>The Assistant</b> is only available to Caido Pro users.
</ProContainer>

The `Assistant` is an AI LLM avaiable to Caido Pro users. Specifically tailored for security research - the Assistant can help you understand requests, provide explanations of web traffic elements and suggests attack vectors.

::: warning
Make sure to **anonymize sensitive information** when you use this tool. See [our privacy policy](https://caido.io/privacy) for more information.
:::

::: info
Data is sent to a third party (OpenAI) and can be stored for up to 30 days. See [their privacy policy](https://openai.com/policies/privacy-policy) for more information.
:::

## What is an LLM?

Large Language Models (LLM) like GPT-3.5 are created through deep learning techniques and have the capability to understand, generate and manipulate text in a wide range of natural language tasks.

However, there are certains limitations to LLMs such as hallucinations (LLMs generating information that is not accurate or even completely fabricated), lack of understanding and biases.

LLMs are **not going to "hack for you"** since they have no consciousness or intent. They generate responses based solely on patterns in the data and input they receive.

## Credits System

To prevent abuse, we use a credit system. Each Pro user gets 500,000 credits per month.
Credit usage depends on the model used. We currently offer ChatGPT-3.5 Turbo, but we will add support for the other models eventually.

- **1 credit is equal to 1 token**.
- A token is roughly a word or ¾ of a word.
- If you send follow-up messages in the same session, the tokens of all previous messages count in your credit usage.
- You can send a maximum of **4000 tokens** in a single session.

::: info
For more information on tokens, visit [ChatGPT Tokenizer](https://platform.openai.com/tokenizer).
:::

## Assistant Usage Examples

::: tip
You can easily access the Assistant by right-clicking on a request in `HTTP History` or `Search`. `Explain` and `Generate CSRF PoC` are default selections and will produce results similar to the following:
:::

::: warning
When using the right-click menu shortcut to call upon the Assistant - the request is sent automatically along with any sensitive information contained in it.

- If you need to anonymize data, copy the prompt the `Assistant` should use, paste it in a new attempt with your request and remove any sensitive information before submitting it.
:::

### Provide an Explanation of a Request

The Assistant can help you understand what a request is doing by explaining it in natural language.

<details>
<summary>Prompt</summary>

```
Explain the operation being performed by the endpoint in this request:
[PASTE REQUEST HERE]
```

</details>

<img alt="Assistant request." src="/_images/assistant_explain_req.png" center/>

### Generate a POC CSRF Attack

The Assistant page currently allows you to generate a proof-of-concept for a [CSRF Attack](https://owasp.org/www-community/attacks/csrf).

<details>
<summary>Prompt</summary>

```
Create a CSRF PoC in HTML that will automatically submit the form for the following request:
[PASTE REQUEST HERE]
```

</details>

<img  alt="assistant csrf" src="/_images/assistant_poc_csrf.png" center/>

## Additional Information

::: tip
Be careful if your payload is huge, it can cost a lot of credits.
:::
