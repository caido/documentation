# Forwarding and Modifying Requests Repeatedly

## Replay

_For advanced documentation on this topic - click [here](/reference/features/testing/replay.md)._

`Replay` allows you to repeatedly forward modified requests. **Requests** are shown on the left and **responses** are shown on the right.

::: tip
To send a request to `Replay`, either right-click inside the request pane of `Intercept` or `HTTP History` or focus the request pane and use `CTRL+R`.
:::

<img alt="Intercept tab." src="/_images/replay_tab.png" center/>

1. Select the `Replay` tab from the left-hand menu within the Caido window.
2. These numerically named tabs are the requests that have been sent to `Replay` in the order they were sent. To select a request, simply click on the desired tab. _You can arbitrarily rename a tab by right-clicking it and selecting `Rename`_.
3. Click the `Send` button to forward the request. Clicking `<` or `>` will sort through the forwarding history of the currently loaded request (_in Caido, the historical recording of forwarded requests is known as a **Session**_).
4. Make any desired modifications to the request in this pane.
5. Once a request has been forwarded - this pane presents the associated response.
6. This is the resulting list of options presented after right-clicking within the request pane.

## Replay Collections and Sessions

With Caido, requests are easily organized with the use of **Sessions** and **Collections**.

- **Sessions**: everytime you edit and forward a request within `Replay` - the history of these forwards is recorded into a **Session**.
- **Collections**: you can group Sessions into **Collections** which allows you to organize your requests by shared traits.

<img alt="Sessions and Collections." src="/_images/session_collection_tab.png" center/>

1. The request Sessions.
2. The Collection. You can view the list of associated Sessions by clicking `>` to the left of the Collection. To collapse the list, click the `∨`.
3. The request currently in the pane/the total number of recorded requests.
4. Clicking the `New Session` button will present an empty request template. Create a new request manually or enter a URL into the `Enter a connection URL` input box and Caido will automatically generate a valid basic request.
5. Clicking the drop-down arrow of the `New Session` button will present the option to create a new Collection. Click `New Collection` to proceed with this option.

::: tip
To move Sessions between Collections - click, hold and drag the target Session and release on top of the target Collection.
:::

## Automating Brute-Forcing/Fuzzing

Once you have familiarized yourself with Replay - the steps to automate request forwarding are available here:

- [Automating Brute-Forcing/Fuzzing](./automate.md)
