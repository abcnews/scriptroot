# scriptroot

Get a fully qualified URL for the folder a given script is in.

The basic purpose of this script is to facilitate the loading of assets relative
to the script rather than relative to the document.

## Usage

This is designed to be included in scripts using Browserify, but could reasonably
be used as a global if you know your environment and understand how it works.


```
// Require script root.
// Ensure this isn't run inside a domready listener. It must be executed when
// the script loads.
var scriptroot = require('scriptroot');

// log the script root
console.log(scriptroot());

```

```
<script src="http://example.com/scripts/fancyscript.js"></script>
```

This will log `http://example.com/scripts/` to the console.

### Huge caveat

This will *not* work with scripts which have `async` or `defer` attributes. It
relies on being executed at the point at which the script tag is encountered
during DOM parsing.