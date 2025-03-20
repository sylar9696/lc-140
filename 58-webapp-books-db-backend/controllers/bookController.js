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

    // const bookSql = 'SELECT * FROM books WHERE id= ?'

    const bookSql = `
        SELECT B.*, ROUND( AVG(R.vote)) AS average_vote
        FROM books B
        LEFT JOIN reviews R
        ON R.book_id = B.id
        WHERE B.id = ?`


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

            //book.reviews = reviewsResults
           
            //trasformo il valore di average_vote in numero intero
            // book.average_vote = parseInt(book.average_vote)
            

            res.json({
                ...book,
                image: req.imagePath + book.image,
                average_vote: parseInt(book.average_vote),
                reviews: reviewsResults
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

function storeReview(req, res){
    //recuparare l'id
    const {id} = req.params

    //recuparare le informazioni del body
    const {text,name,vote} = req.body

    //preparazione della query
    const sql = 'INSERT INTO reviews ( text, name, vote, book_id ) VALUES (?,?,?,?)'

    //eseguiamo la query
    connection.query( sql, [text, name, vote, id], (err, results) => {
        if(err) return res.status(500).json({
            error: 'Database Errore StoreReview'
        })

        res.status(201)
        res.json({
            message: 'review Added',
            id: results.insertId
        })
    } )
}

function store(req,res){
    //recuparare le info da req.body
    const { title, author, abstract} = req.body

    const imageName = `${req.file.filename}`

    const sql = "INSERT INTO books (title, author, image, abstract) VALUES (?,?,?,?)"

    connection.query( sql, [title, author, imageName, abstract], (err, results) => {
        if(err) return res.status(500).json({
            error: 'Database Errore Store'
        })

        res.status(201).json({
            status: "success",
            message: "Libro creato con successo",
            id: results.insertId
        }
        )
    })

}

export {
    index,
    show,
    destroy,
    storeReview,
    store
}