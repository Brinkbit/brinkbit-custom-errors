# brinkbit-custom-errors

> A super simple collection of custom errors for use in brinkbit modules

# Install

```
npm i --save brinkbit-custom-errors
```

# Overview

Exposes seven common custom errors based on http status codes:

- BadRequestError - 400
- AuthenticationError - 401
- PaymentError - 402
- AuthorizationError - 403
- NoResourceError - 404
- ConflictError - 409
- TooLargeError - 413

# Usage

```javascript
const customErrors = require( 'brinkbit-custom-errors' );
const requestError = new customErrors.BadRequestError({
    // internal message for logging
    message: 'Missing required username field',
    // external message to forward to client
    description: 'Missing or invalid parameter',
    // error type code to forward to client
    type: customErrors.type.invalid_request_error,
    // a hash of properties and details
    details: {
        username: customErrors.details.missing_parameter,
    },
});
```

# API

Includes constants for detail codes

```javascript
customErrors.details.missing_parameter
customErrors.details.invalid_parameter
customErrors.details.conflicting_parameter
customErrors.details.missing_resource
customErrors.details.too_large
```

Includes constants for type codes

```javascript
customErrors.type.authentication_error
customErrors.type.invalid_request_error
customErrors.type.payment_error
customErrors.type.rate_limit_error
customErrors.type.internal_error
```

Default types for http status codes are exposed and can be overridden:

```javascript
customErrors.types.DEFAULTS[400] =
customErrors.types.DEFAULTS[403] =
customErrors.types.DEFAULTS[404] =
customErrors.types.DEFAULTS[409] =
customErrors.types.DEFAULTS[413] = types.invalid_request_error;
customErrors.types.DEFAULTS[401] = types.authentication_error;
customErrors.types.DEFAULTS[402] = types.payment_error;
customErrors.types.DEFAULTS[500] = types.internal_error;
```
