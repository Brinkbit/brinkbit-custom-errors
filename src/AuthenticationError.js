'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'AuthenticationError', {
    code: 401,
    status: http.STATUS_CODES[401],
    message: http.STATUS_CODES[401],
    description: http.STATUS_CODES[401],
    type: types.DEFAULTS[401],
    details: [],
});
