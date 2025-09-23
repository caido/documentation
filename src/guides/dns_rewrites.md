---
description: "How to configure DNS rewrites in Caido including upstream servers, static IP resolution, and host filtering for custom domain resolution."
---

# DNS Rewrites

To control the domain to IP address resolutions for specified hosts, **click** on the account button <code><Icon icon="fas fa-user" /></code> in the top-right corner of the Caido user-interface, select `Settings`, and open the `Network` tab.

<img alt="DNS Rewrite navigation." src="/_images/settings_dns_rewrite.png" center no-shadow/>

## Upstream Servers

To resolve DNS queries using an alternative upstream DNS server, instead of your local or ISP's DNS server, either:

- Select Google's or Cloudflare's public recursive DNS servers from the drop-down menu.

<img alt="Google or Cloudflare DNS server options." src="/_images/upstream_dns.png" center no-shadow/>

- Or the DNS server can be explicitly defined by clicking on the `+` button, providing the server's IP address along with an arbitrary name, and clicking `+ Create`. This will add the server as an option in the drop-down menu.

<img alt="Setting a custom upstream DNS server." src="/_images/new_upstream_dns.png" center no-shadow/>

## Static IP

To resolve a domain names to a specific IP address, **click** on the `Use static IP` checkbox and type in the IP address in the `Redirect to static IP` input field.

<img alt="Setting a static IP." src="/_images/static_ip_dns_rewrite.png" center no-shadow/>

## Hosts

To define which hosts your custom DNS configurations do/do not apply to, add them to the `Included Hosts` and `Excluded Hosts` lists.

::: tip
Glob syntax (_`*`_) is supported to account for varying subdomains and top-level domains/extended top-level domains.
:::

<img alt="DNS rewrite hosts." src="/_images/dns_rewrite_hosts.png" center no-shadow/>

::: info
If multiple rewrites are defined, traffic is directed to the first matching rule. **Click**, **hold**, and **drag** a rule to change its order position.
:::
