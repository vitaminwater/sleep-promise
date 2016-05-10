var Promise = require('pinkie-promise');

module.exports = function sleep(timeout) {
    return new Promise(function(resolve) {
        setTimeout(resolve, timeout);
    });
};
