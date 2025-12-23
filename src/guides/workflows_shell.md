---
description: "A guide on using the Shell node in Caido workflows to run terminal commands and scripts."
---

# Using the Shell Node

The `Shell` node allows you to run terminal commands and scripts in Caido workflows.

## Shell Node Editor

To select the terminal to use, **click** on the drop-down menu in the `Shell (choice)` section of the editor.

<img alt="The terminal selection list." src="/_images/workflows_shell_choice.png" center>

::: tip
Use `echo $SHELL` to determine the appropriate selection.
:::

The Shell node editor provides two coding environments:

- `Code (code)`: The runtime commands/script with access to Caido provided data.
- `Init (code)`: The optional initialization commands/script to execute before runtime (_such as creating nonexistent directories to save files to_).

::: warning NOTE
By default, `Init (code)` sources from configuration files (`.bashrc`/`.zshrc`) to provide custom PATH variables and aliases.
:::

<img alt="The Shell node editor." src="/_images/workflows_shell_node_editor_top.png" center>

---

<img alt="The Shell node editor." src="/_images/workflows_shell_node_editor_bottom.png" center>

## Input

The data made available to your terminal can either be:

- The input data for convert workflows.
- Environment variables or Base64 encoded request and response JSON object properties for passive/active workflows.

::: tip
View the [Passing Data Between Nodes](/guides/workflows_references.md) guide to learn how to use the output of a workflow node as the input of a connected downstream node.
:::

## Testing/Debugging Shell Node Workflows

To test the execution and debug your Shell node commands/scripts before using workflows against targets, provide mock requests and responses in the editors, and **click** on the <code><Icon icon="fas fa-play" /> Run</code> button.

::: tip
Monitor the [logs](/guides/logs_viewing.md) when debugging.
:::

<img alt="The test environment." src="/_images/workflows_shell_testing.png" center>

The details of each run will be listed in the `View` drop-down menu. To view the execution details of the Shell node, **click** on its associated <code><Icon icon="fas fa-circle-info" /></code> button.

<img alt="The test environment run details." src="/_images/workflows_shell_run_details.png" center>

## Convert Workflows

To convert data, run terminal commands/scripts against the input data.

<img alt="The input field." src="/_images/workflows_shell_convert_input.png" center>

### Base64 Encoding

::: code-group
```cmd [cmd]
powershell -Command "$data = [Console]::In.ReadToEnd(); [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($data.TrimEnd()))"
```

```powershell [powershell]
$data = [Console]::In.ReadToEnd(); [Convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes($data.TrimEnd()))
```

```sh [sh]
cat - | base64
```

```zsh [zsh]
cat - | base64
```

```bash [bash]
cat - | base64
```

```wsl [wsl]
cat - | base64
```
:::

<img alt="Base64 encoding." src="/_images/workflows_shell_convert.png" center>

## Passive/Active Workflows

### Environment Variables

Request URLs, headers, and the working project name are available via environment variables.

#### URL to File

::: code-group
``` cmd [cmd]
echo %CAIDO_URL% > %USERPROFILE%\url.txt
```

```powershell [powershell]
$env:CAIDO_URL | Out-File -FilePath "$HOME\url.txt"
```

```sh [sh]
echo "$CAIDO_URL" > ~/url.txt
```

```zsh [zsh]
echo "$CAIDO_URL" > ~/url.txt
```

``` bash [bash]
echo "$CAIDO_URL" > ~/url.txt
```

``` bash [wsl]
echo "$CAIDO_URL" > ~/url.txt
```
:::

#### Project Name to File

::: code-group
``` cmd [cmd]
echo %CAIDO_PROJECT% > %USERPROFILE%\project.txt
```

``` powershell [powershell]
$env:CAIDO_PROJECT | Out-File -FilePath "$HOME\project.txt"
```

``` sh [sh]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` zsh [zsh]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` bash [bash]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` bash [wsl]
echo "$CAIDO_PROJECT" > ~/project.txt
```
:::

#### Specific Header to File

::: code-group
``` cmd [cmd]
echo %CAIDO_REQUEST_HEADER__HOST% > %USERPROFILE%\host.txt
```

``` powershell [powershell]
$env:CAIDO_REQUEST_HEADER__HOST | Out-File -FilePath "$HOME\host.txt"
```

``` sh [sh]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` zsh [zsh]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` bash [bash]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` bash [wsl]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```
:::

#### All Headers to File

::: code-group
``` cmd [cmd]
set | findstr "CAIDO_REQUEST_HEADER__" > %USERPROFILE%\headers.txt
```

``` powershell [powershell]
Get-ChildItem env: | Where-Object {$_.Name -like "CAIDO_REQUEST_HEADER__*"} | ForEach-Object { "$($_.Name)=$($_.Value)" } | Out-File -FilePath "$HOME\headers.txt"
```

``` sh [sh]
env | grep "^CAIDO_REQUEST_HEADER__" > ~/headers.txt
```

``` zsh [zsh]
env | while IFS='=' read -r name value; do
  if [[ "$name" == CAIDO_REQUEST_HEADER__* ]]; then
    echo "$name=$value"
  fi
done > ~/Desktop/formatted-headers.txt
```

``` bash [bash]
env | grep "^CAIDO_REQUEST_HEADER__" > ~/headers.txt
```

``` bash [wsl]
env | grep "^CAIDO_REQUEST_HEADER__" > ~/headers.txt
```
:::

#### All Headers to File Formatted

::: code-group
``` cmd [cmd]
set | findstr "CAIDO_REQUEST_HEADER__" > %USERPROFILE%\headers.txt
```

``` powershell [powershell]
Get-ChildItem env: | Where-Object {$_.Name -like "CAIDO_REQUEST_HEADER__*"} | ForEach-Object {
  $name = $_.Name -replace '^CAIDO_REQUEST_HEADER__', '' -replace '_', '-'
  $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
  "${name}: $($_.Value)"
} | Out-File -FilePath "$HOME\formatted-headers.txt"
```

``` sh [sh]
title_case() {  echo "$1" | awk -F'-' '{
    for(i=1; i<=NF; i++) {
      $i = toupper(substr($i,1,1)) tolower(substr($i,2))
    }
    print $0
  }' | tr ' ' '-'
}

env | grep "^CAIDO_REQUEST_HEADER__" | while IFS='=' read -r name value; do
  case "$name" in
    CAIDO_REQUEST_HEADER__*)
      header=$(echo "$name" | sed 's/^CAIDO_REQUEST_HEADER__//' | tr '_' '-' | tr '[:upper:]' '[:lower:]')
      formatted_header=$(title_case "$header")
      echo "$formatted_header: $value"
      ;;
  esac
done > ~/Desktop/formatted-headers.txt
```

``` zsh [zsh]
title_case() {  echo "$1" | awk -F'-' '{
    for(i=1; i<=NF; i++) {
      $i = toupper(substr($i,1,1)) tolower(substr($i,2))
    }
    print $0
  }' | tr ' ' '-'
}

env | grep "^CAIDO_REQUEST_HEADER__" | while IFS='=' read -r name value; do
  header=$(echo "$name" | sed 's/^CAIDO_REQUEST_HEADER__//' | tr '_' '-' | tr '[:upper:]' '[:lower:]')
  formatted_header=$(title_case "$header")
  echo "$formatted_header: $value"
done > ~/Desktop/formatted-headers.txt
```

``` bash [bash]
env | grep "^CAIDO_REQUEST_HEADER__" | while IFS='=' read -r name value; do
  header="${name#CAIDO_REQUEST_HEADER__}"
  header="${header//_/-}"
  header=$(echo "$header" | tr '[:upper:]' '[:lower:]' | sed 's/\b\(.\)/\U\1/g')
  echo "$header: $value"
done > ~/formatted-headers.txt
```

``` bash [wsl]
env | grep "^CAIDO_REQUEST_HEADER__" | while IFS='=' read -r name value; do
  header="${name#CAIDO_REQUEST_HEADER__}"
  header="${header//_/-}"
  header=$(echo "$header" | tr '[:upper:]' '[:lower:]' | sed 's/\b\(.\)/\U\1/g')
  echo "$header: $value"
done > ~/formatted-headers.txt
```
:::

#### Running a Tool Against a Domain

::: code-group
``` cmd [cmd]
nslookup %CAIDO_REQUEST_HEADER__HOST% > "%USERPROFILE%\nslookup.txt" 2>&1
```

``` powershell [powershell]
nslookup $env:CAIDO_REQUEST_HEADER__HOST | Out-File -FilePath "$HOME\nslookup.txt"
```

``` sh [sh]
nslookup $CAIDO_REQUEST_HEADER__HOST > $HOME/nslookup.txt
```

``` zsh [zsh]
nslookup $CAIDO_REQUEST_HEADER__HOST > ~/nslookup.txt
```

``` bash [bash]
nslookup $CAIDO_REQUEST_HEADER__HOST > ~/nslookup.txt
```

``` bash [wsl]
nslookup $CAIDO_REQUEST_HEADER__HOST > ~/nslookup.txt
```
:::

#### Enumerating Subdomains

::: code-group
``` cmd [cmd]
%USERPROFILE%\go\bin\subfinder.exe -d %CAIDO_REQUEST_HEADER__HOST% -o %USERPROFILE%\subs.txt
```

``` powershell [powershell]
& "$HOME\go\bin\subfinder.exe" -d $env:CAIDO_REQUEST_HEADER__HOST -o "$HOME\subs.txt"
```

``` sh [sh]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```

``` zsh [zsh]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```

``` bash [bash]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```

``` bash [wsl]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```
:::

### Requests & Responses

Raw requests and responses are available as a JSON object via STDIN.

<img alt="Request and response from On Intercept Response node." src="/_images/workflows_shell_stdin_passive.png" center>

---

<img alt="Request and response from Active Start node." src="/_images/workflows_shell_stdin_active.png" center>

::: warning NOTE
The `request` and `response` JSON parameter data is Base64 encoded.

- For **cmd**, use `powershell -Command` to execute PowerShell commands.
- For **powershell**, use the built-in `ConvertFrom-Json` cmdlet (_no installation needed_).
- For **bash/zsh/sh/wsl**, [install jq](https://jqlang.org/download/) to parse JSON.
:::

#### Request to File

::: code-group
``` cmd [cmd]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)) | Out-File -FilePath \"$env:USERPROFILE\request.txt\""
```

``` powershell [powershell]
$json = $input | ConvertFrom-Json
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)) | Out-File -FilePath "$HOME\request.txt"
```

``` sh [sh]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` zsh [zsh]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` bash [bash]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` bash [wsl]
cat - | jq -r .request | base64 -d > ~/request.txt
```
:::

#### Request Headers to File

::: code-group
``` cmd [cmd]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)); $lines = $decoded -split \"`r`n\"; $lines[1..($lines.IndexOf('')-1)] | Out-File -FilePath \"$env:USERPROFILE\request-headers.txt\""
```

``` powershell [powershell]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request))
$lines = $decoded -split "`r`n"
$lines[1..($lines.IndexOf("")-1)] | Out-File -FilePath "$HOME\request-headers.txt"
```

``` sh [sh]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` zsh [zsh]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` bash [bash]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` bash [wsl]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```
:::

#### Response to File

::: code-group
``` cmd [cmd]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)) | Out-File -FilePath \"$env:USERPROFILE\response.txt\""
```

``` powershell [powershell]
$json = $input | ConvertFrom-Json
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)) | Out-File -FilePath "$HOME\response.txt"
```

``` sh [sh]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` zsh [zsh]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` bash [bash]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` bash [wsl]
cat - | jq -r .response | base64 -d > ~/response.txt
```
:::

#### Response Headers to File

::: code-group
``` cmd [cmd]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)); $lines = $decoded -split \"`r`n\"; $lines[1..($lines.IndexOf('')-1)] | Out-File -FilePath \"$env:USERPROFILE\response-headers.txt\""
```

``` powershell [powershell]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response))
$lines = $decoded -split "`r`n"
$lines[1..($lines.IndexOf("")-1)] | Out-File -FilePath "$HOME\response-headers.txt"
```

``` sh [sh]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` zsh [zsh]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` bash [bash]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` bash [wsl]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```
:::

#### Response Body to File

::: code-group
``` cmd [cmd]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)); $bodyStart = $decoded.IndexOf(\"`r`n`r`n\") + 4; $body = $decoded.Substring($bodyStart); $body | Out-File -FilePath \"$env:USERPROFILE\response-body.txt\""
```

``` powershell [powershell]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response))
$bodyStart = $decoded.IndexOf("`r`n`r`n") + 4
$body = $decoded.Substring($bodyStart)
$body | Out-File -FilePath "$HOME\response-body.txt"
```

``` sh [sh]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` zsh [zsh]
cat - | jq -r .response | base64 -d | sed '1,/^\r$/d' > ~/response-body.txt
```

``` bash [bash]
cat - | jq -r .response | base64 -d | sed '1,/^\r$/d' > ~/response-body.txt
```

``` bash [wsl]
cat - | jq -r .request | base64 -d > ~/request.txt
```
:::
