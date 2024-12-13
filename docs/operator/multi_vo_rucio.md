---
id: multi_vo_rucio
title: Multi-VO Rucio
sidebar_label: Multi-VO Rucio
---

Multi-VO Rucio configuration allows a single instance of Rucio to support
multiple experiments or Virtual Organisations (VOs). Multi-VO Rucio are run by a
"super_root" which administers the Rucio instance, creating VOs within Rucio,
each VO is then administered by VO specific "root" accounts created with the VO
that deal with the VO requirements and needs. Each VO uses Rucio as a normal or
"Single-VO" instance, meaning a Rucio instance can transition to support more
VOs without significant disruption. Each VO's accounts, scopes and RSEs are
associated with their VO which ensures all rules and replicas are kept separate
from other VOs using the instance.

## Changes to the Client

To utilise the Rucio client against a Multi-VO Rucio the client needs to first
know if it is interacting with a multi-VO Rucio instance, then which VO the client
should be accessing. This is done in the `rucio.cfg` as shown below:

```cfg
[common]
...
multi_vo = True

[client]
...
vo = abc
```

## Changes to the rucio.cfg on the Server and Daemons

Similar settings need to be changed on the server and daemon rucio.cfg files as
well as on the client end. For the server, `multi_vo` should also be set in the
config file. For the daemons, another section needs to be added: this is to
map each VO to its own proxy certificate. Rucio uses this information when
submitting and polling transfers to use the correct certificates.

```cfg
[common]
...
multi_vo = True

[vo_certs]
...
<3 char vo name> = <path/to/vo/proxy>
```

It is recommended that the proxies are placed in /tmp/x509up\_[VO], and the
certificates and keys are placed in /opt/rucio/certs/[VO]/ and
/opt/rucio/keys/[VO]/ respectively.

Unlike the Rucio client, `vo` in the `client` section should not be configured
for the server and daemons, unless specifically to ensure certain daemons act
for one VO alone:

```cfg
[common]
...
multi_vo = True
```

For the daemons, files and configuration are needed to allow daemons to act on
the various VOs: this inludes the VO specific certificates, keys, and proxies,
as well as an additional configuration section which maps each VO to its
respective x.509 authentication credentials. Rucio uses this information when
submitting and polling transfers to use the correct certificates.

```yaml
[vo_certs]
 ...
[3 char vo name] = [path/to/vo/proxy]
```

## Role of the super_root

For overall administration of Multi-VO Rucio another layer of admin role has
been created outside of the VO structure. This means each VO has its own
root/admin accounts still retain their administrative role within a VO, for
example adding and editing accounts, adding and modifying RSEs for the VO.
Functions relating to the creation and management of VOs are handled by the
super_root account. It is worth noting that the super_root account **cannot** be
used to perform individual VO administration; the roles of super_root and root
are distinct.

## Access of super_root Functions

As the super_root functions aren't intended for use by normal users of admins,
they do not have an implementation in the client or CLI.

The super_root functions can be accessed from the core or the
:ref:`vo-rest-api`. Access to the functions through the API will require the VO
endpoint to be added to the endpoints list used when setting up the server as it
is disabled by default.

## Starting a M-VO Instance

When bootstrapping the database as part of the Rucio installation, if M-VO is
enabled in `rucio.cfg` then the super_root account is created automatically. The
default VO "def" is also created, and the super_root acccount is associated with
it. The identity used to access this account can be managed in the usual way.

## Creating VOs

When creating a new VO with the `add_vo` function you need to specify the three
character identifier for the new VO, which can contain letters and numbers. This
must be unique for the instance (A long VO name can be enabled for usage if
required, as shown in the [`Long VO Name Mapping`](#long-vo-name-mapping)
section). A more complete description can also be optionally included, along
with an email to use for the root of this new VO. As the new VO is created, its
corresponding root account is also created, and has all identities associated
with super_root added to it. The identities for the VO root can then be
configured as usual.

## Long VO Name Mapping

The rucio database stores all VO references as a single three-character tag for
performance reasons. It's possible to create aliases for these tag to allow
users/clients to specify long VO names when getting a token (and modifying VOs)
and have these converted to the internal tag automatically. Long VO names should
only use the basic DNS name character set of alphanumeric characters, hyphen
and dot (a-zA-Z0-9-.). The alias mappings are stored in the vo-map section of
the configs database table and can be edited via the commands below. The option
name is the long VO name and the value is the short name; for example these can
be added using the CLI:

```bash
rucio-admin config set --section vo-map --option my.long.vo --value mlv
rucio-admin config set --section vo-map --option another.vo --value ant
```

You may specify more than one alias for a VO if required.

## Managing VOs

Super_root can also change the description and email for a VO using the `update_vo`
API call. If a VO root user loses access to their account, the super_root can
associate a new identity with it using `recover_vo_root_identity`. Finally, a
list of current VOs and their descriptions is accessible via `list_vos`.

## Converting Existing Instances

Rather than initialising a new Rucio instance to support multiple VOs, a
single-VO instance of Rucio can be converted to a Multi-VO instance if desired.
This conversion allows the Rucio instance to expand the number of supported VOs
with minimal disruption. The tools to perform this can be found in
[`rucio/tools/convert_database_vo.py`](https://github.com/rucio/rucio/blob/master/tools/convert_database_vo.py),
and further documentation on the [single VO to multi VO](#s-vo-to-m-vo) and
[multi-VO to single VO](#m-vo-to-s-vo) instances are found below.

The fuction `convert_to_mvo` facilitates the conversion of a single-VO instance
to a multi-VO instance, where `convert_to_svo` performs the opposite. VOs can
also be renamed using `rename_vo`, or deleted using `remove_vo`. The conversion
functions are callable by using the command line with details on what each
function requires to be carried out, as well as various optional arguments.

Remember that after any database conversion tools are used to update the `rucio.cfg`
appropriately, this may include adding the `multi_vo = True`, as found in
[`changes to the rucio.cfg section`](#changes-to-the-ruciocfg-on-the-server-and-daemons).

These above tools will allow Rucio to change its VO support model. However,
when converting an existing instance, any entries already in the database will
not be associated with a VO (or associated with their old one if previously in
M-VO mode). In order to change these, direct operations on the database are
required. These commands are generated using SQLAlchemy, and can either be run
directly on the database or printed out and run manually.

## Practicalities

Before attempting to convert existing data, it is recommended that a backup of
the database is taken in case any issues arise. Furthermore, of the databases
supported by Rucio, only PostgreSQL has been tested on real data. Based on this
test (which was performed on a machine with 64GB memory and four Intel Xeon
E5-2430 v2), the tables with 2 columns that needed updating were converted at a
rate of 5GB of data per hour. However many tables do not need any changes, so
the process will likely be faster than this in practice. Another approach to
speed up the conversion is to skip the "history" tables, as these can be very
large. Unlike other tables these do not have foreign key constraints set, and so
do not need to be updated in order to use the database. While the history will
be inaccessible from the new VO, it will still exist in the database and could
be accessed using the `super_root` account if needed.

## S-VO to M-VO

Before starting, ensure that `multi_vo` is set to `True` in the config file. The
SQL commands needed to convert the database involve dropping foreign key
constraints that affect accounts/scopes, then altering the relevant columns,
before re-adding the constraints. The 3 character identifier for the VO, a full
description and an admin email should be provided:

```bash
$ tools/convert_database_vo.py convert_to_mvo new "New VO for existing data" rucio@email.com
ALTER TABLE account_limits DROP CONSTRAINT "ACCOUNT_LIMITS_ACCOUNT_FK";
...
UPDATE account_limits SET account=(split_part(account_limits.account, '@', 1) \
  || CAST('@new' AS CHAR(4))) WHERE \
    split_part(account_limits.account, '@', 2) = '';
...
ALTER TABLE account_limits ADD CONSTRAINT "ACCOUNT_LIMITS_ACCOUNT_FK" \
  FOREIGN KEY(account) REFERENCES accounts (account);
```

In this example, no changes will be made to the database by running the script,
and so the SQL will need to be run manually. After running the commands, a
`super_root` account should be setup to allow administrative functions like
adding more VOs:

```bash
$ python
>>> from rucio.db.sqla.util import create_root_account
>>> create_root_account(create_counters=False)
```

Alternatively by specifying `--commit_changes` the script will attempt to modify
the database as it runs, however this requires the account used by the Rucio
instance to access the database to be the owner of the the tables. In this case,
the `super_root` account can be added as part of the script by passing the
argument `--create_super_root`. If there is an error during the conversion, then
none of the changes will be committed.

```bash
$ tools/convert_database_vo.py --commit_changes \
  convert_to_mvo new "New VO for existing data" rucio@email.com \
  --create_super_root
```

Finally, there is the option to skip the (potentially very large) tables of
historical data using `--skip_history`. In this case the commands to alter those
tables are omitted:

```bash
$ tools/convert_database_vo.py --skip_history \
  convert_to_mvo new "New VO for existing data" rucio@email.com
```

## M-VO to S-VO

Before starting, ensure that `multi_vo` is set to `True` in the config file
(this option can be removed after completing the conversion). The first stage of
the conversion is the same as before, dropping foreign key constraints and
renaming the entries that were associated with the old VO. The name of this VO
is the only required argument:

```bash
$ tools/convert_database_vo.py
convert_to_svo old ALTER TABLE account_limits DROP CONSTRAINT
"ACCOUNT_LIMITS_ACCOUNT_FK"; ...  UPDATE account_limits SET
account=split_part(account_limits.account, '@', 1) WHERE
split_part(account_limits.account, '@', 2) = 'old'; ...  ALTER TABLE
account_limits ADD CONSTRAINT "ACCOUNT_LIMITS_ACCOUNT_FK" FOREIGN KEY(account)
REFERENCES accounts (account);
```

By default, data associated with any other VOs is left in the database, but will
be inaccessible to Rucio users.
These entries can be completely deleted from the database
by pasing the `--delete_vos` argument.

```bash
tools/convert_database_vo.py convert_to_svo old --delete_vos ...  \
  DELETE FROM account_limits WHERE \
    split_part(account_limits.account, '@', 2) = 'xyz'; \
  ...  DELETE FROM account_limits WHERE \
    split_part(account_limits.account, '@', 2) = '123'; ...
```

Once again, historical tables skipped with `--skip_history`, and the commands
can be run directly against the database using the `--commit_changes` argument;
if this is not set then the `super_root` account should be manually deleted
after running the SQL:

```bash
$ python
>>> from rucio.common.types import InternalAccount
>>> from rucio.core.account import del_account
>>> del_account(InternalAccount('super_root', vo='def'))
```
