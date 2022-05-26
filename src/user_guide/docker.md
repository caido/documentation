# Running in Docker

## Building the image

We don't yet provide prebuilt Caido docker images, but you can easily build one yourself.
The following is an example `Dockerfile`:

```Dockerfile
FROM debian:bullseye-slim

RUN \
  apt-get update && \
  apt-get -y install ca-certificates && \
  apt-get clean

RUN echo "633f41cfc889427398df369667f8d92c" > /etc/machine-id

WORKDIR /app

COPY caido caido

CMD ["./caido", "--listen", "0.0.0.0:8080"]
```

This `Dockerfile` assumes two elements:

- You have a `linux` caido executable named `caido` next to it
- You have run `chmod +x` on the executable
- You will change the `machine-id` to another 32 characters random string

If that is the case, running `docker build . -t caido:latest` will give you an image of Caido!

## Running the image

Once you have built the image, it should be straight forward to run it: `docker run --rm -p 8080:8080 caido:latest`.

You can change the host port by altering `-p` and respection the format `<HOST PORT>:8080`, like `-p 7000:8080`.

We recommend that you mount a volume to keep your data on your file system and avoid losing data when upgrading caido.
This is done using the `-v` parameter and respecting the format `-v <HOST PATH>:/root/.local/share/caido`.
Note that the host path must be absolute.

In conclusion, your running command should look something like: `docker run --rm -p 7000:8080 -v /home/my_user/my_data:/root/.local/share/caido caido:latest`
