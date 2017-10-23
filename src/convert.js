const AuthenticationError = require( './AuthenticationError' );
const AuthorizationError = require( './AuthorizationError' );
const BadRequestError = require( './BadRequestError' );
const ConflictError = require( './ConflictError' );
const NoResourceError = require( './NoResourceError' );
const TooLargeError = require( './TooLargeError' );
const PaymentError = require( './PaymentError' );
const InternalServerError = require( './InternalServerError' );

const errorsByCode = [];

errorsByCode[400] = BadRequestError;
errorsByCode[401] = AuthenticationError;
errorsByCode[402] = PaymentError;
errorsByCode[403] = AuthorizationError;
errorsByCode[404] = NoResourceError;
errorsByCode[409] = ConflictError;
errorsByCode[413] = TooLargeError;
errorsByCode[500] = InternalServerError;

module.exports = function convert( error ) {
    const body = error.body || error.responseJSON || error;
    const status = body.status || body.code;
    if ( typeof status === 'number' && errorsByCode[status]) {
        return new errorsByCode[status]( body );
    }
    return error;
};
