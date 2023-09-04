const Joi = require('joi');

const books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', sales: 1000 },
  { id: 2, title: 'Twilight', author: 'Stephenie Meyer', sales: 800 },
  { id: 3, title: 'Lorien Legacies', author: 'Pittacus Lore', sales: 1200 }
];

function getBooks(req, res) {
  console.log("libros");
  console.log(books);
  res.send(books);
}

function getBookById(req, res) {
  const book = books.find(c => c.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
  res.send(book);
}

function getRanking(req, res) {
  const rankedBooks = books
    .slice()
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 10);
  res.send(rankedBooks);
}

function createBook(req, res) {
  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const book = {
    id: books.length + 1,
    title: req.body.title
  };
  books.push(book);
  res.send(book);
}

function updateBook(req, res) {
  const book = books.find(c => c.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');

  const { error } = validateBook(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  book.title = req.body.title;
  res.send(book);
}

function deleteBook(req, res) {
  const book = books.find(c => c.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');

  const index = books.indexOf(book);
  books.splice(index, 1);
  res.send(book);
}

function validateBook(book) {
  const schema = Joi.object({ title: Joi.string().min(6).required() });
  return schema.validate(book);
}

module.exports = {
  getBooks,
  getBookById,
  getRanking,
  createBook,
  updateBook,
  deleteBook
};
