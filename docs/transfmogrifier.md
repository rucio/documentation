# Rucio Transmogrifier Daemon

## Purpose

The **transmogrifier daemon** in Rucio is responsible for automatically creating and managing **replication rules** for new DIDs (Data Identifiers) according to user-defined **subscriptions**. This automation ensures that new data is distributed across storage endpoints as soon as it appears, following the policies and patterns defined by users.

---

## How It Works

### Step-by-Step Behaviour

1. **Initialization**
    - The daemon starts, sets up logging, threads, and heartbeats.
    - It checks the database schema for compatibility.

2. **Loading Subscriptions**
    - Active subscriptions are loaded and validated.
    - Subscriptions contain filters (which data to match) and replication rules (where and how much to replicate).

3. **Fetching New DIDs**
    - The daemon queries for new DIDs (datasets or containers) that have not yet been processed.

4. **Matching DIDs Against Subscriptions**
    - For each new DID, it fetches metadata and checks against all subscription filters.
    - Each filter can include scope, name patterns, account, DID type, file size limits, and more.

5. **Processing Matching Subscriptions**
    - For each matching subscription and DID:
        - Parses the subscription’s replication rules.
        - Prepares rule parameters (number of copies, RSE expressions, activity, etc.).
        - Handles **split** and **chained** logic for advanced placement scenarios.

6. **Selecting RSEs (Storage Endpoints)**
    - Depending on rule logic:
        - **Direct:** Uses the RSEs specified in the rule.
        - **Split/Chained:** Calls algorithms to dynamically select RSEs based on previous rule placements or specific logic.

7. **Rule Creation**
    - Attempts to create the required replication rules for each selected RSE.
    - Handles errors, blocklisted RSEs, and retry logic.

8. **Marking & Updating**
    - Successfully processed DIDs are marked to avoid reprocessing.
    - Updates the subscription’s metadata (e.g., `last_processed` timestamp).

9. **Metrics and Logging**
    - The daemon records metrics on processing counts, errors, durations, and more for monitoring.

10. **Loop or Exit**
    - If running in continuous mode, the daemon sleeps and repeats.
    - If running in one-shot mode, it exits.

---

## Algorithms for Chained Rules

Chained subscriptions enable advanced, context-aware data placement strategies. The `algorithm` parameter determines how the next RSE(s) are selected based on previous rules.

| Algorithm         | Description                                                      | Typical Use Case                                   |
|-------------------|------------------------------------------------------------------|----------------------------------------------------|
| `associated_site` | Select an associated RSE/site from a previous rule's site using the `ASSOCIATED_SITES` attribute. The `associated_site_idx` parameter determines which associated site to use. | Chaining copies across logically linked sites (e.g., for redundancy or workflow steps). |
| `exclude_site`    | Select an RSE that is **not** the site used by the parent rule (using the `site` attribute to exclude). | Ensuring that different copies are placed at physically separate sites.                 |

- Both algorithms are only valid for rules with split logic and a single copy.
- Errors are raised if required parameters are missing or misconfigured.

---

## Flowchart: Transmogrifier Behaviour

```mermaid
flowchart TD
    A["Start transmogrifier daemon"] --> B["Initialize threads & heartbeat"]
    B --> C["Load active subscriptions"]
    C --> D1["Fetch new DIDs"]
    D1 --> E1{"For each new DID"} & W1{"No more new DIDs"}
    E1 --> F1["Fetch metadata for DID"]
    F1 --> G1{"For each subscription"}
    G1 --> H1{"Does DID match subscription filter?"} & U1{"All subscriptions checked"}
    H1 -- No --> G1
    H1 -- Yes --> I1["Parse subscription rules"]
    I1 --> J1{"For each rule in subscription"}
    J1 --> K1["Prepare rule parameters<br> :  RSE expression, copies, etc."] & T1{"All rules done for this subscription"}
    K1 --> L1{"Is rule split/chained?"}
    L1 -- Yes --> M1["Select RSEs using split/chained logic"]
    L1 -- No --> N1["Use RSEs from rule directly"]
    M1 --> O1["For each selected RSE"]
    N1 --> O1
    O1 --> P1{"Is RSE blocklisted and rule wildcarded?"}
    P1 -- Yes --> Q1["Check ignore_availability<br>Skip or create rule"]
    P1 -- No --> R1["Create replication rule for DID"]
    Q1 --> R1
    R1 --> S1["Record created rule and success"]
    S1 --> J1
    T1 --> G1
    U1 --> V1["If successful, mark DID as processed"]
    V1 --> D1
    W1 --> X1["Update last_processed in subscriptions"]
    X1 --> Y1["Push metrics and logs"]
    Y1 --> Z1["Sleep if not once and repeat or exit"]
```

---

## Key Concepts

- **DID**: Data Identifier (can be a file, dataset, or container).
- **Subscription**: User-defined pattern and rules for automatic data placement.
- **Replication Rule**: Instruction for Rucio to place a copy of a DID on specified RSEs.
- **RSE**: Rucio Storage Element (storage endpoint, e.g., a data center or cloud bucket).
- **Split/Chained Logic**: Advanced methods for spreading or chaining rules across multiple sites, using algorithms.

---

## Summary

The transmogrifier daemon is central to Rucio’s automated data management, ensuring that new data is promptly and correctly distributed according to organizational policies and user-defined subscriptions. Its sophisticated logic—including split, chained, and algorithmic rule selection—supports even the most advanced data placement strategies, while robust error handling and metrics allow for reliable, scalable operation.

---

