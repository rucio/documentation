# RESTful APIs

Each resource can be accessed or modified using specially formed URLs and the standard HTTP methods:
```http
GET to read
POST to create
PUT to update
DELETE to remove
```
We require that all requests are done over SSL. The API supports JSON formats. Rucio uses [OAuth](http://oauth.net/)
to authenticate all API requests. The method is to get an authentication token, and use it for the rest of
the requests. Descriptions of the actions you may perform on each resource can be found below.

**Date format**

All dates returned are in UTC and are strings in the following format (RFC 1123, ex RFC 822):

```bash
Mon, 13 May 2013 10:23:03 UTC
```

In code format, which can be used in all programming languages that support strftime or strptime:

```bash
'%a, %d %b %Y %H:%M:%S UTC'
```

**SSL only**

We require that all requests(except for the ping) are done over SSL.

**Response formats**

The currently-available response format for all REST endpoints is the string-based format JavaScript Object Notation([JSON](http://www.json.org/)).
The server answer can be one of the following content-type in the http Header:

```bash
Content-type: application/json
Content-Type: application/x-json-stream
```

In the last case, it corresponds to JSON objects delimited by newlines(streaming JSON for large answer), e.g.:

```js
{ "id": 1, "foo": "bar" }
{ "id": 2, "foo": "baz" }
...
```

**Error handling**

Errors are returned using standard HTTP error code syntax.
Any additional info is included in the header of the return call, JSON-formatted with the parameters:

```bash
ExceptionClass
ExceptionMessage
```

Where ExceptionClass refers to Rucio Exceptions.

The methods are separated per resource type.


* Account Rest API


* Account Limit Rest API


* Archive Rest API


* Authentication Rest API


* Config Rest API


* DID Rest API


* Heartbeat Rest Api


* Identity Rest API


* Lifetime Exception Rest API


* Lock Rest API


* Meta Rest API


* Nongrid Trace Rest API


* Ping Rest API


* Redirect Rest API


* Replica Rest API


* Request Rest API


* RSE Rest API


* Rule Rest API


* Scope Rest API


* Subscription Rest API


* Temporary DID Rest API


* Trace Rest API


* VO Rest API
