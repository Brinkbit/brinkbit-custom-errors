'use strict';

const chai = require( 'chai' );

const customErrors = require( '../src' );
const AuthenticationError = require( '../src/AuthenticationError' );
const AuthorizationError = require( '../src/AuthorizationError' );
const BadRequestError = require( '../src/BadRequestError' );
const ConflictError = require( '../src/ConflictError' );
const NoResourceError = require( '../src/NoResourceError' );
const TooLargeError = require( '../src/TooLargeError' );
const PaymentError = require( '../src/PaymentError' );
const InternalServerError = require( '../src/InternalServerError' );

const expect = chai.expect;

describe( 'top level API', function() {
    it( 'should expose AuthenticationError', function() {
        expect( customErrors.AuthenticationError ).to.be.a.function;
    });
    it( 'should expose AuthorizationError', function() {
        expect( customErrors.AuthorizationError ).to.be.a.function;
    });
    it( 'should expose BadRequestError', function() {
        expect( customErrors.BadRequestError ).to.be.a.function;
    });
    it( 'should expose ConflictError', function() {
        expect( customErrors.ConflictError ).to.be.a.function;
    });
    it( 'should expose NoResourceError', function() {
        expect( customErrors.NoResourceError ).to.be.a.function;
    });
    it( 'should expose TooLargeError', function() {
        expect( customErrors.TooLargeError ).to.be.a.function;
    });
    it( 'should expose PaymentError', function() {
        expect( customErrors.PaymentError ).to.be.a.function;
    });
    it( 'should expose InternalServerError', function() {
        expect( customErrors.InternalServerError ).to.be.a.function;
    });
    it( 'should expose types', function() {
        expect( customErrors.types ).to.deep.equal({
            authentication_error: 'authentication_error',
            invalid_request_error: 'invalid_request_error',
            payment_error: 'payment_error',
            rate_limit_error: 'rate_limit_error',
            internal_error: 'internal_error',
            DEFAULTS: {
                400: 'invalid_request_error',
                403: 'invalid_request_error',
                404: 'invalid_request_error',
                409: 'invalid_request_error',
                413: 'invalid_request_error',
                401: 'authentication_error',
                402: 'payment_error',
                500: 'internal_error',
            },
        });
    });
    it( 'should expose details', function() {
        expect( customErrors.details ).to.deep.equal({
            missing_parameter: 'missing_parameter',
            invalid_parameter: 'invalid_parameter',
            conflicting_parameter: 'conflicting_parameter',
            missing_resource: 'missing_resource',
            too_large: 'too_large',
        });
    });
});

describe( 'AuthenticationError', function() {
    it( 'should represent an authentication error', function() {
        const error = new AuthenticationError();
        expect( error ).to.be.an.instanceof( AuthenticationError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 401 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Unauthorized' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Unauthorized' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Unauthorized' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.authentication_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new AuthenticationError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new AuthenticationError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new AuthenticationError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new AuthenticationError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'AuthorizationError', function() {
    it( 'should represent an authorization error', function() {
        const error = new AuthorizationError();
        expect( error ).to.be.an.instanceof( AuthorizationError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 403 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Forbidden' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Forbidden' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Forbidden' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.invalid_request_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new AuthorizationError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new AuthorizationError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new AuthorizationError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new AuthorizationError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'BadRequestError', function() {
    it( 'should represent a bad request error', function() {
        const error = new BadRequestError();
        expect( error ).to.be.an.instanceof( BadRequestError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 400 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Bad Request' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Bad Request' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Bad Request' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.invalid_request_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new BadRequestError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new BadRequestError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new BadRequestError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new BadRequestError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'ConflictError', function() {
    it( 'should represent a resource conflict error', function() {
        const error = new ConflictError();
        expect( error ).to.be.an.instanceof( ConflictError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 409 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Conflict' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Conflict' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Conflict' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.invalid_request_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new ConflictError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new ConflictError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new ConflictError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new ConflictError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'NoResourceError', function() {
    it( 'should represent a resource conflict error', function() {
        const error = new NoResourceError();
        expect( error ).to.be.an.instanceof( NoResourceError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 404 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Not Found' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Not Found' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Not Found' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.invalid_request_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new NoResourceError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new NoResourceError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new NoResourceError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new NoResourceError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'Payload Too Large', function() {
    it( 'should represent a payload too large error', function() {
        const error = new TooLargeError();
        expect( error ).to.be.an.instanceof( TooLargeError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 413 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Payload Too Large' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Payload Too Large' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Payload Too Large' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.invalid_request_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new TooLargeError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new TooLargeError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new TooLargeError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new TooLargeError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'Payment Required', function() {
    it( 'should represent a payload too large error', function() {
        const error = new PaymentError();
        expect( error ).to.be.an.instanceof( PaymentError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 402 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Payment Required' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Payment Required' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Payment Required' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.payment_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new PaymentError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new PaymentError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new PaymentError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new PaymentError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});

describe( 'Internal Server Error', function() {
    it( 'should represent an unexpected internal error', function() {
        const error = new InternalServerError();
        expect( error ).to.be.an.instanceof( InternalServerError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 500 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Internal Server Error' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Internal Server Error' );
        expect( error ).to.have.property( 'description' ).and.equal( 'Internal Server Error' );
        expect( error ).to.have.property( 'type' ).and.equal( customErrors.types.internal_error );
        expect( error ).to.have.property( 'details' ).and.deep.equal({});
    });
    it( 'should allow message overrides', function() {
        const error = new InternalServerError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
    it( 'should allow descriptions to be overridden', function() {
        const error = new InternalServerError({ message: 'Custom message', description: 'Custom Description' });
        expect( error ).to.have.property( 'description' ).and.equal( 'Custom Description' );
    });
    it( 'should allow types to be overridden', function() {
        const error = new InternalServerError({ message: 'Custom message', type: 'Custom Type' });
        expect( error ).to.have.property( 'type' ).and.equal( 'Custom Type' );
    });
    it( 'should allow details to be overridden', function() {
        const error = new InternalServerError({ message: 'Custom message', details: {
            custom: customErrors.details.missing_parameter,
        } });
        expect( error ).to.have.property( 'details' ).and.deep.equal({
            custom: customErrors.details.missing_parameter,
        });
    });
});
