module.exports = function( tgtHostname ) {

    return function( req, res, next ) {
        var hostSplit = req.headers.host.split( ":" );
        if( hostSplit[0] !== tgtHostname ) {

            hostSplit[0]   = tgtHostname;
            var host       = hostSplit.join(":");
            var redirected = `${req.protocol}://${host}${req.originalUrl}`;

            res.redirect( 301, redirected );
            return;
        }
        next();
    };
};
