const mongoose = require('mongoose');

// Setup mongoose to use Promises
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = { mongoose }