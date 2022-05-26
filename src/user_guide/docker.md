# Running in Docker

## Building the image

We don't yet provide prebuilt Caido docker images, but you can easily build one yourself.

Here is a `Dockerfile` sample you can use:

```Dockerfile
FROM debian:bullseye-slim

RUN \
  apt-get update && \
  apt-get -y install ca-certificates && \
  apt-get clean

RUN echo "MY_MACHINE_ID" > /etc/machine-id

WORKDIR /app

COPY caido caido

CMD ["./caido", "--listen", "0.0.0.0:8080"]
```

---

1. Create a `Dockerfile` file with the above contents.
2. In the command line, run the following commands:
  ```
  cat /dev/urandom | head -c 255 | md5sum
  ```
3. In the `Dockerfile`, replace `MY_MACHINE_ID` with the output from step #2.
4. Download the latest Caido executable, rename the file to `caido` and run `chmod +x` on it.
5. Make sure the caido executable from step #4 is in the same folder as the `Dockerfile`

Running `docker build . -t caido:latest` will create a docker image for Caido.

## Running the image

Once you have built the image, you can run Caido with:
```
docker run --rm -p 7000:8080 caido:latest
```

This will start Caido on port 7000. You can then point your browser's proxy settings to `127.0.0.1:7000`.

To use another port, replace `7000` in the command above with a different port.

## Project persistence

By default, projects created in the docker container are not saved between `docker run` commands.

We recommend mounting a volume to keep your data on your file system and to avoid losing data between Caido updates.

This is done by appending the `-v` parameter to the `docker run` command using the format `-v <HOST PATH>:/root/.local/share/caido`.

Note that the host path must be an absolute path.

Your running command should look like the following:

```
docker run --rm -p 7000:8080 \
  -v /home/my_user/my_data:/root/.local/share/caido caido:latest
```

... where `/home/my_user/my_data` will be the folder containing Caido projects.
