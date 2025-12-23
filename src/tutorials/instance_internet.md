# Exposing an Instance to the Internet

In this tutorial, you will learn how to expose a Caido instance to the internet.

::: warning NOTE
Ensure to replace `user` with your username, `example.com` with your domain, `user@example.com` with your email address, and account for any currently running processes by changing the ports.
:::

## Nginx Configuration

1. To logically separate the internet-exposed Caido instance from your existing setup, create a new subdomain by adding a A record for `caido.example.com` for the IP address of your server.

2. SSH into your server.

3. Create a new `sites-available` file and use the `proxy_pass` directive to route traffic to Caido: `sudo nano /etc/nginx/sites-available/caido.example.com`

```txt
server {
    server_name caido.example.com;
    
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

4. Make the site available, test the configuration, and reload the web server:

```bash
sudo ln -s /etc/nginx/sites-available/caido.example.com /etc/nginx/sites-enabled/
```

```bash
sudo nginx -t
```

```bash
sudo systemctl reload nginx
```

5. Obtain a SSL/TLS certificate:

```bash
sudo certbot --nginx -d caido.example.com
```

6. Launch the Caido CLI:

```bash
caido-cli --ui-listen 0.0.0.0:8081 --proxy-listen 0.0.0.0:8082 --ui-domain caido.example.com --debug --no-renderer-sandbox --no-open
```

## Docker

The following Docker compose file runs two services: the Caido CLI and [Traefik](https://doc.traefik.io/traefik/).

::: warning NOTE
If Nginx/Apache is running, kill it with: `sudo systemctl stop nginx`/`sudo systemctl stop apache`
:::

1. Install [Docker](https://docs.docker.com/engine/install/) with the Docker Compose plugin.
2. SSH into your server.
3. Create a `docker-compose.yml` file with the following content:

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
      - "80:80"
      - "443:443"
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
mkdir -p /home/user/caido/data
```

4. Since the container runs as `uid=996(caido) gid=996(caido) groups=996(caido)`, set ownership of the host directory to match:

```bash
sudo chown -R 996:996 /home/user/caido/data
```

5. Make the directory writable:

```bash
sudo chmod 755 /home/user/caido/data
```

## Accessing Caido

Once Caido is running, access the instance at the configured domain and authenticate into your account.

<img alt="Login page." src="/_images/internet_instance.png" center>
