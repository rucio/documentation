---
id: deprecation_guide
title: Deprecation Guide
---

Rucio is a living project, and often has implementations and features that are deprecated over time.
When this has to be done, two key things need to be taken into consideration:

* According to the [release policy](started/releasepolicy.md#client--server-compatibility), a server must stay compatible with older clients back to the second LTS release line preceding it. Compatibility of a newer client with an older server is not guaranteed.

For server-side changes this means keeping existing API endpoints in place, continuing to accept the arguments and value formats that older clients send, and redirecting old client functions to their replacements instead of removing them. A newer client may depend on new server functionality; where practical, it should still handle older servers gracefully, for example by giving a clear error when the server does not support a new argument.

For example, when adding a new argument to an existing API call, the server must
treat it as optional, since every client released before the change will not
send it:

✅ Give the new argument a server-side default that reproduces the old behaviour

```diff
class APIEndpoints():
    ...
    def post(self):
        parameters = json_parameters()
+        # Older clients do not send `new_arg`; the default must keep the
+        # behaviour from before the argument existed
+        new_arg = param_get(parameters, 'new_arg', default=None)
```

❌ Do not make the new argument mandatory, requests from older clients would fail

```diff
class APIEndpoints():
    ...
    def post(self):
        parameters = json_parameters()
+        # Raises a 400 error for every client that does not send `new_arg`
+        new_arg = param_get(parameters, 'new_arg')
```

* When a feature is planned to be deprecated, an issue to do so must be made and linked in code

Calculate the release in which the functionality should be removed, and make a `TODO` comment with that release.
Make an issue that corresponds to this `TODO` and link it in the issue.

✅ Include a warning to the user, an issue to remove the functionality, and leave the old functionality in place

```diff
class DataClient():
    ...
    def old_endpoint(self, **kwargs):
+        #  TODO: Deprecate in Rucio XX.00
+        #  github.com/rucio/rucio/#IssueNumber
+        self.logger("WARNING": `old_endpoint` is being deprecated.)
+        # Can either redirect to new method, or keep old functionality in place
+        self.new_endpoint(**kwargs)

+    def new_endpoint(self, **kwargs):
+        ...

```

✅ Keep the old functionality in place, but hide it from documentation

```diff
class APIEndpoints():
    ...
def blueprint(with_docs=False)
    bp = AuthenticatedBlueprint(name, __name__, url_prefix=url)

    view = APIEndpoints.as_view(name)
+    if not with_docs:
+        # Hide the route from the documentation, but leave it functional
+        bp.add_url_rule(old_route, view_func=view, methods=[..])

+    bp.add_url_rule(new_route, view_func=view, methods=[..])

def make_doc():
    """Only used to make documentation"""
    doc_app = Flask(__name__)
    doc_app.register_blueprint(blueprint(with_docs=True))
    return doc_app

```


❌  Do not completely remove functionality!
```diff
class DataClient():
    ...
-    def old_endpoint(self, **kwargs):
-        ...

+    def new_endpoint(self, **kwargs):
+        ...

```

❌  Do not leave old functionality without a plan to remove it or comment to the user!
```diff
class DataClient():
    ...
    def old_endpoint(self, **kwargs):
        ...

+    def new_endpoint(self, **kwargs):
+        ...

```
