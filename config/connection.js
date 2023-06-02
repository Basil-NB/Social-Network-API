const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost/social-network';

connect(connectionString);

module.exports = connection;
