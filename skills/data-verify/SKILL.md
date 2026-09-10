---
name: data-verify
description: >-
  Cross-database data reconciliation, push-down cryptographic hashing, and schema drift verification.
  Use this skill whenever verifying data consistency between disparate databases (PostgreSQL, MySQL, SQLite, BigQuery, Snowflake, ClickHouse), building Merkle tree checksum queries, or auditing data pipelines.
---

# Cross-Database Verification & Hashing Recipes (data-verify)

This skill provides a practical recipe book for verifying data consistency across heterogeneous databases using **Push-Down Hashing** and **Hierarchical Bucket Checksums** without pulling raw tables over the network.

---

## 1. Universal Push-Down Row Hashing Matrix

To ensure two databases produce identical 32-character hexadecimal MD5 hashes for the same row data, use these cross-engine SQL expressions:

### PostgreSQL
```sql
MD5(CONCAT_WS('|', COALESCE(col1::text, ''), COALESCE(col2::text, ''), ...))
```

### Google BigQuery
```sql
TO_HEX(MD5(CONCAT(COALESCE(CAST(col1 AS STRING), ''), '|', COALESCE(CAST(col2 AS STRING), ''), ...)))
```

### MySQL / MariaDB
```sql
MD5(CONCAT_WS('|', COALESCE(CAST(col1 AS CHAR), ''), COALESCE(CAST(col2 AS CHAR), ''), ...))
```

### ClickHouse
```sql
hex(MD5(concatWithSeparator('|', toString(col1), toString(col2), ...)))
```

### SQLite (with registered custom MD5 function)
```sql
cc_row_hash(col1, col2, ...)
```

---

## 2. Bucket Checksum Aggregation Pattern

To aggregate thousands of rows into a single bucket hash without fetching them:

```sql
WITH partitioned AS (
    SELECT
        key_id AS _k,
        ((key_id - :min_id) / :bucket_size) AS _b_idx,
        <ROW_HASH_EXPR> AS _r_hash
    FROM table_name
    WHERE key_id BETWEEN :min_id AND :max_id
)
SELECT
    _b_idx,
    COUNT(*) AS row_count,
    <STRING_AGG_HASH_EXPR> AS bucket_hash
FROM partitioned
GROUP BY _b_idx
ORDER BY _b_idx;
```

* **PostgreSQL:** `MD5(STRING_AGG(_r_hash, '' ORDER BY _k))`
* **BigQuery:** `TO_HEX(MD5(STRING_AGG(_r_hash, '' ORDER BY _k)))`
* **SQLite:** `cc_md5(GROUP_CONCAT(_r_hash, '' ORDER BY _k))`

---

## 3. The 3-Step Drill-Down Protocol

1. **Level 1 (Bucket Comparison):** Compare `(row_count, bucket_hash)`. If equal, all rows in the bucket are 100% identical. Skip immediately ($O(\text{buckets})$).
2. **Level 2 (Row Hash Comparison):** For mismatched buckets only, query `SELECT key_id, <ROW_HASH_EXPR>` within the bucket's key range to isolate missing IDs or modified IDs.
3. **Level 3 (Field-Level Diff):** Fetch full column values only for the isolated mismatched IDs to pinpoint exact differing fields.
