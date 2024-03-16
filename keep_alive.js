const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Keep alive!');
});

app.listen(port, () => {
  console.log(`Keep-alive server is running at http://localhost:${port}`);
});
