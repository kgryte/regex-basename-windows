/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	re = require( './../lib' );


// VARIABLES //

var assert = chai.assert;


// TESTS //

describe( 'regex-basename-windows', function tests() {

	it( 'should export a regular expression', function test() {
		assert.isTrue( re instanceof RegExp );
	});

	it( 'should capture Windows path basenames', function test() {
		var expected,
			values,
			base,
			i;

		values = [
			'index.js',
			'C:\\foo\\bar\\home.html',
			'C:\\foo\\bar\\',
			'foo\\file.pdf',
			'foo\\file',
			'index.js\\',
			'foo\\bar\\home.html\\',
			'foo\\..\\..\\bar\\home.html',
			'.gitigno.re',
			'\\foo\\bar\\.editorconf.ig',
			'main\\.travis.yml',
			'boop.'
		];

		expected = [
			'index.js',
			'home.html',
			'bar',
			'file.pdf',
			'file',
			'index.js',
			'home.html',
			'home.html',
			'.gitigno.re',
			'.editorconf.ig',
			'.travis.yml',
			'boop.'
		];

		for ( i = 0; i < values.length; i++ ) {
			base = re.exec( values[ i ] )[ 1 ];
			assert.strictEqual( base, expected[ i ], values[ i ] );
		}
	});

});
