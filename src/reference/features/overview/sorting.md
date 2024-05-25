# Sorting by Properties

Throughout Caido - the ability to sort items based on certain properties is integrated. These properties are grouped by category and their availability is dependent on the Caido feature being utilized.

These categories are represented as column names spanning horizontally located along the top row on any table element within Caido.

Clicking a column name will toggle the associated sorting mechanism. Sorting varies in how it is accomplished - ascending/descending order, alphabetical order, numerical order, time-based order and the presence/absence of a property are all factors utilized to provide Caido users with the functionality to easily navigate through data.

<img alt="HTTP History." src="/_images/sorting_example.png" center/>

## Available Sorting Properties

Some properties, even when present as column names in a table do not perform sorting functionality.

Below is a list of all available sorting properties as well as in which Caido features they can be found in:

::: tip
Clicking on a column name will toggle between the `^` and `∨` characters within the column name's field.
:::

## ID

The `ID` property is numerical and represents the order of occurence in which the associated item was processed by Caido measured in time (_the most recent occurence will have a greater ID number_).

- Toggling to `^` means the sorting of the ID property will display the **first occurence** at the top of the list.
- Toggling to `∨` means the sorting of the ID property will display the most **recent occurence** at the top of the list.

::: info
The ID property is available for sorting in the following Caido features:

- Sitemap
- Intercept
- HTTP History
- WS History
- Automate Results
- Search
:::

## Host & Destination

Both the `Host` and `Destination` properties are a combination of the host name and port ordered alphabetically. Host is utilized by requests while Destination is utilized by WebSocket connections.

- Toggling to `^` means the sorting of the Host/Destination property will display the hosts/destinations **A-Z**.
- Toggling to `∨` means the sorting of the Host/Destination property will display the hosts/destinations **Z-A**.

::: info
The Host property is available for sorting in the following Caido features:

- Sitemap
- Intercept
- HTTP History
- Search
:::

::: info
The Destination property is available for sorting in WS History.
:::

## Method

The `Method` property is the HTTP Method utilized for the request and is ordered alphabetically.

- Toggling to `^` means the sorting of the Method property will display **A-Z**.
- Toggling to `∨` means the sorting of the Method property will display **Z-A**.

::: info
The Method property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Request Pane
- HTTP History
- Search
:::

## Path

The `Path` property is the URL path of the associated request/WebSocket connection and is ordered alphabetically.

- Toggling to `^` means the sorting of the Path property will display **A-Z**.
- Toggling to `∨` means the sorting of the Path property will display **Z-A**.

::: info
The Path property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Request Pane
- HTTP History
- WS History
- Search
- Findings
:::

::: info
The Path property is also found in the Files feature but is representive of the location of the uploaded file on your local device (_not related to the URL_).
:::

## Query

The `Query` property sorts by both the presence of a query within a request as well as alphabetical order.

- Toggling to `^` means the sorting of the Query property will display **A-Z (_with requests absent of a query listed at the top, followed by query instances in alphabetical order_)**.
- Toggling to `∨` means the sorting of the Query property will display **Z-A (_with requests containing a query listed at the top, starting in reverse alphabetical order followed by requests absent of a query_)**.

::: info
The Query property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Request Pane
- HTTP History
- Search
:::

## Status

The `Status` property is the HTTP status code received in the response and sorts in numerical order.

- Toggling to `^` means the sorting of the Status property will display the status codes **lesser in number** at the top of the list.
- Toggling to `∨` means the sorting of the Status property will display the status codes **greater in number** at the top of the list.

::: info
The Status property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Response Pane
- HTTP History
- Automate Results
- Search
:::

::: info
The Status property is also found in the Exports feature but is representive of the processing status of a data export (_not related to the response code_).
:::

## Extension

The `Extension` property sorts by both the presence of a file extension within a request as well as alphabetical order.

- Toggling to `^` means the sorting of the Extension property will display **A-Z (_with requests absent of a file extension listed at the top, followed by file extension instances in alphabetical order_)**.
- Toggling to `∨` means the sorting of the Extension property will display **Z-A (_with requests containing a file extension listed at the top, starting in reverse alphabetical order followed by requests absent of a file extension_)**.

::: info
The Extension property is available for sorting in the following Caido features:

- Sitemap
- HTTP History
- Search
:::

## Response Length

The `Response Length` property is the size of the response in bytes (including CRLF characters). This property sorts numerically by size.

- Toggling to `^` means the sorting of the Response Length property will display the **smallest sized responses** at the top of the list.
- Toggling to `∨` means the sorting of the Response Length property will display the **largest sized responses** at the top of the list.

::: info
The Response Length property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Response Pane
- HTTP History
- WS History
- Automate Results
- Search
:::

::: info
Within WS History and Automate Results, Response Length is shortened to `Length`.
:::

## Response Time

The `Response Time` property is the amount of time (measured in milliseconds) between when a request was recieved by the web server and when the response was received by the client.

- Toggling to `^` means the sorting of the Response Time property will display the **least amount of time** taken to receive a response at the top of the list.
- Toggling to `∨` means the sorting of the Response Time property will display the **longest amount of time** taken to receive a response at the top of the list.

::: info
The Response Time property is available for sorting in the following Caido features:

- Sitemap
- Intercept: Response Pane
- HTTP History
- Automate Results
- Search
:::

::: info
Within Automate Results, Response Time is named `Round-trip Time`.
:::

## Request Sent At & Sent At

The `Request Sent At` and `Sent At` properties both consist of the date and time at which a request/response was sent.

- Toggling to `^` means the sorting of the Request Sent/Sent At property will display the **least recent** request/response at the top of the list.
- Toggling to `∨` means the sorting of the Request Sent/Sent At property will display the **most recent** request/response at the top of the list.

::: info
The Request Sent At/Sent At properties are available for sorting in the following Caido features:

- Sitemap
- Intercept
- HTTP History
- Search
:::

## Created At

The `Created At` property consists of the date and time at which a WebSocket connection was made or an item was made.

- Toggling to `^` means the sorting of the Created At property will display the **least recent** connection/item at the top of the list.
- Toggling to `∨` means the sorting of the Created At property will display the **most recent** connection/item at the top of the list.

::: info
The Created At property is available for sorting in the following Caido features:

- WS History
- Findings
- Workspace
:::

## Source

The `Source` property identifies which Caido feature was used to deal with proxied traffic. It can have one of three of the following values: `Automate`, `Intercept` and `Replay`.

- Toggling to `^` means the sorting of the Source property will display **A-Z**.
- Toggling to `∨` means the sorting of the Source property will display **Z-A**.

::: info
The Source property is available for sorting in Search.
:::

## Reporter

The `Reporter` property identifies which feature was responsible for making an entry in the Findings table.

- Toggling to `^` means the sorting of the Reporter property will display **A-Z**.
- Toggling to `∨` means the sorting of the Reporter property will display **Z-A**.

::: info
The Reporter property is available for sorting in Findings.
:::

## Title

The `Title` property includes a message that is tied to an entry in the Findings table.

- Toggling to `^` means the sorting of the Title property will display **A-Z**.
- Toggling to `∨` means the sorting of the Title property will display **Z-A**.

::: info
The Title property is available for sorting in Findings.
:::

## Name

The `Name` property identifies an item.

- Toggling to `^` means the sorting of the Name property will display **A-Z**.
- Toggling to `∨` means the sorting of the Name property will display **Z-A**.

::: info
The Name property is available for sorting in Projects.
:::

## Size

The `Size` property states the storage size of a file in bytes.

- Toggling to `^` means the sorting of the Size property will display the **smallest sized** file at the top of the list.
- Toggling to `∨` means the sorting of the Size property will display the **largest sized** file at the top of the list.
::: info
The Size property is available for sorting in Projects.
:::

## Updated At

The `Updated At` property represents the last time the file was overwritten.

- Toggling to `^` means the sorting of the Updated At property will display the **least recent** overwritten file at the top of the list.
- Toggling to `∨` means the sorting of the Updated At property will display the **most recent** overwritten file at the top of the list.
::: info
The Updated At property is available for sorting in Projects.
:::
