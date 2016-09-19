'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'NoResourceError', {
    code: 404,
    status: http.STATUS_CODES[404],
    message: http.STATUS_CODES[404],
    description: http.STATUS_CODES[404],
    type: types.invalid_request_error,
    details: [],
});
