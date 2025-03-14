//pacchetti da importare
import express from "express";


//impostiamo express e la porta del server
const app = express();
const port = process.env.SERVER_PORT || 3000;

import bookRouter from './routes/bookRouter.js'
import imagePathMiddleware from './middlewares/imagePath.js';

//middleware per gestire asset statici
app.use( express.static('public') )

//middleware per gestire le informazioni del body
app.use( express.json() )

//middleware per gestione delle immagini
app.use( imagePathMiddleware )

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