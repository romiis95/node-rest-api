const { log } = require('console');
const Joi = require('joi')
const books = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', sales: 1000 },
  { id: 2, title: 'Twilight', author: 'Stephenie Meyer', sales: 800 },
  { id: 3, title: 'Lorien Legacies', author: 'Pittacus Lore', sales: 1200 }
];

function getBooks() {
  return books;
}

function getBookById(id) {
  return books.find((book) => book.id === parseInt(id));
}

function getRanking() {
  // Ordena los libros por ventas en orden descendente
  const rankedBooks = books.slice().sort((a, b) => b.sales - a.sales);
  return rankedBooks;
}

function createBook(title) {
  const newBook = { id: books.length + 1, title, author: '', sales: 0 };
  books.push(newBook);
  return newBook;
}

function validateBook(book){
  console.log(book);
  const schema = Joi.object({title: Joi.string().min(3).max(10).required()})
  const result = schema.validate({title:book.title})
  return result;
}



module.exports = {
  getBooks,
  getBookById,
  getRanking,
  createBook,
  validateBook
};
