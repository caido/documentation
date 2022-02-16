# License

A license is required to use Caido, we check the validity of the license once every 7 days.

## Machine registration

Right now we register the machine Caido is running on with the given license.
For the beta, aach license is given 5 machines "slots". To free a "slot", please contact us.
We take an anonymous (SHA256) fingerprint of the machine to differenciate them.

## Expired/invalid license

Our current license checking code is a bit aggressive, so sometimes Caido might refuse to start (even if the license was renewed).
We are working on that, but in the meantime the best thing to do is to delete the license file and re-enter it in the frontend.
The license is located inside the [Caido storage folder](./introduction.md#caido-storage-folder) at `config/license.yml`.
Once removed, Caido should start again and you will be able to re-enter the license.
