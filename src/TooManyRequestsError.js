const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

module.exports = customError( 'TooManyRequestsError', {
    code: 429,
    status: http.STATUS_CODES[429],
    message: http.STATUS_CODES[429],
    description: http.STATUS_CODES[429],
    type: types.DEFAULTS[429],
    details: {},
});
