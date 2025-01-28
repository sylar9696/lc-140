//Endpoint: https://flynn.boolean.careers/exercises/api/random/int

//stampare in pagina il numero random intero generato dalla chiamata all'api 

/*
axios.get('https://flynn.boolean.careers/exercises/api/random/boolean')
 .then(response => {
   //codice da eseguire in caso di successo
   const result = response.data;
 })
.catch(error => {
  // codice da eseguire in caso di errore
  console.error(error)
})
.then(() => {
  // codice da eserguire a prescindere dall'esito
  // (ad esempio si può fermare un loader!)
})

*/

// let numero;
const risultato = document.getElementById('risultato')


axios.get('https://flynn.boolean.careers/exercises/api/random/int')
    .then(response => {
        console.log(response.data.response)
        //codice da eseguire in caso di successo

        risultato.innerHTML = response.data.response

        //    numero = response.data.response;
    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error)
    })









fetch("https://flynn.boolean.careers/exercises/api/random/int", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        console.log(data.response);
        risultato.innerHTML = data.response

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });



// gioco dei dadi
// ci sono 2 giocatori player 1 e player 2
// vengono fatte 2 chiamate api un per giocatore che generano numeri randomici
// il numero randomico più grande garantisce la vittoria al giocatore a cui era assegnato

const play = document.getElementById('play')
const player1 = document.querySelector( '#player1 span' )
const player2 = document.querySelector( '#player2 span' )
const testo = document.getElementById('testo')

console.log( play, player1, player2 )
let risultatoPlayer1 = 0;
let risultatoPlayer2 = 0;

play.addEventListener( 'click', function(){

    const min = 1
    const max = 6
    const dice = 2

    fetch(`https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${dice}`, { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // codice per far qualcosa con la risposta
        console.log(data.response); //[ x, y ]
        //risultatoP1 è attribuito a x 
        //risultatoP2 è attribuito a y
        let [ risultatoP1, risultatop2 ] = data.response

        player1.innerHTML = risultatoP1
        player2.innerHTML = risultatop2

        if( risultatoP1 > risultatop2){
            testo.innerHTML = "Il giocatore 1 ha vinto"
        } else if( risultatoP1 < risultatop2 ){
            testo.innerHTML = "Il giocatore 2 ha vinto"
        } else {
            testo.innerHTML = "i giocatori hanno pareggiato"
        }

    })
    .catch(error => {
        // codice da eseguire in caso di errore
        console.error(error);
    });

    
} )

// https://flynn.boolean.careers/exercises/api/array/integers?min=${min}&max=${max}&items=${dice}



