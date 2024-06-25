# Automating Brute-Forcing/Fuzzing

## Automate

::: tip
To send a request to `Automate`, either right-click inside the request pane of `Intercept` or `HTTP History` or focus the request pane and use `CTRL+M`.
:::

<img alt="Automate tab." src="/_images/automate_tab.png" center/>

1. Select the `Automate` tab from the left-hand menu within the Caido window.
2. Select the [Attack Strategy](#attack-strategies).
2. Highlight the element(s) you wish to brute-force/fuzz.
3. Once the element is highlighted - click `+` to convert it to a placeholder. **_You can remove a placeholder/placeholders by selecting them and then clicking `-` or you can clear all placeholders by clicking `Clear`._**
4. Select a [Payload Type](#payload-types), apply [Preprocessors](#preprocessors) and set additional [Settings](#settings) within this pane.
5. Click `Run` when your automation campaign is configured to begin brute-forcing/fuzzing.
7. The configuration tab as well as the associated results tab will be paired next to each other here.

## Automate Results

To inspect the results of your `Automate` campaign - proceed with the following steps:

<img alt="Automate results." src="/_images/automate_results_tab.png">

1. Click the paired tab.
2. Each request will be displayed in this pane.
3. This pane will display the selected request and it's associated response.
4. This is the resulting list of options presented after right-clicking within the request pane.
5. The [HTTPQL query](/concepts/essentials/httpql.md) input bar.

## Attack Strategies

Caido currently provides the following attack `Strategies`:

<img alt="Automate Strategies." src="/_images/strategies_automate.png" center/>

- **Sequential** _(Sniper)_: This will replace markers one at a time. If you have multiple markers, **only one** will be replaced for any given request.
- **All** _(Battering Ram)_: This will replace all the markers with the same value.
- **Parallel** _(Pitchfork)_: This will replace all the markers with different values from the different payloads. This requires payloads that each have the same number of elements.
- **Matrix** _(Cluster Bomb)_: This will replace all the markers with all the combinations of payloads. Payloads can have different number of elements, but beware that this can create a large number of requests.

## Payload Types

For each payload, you can choose a `Type` from the list:

<img alt="Automate Types." src="/_images/types_automate.png" center/>

- **Hosted File:** Allows you to select one of the files you had previously uploaded to the Caido Instance. View the [Files](/reference/features/workspace/files.md) documentation for more information.
- **Simple List:** For cases where you want to test a short manually created list of elements.
- **Null Payload:** Generate requests without changing anything in it.
- **Numbers:** Generates a range of specified integers to use as a payload.

## Preprocessors

Preprocessors enable you to apply additional modifications to the payloads.

<img alt="Automate Types." src="/_images/automate_preprocessors.png" center/>

- **Workflow**: Select a default or custom made Workflow to apply to the requests that will be sent in your campaign. View the [Workflow](/reference/workflows/workflows.md) documentation for more information.
- **URL Encode**: This option includes an input bar in which you can supply characters to URL encode before the requests of your campaign are sent. There is also a checkbox to toggle between encoding/not encoding non-ASCII characters.
- **Prefix**: Allows you to prefix a payload value with a supplied value.
- **Suffix**: Allows you to append a supplied suffix value to a payload value.

<ProContainer>
<b>Workflow Preprocessors</b> are only available to Caido Pro users.
</ProContainer>

## Settings

Additional setting options allow you to fine tune how the Automate session will run.

<img alt="Automate settings." src="/_images/settings_automate.png" center/>

- **Close Connection:** Toggle between keeping the socket connection or closing the socket connection after the paired response to a request is received.
- **Update Content-Length:** Automatically update the value of the Content-Length header to account for the payload.
- **Delay (ms) between requests:** The time in milliseconds to sleep between forwarding requests.
- **# of workers:** The number of threads to run.
- **Delay (ms) before retry:** The time in milliseconds to sleep until retrying a failed request.
- **Max retries:** The number of reattempts to perform upon a failed request before moving on to the following requests.
