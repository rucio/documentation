---
id: deprecation_guide
title: Deprecation Guide
---

Rucio is a living project, and often has implementations and features that are deprecated over time. 
When this has to be done, two key things need to be taken into consideration: 

* According to the [LTS policy](/docs/started/releasepolicy.md#client--server-compatibility), any client version must be compatible with all server versions since the second to last LTS release. 

This includes considerations like - keeping API endpoints in place, providing redirection for old client functions, including client side handing for arguments older servers may not handle.  

* When a feature is planned to be deprecated, an issue to do so much be made and linked in code

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