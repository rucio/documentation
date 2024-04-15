---
id: qos_rse_config
title: QoS RSE Configuration
---

## QoS RSE Configuration

The following steps show how to configure an RSE to use the Rucio storage-managed QoS feature (with two classes, disk-buffer and tape).  Rucio now supports a site's ability to set how long data lives on a tape or disk-buffer at the RSE level.  Data is pinned with a value (in seconds) at the time of injection/creation/buffering allowing data site operators to better tune data persistence and movement. 

### How to Configure an RSE for QoS

1. Set the following RSE attributes:

    ```bash
    staging_required: True
    maximum_pin_lifetime: 345600 (in seconds)
    staging_buffer: {{value}} # this value can be the name of the RSE.
    ```

Upon executing `rucio-admin rse info <RSE>` command one should see something like the following in settings:

    ```bash
                                    .
                                    .
    Attributes:
    ===========
      maximum_pin_lifetime: 345600
      staging_buffer: <RSE>
      staging_required: True
                                    .
                                    .
    ```

2. Either values of `DISK` or `TAPE` are supported for the RSE setting `rse_type`.  However workflows using PanDA job brokerage require this value to be `DISK`.

Upon executing `rucio-admin rse info <RSE>` command one should see something like the following in settings:

    ```bash
                                    .
                                    .
    Settings:
    =========
      rse: <RSE>
      rse_type: DISK
                                    .
                                    .
    ```
