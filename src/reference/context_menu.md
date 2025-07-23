# Context Menu Options

Right-clicking on certain elements in the Caido user-interface will open a context menu with various actions/options to select from.

<img alt="Reset Credentials" src="/_images/context_menu.png" center/>

- `Copy`: Copies the highlight selected text to your clipboard.
- `Copy as cURL`: Copies a request as a curl command to your clipboard.
- `Copy URL`: Copies a request URL to your clipboard.
- `Send to Replay`: Sends a request to the [Replay](/guides/replay.md) interface. Hovering over this option will allow you to specify the [Collection](/guides/replay.md#replay-sessions-collections) to add the request to.
- `Add session`: Creates a new request.
- `Delete sessions`: Deletes the specified number of request in a Collection.
- `Move`: Moves a request to a different Collection.
- `Close`: Closes a request tab.
- `Close Others`: Closes all other request tabs besides the one selected.
- `Close to the Left`: Closes all other request tabs to the left of the one selected.
- `Close to the Right`: Closes all other request tabs to the right of the one selected.
- `Close All`: Closes all request tabs.
- `Send to Automate`: Sends a request to the [Automate](/guides/automate.md) interface.
- `Send to Findings...`: Sends a request and response pair to the [Findings](/guides/findings.md) interface. Selecting this option will present a window in which you can enter Finding details.
- `Replay in browser`: Copies a request to your clipboard as a URL. This request includes any modifications that have been made and can be entered into your browser while actively proxying traffic.
- `View response in browser`: Copies a URL to your clipboard that allows you to view a response in your browser while actively proxying traffic.
- `Highlight`: Color highlights a request's table row.
- `Add in Scope`: Adds a request's host as in scope to either an existing or new [Scope Preset](/guides/scope.md).
- `Add out of Scope`: Adds a request's host as out of scope to either an existing or new Scope Preset.
- `Convert (Preview)`: Displays a preview of the result of a Convert Workflow on a selection.
- `Convert (Replace)`: Replaces a selection with the result of a Convert Workflow.
- `Run workflow`: Executes an Active Workflow.
- `Assistant`: Prompts the Assistant to either explain a request or generate a CSRF proof-of-concept.
- `Set request`: Generates a corresponding request to a URL.
- `Toggle GET/POST`: Toggles a request between GET and POST methods.
- `Plugins`: Plugin specific options. These will vary depending on which plugins are installed.
- `Select`: Loads the associated [Project](/guides/projects.md)
- `Rename`: Allows you to rename an entity.
- `Duplicate`: Creates a copy of an entity.
- `Copy path`: Copies an entity's file system location to your clipboard.
- `Create backup`: Creates a [backup](/guides/backups.md) of a Project.
- `Restore`: Recreates a Project from a backup.
- `Download`: Downloads a backup.
- `Delete...`: Deletes an entity.
- `Delete selected`: Deletes all selected entities.
- `Delete all...`: Deletes all related entities.
