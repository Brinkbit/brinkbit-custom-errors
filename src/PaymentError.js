'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

exports = module.exports = customError( 'PaymentError', {
    code: 402,
    status: http.STATUS_CODES[402],
    message: http.STATUS_CODES[402],
    description: http.STATUS_CODES[402],
    type: types.DEFAULTS[402],
    details: [],
});
