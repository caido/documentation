# Running in Docker

## Running the image

We offer images on [Dockerhub](https://hub.docker.com/r/caido/caido) that you can run directly on `x86`:

```
docker run --rm -p 7000:8080 caido/caido:latest
```

This will start Caido on port 7000. You can then point your browser's proxy settings to `127.0.0.1:7000`.

To use another port, replace `7000` in the command above with a different port.

> For M1 users, it is now possible to enable [Rosetta](https://docs.docker.com/desktop/settings/mac/#use-rosetta-for-x86amd64-emulation-on-apple-silicon) in the Docker settings. You can then run images with `--platform linux/amd64`.

## Project persistence

By default, projects created in the docker container are not saved between `docker run` commands.

We recommend mounting a volume to keep your data on your file system and to avoid losing data between Caido updates.

This is done by appending the `-v` parameter to the `docker run` command using the format `-v <HOST PATH>:/home/caido/.local/share/caido`.

Note that the host path must be an absolute path.

Your running command should look like the following:

```
docker run --rm -p 7000:8080 \
  -v /home/my_user/my_data:/home/caido/.local/share/caido caido:latest
```

... where `/home/my_user/my_data` will be the folder containing Caido projects.

## Building the image

If you prefer to build the image yourself, here is a `Dockerfile` sample you can use:

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
