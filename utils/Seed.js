const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { connection } = require('../config/connection');

const userData = [
  { username: 'lernantino', email: 'lernantino@gmail.com' },
  { username: 'fox', email: 'fox@gmail.com' },
  { username: 'falco', email: 'falco@gmail.com' },
  { username: 'slippy', email: 'slippy@gmail.com' },
];

const thoughtData = [
  {
    thoughtText: 'wow cool stuff!',
    username: 'lernantino',
  },
  {
    thoughtText: 'Hhyaaaaah!!!',
    username: 'fox',
  },
  {
    thoughtText: 'I could use some help here Fox!',
    username: 'falco',
  },
  {
    thoughtText: 'do a barrel roll!',
    username: 'slippy',
  },
];

mongoose.connection.on('error', (err) => err);

mongoose.connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});
  await User.collection.insertMany(userData);
  await Thought.collection.insertMany(thoughtData);

  console.info('Seeding complete! 🌱');
  process.exit(0);
});