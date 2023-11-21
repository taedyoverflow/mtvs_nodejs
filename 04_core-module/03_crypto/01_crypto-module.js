const crypto = require('crypto');

const sha256 = crypto.createHash('sha256');
sha256.update('raw string22222');

const hash = sha256.digest('hex');

console.log(hash);