/*
1. generare 10 numeri random (con un for ) attraverso una funzione (copiamola da w3schools) e stamparli a schermo
*/

// Math.floor(Math.random() * 10) + 1; va da 1 a 10

// 1- creiamo la funzione per il numero random

function numeriRandom(min, max) {
    let random = Math.floor(Math.random() * max) + min;
    return random
}

for (let i = 0; i < 10; i++) {
    console.log(numeriRandom(1, 50))
}

/*
2. scrivere una funzione per verificare se un numero è pari o dispari, quindi chiedere un numero all'utente e comunicargli se è pari o dispari
*/

function pariODispari(x) {

    if (x % 2 === 0) {
        return console.log(`Il numero scelto: ${x} è pari`)
    } else {
        return console.log(`Il numero scelto: ${x} è dispari`)
    }

}

let numeroDacControllare = parseInt(prompt("dammi un numero"))

//invoca la funzione
pariODispari(numeroDacControllare)

// 3. creiamo una funzione che permetta data una stringa di leggerla al contrario
// esempio: ciao diventa oaic

let parola = prompt("dammi una parola da girare", "Hello")
let result = "";

function reverseString(parolaDaControllare) {
    //1- trasformare parola in array .split()

    //metodo 1 con ciclo for
    for ( let i = parolaDaControllare.length - 1;        i >= 0;        i-- )  {
        //estraiamo dalla stringa ogni singola lettera partendo dall'ultima e la aggiungiamo alla variabile globale result
        result += parolaDaControllare.charAt(i);
        console.log( result )
    }
    
    return result


    //metodo 2
    //return parolaDaControllare.split("").reverse().join("-") // [ "o", "l", "l",  "e", "H" ]
}

console.log( reverseString(parola) ) 





/**
 * 
 *
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
 */

