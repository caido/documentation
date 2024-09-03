# Plugin Backend

The backend component of Caido is the server responsible for data processing, storage and business logic.

Backend development allows you to:

- Extend the server-side functionality of the Caido application.
- Interact with the application's data, databases and infrastructure.

For advanced documentation on this topic - click [here](/concepts/plugins/backend_sdk.md).

### `APISDK`

Used to send events to the frontend and register backend functions.

`sdk.api.send`

`sdk.api.register`

### `EventsSDK`

Registers a callback to an intercepted request or response. Callbacks are asynchronous and cannot modify the request or response objects.

`sdk.events.onInterceptRequest`

`sdk.events.onInterceptResponse`
