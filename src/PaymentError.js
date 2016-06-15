'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );

exports = module.exports = customError( 'PaymentError', { code: 402, status: http.STATUS_CODES[402], message: http.STATUS_CODES[402] });
