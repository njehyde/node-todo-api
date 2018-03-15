const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10,
    access: [
        'read',
        'write'
    ]
};

var token = jwt.sign(data, 'abc123');
console.log(token);

var decoded = jwt.decode(token, 'abc123');
console.log(decoded);

// var message = "I am user number 3";
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// // The hash will get the data object containing the id and a 'salt' value (to ensure the hash is not changed by a middle-man).
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };

// // // Manually change the token data and hash (like a middle-man) but without knowing the 'salt' value - expect the auth to fail
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }