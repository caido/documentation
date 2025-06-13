---
outline: [2, 4]
---

# Invisible Proxying for Non-Proxy Aware Thick Clients

In this tutorial you will be guided through the process of configuring desktop applications to proxy traffic through Caido.

## Thick Clients

“Thick clients” refer to desktop applications installed on your computer. These applications perform the majority of their processes client-side and occasionally communicate:

- With a database server (_two-tier architecture_).
- With an external backend server that communicates with a database server (_three-tier architecture_).

While web applications that run inside a browser can be configured to use a proxy via the connection settings or an extension like [FoxyProxy](https://getfoxyproxy.org/), non-proxy aware thick clients ignore system proxy settings and do not have proxy setting options themselves.

So, in order to pass the HTTP traffic that these thick clients generate through Caido, you will need to set up “invisible proxying”.

## Invisible Proxying

In invisible proxying, Caido acts as the destination server that the thick client application is expecting to communicate with directly.

::: warning NOTE
In this tutorial we will demonstrate setting up invisible proxying using a simple Node.js script that will act as a thick client communicating with `https://www.example.com/`. To follow along, ensure you have Node.js installed and create a file named `thick-client.js` with the following content:

```js
const url = process.argv[2];

if (!url) {
  console.error("Usage: node fetch-test.js <url>");
  process.exit(1);
}

fetch(url)
  .then((res) => res.text())
  .then((body) => {
    console.log("Response:");
    console.log(body);
  })
  .catch((err) => {
    console.error("Fetch error:", err);
  });
```

To execute this script, navigate to the directory in which the file is saved to and enter:

```
node thick-client.js http://www.example.com/
```

:::

### DNS Resolution

In order for Caido to capture the traffic, the domain name of a destination server needs to resolve to Caido’s listening address.

::: tip TIPS

- To discover the domain/domains the thick client is communicating with, use a network traffic inspection tool like [Wireshark](https://www.wireshark.org/) and filter traffic by the DNS protocol.

- To discover the IP address of a domain name, run the terminal command:

```
nslookup www.example.com
```

:::

This can be done by adding `127.0.0.1 www.example.com` as an entry to either:

- The `/etc/hosts` file in Linux/macOS
- The `C:\Windows\System32\drivers\etc\hosts` file in Windows.

### Port Binding / Forwarding

The thick client application will expect the destination server to be running on either port 80 (_for HTTP_) or 443 (_for HTTPS_).

However, ports below 1024 are considered privileged ports which only bind to services running with root/administrative privileges (some work arounds do exist).

Running Caido with root/administrative privileges is **NOT** recommended. Doing so **will** create issues later on since any resource created by Caido will be owned by the root/administrator user.

::: danger
Although this could be avoided by running Caido as root/administrator every time, doing so would expose your computer to additional risk if Caido or any dependency is compromised. **DO NOT DO THIS.**
:::

Instead, we must do one of the following:

- Use port forwarding to redirect traffic intended for ports 80 and 443 to Caido's listening port **(prefered)**
- Use some tricks that some OS give us to bind to the port

---

#### Windows

To setup port forwarding on Windows, open Command Prompt as Administrator and run:

```
netsh interface portproxy add v4tov4 listenport=80 listenaddress=127.0.0.1 connectport=8080 connectaddress=127.0.0.1
```

```
netsh interface portproxy add v4tov4 listenport=443 listenaddress=127.0.0.1 connectport=8080 connectaddress=127.0.0.1
```

::: tip TIPS
View any active rules with:

```
netsh interface portproxy show all
```

Remove the rule with:

```
netsh interface portproxy delete v4tov4 listenport=443 listenaddress=127.0.0.1
```

:::

---

#### macOS

To setup port forwarding on macOS, you can use `pfctl` (Packet Filter) to write a redirection rule in a `pf.conf` file.

To do this, open the `/etc/pf.conf` file and add:

```
rdr pass on lo0 inet proto tcp from any to any port 80 -> 127.0.0.1 port 8080
rdr pass on lo0 inet proto tcp from any to any port 443 -> 127.0.0.1 port 8080
```

Reload the rules with:

```
sudo pfctl -f pf.conf
```

Ensure pf is enabled with:

```
sudo pfctl -e
```

:::warning
Packet Filter will hijack your port 8080 and it might cause the Caido interface to stop loading on that port.
Right now, the only workaround is to use the CLI parameter `--ui-listen 8081` to bind another port for the UI.
:::

:::tip
On macOS, there is one workaround to bind 443 and 80 without root: you must listen on all interfaces (`0.0.0.0`).
If you setup Caido that way, you won't have to deal with port forwarding.

We do **NOT** recommend doing this in untrusted networks since this allows **ANY** computer on the same network as you to proxy through your computer.
:::

---

#### Linux

You can use use `iptables`:

```
sudo iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-port 8080
sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 8080
```

:::tip
On Linux, you can grant a binary the permission to bind to 443 and 80.
You have to run: `sudo setcap 'cap_net_bind_service=+ep' ./path/to/caido-cli`.

If you are using the Desktop application, make sure you grant that permission of the **CLI** not the desktop application.
Usually it will be found under `resources/bin/caido-cli` in your installation directory.
:::

---

### Enabled Invisible Proxying

By default, invisible proxying is disabled. To enable it, click on the `⋮` icon to the right of the Instance you want to apply a custom listening address to and select `Edit`.

Then, expand the `Advanced` settings and check the `Enable invisible proxying` checkbox.

<img alt="Connection manager instance more options." src="/_images/enable_invisible_proxying.png" center />

### DNS Rewrite

The target domain will now resolve to Caido. However, Caido will also resolve the domain to itself, since DNS queries will check the `hosts` file before being sent to a resolver.

In order for Caido to pass the request along to the actual destination server, you must create a DNS Rewrite rule to preserve the original IP address of the target domain.

To access this feature, click on your account icon in the upper-rightmost corner of the Caido window, select `Settings`, and click on the `Network` tab.

Click on the `+ Add Rewrite` button to create a new rule.

Check the `Use static IP` checkbox and providing the IP address in the `Redirect to static IP` input field.

Next, add `www.example.com` to the `Included Hosts` list and click the `+ Create` button to save the rule.

---

::: tip
Glob syntax (\*) is supported to account for varying subdomains and top-level domains/extended top-level domains.
:::

### Testing

Now, run the script:

```
node thick-client.js http://www.example.com/
```

::: tip
You may need to flush the DNS cache.

```
ipconfig /flushdns
```

:::
