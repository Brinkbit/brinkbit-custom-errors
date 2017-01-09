'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'InternalServerError', {
    code: 500,
    status: http.STATUS_CODES[500],
    message: http.STATUS_CODES[500],
    description: http.STATUS_CODES[500],
    type: types.DEFAULTS[500],
    details: {},
});
