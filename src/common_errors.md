# Common errors

## You do not have access to this instance

<img alt="No access to instance" src="/src/_images/no_access_instance.png"/>

### Why

- You are trying to access an instance that yo do not own ( further info on instances [here](/src/internals/documentation_instances.md.md) )

### Likely origins

- You used another Caido account in the past to connect to the machine on which Caido is running.

### Remediations

- Login with your original Caido account
- Delete the data folder of Caido
- Run Caido with `--reset-credentials` or in the desktop advanced settings (reset credentials).
  WARNING: Do it only ONCE.
  <img src="/src/_images/reset_credentials.png" alt="Reset Credentials" width="1300" center/>

## I have paid for the Pro plan but it still shows Community in the app

### Why

- We have caches in Caido that take some time to update

### Remediations

- Wait 1 h
- Logout/Login from your instance
- Run Caido with `--reset-cache` or in the desktop advanced settings (reset cache).
  WARNING: Do it only ONCE.
<img src="/src/_images/reset_cache.png" alt="Reset Cache" width="1300" center/>

## `An unkown authentification error occurred` during login process

### Why

- Usually means that your computer time is out of sync
- We allow 5 minutes slippage between the "real" time and your computer time

### Remediations

Manually resync the time using NTP.

- #### For Windows

   (Windows 10) Right-click on the clock > Adjust date/time" > Go to "Date & Time" in Settings > Click "Sync now"

   (Windows 7 and 8) Open Control Panel > Clock and Region > Date and Time > Click the Internet Time tab > check "Synchronize with an Internet Time server" > Click "Update now".

   [More details](https://www.majorgeeks.com/content/page/synchronize_clock_with_an_internet_time_server.html)

- #### For MacOS

   Open a terminal window > Use the `sntp` command with the `-S` option to slew the clock (`sudo sntp -S pool.ntp.org`) > Check the time synchronization status again using the same command to confirm the synchronization has been achieved: `sntp -S pool.ntp.org`

  [More details](https://superuser.com/questions/155785/mac-os-x-date-time-synchronization#comment2136688_155788)

- #### For Linux

  Open a terminal or SSH into your server > Install the NTP package by running the following command : `sudo apt-get install ntp` > Once the installation is complete, the NTP service should start automatically > Check its status by using this command `sudo systemctl status ntp`
  
  [More details](https://unix.stackexchange.com/questions/137266/how-to-keep-debian-internal-clock-synchronized-with-ntp-servers)
