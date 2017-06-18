module.exports = function( tgtHost ) {

    return function( req, res, next ) {
        var hostSplit = req.hostname.split( ":" );
        if( hostSplit[0] !== tgtHost ) {

            hostSplit[0]   = tgtHost;
            var hostname   = hostSplit.join(":");
            var redirected = `${req.protocol}://www.${hostname}${req.originalUrl}`;

            res.redirect( 301, redirected );
            return;
        }
        next();
    };
};
