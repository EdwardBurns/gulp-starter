'use strict';

const express = require('express'),
      app     = express(),
      server  = require('http').createServer(app),
      iso     = require('./utilities/validate');

console.log( iso.validateID( 'USER_12345' ) );

app.use( '/', express.static( __dirname + '/../client/dist', { maxAge: 1000000 } ) );

server.listen( 9000, () => console.log( 'Express App Started' ) );



