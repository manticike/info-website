const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.sendFile('./index.html', { root: __dirname});
});

app.get('/about', (request, response) => {
  response.sendFile('./about.html', { root: __dirname});
});

app.get( '/contact-me', (request, response) => {
  response.sendFile('./contact-me.html', { root: __dirname});
});

// 404 page
app.use((request, response) => {
  response.sendFile('./404.html', { root: __dirname});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});