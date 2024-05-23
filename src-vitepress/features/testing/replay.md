# Replay

The Replay page allows you to edit and replay requests individually. This feature provides a flexible way to test your web applications by replaying requests with different parameters/headers.

You can create requests from scratch, or start from any existing request inside the application. Once a request is created, you can edit it and replay it as many times as needed.

<img alt="Replay" src="/_images/replay_page.png" center>

## Collections

---

Requests are organized into Collections and Sessions.

A Session is a group of requests that are related to each other. Every time you edit and send a request, it is saved in the history of that replay Session. This allows you to keep track of the changes you made to the request, and easily go back to previous versions.

Replay Collections allow you to group Sessions. You can rename Collections and duplicate Sessions. This allows you to keep your Sessions organized and easily switch between them. You can group Sessions however you want, for example, by project, by feature or by environment. To do so, simply move your Sessions with drag/drop.

<img alt="Drag/Drop" src="/_images/drag_drop_collections.png" center>

## Replay Sessions

---

Navigate quickly through the history of requests and responses in your Session by using the arrows at the top of the Replay table. You can see the number of pages in the Session at the bottom of the table.

### Right Click Menu

---

- You can use Convert Workflows in Replay. See the [Workflows](/features/testing/workflows/convert) page for more details.

- GET/POST: Convert the request from a POST form to a GET with query parameters.
