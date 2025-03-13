const arrayPizzas = require('../data/pizzas.js');

const connection = require( '../data/db.js' );

function index(req, res) {
    // copiamo la logica dell'index

    // res.send('Lista delle pizze');
    //Inizialmente, il menu filtrato corrisponde a quello originale
    // let filteredMenu = arrayPizzas;

    // pippo.get()

    // Se la richiesta contiene un filtro, allora filtriamo il menu
    // if (req.query.ingredient) {
    //     filteredMenu = arrayPizzas.filter(
    //         pizza => pizza.ingredients.includes(req.query.ingredient) //"salame piccante"
    //     );
    // }

    // restituiamo la variabile filteredMenu
    // potrebbe essere stata filtrata o contenere il menu originale
    // res.json(filteredMenu);



    //Da qui versione con DB mysql
    const sql = 'SELECT * FROM pizzas';

    connection.query( sql,(err, results) => {
        if(err) return res.status(500).json({
            error: 'Database query error'
        })

        res.json(results)
    } )

}

function show(req, res) {
    // res.send('Dettagli della pizza ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    // const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    // const pizza = arrayPizzas.find(pizza => pizza.id === id);

    // Facciamo il controllo
    // if (!pizza) {

    //     res.status(404);

    //     return res.json({
    //         status: 404,
    //         error: "Not Found",
    //         message: "Pizza non trovata"
    //     })
    // }

    // Restituiamolo sotto forma di JSON   
    // res.json(pizza);



    //mysql
    const {id} = req.params

    const sql = 'SELECT * FROM pizzas WHERE id = ?';

    connection.query(sql, [id], (err, results) =>{
        if (err) return res.status( 500 ).json({
            error: 'Database error'
        })

        if ( results.length === 0 ) return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Pizza non trovata"
        })

        res.json(results[0])
    })
}

function store(req, res) {

    // Creiamo un nuovo id incrementando l'ultimo id presente
    //ultimo oggetto di un array: arrayPizzas[arrayPizzas.length - 1]
    //estraggo all'oggetto il valore della chiave "id"
    //ottenuto il valore dell'ultimo ID aggiungo + 1
    // const newId = arrayPizzas[arrayPizzas.length - 1].id + 1;

    // Creiamo un nuovo oggetto pizza
    // const newPizza = {
    //     id: newId,
    //     name: req.body.name,
    //     image: req.body.image,
    //     ingredients: req.body.ingredients
    // }

    // Aggiungiamo la nuova pizza al arrayPizzas
    // arrayPizzas.push(newPizza);

    // controlliamo
    // console.log(arrayPizzas);


    // Restituiamo lo status corretto e la pizza appena creata
    // res.status(201);
    // res.json(newPizza);



    //SQL
    const { name, image } = req.body;

    const sql = 'INSERT INTO pizzas (name, image) VALUES (?,?)'

    connection.query(
        sql,
        [name, image],
        (err, results) => {
            if(err) return res.status(500).json({
                error: 'Database error'
            })

            res.status(201)
            console.log( results )
            // res.json({
            //     id: results.insertId
            // })
        }
    )

}

function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = arrayPizzas.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Aggiorniamo la pizza
    pizza.name = req.body.name;
    pizza.image = req.body.image;
    pizza.ingredients = req.body.ingredients;

    // Controlliamo il arrayPizzas
    console.log(arrayPizzas)

    // Restituiamo la pizza appena aggiornata
    res.json(pizza);
}

function patch(req, res) {
    // res.send('Modifica parziale della pizza ' + req.params.id);
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    const pizza = arrayPizzas.find(pizza => pizza.id === id);

    // Piccolo controllo
    if (!pizza) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Pizza non trovata"
        })
    }

    // Aggiorniamo la pizza
    // pizza.name = req.body.name;
    // pizza.image = req.body.image;
    // pizza.ingredients = req.body.ingredients;

    for( let key in req.body){
        pizza[key] = req.body[key];
    }

    /*
    {
        id: 2,
        name: "Marinara",
        image: "imgs/pizze/marinara.jpeg",
        ingredients: ["pomodoro", "aglio", "origano"],


        1 giro di ciclo: pizza[key] = 2
        2 giro di ciclo: pizza[key] = "Marinara"
        3 giro di ciclo: pizza[key] = "imgs/pizze/marinara.jpeg"
        4 giro di ciclo: pizza[key] = ["pomodoro", "aglio", "origano"]


        informazioni della update:

        {
            id: 2,
            name: "Marinara di mare",
            image: "imgs/pizze/marinara.jpeg",
            ingredients: ["pomodoro", "aglio", "origano"],
        }

        1 giro di ciclo: req.body[key] = 2
        2 giro di ciclo: req.body[key] = "Marinara di mare" 👈
        3 giro di ciclo: req.body[key] = "imgs/pizze/marinara.jpeg"
        4 giro di ciclo: req.body[key] = ["pomodoro", "aglio", "origano"]
    }
    
    */
    

    // Controlliamo il arrayPizzas
    console.log(arrayPizzas)

    // Restituiamo la pizza appena aggiornata
    res.json(pizza);
}

function destroy(req, res) {




    // copiamo la logica della destroy..
    // res.send('Eliminazione della pizza ' + req.params.id);

    // recuperiamo l'id dall' URL e trasformiamolo in numero
    //const id = parseInt(req.params.id)

    // cerchiamo il pizza tramite id
    //const pizza = arrayPizzas.find(pizza => pizza.id === id);

    // Facciamo il controllo
    // if (!pizza) {

    //     res.status(404);

    //     return res.json({
    //         status: 404,
    //         error: "Not Found",
    //         message: "Pizza non trovata"
    //     })
    // }


    // Rimuoviamo la pizza dal menu
    //arrayPizzas.splice(arrayPizzas.indexOf(pizza), 1);

    // Restituiamo lo status corretto
    //res.sendStatus(204)


    //sql
    const {id} = req.params;

    const sql = 'DELETE FROM pizzas WHERE id = ?'

    connection.query( sql, [id], (err) => {
        if(err) return res.status(500).json({
            error: 'Database query error'
        })

        res.sendStatus(204)
    } )

}

// esportiamo tutto
module.exports = { index, show, store, update, patch, destroy }
