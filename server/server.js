const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.get('/ping', function(req, res) {
  return res.send('pong');
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`listening on port ${process.env.PORT || 8080}`)
);
