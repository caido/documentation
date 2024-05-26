# Automate

The `Automate` tab allows you to send requests in bulk. This feature provides a flexible way to initiate bruteforce/fuzzing campaigns to rapidy modify certain parameters of requests using wordlists.

You can create a Session from scratch, or start from any existing request inside the application.

<img alt="Automate tab." src="/_images/automate_generator_tab.png" center/>

1. Select the `Automate` tab from the left-hand menu within the Caido window.
2. Highlight the element you wish to brute-force/fuzz.
3. Once the element is highlighted - click `+` to convert it to a placeholder. **_You can remove a placeholder/placeholders by selecting them and then clicking `-` or you can clear all placeholders by clicking `Clear`._**
4. This pane gives multiple payload `Type` options: `Hosted File` - select from your uploaded files (_file upload documentation can be found [here](../setup/file_upload.md)_). `Simple List` - manually create a list. `Null Payload` - Set a number of null payloads to generate.
5. This pane presents additional options for fine-tuning your brute-force/fuzzing campaign such as: setting the value of the **Connection** header to **_keep-alive_** or **_close_**, automatically updating the **Content-Length** header value to match body data size when a placeholder/placeholders are present within the body of the request, concurrency handling options and error handling options.
6. Click `Run` when your automation campaign is configured to begin brute-forcing/fuzzing.
7. The configuration tab as well as the associated results tab will be paired next to each other here.

## Automate Results

To inspect the results of your `Automate` campaign - proceed with the following steps:

<img alt="Automate results." src="/_images/automate_results_tab.png" center/>

1. Click the paired tab.
2. Each request will be displayed in this pane.
3. This pane will display the selected request and it's associated response.
4. This is the resulting list of options presented after right-clicking within the request pane.

## Strategies

<img alt="Automate Strategies." src="/_images/strategies_automate.png" center/>

Caido currently provides the following attack `Strategies`:

- **Sequential** _(Sniper)_: This will replace markers one at a time. If you have multiple markers, **only one** will be replaced for any given request.
- **All** _(Battering ram)_: This will replace all the markers with the same value.
- **Parallel** _(Pitchfork)_: This will replace all the markers with different values from the different payloads. This requires payloads that each have the same number of elements.
- **Matrix** _(Cluster bomb)_: This will replace all the markers with all the combinations of payloads. Payloads can have different number of elements, but beware that this can create a large number of requests.

## Types

<img alt="Automate Types." src="/_images/types_automate.png" center/>

For each payload, you can choose a `Type` from the list:

- **Hosted File:** This allows you to select one of the files you had previously uploaded to the Caido Instance. View the [Files](/reference/features/workspace/files.md) documentation for more information.
- **Simple List:** This is for cases where you want to test a short manually created list of elements.
- **Null Payload:** This is useful to generate requests without changing anything in it.

## Settings

<img alt="Automate settings." src="/_images/settings_automate.png" center/>

The settings allow you to choose how the Automate session will run. This allows you to throttle the bruteforce to avoid limits and retry in case of error.
We do not limit the number of workers, but we suggest to not put too high a number unless latency is an issue.
