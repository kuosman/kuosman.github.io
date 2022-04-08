---
layout: post
title: PostgreSQL JSON
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [postgresql, json]
---

# PostgreSQL JSON

## Select

### Select wanted key and show it's value

```sql
-- Select <JSON_KEY1> value from <TABLE_NAME>.
SELECT <JSONOBJECT_COLUMN>::json->'<JSON_KEY1>' FROM <TABLE_NAME>;
-- Select <JSON_KEY1> JSONObject <JSON_KEY2> value from <TABLE_NAME>.
SELECT <JSONOBJECT_COLUMN>::json->'<JSON_KEY1>'->'<JSON_KEY2>' FROM <TABLE_NAME>;
```

## Update

### Add key and value to JSONObject

```sql
-- Add "newKey" key and value "New key value" to <JSONOBJECT_COLUMN> in <TABLE_NAME>-table.
UPDATE <TABLE_NAME>
SET <JSONOBJECT_COLUMN> = COALESCE("<JSONOBJECT_COLUMN>", '{}')::jsonb || '{ "newKey" : "New key value" }';
```

### Remove key and value from JSONObject

```sql
-- Remove "removeThisKey" key and value from <TABLE_NAME> and <JSONOBJECT_COLUMN> columns
UPDATE <TABLE_NAME> SET <JSONOBJECT_COLUMN> = <JSONOBJECT_COLUMN>::jsonb - 'removeThisKey';
```