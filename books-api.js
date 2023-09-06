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
  const rankedBooks = books
  return rankedBooks;
}

function createBook(title) {
  const newBook = {
  };
  books.push(newBook);
  return newBook;
}

module.exports = {
  getBooks,
  getBookById,
  getRanking,
  createBook
};
