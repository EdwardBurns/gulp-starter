'use strict';

const ID_PREFIX = 'USER_';

function validateID( id ) {
    return typeof id == 'string' && id.indexOf( ID_PREFIX ) === 0;
}

module.exports = {
    validateID
}

