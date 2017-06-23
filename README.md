mismatched-host-redirect
=======================

Middleware to 301 redirect all traffic to a single hostname.

## Usage

```javascript
    const express = require( "express" );
    express()
        .use( require( "mismatched-host-redirect" )( "www.cool-animations.com" ) )
        .use( express.static( STATIC_DIR ) )
        .listen( 3000 );
```
