'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );

exports = module.exports = customError( 'NoResourceError', { code: 404, status: http.STATUS_CODES[404], message: http.STATUS_CODES[404] });
