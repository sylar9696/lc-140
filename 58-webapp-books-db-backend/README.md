1. da terminale: `npm init -y` dopo aver aperto da terminale la cartella progetto vuota
2. installiamo i pacchetti extra: `npm i mysql2 express`
3. creiamo il file app.js attenzione a rinominare la chiave "main" in package.json da index.js a app.js
   3.1. se vogliamo usare la modalita ES6 di importazione e sportazione dobbiamo aggiornare il file package.json
   3.2 Aggiungere i due script di attivazione del server:

   ```json
   {
       "name": "58-webapp-books-db-backend",
       "version": "1.0.0",
       "description": "",
       "main": "app.js", 👈
       "type": "module", 👈
       "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1","start": "node app.js", 👈
           "watch": "node --watch app.js" 👈
       },
       "keywords": [],
       "author": "",
       "license": "ISC",
       "dependencies": {
           "express": "^4.21.2",
           "mysql2": "^3.13.0"
       }
   }
   ```

4. aggiornare file app.js:

   ```javascript
   //pacchetti da importare
   import express from 'express';

   //impostiamo express e la porta del server
   const app = express();
   const port = 3000;

   //attivazione del server
   app.listen(port, () => {
     console.log(`Server Books in funzione sulla porta: ${port}`);
   });
   ```

5. aggiungere cartelle e file al progetto:
   📁 middlewares
   📁 public
   📁 routes
   📁 data
   📁 controllers

   📃.env

6. creare il file dentro cartella "data": 📃 db.js
   6.1 modifico il file

   ```javascript
   //importazione del pacchetto mysql2
   import mysql from 'mysql2';

   const connection = mysql.createConnection({
     host: process.env.DB_HOST || 'localhost',
     user: process.env.DB_USER || 'root',
     password: process.env.DB_PASSWORD || '',
     database: process.env.DB_NAME,
   });

   connection.connect((err) => {
     if (err) throw err;

     console.log('Connessione al DB avvenuta con successo');
   });

   export default connection;
   ```

7. aggiorniamo il file .env in modo da usare le variabili d'ambiente:

   ```env
   SERVER_PORT=

   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   ```

   7.1 aggiornamento del file package.json e della chiave script per leggere il file .env:

   ```json
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "node app.js",
       "watch": "node --env-file=.env --watch app.js" 👈
   },
   ```

8. creiamo il file 📃 bookController.js nella cartella 📁Controllers:

   ```javascript
   import connection from '../data/db.js';

   function index(req, res) {
     const sql = 'SELECT * FROM books';

     connection.query(sql, (err, results) => {
       if (err)
         return res.status(500).json({
           error: 'Errore lato server INDEX function',
         });

       res.json(results);
     });
   }

   function show(req, res) {
     const { id } = req.params;

     const bookSql = 'SELECT * FROM books WHERE id= ?';

     const reviewsSql = 'SELECT * FROM reviews WHERE book_id = ?';

     connection.query(bookSql, [id], (err, results) => {
       if (err)
         return res.status(500).json({
           error: 'Errore lato server SHOW function',
         });

       if (results.length === 0)
         return res.status(404).json({
           error: 'Book not found',
         });

       const book = results[0];

       connection.query(reviewsSql, [id], (err, reviewsResults) => {
         if (err)
           return res.status(500).json({
             error: 'Errore lato server SHOW function',
           });

         book.reviews = reviewsResults;
         res.json(book);
       });
     });
   }

   function destroy(req, res) {
     const { id } = req.params;

     const sql = 'DELETE FROM books WHERE id = ?';

     connection.query(sql, [id], (err) => {
       if (err)
         return res.status(500).json({
           error: 'Errore lato server DESTROY function',
         });

       res.sendStatus(204);
     });
   }

   export { index, show, destroy };
   ```

9. creiamo il file 📃 bookRouter.js nella cartella 📁routes:

   ```javascript
   import express from 'express';

   const router = express.Router();

   import { index, show, destroy } from '../controllers/bookController.js';

   //Rotte per i libri

   //index
   //localhost:3000/api/books
   router.get('/', index);

   //show
   //localhost:3000/api/books/:id
   router.get('/:id', show);

   //destroy
   //localhost:3000/api/books/:id
   router.delete('/:id', destroy);

   export default router;
   ```

10. aggiornare il file 📃 app.js:

    ```javascript
    //pacchetti da importare
    import express from "express";


    //impostiamo express e la porta del server
    const app = express();
    const port = process.env.SERVER_PORT || 3000;

    import bookRouter from './routes/bookRouter.js' 👈


    //Router libri
    app.use( '/books' , bookRouter ) 👈

    //attivazione del server
    app.listen( port, () => {
        console.log( `Server Books in funzione sulla porta: ${port}` )
    } )
    ```

11. gestire le immagini con il middleware
    11.1 inseriamo le immagini nella cartella public: 📁 /public/img/books
    11.2 creiamo il file middleware: 📃 imagePath.js
    11.3 aggiorniamo il file:

    ```javascript
    function setImagePath(req, res, next) {
      req.imagePath = `${req.protocol}://${req.get('host')}/img/books/`;
      next();
    }

    export default setImagePath;
    ```

    11.4 aggiorniamo il file app.js con i middleware per le immagini e gestione della cartella public + body

    ```javascript
    //pacchetti da importare
    import express from "express";


    //impostiamo express e la porta del server
    const app = express();
    const port = process.env.SERVER_PORT || 3000;

    import bookRouter from './routes/bookRouter.js'
    import imagePathMiddleware from './middlewares/imagePath.js'; 👈

    //middleware per gestire asset statici
    app.use( express.static('public') ) 👈

    //middleware per gestire le informazioni del body
    app.use( express.json() ) 👈

    //middleware per gestione delle immagini
    app.use( imagePathMiddleware ) 👈

    //rotta di test
    app.get( '/', (req, res) => {
        res.send( 'Server Book tutto a posto!' )
    } )


    //Router libri
    app.use( '/books' , bookRouter )

    //attivazione del server
    app.listen( port, () => {
        console.log( `Server Books in funzione sulla porta: ${port}` )
    } )
    ```

    11.5 aggiungiamo alla funzione del controller index e show la gestioone delle immagini

    ```javascript
    function index(req, res) {
      const sql = 'SELECT * FROM books';

      connection.query(sql, (err, results) => {
        if (err)
          return res.status(500).json({
            error: 'Errore lato server INDEX function',
          });

        // res.json(results);

        console.log(req.imagePath);

        const books = results.map((book) => { 👈
          return {
            ...book,
            image: req.imagePath + book.image,
          };
        });

        res.json(books);
      });
    }

    function show(req, res) {
      const { id } = req.params;

      const bookSql = 'SELECT * FROM books WHERE id= ?';

      const reviewsSql = 'SELECT * FROM reviews WHERE book_id = ?';

      connection.query(bookSql, [id], (err, results) => {
        if (err)
          return res.status(500).json({
            error: 'Errore lato server SHOW function',
          });

        if (results.length === 0)
          return res.status(404).json({
            error: 'Book not found',
          });

        const book = results[0];

        connection.query(reviewsSql, [id], (err, reviewsResults) => {
          if (err)
            return res.status(500).json({
              error: 'Errore lato server SHOW function',
            });

          book.reviews = reviewsResults;
          // res.json( book)

          res.json({ 👈
            ...book,
            image: req.imagePath + book.image,
          });

          res.json(book);
        });
      });
    }
    ```
