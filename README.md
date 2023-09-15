# node-rest-api 

Esto esto es una rest API escrita en Node.js que realiza operaciones CRUD.

Instalar dependencias:
```
npm i 

```
Comenzar el servidor:
```
node books-api.js

```
Obtener:
curl --location 'http://127.0.0.1:8080/api/books' \
--data ''
```
Envia libros: 
curl --location 'http://localhost:8080/api/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "123"
}'

```
Actualiza los libros: 
curl --location 'http://localhost:8080/api/books' \
--header 'Content-Type: application/json' \
--data '{
    "title": "123"
}'

```
Borra el libro requerido: 
curl --location 'http://localhost:8080/api/books/'

```
Devuelve ranking de libros ordenados: 
curl --location 'http://localhost:8080/api/books/'

```
Devuelve los libros ordenados por ventas: 
curl --location 'http://localhost:8080/api/ranking'

```
