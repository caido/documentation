---
description: "Guide for using Caido's AI Assistant to generate Cross-Site Request Forgery (CSRF) proof-of-concept attacks from HTTP requests."
---

# Generating CSRF PoCs

<ProContainer>
The <b>Assistant</b> are only available to users with Individual or Team tier subscriptions.
</ProContainer>

::: warning
Submitted data is sent to a third-party (OpenAI) and can be stored for up to 30 days. Due to this, **anonymize sensitive data** when using the Assistant. Sensitive data may be unintentionally submitted when using the Assistant context menu options. Before using any context menu option, manually review all content to ensure no sensitive data is included. For more information, review:

- [OpenAI's privacy policy.](https://openai.com/policies/privacy-policy)
- [Caido's privacy policy.](https://caido.io/privacy)
:::

To prompt the Assistant to generate Cross-Site Request Forgery (CSRF) attack proof-of-concepts, **right-click** within a request pane to open the context menu, hover your mouse cursor over <code><Icon icon="fas fa-comment" /> Assistant</code>, and select `Generate CSRF PoC`.

<img alt="The context menu options for the Assistant." src="/_images/assistant_options.png" center>

Or, submit a prompt directly in the `Send a message` input field along with the request:

```txt
Create a CSRF PoC in HTML that will automatically submit the form for the following request:
POST /change/email HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:141.0) Gecko/20100101 Firefox/141.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br, zstd
DNT: 1
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: none
Sec-Fetch-User: ?1
Priority: u=0, i
Pragma: no-cache
Cache-Control: no-cache
Cookie: session_id=123ABC321XYZ
Content-Type: application/x-www-form-urlencoded
Content-Length: 23

email=attacker@caido.io
```

<img alt="The generated CSRF proof-of-concept." src="/_images/assistant_csrf_poc.png" center>
