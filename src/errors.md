# Common errors

## Errors

### You do not have access to this instance

<img src="../../_images/no_access_instance.png" alt="No Access" width="1300" center/>

- Why:
  - You are trying to access an instance that yo do not own ( further info on instances [here](/src/internals/documentation_instances.md.md) )

- Likely origins:
  - You used another Caido account in the past to connect to the machine on which Caido is running.

- Remediations:
  - Login with your original Caido account
  - Delete the data folder of Caido
  - Run Caido with `--reset-credentials` or in the desktop advanced settings (reset credentials).
  WARNING: Do it only ONCE.
  <img src="../../_images/reset_credentials.png" alt="Reset Credentials" width="1300" center/>

### I have paid for the Pro plan but it still shows Community in the app

- Why:
  - We have caches in Caido that take some time to update

- Remediations:
  - Wait 1 h
  - Logout/Login from your instance
  - Run Caido with `--reset-cache` or in the desktop advanced settings (reset cache).
  WARNING: Do it only ONCE.
<img src="../../_images/reset_cache.png" alt="Reset Cache" width="1300" center/>

### `An unkown authentification error occurred` during login process

- Why:
  - Usually means that your computer time is out of sync
  - We allow 5 minutes slippage between the "real" time and your computer time
- Remediations:
  - Document the process for each platform to resync the time using NTP
