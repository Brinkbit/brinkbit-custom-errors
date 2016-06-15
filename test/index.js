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
});

describe( 'AuthenticationError', function() {
    it( 'should represent an authentication error', function() {
        const error = new AuthenticationError();
        expect( error ).to.be.an.instanceof( AuthenticationError );
        expect( error ).to.be.an.error;
        expect( error ).to.have.property( 'code' ).and.equal( 401 );
        expect( error ).to.have.property( 'status' ).and.equal( 'Unauthorized' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Unauthorized' );
    });
    it( 'should allow message overrides', function() {
        const error = new AuthenticationError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new AuthorizationError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new BadRequestError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new ConflictError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new NoResourceError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new TooLargeError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
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
    });
    it( 'should allow message overrides', function() {
        const error = new PaymentError( 'Custom message' );
        expect( error ).to.have.property( 'message' ).and.equal( 'Custom message' );
    });
});
