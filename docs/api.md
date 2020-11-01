# The Client API Reference

Rucio includes a client class to remove some of the complexities of dealing with raw
HTTP requests against the RESTful API.

All client methods are accessible through the high-level class Client. Below is one
example of using Rucio Client class:

```
>>> from rucio.client import Client
>>> CLIENT = Client()
>>> CLIENT.ping()
```

The methods are separated per resource type.


* Account Methods


* AccountLimit Methods


* Scope Methods


* Data Identifier Methods


* Meta-data Methods


* RSE Classes


* Replica Methods


* Replication Rule Methods


* Lock Methods


* Subscription  Methods


* Lifetime Methods


* Touch Method


* Configuration Methods


* Rucio Exceptions


* Ping Method


<!-- To add: -->
<!-- api/upload -->
<!-- api/download -->
