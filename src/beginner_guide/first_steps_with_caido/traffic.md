# Capturing and Inspecting Web Traffic

## Intercept

---

`Intercept` allows you to capture requests as well as responses for inspection/modification and forward or drop them arbitrarily. **Requests** are shown on the left and **responses** are shown on the right.

---

<img alt="Intercept tab." src="../../_images/intercept_tab.png" center/>

1. The `Intercept` tab.
2. Clicking this button will toggle between `Queuing` (_intercept traffic_) and `Forwarding` (_forward traffic_).
3. You can click `Requests`, `Responses` or **both** to specify what `Queuing` is applied to. _**Intercept on** is signified by **||** and **intercept off** is signified by **>>**._
4. The `Drop` and `Forward` buttons will drop or forward requests/responses respecively.

## HTTP History

---

The `HTTP History` tab lists all the traffic that Caido has proxied.

<img alt="Intercept tab." src="../../_images/history_tab.png" center/>

1. The `HTTP History` tab.
2. All the proxied requests will appear in this pane. Select them arbitrarily.
3. Search/filter for requests or responses within Caido's history by entering an HTTPQL query in this input bar.
4. Clicking the `Advanced` button will present checkbox options to further filter what is displayed in the history (_filter by response status code(s) and custom presets_).
5. Clicking the `Column preferences` cog wheel icon will present checkbox options that you can select/deselect to customize the information provided about each request.

## WS History

---

The `WS History` tab lists all of the WebSocket stream traffic that Caido has proxied.

<img alt="WS History tab." src="../../_images/history_tab.png" center/>
