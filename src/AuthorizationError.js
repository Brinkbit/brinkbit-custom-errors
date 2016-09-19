'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'AuthorizationError', {
    code: 403,
    status: http.STATUS_CODES[403],
    message: http.STATUS_CODES[403],
    description: http.STATUS_CODES[403],
    type: types.invalid_request_error,
    details: [],
});
