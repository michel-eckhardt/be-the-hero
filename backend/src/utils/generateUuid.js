const crypto = require('crypto');

module.exports = function generationUuid(){
    return crypto.randomBytes(4).toString('HEX');
}