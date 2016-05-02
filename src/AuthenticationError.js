'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );

exports = module.exports = customError( 'AuthenticationError', { code: 401, status: http.STATUS_CODES[401], message: http.STATUS_CODES[401] });
