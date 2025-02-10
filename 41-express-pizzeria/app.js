/*
1- npm init
2 - npm i express
3- creo il file .gitignore
4- impostiamo l'importazione di express
5- attiviamo la chiamata al server con porta :3000
6- impostato la rotta "/api/pizze" per ootenere i dati come api
7- aggiornato packagejson : con
    "start": "node app.js",
    "watch": "node --watch app.js"
8- attivato da terminale il server con: npm run watch
9- controlliamo la rotta su postman
10- creo la cartella public
*/

/*
[
    {
      name: "Margherita",
      image: "imgs/pizze/margherita.webp",
      ingredients: ["pomodoro", "mozzarella"],
    }, {
      name: "Marinara",
      image: "imgs/pizze/marinara.jpeg",
      ingredients: ["pomodoro", "aglio", "origano"],
    }, {
      name: "Diavola",
      image: "imgs/pizze/diavola.jpeg",
      ingredients: ["pomodoro", "mozzarella", "salame piccante"],
    }, {
      name: "Bufalina",
      image: "imgs/pizze/bufalina.jpeg",
      ingredients: ["pomodoro", "mozzarella di bufala"],
    }, {
      name: "4 formaggi",
      image: "imgs/pizze/4_formaggi.jpeg",
      ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
    }
  ]

*/

const express = require("express");
const app = express();
const port = 3000;

//leggere la cartella public
app.use(express.static('public'));

app.get("/", (req, res) => {
    // res.send(`Server della mia pizzeria`);
    res.type('html').send(
        `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Pizzeria</title>

                

            </head>
            <body>
                <h1>Menu Pizze</h1>
                <div id="menu"></div>

                <script>
                    document.addEventListener('DOMContentLoaded', () => {
                    fetch('/api/pizze')
                        .then(response => response.json())
                        .then(data => {
                            const menuDiv = document.getElementById('menu');
                            data.forEach(pizza => {
                                const pizzaDiv = document.createElement('div');
                                pizzaDiv.innerHTML = \`
                                    <h2>\${pizza.name}</h2>
                                    <img width="200px" src="\${pizza.image}" alt="\${pizza.name}">
                                    <p>Ingredienti: \${pizza.ingredients.join(', ')}</p>
                                \`;
                                menuDiv.appendChild(pizzaDiv);
                            });
                        })
                        .catch(error => console.error('Errore nella fetch:', error));
                });
                </script>
            </body>
        </html>
        `
        )
});


//attiviamo la rotta api alle pizze
app.get("/api/pizze", (req, res) => {


    const menu = [
        {
            name: "Margherita",
            image: "imgs/pizze/margherita.webp",
            ingredients: ["pomodoro", "mozzarella"],
        }, {
            name: "Marinara",
            image: "imgs/pizze/marinara.jpeg",
            ingredients: ["pomodoro", "aglio", "origano"],
        }, {
            name: "Diavola",
            image: "imgs/pizze/diavola.jpeg",
            ingredients: ["pomodoro", "mozzarella", "salame piccante"],
        }, {
            name: "Bufalina",
            image: "imgs/pizze/bufalina.jpeg",
            ingredients: ["pomodoro", "mozzarella di bufala"],
        }, {
            name: "4 formaggi",
            image: "imgs/pizze/4_formaggi.jpeg",
            ingredients: ["pomodoro", "mozzarella", "gorgonzola", "parmigiano", "ricotta"],
        }
    ]

    res.json(menu)
})


//attivazione del server: http:localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});