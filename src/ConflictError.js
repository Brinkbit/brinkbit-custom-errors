'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'ConflictError', {
    code: 409,
    status: http.STATUS_CODES[409],
    message: http.STATUS_CODES[409],
    description: http.STATUS_CODES[409],
    type: types.DEFAULTS[409],
    details: [],
});
