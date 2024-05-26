# Exports

The `Exports` tab allows you to export data from the HTTP History and Search pages and use data collected by Caido in other tools.

This feature can also be used for archival purposes or audit purposes sometimes required by clients.

## Exports Types

The Exports feature offers two exportation options:

<img alt="Exports." src="/_images/export_types.png" center/>

1. **Export all**: Exports all data of the specified tool.

> PRO FEATURE

2. **Export current rows**: Exports only rows that match the filter and [scope](/reference/features/overview/scope.md) currently set.

::: info
Each export option has two formats available:

1. JSON
2. CSV

:::

### JSON

For the JSON format, data will be exported as an array of requests with their respective response nested. See the full JSON schema below:

  ```json
  {{ #include ../../_schemas/data_export.json }}
  ```

### CSV

For the CSV format, each request/response pair will be exported on a row. Since CSV does not support nested columns, the response's columns have been renamed.

  ```csv
  id,host,method,path,length,port,raw,is_tls,query,file_extension,source,alteration,edited,parent_id,created_at,response_id,response_status_code,response_raw,response_length,response_alteration,response_edited,response_parent_id,response_created_at
  ```

## Download

Once the export is completed, it will be available on the Exports page.

<img alt="Exports tab." src="/_images/exports_tab.png">

From here you can download/rename/delete the Export.
