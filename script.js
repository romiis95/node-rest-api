const express = require('express');
const res = require('express/lib/response');
const Joi = require('joi'); //used for validation
const app = express();
app.use(express.json());
 
const books = [
    { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', sales: 1000 },
    { id: 2, title: 'Twilight', author: 'Stephenie Meyer', sales: 800 },
    { id: 3, title: 'Lorien Legacies', author: 'Pittacus Lore', sales: 1200 }
  ];
  

app.get('/', (req, res) => {
res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});
 
app.get('/api/books', (req,res)=> {
res.send(books);
console.log("libros");//aca imprimo los libros agregados
console.log(books);
res.send(books)

});
 
app.get('/api/books/:id', (req, res) => {
const book = books.find(c => c.id === parseInt(req.params.id));
 
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
res.send(book);
});
app.get('/ranking',(req,res) => {
res.send("ranking");
})


app.get('/api/ranking', (req, res) => {
  // Ordena los libros por ventas en orden 
  const rankedBooks = books
      .slice() // Copia del array para no modificar el mismo 
      .sort((a, b) => b.sales - a.sales)
      .slice(0, 10); // te da los primeros 10 libros

  res.send(rankedBooks);
});


app.post('/api/books', (req, res)=> {
 
const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message)
return;
}
const book = {
id: books.length + 1,
title: req.body.title
};
books.push(book);
res.send(book);
});

app.put('/api/books/:id', (req, res) => {
const book = books.find(c=> c.id === parseInt(req.params.id));
if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!! </h2>');
 
const { error } = validateBook(req.body);
if (error){
res.status(400).send(error.details[0].message);
return;
}
 
book.title = req.body.title;
res.send(book);
});
 

app.delete('/api/books/:id', (req, res) => {
 
const book = books.find( c=> c.id === parseInt(req.params.id));
if(!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;"> Not Found!! </h2>');
 
const index = books.indexOf(book);
books.splice(index,1);
 
res.send(book);
});
function validateBook(book) {
    // const schema = {
    // title: Joi.string().min(3).required()
    // };
    // return Joi.validate(book, schema);
    const schema= Joi.object({ title: Joi.string() .min(6) .required()})
     return schema.validate(book)
    }

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));