# DNS Rewrites

The `DNS Rewrites` feature allows you to control the domain to IP address resolutions for specified hosts. To access this feature, click on your account icon in the upper-rightmost corner of the Caido window, select `Settings`, and click on the `Network` tab.

<img alt="DNS Rewrite navigation." src="/_images/settings_dns_rewrite.png" center no-shadow/>

## Upstream Servers

To resolve DNS queries using an alternative upstream DNS server, instead of your local or ISP's DNS server:

- You can select either Google's or Cloudflare's public recursive DNS servers from the dropdown menu.

<img alt="Google or Cloudflare DNS server options." src="/_images/upstream_dns.png" center no-shadow/>

- Or the DNS server can be explicitly defined by clicking on the `+` button, providing the server's IP address along with an arbitrary name, and clicking `+ Create`. This will add the server as an option in the dropdown menu.

<img alt="Setting a custom upstream DNS server." src="/_images/new_upstream_dns.png" center no-shadow/>

## Static IP

Domain names can also be resolved to an IP address of your choosing by checking the `Use static IP` checkbox and providing the desired IP address in the `Redirect to static IP` input field.

<img alt="Setting a static IP." src="/_images/static_ip_dns_rewrite.png" center no-shadow/>

## Hosts

You can define which hosts your custom DNS configurations do/do not apply to by adding them to the `Included Hosts` and `Excluded Hosts` lists respectively.

::: tip
Glob syntax (_`*`_) is supported to account for varying subdomains and top-level domains/extended top-level domains.
:::

<img alt="DNS rewrite hosts." src="/_images/dns_rewrite_hosts.png" center no-shadow/>

::: info
If multiple rewrites are defined, traffic is directed to the first matching rule. **Click**, **hold**, and **drag** a rule to change its order position.
:::
