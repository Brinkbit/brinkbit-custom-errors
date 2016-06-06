'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );

exports = module.exports = customError( 'TooLargeError', { code: 413, status: http.STATUS_CODES[413], message: http.STATUS_CODES[413] });
