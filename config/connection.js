const { connect, connection } = require('mongoose');

// change connection later!!!
connect('mongodb://127.0.0.1:27017/developersApplications');

module.exports = connection;
