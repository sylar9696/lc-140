/**
 * 1. L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

mini task: 
- inserire due prompt
- usiamo il parseInt() per trasformare il valore dei prompt da stringa a numero
- condizione if tra i due numeri per controllare il maggiore x > y

 */

// let x = parseInt(prompt( "inserisci il primo numero" ))
// let y = parseInt(prompt( "inserisci il secondo numero" ))

// console.log( x , y )

// if( x > y ){
//     console.log( `${x} è il numero più grande`, 10 )
// } else if( x < y ) {
//     console.log( `${y} è il numero più grande`, 20 )
// } else {
//     console.log( `${x} e ${y} sono uguali` )
// }

/**
 * 
 *2.  L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga

mini task:
- 2 variabili con prompt er ottenere 2 parole
- condizione di controllo per la lunghezza delle stringhe usando la funzione parola1.length < parola2.length
- console.log()
 */

// let parola1 = prompt( "inseriscimi la prima parola", "Hello" )
// let parola2 = prompt( "inseriscimi la seconda parola", "worldCup" )
// let lunghezzaParola1 = parola1.length
// let lunghezzaParola2 = parola2.length



// if( lunghezzaParola1 > lunghezzaParola2 ){
//     console.log( `${parola2} - ${parola1} ` )
// } else if( lunghezzaParola1 < lunghezzaParola2 ) {
//     console.log( `${parola1} - ${parola2}` )
// } else {
//     console.log( `${parola1} e ${parola2} sono lunghe uguali` )
// }

/**
 * 
 *3. Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

mini task:
- ciclo for a 10 cicli
- parseInt() prompt() di richiesta di un numero a ogni ciclo
- creiamo una variabile fuori dal ciclo chiamata somma
- a ogni giro di ciclo aggiorno il valore di somma sommando i valori che inserisci l'utente
*/

// let somma = 0;

// for( let i = 1; i <= 10; i++ ){
//     let numero = parseInt( prompt( `inserisci un numero dei 10 necessari ${i} / 10` ) )
//     //forma estesa
//     //somma = somma + numero
    
//     // forma contratta 
//     somma += numero

//     console.log( somma )
// }

// console.log( somma )

/**
 * 
 *4.  Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

mini task:
- variabile con array vuoto
- ciclo for per chiedere all'utente 6 numeri casuali
- condizione if per controllare se nè dispari x % 2 !== 0

 */

// let arrayVuoto = []

// for( let i = 1; i <= 6; i++ ){
//     let numero = parseInt( prompt( `inserisci un numero dei 6 necessari ${i} / 6` ) )

//     if( !(numero % 2 == 0) ){
//         //solo quando la condizione è true
//         arrayVuoto.push( numero )
//     }

//     // console.log( arrayVuoto )

// }

// console.log( arrayVuoto )

/**
 * 
 * 5. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente

mini task:
- parseInt() + prompt() per richiedere un numero all'utente 
- stampare il cubo del numero inserito: 3x3x3 => MathPow( n,3 )

 */

// let numeroUtente = parseInt( prompt( "Inserisci un numero che poi sarà trasformato in cubo" ) )

// console.log( `Il numero che hai inserito: ${numeroUtente}`,  Math.pow(numeroUtente, 3) )


/*
6. Stampa le potenze di 2 fino a 1000

mini task:
- variabile con numero 2
- eseguiamo un ciclo per arrivare velocemente a 1000
- 

*/

// let numero = 2
// let arrayVuoto = []

// for( let i = 1; 1000 >= Math.pow( numero, i ); i++ ){
//     arrayVuoto.push( Math.pow( numero, i ) )
// }

// console.log( arrayVuoto )

/**
 * 
 * 7. Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero

mini task:
- parseint + prompt per chiedere un numero all'utente
- scomponiamo i numeri del numero scelto dall'utente - .split()
- sommiamo poi i valori ottenuti
 */

// let numero = prompt( "dammi un numero di 4 cifre" )

// let somma = 0;

// let arrayNumero = numero.split("", 4)

// console.log( numero.split("", 4) ) // otteniamo un array di ogni numero del valore scelto dell'utente

// //ciclo la lunghezza dei numeri presenti nell'array
// for( let i = 0; i < arrayNumero.length; i++ ){
//     somma += parseInt(arrayNumero[i])
// }

// console.log( somma )


/**
 * 
 * 8. Calcola la somma e la media dei primi 10 numeri.
 */



let somma = 0;
let array = []

//ciclo la lunghezza dei numeri presenti nell'array
for( let i = 0; i < 10; i++ ){
    let numero = parseInt( prompt( "inserisci 10 numeri" ) )
    array.push( numero )

    somma += array[i]
    
}

console.log( array )

//calcola la media dei numeri
let media = somma / array.length

console.log( media.toFixed(2) )



/*
Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
Si può fare? Certo che si basta ragionare un po’.
Nota: 
Non è necessario provvedere alla validazione delle email

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

*/