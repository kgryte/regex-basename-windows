Basename
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture the last part of a Windows path.


## Installation

``` bash
$ npm install regex-basename-windows
```


## Usage

``` javascript
var re = require( 'regex-basename-windows' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture the last part of a Windows path. 

``` javascript
var base = re.exec( 'foo/bar/index.js' )[ 1 ];
// returns 'index.js'
```


## Examples

``` javascript
var re = require( 'regex-basename-windows' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-basename-windows.svg
[npm-url]: https://npmjs.org/package/regex-basename-windows

[travis-image]: http://img.shields.io/travis/kgryte/regex-basename-windows/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-basename-windows

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-basename-windows/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-basename-windows?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-basename-windows.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-basename-windows

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-basename-windows.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-basename-windows

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-basename-windows.svg
[github-issues-url]: https://github.com/kgryte/regex-basename-windows/issues
