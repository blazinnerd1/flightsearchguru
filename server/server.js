const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 3301;

app.use(compression());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`express is listening on ${port}`);
});
  // .then(() => console.log(`express is listening on ${port}`));
