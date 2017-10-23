const http = require( 'http' );
const customError = require( 'custom-error-instance' );
const types = require( './types' );

module.exports = customError( 'NoResourceError', {
    code: 404,
    status: http.STATUS_CODES[404],
    message: http.STATUS_CODES[404],
    description: http.STATUS_CODES[404],
    type: types.DEFAULTS[404],
    details: {},
});
