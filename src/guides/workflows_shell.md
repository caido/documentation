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

To test the execution and debug your Shell node commands/scripts before using workflows against targets, provide mock requests and responses in the editors, and click on the **click** on the <code><Icon icon="fas fa-play" /> Run</code> button.

::: tip
Monitor the [logs](/guides/logs_viewing.md) when debugging.
:::

<img alt="The test environment." src="/_images/workflows_shell_testing.png" center>

The details of each run will be listed in the `View` drop-down menu. To view the execution details of the Shell node, click on the **click** on its associated <code><Icon icon="fas fa-circle-info" /></code> button.

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

#### cmd

::: code-group
``` cmd [URL to File]
echo %CAIDO_URL% > %USERPROFILE%\url.txt
```

``` cmd [Project Name to File]
echo %CAIDO_PROJECT% > %USERPROFILE%\project.txt
```

``` cmd [Specific Header to File]
echo %CAIDO_REQUEST_HEADER__HOST% > %USERPROFILE%\host.txt
```

``` cmd [All Headers to File]
set | findstr "CAIDO_REQUEST_HEADER__" > %USERPROFILE%\headers.txt
```

``` cmd [Running a Tool Against a Domain]
nslookup %CAIDO_REQUEST_HEADER__HOST% > "%USERPROFILE%\nslookup.txt" 2>&1
```

``` cmd [Enumerating Subdomains]
%USERPROFILE%\go\bin\subfinder.exe -d %CAIDO_REQUEST_HEADER__HOST% -o %USERPROFILE%\subs.txt
```
:::

#### powershell

::: warning NOTE
The `&` call operator is required for paths that contain spaces.
:::

::: code-group
``` powershell [URL to File]
$env:CAIDO_URL | Out-File -FilePath "$HOME\url.txt"
```

``` powershell [Project Name to File]
$env:CAIDO_PROJECT | Out-File -FilePath "$HOME\project.txt"
```

``` powershell [Specific Header to File]
$env:CAIDO_REQUEST_HEADER__HOST | Out-File -FilePath "$HOME\host.txt"
```

``` powershell [All Headers to File]
Get-ChildItem env: | Where-Object {$_.Name -like "CAIDO_REQUEST_HEADER__*"} | ForEach-Object { "$($_.Name)=$($_.Value)" } | Out-File -FilePath "$HOME\headers.txt"
```

``` powershell [All Headers to File Formatted]
Get-ChildItem env: | Where-Object {$_.Name -like "CAIDO_REQUEST_HEADER__*"} | ForEach-Object {
  $name = $_.Name -replace '^CAIDO_REQUEST_HEADER__', '' -replace '_', '-'
  $name = (Get-Culture).TextInfo.ToTitleCase($name.ToLower())
  "${name}: $($_.Value)"
} | Out-File -FilePath "$HOME\formatted-headers.txt"
```

``` powershell [Running a Tool Against a Domain]
nslookup $env:CAIDO_REQUEST_HEADER__HOST | Out-File -FilePath "$HOME\nslookup.txt"
```

``` powershell [Enumerating Subdomains]
& "$HOME\go\bin\subfinder.exe" -d $env:CAIDO_REQUEST_HEADER__HOST -o "$HOME\subs.txt"
```
:::

#### zsh

::: code-group
``` zsh [URL to File]
echo "$CAIDO_URL" > ~/url.txt
```

``` zsh [Project Name to File]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` zsh [Specific Header to File]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` zsh [All Headers to File]
env | while IFS='=' read -r name value; do
  if [[ "$name" == CAIDO_REQUEST_HEADER__* ]]; then
    echo "$name=$value"
  fi
done > ~/Desktop/formatted-headers.txt
```

``` zsh [All Headers to File Formatted]
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

``` zsh [Running a Tool Against a Domain]
nslookup $CAIDO_REQUEST_HEADER__HOST > ~/nslookup.txt
```

``` zsh [Enumerating Subdomains]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```
:::

#### sh

::: code-group
``` sh [URL to File]
echo "$CAIDO_URL" > ~/url.txt
```

``` sh [Project Name to File]
echo "$CAIDO_PROJECT" > ~/project.txt
```

``` sh [Specific Header to File]
echo "$CAIDO_REQUEST_HEADER__HOST" > ~/host.txt
```

``` sh [All Headers to File]
env | grep "^CAIDO_REQUEST_HEADER__" > ~/headers.txt
```

``` sh [All Headers to File Formatted]
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

``` sh [Running a Tool Against a Domain]
nslookup $CAIDO_REQUEST_HEADER__HOST > $HOME/nslookup.txt
```

``` sh [Enumerating Subdomains]
~/go/bin/subfinder -d "$CAIDO_REQUEST_HEADER__HOST" -o ~/subs.txt
```
:::

#### bash

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
nslookup $CAIDO_REQUEST_HEADER__HOST > ~/nslookup.txt
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
The `request` and `response` JSON parameter data is Base64 encoded.

- For **cmd**, use `powershell -Command` to execute PowerShell commands.
- For **powershell**, use the built-in `ConvertFrom-Json` cmdlet (_no installation needed_).
- For **bash/zsh/sh/wsl**, [install jq](https://jqlang.org/download/) to parse JSON.
:::

#### cmd

::: code-group
``` cmd [Request to File]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)) | Out-File -FilePath \"$env:USERPROFILE\request.txt\""
```

``` cmd [Request Headers to File]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)); $lines = $decoded -split \"`r`n\"; $lines[1..($lines.IndexOf('')-1)] | Out-File -FilePath \"$env:USERPROFILE\request-headers.txt\""
```

``` cmd [Response to File]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)) | Out-File -FilePath \"$env:USERPROFILE\response.txt\""
```

``` cmd [Response Headers to File]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)); $lines = $decoded -split \"`r`n\"; $lines[1..($lines.IndexOf('')-1)] | Out-File -FilePath \"$env:USERPROFILE\response-headers.txt\""
```

``` cmd [Response Body to File]
powershell -Command "$json = [Console]::In.ReadToEnd() | ConvertFrom-Json; $decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)); $bodyStart = $decoded.IndexOf(\"`r`n`r`n\") + 4; $body = $decoded.Substring($bodyStart); $body | Out-File -FilePath \"$env:USERPROFILE\response-body.txt\""
```
:::

#### powershell

::: code-group
``` powershell [Request to File]
$json = $input | ConvertFrom-Json
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request)) | Out-File -FilePath "$HOME\request.txt"
```

``` powershell [Request Headers to File]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.request))
$lines = $decoded -split "`r`n"
$lines[1..($lines.IndexOf("")-1)] | Out-File -FilePath "$HOME\request-headers.txt"
```

``` powershell [Response to File]
$json = $input | ConvertFrom-Json
[System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response)) | Out-File -FilePath "$HOME\response.txt"
```

``` powershell [Response Headers to File]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response))
$lines = $decoded -split "`r`n"
$lines[1..($lines.IndexOf("")-1)] | Out-File -FilePath "$HOME\response-headers.txt"
```

``` powershell [Response Body to File]
$json = $input | ConvertFrom-Json
$decoded = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($json.response))
$bodyStart = $decoded.IndexOf("`r`n`r`n") + 4
$body = $decoded.Substring($bodyStart)
$body | Out-File -FilePath "$HOME\response-body.txt"
```
:::

#### sh

::: code-group
``` sh [Request to File]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` sh [Request Headers to File]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` sh [Response to File]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` sh [Response Headers to File]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` sh [Response Body to File]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```
:::

#### zsh

::: code-group
``` zsh [Request to File]
cat - | jq -r .request | base64 -d > ~/request.txt
```

``` zsh [Request Headers to File]
cat - | jq -r .request | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/request-headers.txt
```

``` zsh [Response to File]
cat - | jq -r .response | base64 -d > ~/response.txt
```

``` zsh [Response Headers to File]
cat - | jq -r .response | base64 -d | sed -n '2,/^\r$/p' | sed '/^\r$/d' > ~/response-headers.txt
```

``` zsh [Response Body to File]
cat - | jq -r .response | base64 -d | sed '1,/^\r$/d' > ~/response-body.txt
```
:::

#### bash

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

#### wsl

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
