'use strict';

const http = require( 'http' );
const customError = require( 'custom-error-instance' );

exports = module.exports = customError( 'BadRequestError', { code: 400, status: http.STATUS_CODES[400], message: http.STATUS_CODES[400] });
