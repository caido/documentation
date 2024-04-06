# Running on a VPS

Caido is designed to be a flexible web application security testing tool, and one of its key features is the ability for users to host it anywhere, such as on a virtual private server (VPS).

> By default, Caido listens on the IP address 127.0.0.1 and port 8080. This is the recommended configuration as there is currently no built-in access control on the proxy portion of Caido. Listening on 127.0.0.1 limits access to the local machine only.

Here are the steps to host Caido on a Linux-based VPS:

1. Once you have set up a VPS, you can install Caido on it by following the Linux installation guide found [here](/user_guide/installation.md).

2. To access Caido from another machine or another network, you will need to create an SSH tunnel from your local machine to your VPS. This can be done by running the following command on your local machine:

   ```
   ssh -L <local port>:127.0.0.1:8080 <username>@<your vps IP address>
   ```

   This will forward all traffic on port <local port> of your local machine to port 8080 of your VPS. For example, if you want to use port 1337 on your local machine, you can run the command:

   ```
   ssh -L 1337:127.0.0.1:8080 <username>@<your vps IP address>
   ```

3. Once the tunnel is set up, you can access Caido by navigating to `http://127.0.0.1:<local port>` in your web browser.

   In the example above, you would navigate to `http://127.0.0.1:1337`. You will also have to configure your browser to proxy requests to `127.0.0.1:1337`.
