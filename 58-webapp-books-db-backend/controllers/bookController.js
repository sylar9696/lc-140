import connection from '../data/db.js';

function index(req, res){
    const sql = 'SELECT * FROM books'

    connection.query( sql, (err,results) => {
        if(err) return res.status(500).json({
            error: 'Errore lato server INDEX function'
        })

        // res.json(results);

        console.log( req.imagePath )

        const books = results.map( book => {
            return {
                ...book,
                image: req.imagePath + book.image
            }
        } )

        res.json(books)

    } )

}

function show(req, res){
    const {id} = req.params;

    const bookSql = 'SELECT * FROM books WHERE id= ?'

    const reviewsSql = 'SELECT * FROM reviews WHERE book_id = ?'

    connection.query( bookSql, [id], (err,results) => {
        if(err) return res.status(500).json({
            error: 'Errore lato server SHOW function'
        })

        if( results.length === 0 ) return res.status(404).json({
            error: 'Book not found'
        })

        const book = results[0]

        connection.query( reviewsSql,[id], (err, reviewsResults) => {
            if(err) return res.status(500).json({
                error: 'Errore lato server SHOW function'
            })

            book.reviews = reviewsResults
           


            res.json({
                ...book,
                image: req.imagePath + book.image
            })

           

        })
    }) 

}

function destroy(req, res){
    const {id} = req.params;

    const sql = 'DELETE FROM books WHERE id = ?'

    connection.query( sql, [id], (err) => {
        if(err) return res.status(500).json({
            error: 'Errore lato server DESTROY function'
        })

        res.sendStatus( 204 )

    } )
}

export {
    index,
    show,
    destroy
}