const Joi = require('joi');

function validateBook(book) {
  const schema = Joi.object({ title: Joi.string().min(3).required() });
  return schema.validate(book);
}

module.exports = {
  validateBook
};

const express = require('express');
const app = express();
app.use(express.json());

const { getBooks, getBookById, getRanking, createBook } = require('./books-api');
//const { validateBook } = require('./validation-functions');

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
  const { error } = validateBook(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
});

app.put('/api/books/:id', (req, res) => {
    const { error } = validateBook(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    if (!updatedaBook) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(book);
  });

    const book = createBook(req.body.title);
  res.send(book);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
