# Running on a VPS

Caido is designed to run anywhere. It only requires an internet connection and an available port.

`ssh -L 8080:localhost:8080 [USER]@[VPS IP] then ./caido-linux`

## Accessing Caido

We **highly** recommend that you run Caido behind a firewall as we have not implemented [access control yet](https://github.com/caido/caido/issues/240).

1. Open an SSH tunnel: `ssh -L 8080:localhost:8080 [USERNAME]@[VPS IP]`
2. Run Caido on that port: `./caido-linux`

If you already use the port `8080`, you change the SSH tunnel to another one and use the `--listen` [parameter of Caido](./configuration.md).

## (WIP) Systemd Service
