# Preprocessing Payloads

<ProContainer>
<b>Preprocessors</b> are only available to users with Individual or Team tier subscriptions.
</ProContainer>

Additional modifications can be made to payload values before they are included in Automate session requests from the `Preprocessors` tab.

<img alt="The Preprocessors interface." src="/_images/automate_preprocessors.png" center/>

---

<div class="video small">
  <iframe src="https://www.youtube.com/embed/PrXVDR-YCXE?si=XbnW0YRhlydOXlji" title="YouTube video player." frameborder="0"></iframe>
</div>

## Applying a Workflow

With `Workflow` selected from the Preprocessor type drop-down menu, you can expand the `Select a workflow` drop-down menu and select a Workflow to apply to a payload.

<img alt="The drop-down menu Workflow options." src="/_images/automate_workflow.png" center/>

Once a Workflow has been selected, **click** on the `Add` button to apply the Preprocessor.

## URL Encoding

To ensure payloads are interpreted as intended, you can URL-encode their values by selecting `URL Encode` from the Preprocessor type drop-down menu.

<img alt="The URL Encode drop-down menu option." src="/_images/automate_url_encode.png" center/>

This option will present a `Charset` input field that specifies which characters will be encoded. To add to this list, **click** inside the input field and type in any additional characters.

<img alt="The URL Encode drop-down menu option." src="/_images/automate_url_encode_charset.png" center/>

By default, `Encode non-ASCII characters` is enabled. To disable this feature, **click** on its checkbox to remove its fill.

<img alt="The URL Encode drop-down menu option." src="/_images/automate_url_encode_non_ascii.png" center/>

To apply the URL Encode Preprocessor **click** on the `Add` button.

## Adding a Prefix or Suffix

By selecting either `Prefix` or `Suffix` from the Preprocessor type drop-down menu, you can add a prefix or a suffix to payload values. Each option will present an input field for typing the attached value.

<img alt="The Prefix option." src="/_images/automate_prefix.png" center/>

---

<img alt="The Suffix option." src="/_images/automate_suffix.png" center/>

## Ordering

Any added Preprocessors are displayed in the `Active preprocessors` list and are applied to payloads in ascending order. To reorder their application, **click** on a Preprocessor from the list and use the `^` and `˅` buttons.

<img alt="The list of applied Preprocessors." src="/_images/automate_preprocessors_order.png" center/>
