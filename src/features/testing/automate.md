# Automate

The Automate page allows you to send requests in bulk. This feature provides a flexible way to bruteforce certain parameters of requests using wordlists.

You can create a session from scratch, or start from any existing request inside the application.

![automate](/_images/automate.png)

## Payloads

To replace an element in your query, you first have to highlight it and click on `Mark`. This will unlock the payload section on the right. Depending on the attack strategy and the number of markers, you will have one or more payloads to configure.

### Strategies

We currently provide 4 attack strategies:

- **Sequential:** This will replace markers one at a time. If you have multiple markers, **only one** will be replaced for any given request.
- **All:** This will replace all the markers with the same value.
- **Parallel:** This will replace all the markers with different values from the different payloads. This requires payloads that each have the same number of elements.
- **Matrix:** This will replace all the markers with all the combinations of payloads. Payloads can have different number of elements, but beware that this can create a large number of requests.

![automate strategy](/_images/automate_strategy.png)

### Types

For each payload, you can choose a `type` from the list:

- **Hosted File:** This allows you to select one of the files you had previously uploaded to the caido instance using the [Files](/features/misc/files.md) page.
- **Simple List:** This is for cases where you want to test a short list of elements.
- **Null Payload:** This is useful to generate requests without changing anything in it.

![automate payload](/_images/automate_payload.png)

## Settings

The settings allow you to choose how the Automate session will run. This allows you to throttle the bruteforce to avoid limits and retry in case of error.
We do not limit the number of workers, but we suggest to not put too high a number unless latency is an issue.

![automate settings](/_images/automate_settings.png)
