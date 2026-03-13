---
id: database
title: Database Operations
sidebar_label: Database Operations
---

## Supported databases

Rucio uses [SQLAlchemy](https://www.sqlalchemy.org/) as the object-relational
mapper between Python and SQL. Rucio is extensively tested against SQLite,
MySQL/MariaDB, PostgreSQL, and Oracle and should work with them out of the
box. The appropriate connection string has to be set in the `etc/rucio.cfg`, for
example:

Oracle:
`oracle://rucio:rucio@(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=10121))(ENABLE=BROKEN)(CONNECT_DATA=(SERVICE_NAME=localhost)))`

MySQL/MariaDB: `mysql+pymysql://rucio:rucio@localhost/rucio`

PostgreSQL: `postgresql://rucio:rucio@localhost:6601/rucio`

SQLite: `sqlite:////tmp/rucio.db`

Please ensure correct UNIX permissions on the SQLite file, such that the web
server process can read and write to it.

## Additional options

### Connection pooling

Connection pooling is enabled by default, but can be disabled by setting the option

```dosini
poolclass = nullpool
```

in the `[database]` section in `etc/rucio.cfg`.

Other valid values are `singletonthreadpool`,
which is the default pooling mechanism when using the SQLite engine,
and `queuepool`,
which is the default otherwise.

Note that the chosen `poolclass` may conflict with other pooling options.
For instance, one cannot combine `poolclass = nullpool` with the `pool_size` option.

## Upgrading and downgrading the database schema

Rucio uses [Alembic](http://alembic.zzzcomputing.com/en/latest/) as a database
migration tool, which works hand-in-hand with
[SQLAlchemy](https://www.sqlalchemy.org/). Ensure that in your `alembic.ini` file the
database connection string is set to the same database connection string as
the `rucio.cfg`.

### Prerequisites for running Alembic locally

Before running any Alembic commands, you must satisfy these requirements:

1. **Run from a directory with Rucio installed** - Not from inside `lib/rucio/db/sqla`, as this may cause Python module shadowing and import errors.
2. **Have an `alembic.ini` file** - Initialize it if not present using `alembic init`
3. **Point migrations to upstream revisions** - Configure `script_location` in `alembic.ini` to point to `lib/rucio/db/sqla/migrate_repo` where all upstream Rucio migrations are stored

**Step-by-step setup:**

```bash
# 1. Navigate to the Rucio repository root
cd /path/to/rucio

# 2. Install Rucio and related dependencies (e.g. alembic and psycopg2)
pip install .

# 3. If alembic.ini doesn't exist, initialize it
alembic init alembic

# 4. Edit alembic.ini and set the database connection string
# sqlalchemy.url = postgresql://rucio:PASSWORD@localhost:5432/rucio

# 5. Edit alembic.ini and point to the upstream migration revisions
# script_location = lib/rucio/db/sqla/migrate_repo
```

### Running migrations

First, check the current migration state of your database:

```bash
alembic -c path-to/alembic.ini current
```
:::tip[Manual migration state check]
If the output is blank, it means your database is at the base state (no migrations applied).
This could interfere with the upgrade process if your database schema is not actually empty, so you may need to manually set the `alembic_version` to the correct revision (see "Manual database migration troubleshooting" section below).
:::

To verify the changes that will be applied during a schema upgrade:

```bash
alembic -c path-to/alembic.ini upgrade --sql $(alembic -c path-to/alembic.ini current | cut -d' '-f1):head
```

You can edit and then apply the SQL directly on your database, or run the automatic upgrade:

```bash
alembic -c path-to/alembic.ini upgrade head
```

We do not advise running automatic upgrades/downgrades with alembic in production environments.

:::info
Schema upgrades are reserved for feature releases and will not happen with patch releases.
:::

### Manual database migration troubleshooting

:::warning
Manual operations on the database are dangerous and should only be attempted when standard Alembic upgrades fail. Always backup your database before proceeding!
:::

If `alembic upgrade head` fails or reports no pending migrations when you expect changes, you may need to manually inspect or reset the migration state. This can happen after major version upgrades or when the `alembic_version` table becomes out of sync.

#### Checking current migration state

```bash
alembic -c path-to/alembic.ini current
```

#### Understanding migration revisions

All Rucio migration revisions are stored in `lib/rucio/db/sqla/migrate_repo/versions/`. Each revision file has a standard structure with `revision` and `down_revision` identifiers:

```python
revision = '295289b5a800'
down_revision = 'a6eb23955c28'
```

These identifiers form a linked chain that tracks the migration history. To use these migrations with Alembic, you must configure your `alembic.ini` to point to this directory as the `script_location`:

```ini
# In alembic.ini
script_location = lib/rucio/db/sqla/migrate_repo
```

:::tip
To find the migration sequence and associate revisions with specific Rucio versions:

1. Use `git checkout tags/X.Y.Z` to switch to a specific Rucio release
2. Run migration chain scripts to trace which revisions were in that release
3. Cross-reference with your current `alembic_version` to find the gap
:::

To find the migration sequence, use:

```bash
# Find which revision comes after a given one
grep -ri 'a6eb23955c28' lib/rucio/db/sqla/migrate_repo/versions | grep "down_revision = 'a6eb23955c28'"
```

Or use this bash script to trace the full migration chain from a starting revision:

```bash
#!/bin/bash
export I_REVISION=$1
export NEXT_REV=$I_REVISION
while [[ -n $NEXT_REV ]]; do
    echo $NEXT_REV
    NEXT_REV=$(grep -ri ${NEXT_REV} lib/rucio/db/sqla/migrate_repo/versions | grep "down_revision = '${NEXT_REV}'" | cut -d'_' -f1)
done
```

#### Forcefully resetting the migration version

If you need to reset your database to a specific migration state (for debugging or recovery after failed upgrades), you can manually update the `alembic_version` table:

```bash
# Connect to your Rucio database
psql -h <DB_HOST> -U rucio -p <PORT> -d rucio

# Check the current recorded migration version
SELECT * FROM alembic_version;

# Insert or update to a specific revision (be cautious!)
INSERT INTO alembic_version (version_num) VALUES ('140fef722e91')
  ON CONFLICT (id) DO UPDATE SET version_num = '140fef722e91';

# Or for older PostgreSQL versions without ON CONFLICT:
DELETE FROM alembic_version;
INSERT INTO alembic_version (version_num) VALUES ('140fef722e91');
```

Then verify with Alembic:

```bash
alembic -c path-to/alembic.ini current
```

#### Applying migrations incrementally

After resetting the `alembic_version`, you can apply migrations one at a time to identify which one fails:

```bash
alembic -c path-to/alembic.ini upgrade <revision_id>
```

Example sequence:

```bash
alembic -c path-to/alembic.ini upgrade fb28a95fe288
alembic -c path-to/alembic.ini upgrade a6eb23955c28
alembic -c path-to/alembic.ini upgrade 295289b5a800
# ... continue until head
```

#### Inspecting database schema

To verify if a specific migration has been applied, check the database directly:

```bash
psql -h <DB_HOST> -U rucio -p <PORT> -d rucio
\d requests  # List table structure
```

Compare the columns against the `upgrade()` function in the relevant migration file.

## Creating a new version as a developer

If you want to create an upgrade path for the schema, you need to generate a
schema upgrade+downgrade file:

`alembic revision -m 'schema change message'`

This will output the name of the file that has been generated with two functions
`def upgrade()` and `def downgrade()` that need to be implemented. These should
reflect the changes to the `lib/rucio/db/sqla/models.py` SQLAlchemy mapping.
