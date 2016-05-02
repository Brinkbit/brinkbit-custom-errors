'use strict';

const AuthenticationError = require( './AuthenticationError' );
const AuthorizationError = require( './AuthorizationError' );
const BadRequestError = require( './BadRequestError' );
const ConflictError = require( './ConflictError' );
const NoResourceError = require( './NoResourceError' );

exports = module.exports = {
    AuthenticationError,
    AuthorizationError,
    BadRequestError,
    ConflictError,
    NoResourceError,
};
