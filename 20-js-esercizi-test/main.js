// Inizializziamo due parole a due variabili.
// Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato.

/*
1- inizializzare / dichiarare le variabili 
2- condizione: quale delle due parole è più lunga
    utilizzare un metodo per comprendere la lunghezza delle stringhe (.length)
        2.1 opzionale: associare a nuove variabili le singole lunghezze delle parole
        2.2 BONUS: aggiungo il trim se serve
3- Stampare il risultato in console
*/

// Fase di preparazione
// let parola1 = "hello World"
// let parola2 = "   Good by all    "

let parola1 = prompt("scrivimi la tua prima parola che ti viene in mente", "Boolean")
//controllo se il prompt ha un valore numerico
if( isNaN(parola1) ){
    //se true
    console.log( `è una stringa ${ parola1 }` )
} else {
    console.log( `Non è una stringa ${parola1}` )
    parola1 = prompt("scrivimi la tua prima parola che ti viene in mente", "Boolean")
}

let parola2 = prompt("scrivimi la tua seconda parola che ti viene in mente", "Hello world")

let numero = parseInt( prompt("scrivimi lil primo numero che ti viene in mente") )

console.log(`Il tuo numero è : `, numero)
// console.log( parseInt( numero ) )


//Fase di elaborazione
let lunghezzaParola1 = parola1.trim().length // trim() cancella lo spazio vuoto all'inizio e alla fine della stringa
let lunghezzaParola2 = parola2.trim().length // trim() cancella lo spazio vuoto all'inizio e alla fine della stringa

console.log( `La lunghezza di ${parola1} è : ${lunghezzaParola1}` )
console.log( `La lunghezza di ${parola2} è : ${lunghezzaParola2}` )


// Fase di output
if( lunghezzaParola1 > lunghezzaParola2 ){
    console.log( `La parola1: ${parola1} è maggiore di parola2: ${parola2}` )
} else if( lunghezzaParola2 > lunghezzaParola1 ) {
    console.log( `La parola parola2: ${parola2} è maggiore di parola1: ${parola1}` )
} else {
    console.log( `Parola1: ${parola1} e parola2: ${parola2} sono uguali` )

}



/*


@here
Ciao ragazzi,
esercizio di oggi: Biglietto del treno
cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km) 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Buon lavoro!

*/
