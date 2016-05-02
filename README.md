# brinkbit-custom-errors

> A super simple collection of custom errors for use in brinkbit modules

# Install

```
npm i --save brinkbit-custom-errors
```

# Overview

Exposes five common custom errors based on http status codes:

- BadRequestError - 400
- AuthenticationError - 401
- AuthorizationError - 403
- NoResourceError - 404
- ConflictError - 409

# Usage

```javascript
const customErrors = require( 'brinkbit-custom-errors' );
const authError = new customErrors.AuthenticationError( 'Error authenticating' );
```
