---
description: "A step-by-step guide to running Caido in Docker containers including image launching, project persistence, and custom Dockerfile examples."
---

# Running in Docker

Caido is available as an image on [Docker Hub](https://hub.docker.com/r/caido/caido) that can be ran directly on x86 architecture.

## Launching the Docker Image

To launch the image, specify the port with the `-p` command-line option.

For example, to launch the image on port `7000`, enter:

```bash
docker run --rm -p 7000:8080 caido/caido:latest
```

You can then point your browser's proxy settings to `127.0.0.1:7000`.

::: tip
For M1 users, it is now possible to enable [Rosetta](https://docs.docker.com/desktop/settings/mac/#use-rosetta-for-x86amd64-emulation-on-apple-silicon) in the Docker settings. You can then run images with `--platform linux/amd64`.
:::

## Project Persistence

By default, projects created in the Docker container are not saved between `docker run` commands. Due to this, we recommend mounting a volume to store data on your file system to avoid losing data between Caido updates.

To mount a volume, append the `-v <host-path>:/home/caido/.local/share/caido` command-line option to the `docker run` command.

::: warning NOTE
The host path must be an absolute path with the necessary permissions. Ensure the necessary permissions are granted to the host path with: `chown -R 999:999 <host-path>`
:::

For example, to store Caido projects in `/home/my_user/my_data`, enter:

```bash
docker run --rm -p 7000:8080 \
  -v /home/my_user/my_data:/home/caido/.local/share/caido caido/caido:latest
```

## Building the Image

If you prefer to build the image yourself, a `Dockerfile` example is provided below:

```Dockerfile
## Base ##
FROM debian:bullseye-slim as base

RUN \
  apt-get update && \
  apt-get -y install ca-certificates && \
  apt-get clean

## Download ##
FROM base as download

RUN \
  apt-get -y install curl jq && \
  curl -s https://api.caido.io/releases/latest \
    | jq '.links[] | select(.display == "Linux") | .link' \
    | xargs curl -s --output caido.tar.gz && \
  tar -xf caido.tar.gz && \
  rm caido.tar.gz

## Runtime ##
FROM base

RUN groupadd -r caido && useradd --no-log-init -m -r -g caido caido

COPY --from=download caido /usr/bin/caido

USER caido

EXPOSE 8080

ENTRYPOINT ["caido"]
CMD ["--listen", "0.0.0.0:8080"]
```
