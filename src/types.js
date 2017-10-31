/* eslint-disable no-multi-assign */

const types = {
    authentication_error: 'authentication_error',
    invalid_request_error: 'invalid_request_error',
    payment_error: 'payment_error',
    rate_limit_error: 'rate_limit_error',
    internal_error: 'internal_error',
    DEFAULTS: {},
};

types.DEFAULTS[400] =
types.DEFAULTS[403] =
types.DEFAULTS[404] =
types.DEFAULTS[409] =
types.DEFAULTS[429] =
types.DEFAULTS[413] = types.invalid_request_error;
types.DEFAULTS[401] = types.authentication_error;
types.DEFAULTS[402] = types.payment_error;
types.DEFAULTS[500] = types.internal_error;

module.exports = types;
