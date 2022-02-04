var port = 3011;

var app = require( 'express' )();
var server = require( 'http' ).createServer( app );

server.listen( port, function() {
    console.log( 'listening on *:' + port );
});
var io = require( 'socket.io' )(server)

io.on( "connection", function ( socket ) {
    console.log( 'Server: Incoming connection.' );
    socket.on( "echo", function ( msg, callback ) {
        callback( msg );
    } );
} );