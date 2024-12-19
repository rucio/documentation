---
id: developing_with_rucio
title: Developing with Rucio
---

## Rucio Clients

Rucio includes a client class to remove some of the complexity of dealing with
raw HTTP requests against the RESTful API.

All client methods are accessible through the high-level class Client.  Below is
one example of using Rucio Client class:

```python
from rucio.client import Client
rucio_client = Client()
rucio_client.ping()
```

The methods are separated per resource type. The API in full can be viewed
[here](pathname:///html/site/client.html).

### Errors and Exceptions

In the case of an error, Rucio returns a Python Exception with the appropriate
Traceback, a detailed error string, and a unique error number. If the error
occurred on the server side, it will be propagated to the client. The command
line clients will exit back to the shell with the POSIX `errno` of
the unique Rucio error number. The full and up to date list can be found in the
[Exception
definition](https://github.com/rucio/rucio/blob/master/lib/rucio/common/exception.py).

## RESTful APIs

Each resource can be accessed or modified using specially formed URLs and the
standard HTTP methods:

```text
GET to read
POST to create
PUT to update
DELETE to remove
```

We require that all requests are done over SSL. The API supports JSON
formats. Rucio uses [OAuth](http://oauth.net/) to authenticate all API
requests. The method is to get an authentication token, and use it for the rest
of the requests. Descriptions of the actions you may perform on each resource
can be found in the REST API documentation.

### Date format

All dates returned are in UTC and are strings in the following format (RFC 1123,
ex RFC 822): `Mon, 13 May 2013 10:23:03 UTC`

In code format, which can be used in all programming languages that support
strftime or strptime:

```text
%a, %d %b %Y %H:%M:%S UTC
```

### SSL only

We require that all requests(except for the ping) are done over SSL.

### Response formats

The currently-available response format for all REST endpoints is the
string-based format JavaScript Object Notation ([JSON](http://www.json.org/)).
The server answer can be one of the following content-type in the http Header:

```text
Content-type: application/json
Content-Type: application/x-json-stream
```

In the last case, it corresponds to JSON objects delimited by newlines(streaming
JSON for large answer), e.g.:

```json
{ "id": 1, "foo": "bar" }
{ "id": 2, "foo": "baz" }
...
```

### Error handling

Errors are returned using standard HTTP error code syntax.  Additional info is
included in the header or the body of the return call, JSON-formatted with the
parameters:

```text
ExceptionClass
ExceptionMessage
```

Where `ExceptionClass` refers to Rucio Exceptions.
