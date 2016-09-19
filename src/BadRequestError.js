'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'BadRequestError', {
    code: 400,
    status: http.STATUS_CODES[400],
    message: http.STATUS_CODES[400],
    description: http.STATUS_CODES[400],
    type: types.invalid_request_error,
    details: [],
});
