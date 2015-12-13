var crypto = require('crypto-js');

var secretMessage = {
	name: 'Tony',
	secretName: '007'
};

var secretKey = '123abc';

var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('encrypt:' + encryptedMessage);

var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));

console.log("secretName: " + decryptedMessage.secretName);

