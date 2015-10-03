'use strict';

var re = require( './../lib' );

var base;

base = re.exec( 'index.js' )[ 1 ];
console.log( base );
// returns 'index.js'

base = re.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( base );
// returns 'home.html'

base = re.exec( 'foo\\file.pdf' )[ 1 ];
console.log( base );
// returns 'file.pdf'

base = re.exec( 'beep\\boop.' )[ 1 ];
console.log( base );
// returns 'boop.'

base = re.exec( '' )[ 1 ];
console.log( base );
// returns ''

base = re.exec( '\\foo\\bar\\file' )[ 1 ];
console.log( base );
// returns 'file'

base = re.exec( 'C:\\foo\\bar\\.gitignore' )[ 1 ];
console.log( base );
// returns '.gitignore'
