#!/usr/bin/env python3

import configparser
import json 
import sys
config = configparser.RawConfigParser()
config.read("/opt/rucio/etc/rucio.cfg")

json_config = {}
for key in config.sections(): 
    json_config[key] = {
        sub_key: item for sub_key, item in config.items(key)
    }

json.dump(json_config, open(f"{sys.argv[1]}/default_configurations.json", 'w'))