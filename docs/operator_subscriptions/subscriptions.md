# Rucio Subscriptions

## Overview

A **subscription** in Rucio defines a set of rules and filters that are automatically applied to datasets and files as they are registered in the system. Subscriptions can trigger the creation of replication rules for matching data, enabling automated data placement and management.

Subscriptions are a core way to automate data workflows and ensure datasets are distributed according to organizational needs.

---

## Why Use Subscriptions?

- **Automate Data Management:** Replicate datasets automatically based on metadata, names, or other attributes.
- **Policy Enforcement:** Ensure compliance with data distribution policies.
- **Efficiency:** Avoid manual rule creation for every new dataset.

---

## Key Concepts

- **Filter:** A dictionary specifying criteria for which data the subscription applies to (e.g., dataset name patterns, account, project).
- **Replication Rules:** Instructions for how matching data should be replicated (number of copies, target RSEs, weights, etc).
- **Retroactive:** Whether the subscription should apply to pre-existing data.
- **Lifetime:** Optional duration (in days) for the subscription to remain active.
- **Priority:** Determines the order in which subscriptions are processed.
- **State:** Subscriptions can be ACTIVE, NEW, INACTIVE, or UPDATED.
- **Keep History:** Optionally record a history of all subscription changes.

---

## Using the Python Client

The `Client` class exposes subscription management methods via its `add_subscription`, `list_subscriptions`, `update_subscription`, etc.

```python
from rucio.client import Client

client = Client()
```

### Creating a Subscription

```python
sub_id = client.add_subscription(
    name="my_subscription",
    account="my_account",
    filter_={'project': 'ATLAS', 'datatype': 'AOD'},
    replication_rules=[{'copies': 2, 'rse_expression': 'T1_*', 'weight': 'ddm'}],
    comments="Automate AOD placement",
    lifetime=30,             # Optional: days, or False for no expiry
    retroactive=False,       # Retroactive mode is not implemented
    dry_run=False,           # If True, only prints actions
    priority=3               # Optional: default is 3
)
print(f"Created subscription ID: {sub_id}")
```

---

### Listing Subscriptions

```python
# List all subscriptions for an account
subs = client.list_subscriptions(account="my_account")
for sub in subs:
    print(sub)

# List a specific subscription by name
subs = client.list_subscriptions(name="my_subscription", account="my_account")
print(list(subs))
```

---

### Updating a Subscription

```python
result = client.update_subscription(
    name="my_subscription",
    account="my_account",
    filter_={'project': 'ATLAS', 'datatype': 'RAW'},
    replication_rules=[{'copies': 1, 'rse_expression': 'T2_*'}],
    comments="Update to RAW",
    priority=2
)
print("Subscription updated:", result)
```

---

### Deactivating a Subscription

```python
result = client.deactivate_subscription(
    name="my_subscription",
    account="my_account"
)
print("Subscription deactivated:", result)
```

---

### Listing Rules Associated With a Subscription

```python
rules = client.list_subscription_rules(account="my_account", name="my_subscription")
for rule in rules:
    print(rule)
```

---

## Error Handling

- Operations will raise exceptions (e.g., `NotFound`) if subscriptions are missing or requests are invalid.
- `retroactive=True` is not implemented and will raise `NotImplementedError`.

---

# Subscription Algorithms

Rucio supports advanced subscription scenarios through algorithms that determine how child rules are placed based on the outcome of parent rules or the result of RSE expressions. These are especially relevant for "chained" subscriptions and complex data workflows.

---

## Chained Subscription Algorithms

Chained subscriptions allow the placement of new rules to depend on the outcome or parameters of rules created in a previous step (the "parent"). The specific algorithm to use for this chaining is specified in the subscription rule.

The two main chained subscription algorithms are:

### 1. `associated_site`

**Purpose:**  
Selects an associated RSE based on the `associated_site` attribute from the parent rule's RSE.

**How it works:**  
- When a rule is created on an RSE that has the `associated_site` attribute, the algorithm will select one of the associated sites based on the given index (`associated_site_idx`).
- This enables multi-step workflows where the child rule is coordinated with the parent’s site.

**Usage Example:**  
If a parent rule is on an RSE with `associated_site="T1_FR_CCIN2P3,T1_DE_KIT"`, and you want the child rule to go to the first associated site:
```json
{
  "algorithm": "associated_site",
  "associated_site_idx": 1
}
```

---

### 2. `exclude_site`

**Purpose:**  
Places the child rule on an RSE that does **not** match the site of the parent rule.

**How it works:**  
- The algorithm finds the `site` attribute of the parent rule's RSE.
- Modifies the RSE expression to exclude this site, ensuring the child rule lands elsewhere.

**Usage Example:**  
Used when you need to guarantee data is not replicated to the same site in multiple workflow stages.

---

## Split Rule Option

While not an "algorithm" per se, the `split_rule` filter option is often used to create one rule per matching RSE, useful for fine-grained placement and accounting. It can be combined with chained subscriptions for even more advanced workflows.

**Purpose:**  
- When `split_rule` is specified in a subscription filter, rules are created separately for each RSE matching the expression.
- The number of rules created is equal to the number of RSEs matching the expression.
- If `"copies": "*"` is specified, the number of copies is set to the number of matched RSEs.

---

## Summary Table

| Algorithm         | Purpose                                             | Key Parameters            |
|-------------------|-----------------------------------------------------|---------------------------|
| associated_site   | Child rule on parent’s associated site              | associated_site_idx       |
| exclude_site      | Child rule avoids parent’s site                     |                           |
| split_rule        | Rule per matching RSE (not chained)                 | split_rule (filter)       |

---

## Further Reading

- [Transmogrifier details and implementation](transmogrifier.md)
- [Rucio Data Management Documentation](https://rucio.readthedocs.io/en/latest/)
