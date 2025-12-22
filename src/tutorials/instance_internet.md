# Exposing an Instance to the Internet

::: tip
Discover your system architecture with:
```bash
uname -m
```
:::


1. Download the latest Caido CLI release from GitHub: `wget https://caido.download/releases/v0.54.1/caido-cli-vX.XX.X-linux-<architecture>.tar.gz`
2. Extract with: `tar -xzf caido-cli-vX.XX.X-<architecture>.tar.gz`
3. Make it executable: `chmod +x caido-cli`
4. Add it to PATH to make it globally executable: `sudo mv caido-cli /usr/local/bin/`
5. Delete the installation package: `rm caido-cli-v0.54.1-linux-x86_64.tar.gz`
6. View the command-line options with: `caido-cli -h`

## Exposing the Instance to the Internet

### Nginx Configuration

::: tip
To separate the internet-exposed instance from your setup, create a new subdomain by adding an A record for `caido.<your-domain>` pointing to the same IP address.

Then create a new `sites-available` file:

```bash
sudo nano /etc/nginx/sites-available/caido.ninjeeter-poc.com
```

```txt
server {
    server_name caido.ninjeeter-poc.com;
    
    location / {
        proxy_pass http://127.0.0.1:8081;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    listen 80;
    listen [::]:80;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/caido.ninjeeter-poc.com /etc/nginx/sites-enabled/
```

```bash
sudo nginx -t
```

```bash
sudo systemctl reload nginx
```

And obtain a SSL/TLS certificate:

```bash
sudo certbot --nginx -d caido.ninjeeter-poc.com
```

:::

1. Launch Caido:

```bash
caido-cli --ui-listen 0.0.0.0:8081 --proxy-listen 0.0.0.0:8082 --ui-domain ninjeeter-poc.com --debug --no-renderer-sandbox --no-open
```

## Docker

::: warning NOTE
If Nginx/Apache is running, kill it with `sudo systemctl stop nginx`/`sudo systemctl stop apache`
:::

1. Install Docker with the Docker Compose plugin.
2. SSH into your server.
3. Create a `docker-compose.yml` file with the following content (_ensure to replace `user` with your username_, `example.com` with your domain, `user@example.com` with your email address, and account for any currently running processes by changing the ports_):

```txt
services:
  caido:
    image: caido/caido:latest
    container_name: caido
    ports:
      - "127.0.0.1:8082:8082"   # Proxy port
    volumes:
      - /home/user/caido/data/:/home/caido/.local/share/caido
    command: >
      caido-cli
      --no-renderer-sandbox
      --debug
      --no-open
      --ui-listen 0.0.0.0:8081
      --ui-domain example.com
      --proxy-listen 0.0.0.0:8082
    #--allow-guests
    restart: unless-stopped
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.caido.rule=Host(`example.com`)"
      - "traefik.http.routers.caido.entrypoints=websecure"
      - "traefik.http.routers.caido.tls.certresolver=letsencrypt"
      - "traefik.http.services.caido.loadbalancer.server.port=8081"

  traefik:
    image: traefik:latest
    container_name: traefik
    restart: unless-stopped
    ports:
      - "80:80"          # HTTP (requires Nginx to be stopped/disabled)
      - "443:443"        # HTTPS / TLS termination (requires Nginx to be stopped/disabled)
    command:
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"

      # Redirect HTTP → HTTPS
      - "--entrypoints.web.http.redirections.entrypoint.to=websecure"
      - "--entrypoints.web.http.redirections.entrypoint.scheme=https"

      # Let's Encrypt - HTTP challenge (works with standard ports 80/443)
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge=true"
      - "--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web"
      - "--certificatesresolvers.letsencrypt.acme.email=user@example.com"
      - "--certificatesresolvers.letsencrypt.acme.storage=/letsencrypt/acme.json"

    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./letsencrypt:/letsencrypt

```

3. Create a data storage location for Caido:

```bash
mkdir -p /home/ninjeeter/caido/data
```

4. Since the container runs as `uid=996(caido) gid=996(caido) groups=996(caido)`, set ownership of the host directory to match:

```bash
sudo chown -R 996:996 /home/ninjeeter/caido/data
```

5. Make the directory writable:

```bash
sudo chmod 755 /home/ninjeeter/caido/data
```
