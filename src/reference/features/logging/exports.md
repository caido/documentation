# Exports

The `Exports` tab allows you to export data from the HTTP History and Search pages and use data collected by Caido in other tools.
This feature can also be used for archival purposes or audit purposes sometimes required by clients.

## Exports Types

The Exports feature generates two types of exports:

- **All**: exports all data of the specified tool.
- **Current rows** (Pro feature): exports only rows that match the filter and [scope](/reference/features/overview/scope.md) currently set.

![2 types of exports](/_images/exports_2_types.png)

## Exports Formats

Two export formats are available: JSON and CSV.
![JSON & CSV format](/_images/jsoncsv.png)

### JSON

For the JSON format, data will be exported as an array of requests with their respective response nested. See the full JSON schema below.

<details>
  <summary>SCHEMA</summary>

  ```json
  {{ #include ../../_schemas/data_export.json }}
  ```

</details>

### CSV

For the CSV format, each request/response pair will be exported on a row. Since CSV does not support nested columns, the response's columns have been renamed.

<details>
  <summary>COLUMNS</summary>

  ```csv
  id,host,method,path,length,port,raw,is_tls,query,file_extension,source,alteration,edited,parent_id,created_at,response_id,response_status_code,response_raw,response_length,response_alteration,response_edited,response_parent_id,response_created_at
  ```

</details>

## Download

Once the export is completed, it will be available on the Exports page.

![Download Exports](/_images/exports_in_exports.png)

From there you can download it, rename it, or delete it.

![Edit or Delete Exports](/_images/edit_exports.png)
