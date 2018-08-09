require('dotenv').config()
const express = require('express');
const compression = require('compression');
const graphqlHTTP = require('express-graphql');
const schema = require('../database/schema.js');

const app = express();
const port = process.env.PORT;

if (!port) {
  throw new Error('Environment variables not found!');
}

app.use(compression());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`express is listening on ${port}`);
});
