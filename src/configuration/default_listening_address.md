# Default listening address/port

Caido, by default, listens on the IP address `127.0.0.1` and port `8080`. This means that Caido will only be accessible from the same machine it is running on, using the address `http://127.0.0.1:8080`.

However, you can change the listening address and port to suit your needs. There are two ways to change the listening address, depending on whether you are using the CLI or the desktop application.

> Please note that if you change the listening address to something other than 127.0.0.1, Caido will be accessible from any machine on the network, so it is important to consider the security implications of doing so.

## CLI

When using the CLI, you can update the listening address by using the -l or --listen option followed by the desired address and port in the format ADDR:PORT. For example, to listen on all available network interfaces on port 8000, use the command:

## Desktop App

When using the desktop app, you can change the listening address by using the connection manager. To do this, open the connection manager, and click on the "More options" icon on the right of the instance you want to edit.

![connection_manager_instance_more_options](/_images/connection_manager_instance_more_options.png)

Click on "Edit", and update the listening IP and port to whatever you want.

![connection_manager_instance_edit](/_images/connection_manager_instance_edit.png)
