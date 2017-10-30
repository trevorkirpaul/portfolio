const express = require ('express');
const app = express();
const livereload = require('livereload');
const server = livereload.createServer();

server.watch('docs');

app.use(express.static('docs'));

app.listen(3000, () => {
  console.log('Server running...');
});