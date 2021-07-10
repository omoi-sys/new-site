const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/build/index.html');
  });
}

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});