const express = require('express');
const Joi = require('joi'); // Utilizado para la validación
const app = express();
app.use(express.json());

const { getBooks, getBookById, getRanking, createBook, validateBook } = require('./books-tools');

app.get('/', (req, res) => {
  res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

app.get('/api/books', (req, res) => {
  const books = getBooks();
  res.send(books);
});

app.get('/api/books/:id', (req, res) => {
  const book = getBookById(req.params.id);
  if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
  res.send(book);
});

app.get('/api/ranking', (req, res) => {
  const rankedBooks = getRanking();
  res.send(rankedBooks);
});

app.post('/api/books', (req, res) => {
  const result = validateBook(req.body);
 /*res.send(book);
  const book = createBook(req.body.title);*/
  res.send(result);
});

app.put('/api/books/:id', (req, res) => {
  const result = validateBook(req.body);
  /*if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  /*const { validateBook } = require('./ruta-al-archivo-de-validacion');*/

  if (!validateBook) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
  res.send(result);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
