---
id: configure-rucio-fts3-plugins
title: Configure A Tool to Determine Rules For FTS3 Tape Transfers
sidebar_label: FTS3 Transfertool Plugins
---

Rucio includes functionality to pass instructions to FTS3 that describe how the transfer should be concluded
(e.g., placement on tape).
This information is passed forward to the storage endpoint as a json of
`archive_metadata`, [as described by FTS3.](https://fts3-docs.web.cern.ch/fts3-docs/fts-rest/docs/bulk.html)

The plugin ensures the metadata conforms to json encoding and size constraints before adding it to the
parameters used in the transfer.


## Writing the plugin

Plugins are expected to be subclasses of `rucio.transfertool.fts3_plugins.FTS3TapeMetadataPlugin`,
and registed as `fts3_tape_metadata_plugins` algorithms.
This is done by using the
`FTS3TapeMetadataPlugin.register` method, which tells the algoritm which code to execute during runtime.

The return type of the selected policy code must be a json-encodable dictionary.
The only required keys are the keys that will be used by the storage endpoint, not any decorators for FTS3.

During the transfer, the algorithm is passed the existing job parameters generated for the transfer in the form of a dictionary.

```python
from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin

class ExperimentFTSPlugins(FTS3TapeMetadataPlugin):
    def __init__(self, policy_algorithm="def"):
        super().__init__()
        self.register("policy_algorithm", func=self.plugin_algorithm) # Name and function for the new algorithm

    def plugin_algorithm(self, *hints): # Code executed at runtime
        return {"storage_location": "this_location"}
```

This will result in the below transfer.
```json
{"files": [{
    "sources": [...],
    ...
    "archive_metadata": {
        "storage_location": "this_location"
        }
    }]
}

```

### Plugins with initialization rules

If the plugin requires set-up that would slow down transfers, using a plugin initialization is recommended.
This includes things like querying the configuration file, performing a calculation that would not change
between different transfers, or hard-coding parameters.

This is done by including a `init_func` when registing the plugin.

```python
from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin

class ExperimentFTSPlugins(FTS3TapeMetadataPlugin):
    def __init__(self, policy_algorithm="def"):
        super().__init__()
        self.register(
            "policy_algorithm",
            func=self.plugin_algorithm,
            init_func=self.plugin_initialization)

    def plugin_algorithm(self, *hints):
        # Can use `self.extra_params`
        return {
            "storage_location": self.extra_params[hints["name"]]
            }

    def plugin_initialization(self):
        self.extra_params = dict(get_config("transfers", "extra_params"))

```
To trigger registration it is recommended to run the plugin in the class file with the default plugin name.

```{python}
class ExperimentFTSPlugins(FTS3TapeMetadataPlugin):
    ...
ExperimentFTSPlugins("def")
```

## Configuration

Configuration set in the `rucio.cfg`. To use a plugin (here named "policy_algorithm"),
modify the config to include the below field.
 To use mutliple plugins, their names can be listed to make each plugin algorithm run in sequence.

```
[transfers]
fts3tape_metadata_plugins = ["policy_algorithm"]
```

Size constraints can be set with the below. (Default of 4096)
```
[transfers]
metadata_byte_limit = <byte limit of transfer metadata>
```

## Pre-built plugins
### Activity Based Transfer Prority

To assign archive prority based on activity, we include the `activity_hints` plugin.
This plugin assigns an integer prority between 0 and 100 based on the activity of the transfer in question.

Output of the plugin follows the form of
```json
{"archive_metadata": {"scheduling_hints": {"priority": 0}}}
```

The plugin requires no code modification or subclassing, all set up is done in the `rucio.cfg`.

To set up, update your configuration as follows:


```cfg
[transfers]
fts3tape_metadata_plugins = ["activity"]

[tape_priority]
<Activity 1> = 100
<Activity 2> = 80
<Activity 3> = 50
```

Baseline priority for any activity not listed is `20`.

### Tape Collocation

In order to ensure data is placed on tape with similar data, a `tape_collocation` plugin can be used.
This plugin requires custom logic, but behaves as a generic plugin does.

The collocation can be set to up to 4 different levels, such that the passed `archive_metadata` contains the following:

```json
{
    "collocation_hints":{
        "1": Highest level of grouping,
        "2": Second Highest level,
        ...
        "4": Lowest level of grouping
    }
}
```

Writing the plugin is similar to any other plugin, it just requires that these 4 levels be filled for a given transfer.

If the `collocation` wrapper is used, this format is verified and put into the `collocation_hints`
 field of the transfer parameters.
 This is done below, where `find_level_hints` is an attribary function written for an experiment's needs:

```python
from rucio.transfertool.fts3_plugins import FTS3TapeMetadataPlugin

class ExperimentCollocationFTSPlugins(FTS3TapeMetadataPlugin):
    def __init__(self, policy_algorithm="def"):
        super().__init__()
        self.register(
            "policy_collocation_algorithm",
            func= lambda x: self._collocation(self._experiment_plugin, x)
        )

    def find_level_hints(self, level, hints)
        ...

    def _experiment_plugin(self, *hints):
        return {
                "1": self.find_level_hints(level=1, hints=hints),
                "2": self.find_level_hints(level=2, hints=hints),
                "3": self.find_level_hints(level=3, hints=hints),
                "4": self.find_level_hints(level=4, hints=hints),
            }

ExperimentCollocationFTSPlugins("def")
```
