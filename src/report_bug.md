# Reporting a bug

Found a bug in Caido or need help debugging? You are at the right place!

> We need a few items to be able to reproduce bugs and help you 🙂

## 1. Backend Logs

Caido is using a [client/server architecture](/internals/instances.md), that means that we need logs from two place.

The first place to look for logs is in your [data folder](/configuration/data_location.md), you should see a `logs` folder.

<img width="500" alt="Backend Logs Location" src="/_images/backend_logs.png" center/>

## 2. Frontend Logs

The second place to loof for logs is in your browser console included in your [browser developer tools](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools).

You can open the console by pressing `F12` or doing a right-click `Inspect Element`.

<img width="700" alt="Frontend Logs Location" src="/_images/frontend_logs.png" center/>

## 3. Steps to reproduce

For us to be able to help you, we need to be able to reproduce the bug on our side.

Thus, it is **critical** that you give us **as much details as possible** on the various steps you took leading to the bug.

> A good example of steps would be:
>
> 1. In `Intercept`, click on `Response`
> 2. Start `Queuing`
> 3. In a terminal, execute `curl -x 127.0.0.1:8080 https://example.com`
> 4. Modify response status code
> 5. Forward
> 6. See in terminal that the response was not modified

## 4. Operating System & Version

Many Caido bugs are depend on the OS and even sometimes the version of that OS.
When reporting a bug, please make sure to include as much as information.

> A good example would be:
>
> - **OS:** Mac OS
> - **OS version:** 12 (Monterey)
> - **Caido client:** Caido Desktop
> - **Caido version:** 0.33.0

## 5. Github Issue

The last step is to [open an issue](https://github.com/caido/caido/issues/new?assignees=&labels=&projects=&template=bug.md&title=) on our Github Tracker.

Thanks a lot for the help! You rock 🤘

> **WARN:** If your steps to reproduce contains sensitive information, please continue reading.

## 6. (Optional) Discord Channel

We prefer that the production only contain public data, but we understand that it is not always possible.
If your data is sensitive, please do contact us on [Discord](https://links.caido.io/www-discord).
We will create a private channel for you and you will be able to us that data.
