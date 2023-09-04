const express = require('express');
const Joi = require('joi'); 
const app = express();
app.use(express.json());

const { getBooks, getBookById, getRanking, createBook, updateBook, deleteBook } = require('./routes/books');

app.get('/', (req, res) => {
  res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

app.get('/api/books', getBooks);

app.get('/api/books/:id', getBookById);

app.get('/api/ranking', getRanking);

app.post('/api/books', createBook);

app.put('/api/books/:id', updateBook);

app.delete('/api/books/:id', deleteBook);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
