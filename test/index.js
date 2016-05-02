'use strict';

const chai = require( 'chai' );

const customErrors = require( '../src' );
const AuthenticationError = require( '../src/AuthenticationError' );
const AuthorizationError = require( '../src/AuthorizationError' );
const BadRequestError = require( '../src/BadRequestError' );
const ConflictError = require( '../src/ConflictError' );
const NoResourceError = require( '../src/NoResourceError' );

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
});

describe( 'AuthenticationError', function() {
    it( 'should represent an authentication error', function() {
        const error = new AuthenticationError();
        expect( error ).to.be.an.instanceof( AuthenticationError );
        expect( error ).to.be.an.error;
        expect( error.status ).to.equal( 'Unauthorized' );
        expect( error.message ).to.equal( 'Unauthorized' );
    });
    it( 'should allow message overrides', function() {
        const error = new AuthenticationError( 'Custom message' );
        expect( error.message ).to.equal( 'Custom message' );
    });
});

describe( 'AuthorizationError', function() {
    it( 'should represent an authorization error', function() {
        const error = new AuthorizationError();
        expect( error ).to.be.an.instanceof( AuthorizationError );
        expect( error ).to.be.an.error;
        expect( error.status ).to.equal( 'Forbidden' );
        expect( error.message ).to.equal( 'Forbidden' );
    });
    it( 'should allow message overrides', function() {
        const error = new AuthorizationError( 'Custom message' );
        expect( error.message ).to.equal( 'Custom message' );
    });
});

describe( 'BadRequestError', function() {
    it( 'should represent a bad request error', function() {
        const error = new BadRequestError();
        expect( error ).to.be.an.instanceof( BadRequestError );
        expect( error ).to.be.an.error;
        expect( error.status ).to.equal( 'Bad Request' );
        expect( error.message ).to.equal( 'Bad Request' );
    });
    it( 'should allow message overrides', function() {
        const error = new BadRequestError( 'Custom message' );
        expect( error.message ).to.equal( 'Custom message' );
    });
});

describe( 'ConflictError', function() {
    it( 'should represent a resource conflict error', function() {
        const error = new ConflictError();
        expect( error ).to.be.an.instanceof( ConflictError );
        expect( error ).to.be.an.error;
        expect( error.status ).to.equal( 'Conflict' );
        expect( error.message ).to.equal( 'Conflict' );
    });
    it( 'should allow message overrides', function() {
        const error = new ConflictError( 'Custom message' );
        expect( error.message ).to.equal( 'Custom message' );
    });
});

describe( 'NoResourceError', function() {
    it( 'should represent a resource conflict error', function() {
        const error = new NoResourceError();
        expect( error ).to.be.an.instanceof( NoResourceError );
        expect( error ).to.be.an.error;
        expect( error.status ).to.equal( 'Not Found' );
        expect( error.message ).to.equal( 'Not Found' );
    });
    it( 'should allow message overrides', function() {
        const error = new NoResourceError( 'Custom message' );
        expect( error.message ).to.equal( 'Custom message' );
    });
});
