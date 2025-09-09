# Listening on Multiple Ports

To listen for traffic on additional ports launch the Caido CLI with the `--ui-listen <address:port>` and multiple `--proxy-listen <address:port>` arguments.

::: info
Specifying different listening ports for the user-interface GraphQL API calls and traffic bypasses Caido's default [traffic splitting algorithm](/concepts/proxying/traffic_splitting.md).
:::

::: warning
Please note that if you change the listening address to something other than 127.0.0.1, Caido will be accessible from any device on the network, so it is important to consider the security implications of doing so.
:::

For example, to listen for traffic on two ports, enter:

```
caido-cli --ui-listen 127.0.0.1:8080 --proxy-listen 127.0.0.1:8081 --proxy-listen 127.0.0.1:8082
```

The user-interface will launch in a browser window at `127.0.0.1:8080`.

<img alt="The browser user-interface." src="/_images/caido_browser_ui.png" center/>

You can then configure proxy settings to listen for traffic on `127.0.0.1:8081` and `127.0.0.1:8082`.

<img alt="FoxyProxy configuration for port 8081." src="/_images/networking_firefox_port.png" center/>

---

<img alt="FoxyProxy configuration for port 8081." src="/_images/networking_chrome_port.png" center/>
