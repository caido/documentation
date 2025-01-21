# Deleting Data in Caido

::: warning
We do not recommend modifying the files directly as this might result in problems in the application and/or corruption of data. Proceed at your own risk.
:::

Although we do not recommend doing this, we are aware that deleting data is not currently possible via the application.

Thus we will go over some SQL commands you can run to clean it manually.

Please read our [reference on internal files](/reference/internal_files.md) first to get familiar with the different files.

## Finding the Project

1. Decide which project you want to clean.
2. Navigate to your Caido data path.
3. Open the projects database using `sqlite3 projects.db`.
4. Run `select * from projects;` and keep the UUID of the project you want to modify.

`08c09bfa-a9fd-41e5-909e-2338a28319f9`

## Preparing the Project Database

1. If Caido is running, kill the application.
2. Navigate to `projects/<PROJECT UUID>/`.
3. Open the main data: `sqlite3 database.caido`
4. Switch to WAL mode: `PRAGMA main.journal_mode = WAL;`
5. Attach the raw database: `ATTACH DATABASE 'database_raw.caido' AS raw;`
6. Switch to WAL mode: `PRAGMA raw.journal_mode = WAL;`
7. Enable foreign keys: `PRAGMA foreign_keys = ON;`

::: warning
Do NOT skip the foreign keys step!
:::

## Deleting Requests

The requests are stored in multiple tables and thus we need to be careful when cleaning them. The order of operations is important.

### Determining Requests & Responses to Delete

The first step is to find a list of requests we want to delete. We will keep that in a temporary table.

```sql
CREATE TEMP TABLE requests_to_delete AS
SELECT id, response_id
FROM requests
WHERE <your_condition_here> -- Replace with your condition.
```

For example, the condition could be: `host = "www.youtube.com"`.

```sql
CREATE TEMP TABLE responses_to_delete AS
WITH RECURSIVE recursive_responses AS (
    SELECT r.id, r.parent_id
    FROM responses r
    INNER JOIN requests_to_delete rd ON r.id = rd.response_id
    UNION ALL
    SELECT r.id, r.parent_id
    FROM responses r
    INNER JOIN recursive_responses rr ON r.parent_id = rr.id
 )
SELECT id FROM recursive_responses;
```

### Cleaning Requests Raw

```sql
DELETE FROM requests_raw
WHERE id IN (
  SELECT id
  FROM requests_to_delete
);
```

### Cleaning Responses Raw

```sql
DELETE FROM responses_raw
WHERE id IN (
  SELECT id
  FROM responses_to_delete
);
```

### Cleaning Sitemap Entries

```sql
DELETE FROM sitemap_entries
WHERE request_id IN (
  SELECT id
  FROM requests_to_delete
);
```

### Cleaning Requests

This will also clean `scoped_requests` and `requests_metadata`.

```sql
DELETE FROM requests
WHERE id IN (
  SELECT id
  FROM requests_to_delete
);
```

### Cleaning Responses

```sql
DELETE FROM responses
WHERE id IN (
  SELECT id
  FROM responses_to_delete
);
```
