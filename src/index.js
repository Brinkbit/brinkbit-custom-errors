'use strict';

const AuthenticationError = require( './AuthenticationError' );
const AuthorizationError = require( './AuthorizationError' );
const BadRequestError = require( './BadRequestError' );
const ConflictError = require( './ConflictError' );
const NoResourceError = require( './NoResourceError' );
const TooLargeError = require( './TooLargeError' );
const PaymentError = require( './PaymentError' );

exports = module.exports = {
    AuthenticationError,
    AuthorizationError,
    BadRequestError,
    ConflictError,
    NoResourceError,
    TooLargeError,
    PaymentError,
};
