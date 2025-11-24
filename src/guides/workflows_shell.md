# Using the Shell Node

The `Shell` node allows you to run terminal commands and scripts in Caido workflows.

## Shell Node Editor

To select the terminal to use, **click** on the drop-down menu in the `Shell (choice)` section of the editor.

<img alt="The terminal selection list." src="/_images/workflows_shell_choice.png" center>

The Shell node editor provides two coding environments:

- `Code (code)`: The runtime commands/script with access to Caido provided data.
- `Init (code)`: The optional initialization commands/script to execute before runtime.

<img alt="The Shell node editor." src="/_images/workflows_shell_node_editor_top.png" center>

---

<img alt="The Shell node editor." src="/_images/workflows_shell_node_editor_bottom.png" center>

## Input

The data made available to your terminal can either be:

- `INPUT_DATA`: The input data for convert workflows.
- Environment variables or Base64 encoded request and response JSON object properties for passive/active workflows.

::: tip
View the [Passing Data Between Nodes](/guides/workflows_references.md) guide to learn how to use the output of a workflow node as the input of a connected downstream node.
:::

## Testing/Debugging Shell Node Workflows

To test the execution and debug your Shell node commands/scripts before using workflows against targets, provide mock requests and responses in the editors, and click on the **click** on the <code><Icon icon="fas fa-play" /> Run</code> button.

::: tip
Monitor the [logs](/guides/logs_viewing.md) when debugging.
:::

<img alt="The test environment." src="/_images/workflows_shell_testing.png" center>

The details of each run will be listed in the `View` drop-down menu. To view the execution details of the Shell node, click on the **click** on its associated <code><Icon icon="fas fa-circle-info" /></code> button.

<img alt="The test environment run details." src="/_images/workflows_shell_run_details.png" center>

## Convert Workflows

To convert data, run terminal commands/scripts against `$INPUT_DATA`.

::: code-group
```bash [Base64 Encode]
cat - | echo $INPUT_DATA | base64
```
:::

<img alt="Base64 encoding." src="/_images/workflows_shell_convert.png" center>

## Passive/Active Workflows

### Environment Variables

Request URLs, headers, and the working project name are available via environment variables.

::: code-group
``` bash [URL to File]
echo "$CAIDO_URL" > ~/url.txt
```

``` bash [Project Name to File]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` bash [Specific Header to File]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` bash [All Headers to File]
env | grep "^CAIDO_REQUEST_HEADER__" > ~/headers.txt
```

``` bash [All Headers to File Formatted]
env | grep "^CAIDO_REQUEST_HEADER__" | while IFS='=' read -r name value; do
  header="${name#CAIDO_REQUEST_HEADER__}"
  header="${header//_/-}"
  header=$(echo "$header" | tr '[:upper:]' '[:lower:]' | sed 's/\b\(.\)/\U\1/g')
  echo "$header: $value"
done > ~/formatted-headers.txt
```

``` bash [Running a Tool Against a Domain]
dig $CAIDO_REQUEST_HEADER__HOST > ~/dig.txt
```

``` bash [Enumerating Subdomains]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```
:::

### Requests & Responses

Raw requests and responses are available as a JSON object via STDIN.

<img alt="Request and response from On Intercept Response node." src="/_images/workflows_shell_stdin_passive.png" center>

---

<img alt="Request and response from Active Start node." src="/_images/workflows_shell_stdin_active.png" center>

::: warning NOTE
Request and response data is Base64 encoded. To decode the data install `jq`.

``` bash
sudo apt install jq
```
:::

::: code-group
``` bash [Request to File]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` bash [Request Headers to File]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` bash [Response to File]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` bash [Response Headers to File]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` bash [Response Body to File]
cat - | jq -r .response | base64 -d | sed '1,/^\r$/d' > ~/response-body.txt
```
:::
