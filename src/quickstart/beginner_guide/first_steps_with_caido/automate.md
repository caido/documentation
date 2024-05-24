# Automating Brute-Forcing/Fuzzing

## Automate

_For advanced documentation on this topic - click [here](/reference/features/testing/automate.md)._

---

> To send a request to `Automate`, either right-click inside the request pane of `Intercept` or `HTTP History` or focus the request pane and use `CTRL+M`.

<img alt="Automate tab." src="/_images/automate_generator_tab.png">

1. Select the `Automate` tab from the left-hand menu within the Caido window.
2. Highlight the element you wish to brute-force/fuzz.
3. Once the element is highlighted - click `+` to convert it to a placeholder. **_You can remove a placeholder/placeholders by selecting them and then clicking `-` or you can clear all placeholders by clicking `Clear`._**
4. This pane gives multiple payload options: `Hosted File` - select from your uploaded files (**_file upload documentation can be found [here](../setup/file_upload.md))_**. `Simple List` - manually create a list. `Null Payload` - Set a number of null payloads to generate.
5. This pane presents additional options for fine-tuning your brute-force/fuzzing campaign such as: setting the value of the **Connection** header to **_keep-alive_** or **_close_**, automatically updating the **Content-Length** header value to match body data size when a placeholder/placeholders are present within the body of the request, concurrency handling options and error handling options.
6. Click `Run` when your automation campaign is configured to begin brute-forcing/fuzzing.
7. The configuration tab as well as the associated results tab will be paired next to each other here.

## Automate Results

---

To inspect the results of your `Automate` campaign - proceed with the following steps:

<img alt="Automate results." src="/_images/automate_results_tab.png">

1. Click the paired tab.
2. Each request will be displayed in this pane.
3. This pane will display the selected request and it's associated response.
4. This is the resulting list of options presented after right-clicking within the request pane.
