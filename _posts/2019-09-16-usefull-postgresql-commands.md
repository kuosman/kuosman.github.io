---
layout: post
title: Usefull PostgreSQL commands
subtitle:
gh-repo: kuosman/kuosman.github.io
gh-badge: [follow]
tags: [postgresql, sql]
---

# Useful commands

## Check database sizes

Run following command:

```sql
select t1.datname AS db_name,
       pg_size_pretty(pg_database_size(t1.datname)) as db_size
from pg_database t1
order by pg_database_size(t1.datname) desc;
```

## Kill hanging queries

```sql
-- Check running processes:
SELECT * FROM pg_stat_activity WHERE state = 'active';

-- Find the process you want to kill, then type:
SELECT pg_cancel_backend(<pid of the process>);

-- If the process cannot be killed, try:
SELECT pg_terminate_backend(<pid of the process>)
```