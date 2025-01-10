
//Il ciclo continua finchè il secondo dato fra parentesi è true 
for (let i = 1; i <= 90; i++) {

    //stringa senza template literal
    // console.log("numero del giro di ciclo:" + " " + i) 

    //stringa con template literal
    console.log( `numero del giro di ciclo: ${ i }` )
    
    //al termine del ciclo viene eseguita il terzo valore del for i++ -> i = i + 1
}

// 1 - controllare se il giro di ciclo è pari o dispari
/*
mini task:
- creare un ciclo
- creare un if
    - se un numero è divisibile per 2 e quindi da resto 0, il numero è pari se no è dispari
        - uso l'operatore % detto anche modulo
        - 100 % 2 == 0 per avere true e quindi definire un numero pari

*/

for( let i = 0; i < 10; ++i ){
    // 0 == 0 -> true
    if( i % 2 == 0 ){
        // se true
        console.log( `il tuo numero ${i} è pari` )
    } else {
        console.log( `il tuo numero ${i} è dispari` )
        // console.log( `il tuo resto è:  ${ i % 2 }` )
    }

}

//calcolare la somma dei giri di ciclo dal 1° al 5°
/*
- ciclo for
- dichiaro una variabile somma
- uso la variabile somma nel ciclo per poterla aggiornare con il valore del giro di ciclo corrente
esempio:
0 + 0
0 + 1
1 + 2
3 + 3
6 + 4
*/

let somma = 0;
//creo un ciclo di 5 cicli
for(let i = 0; i < 5; i++){
    //forma contratta
    somma += i

    console.log( somma )
    //forma estesa
    // somma = somma + i
}

console.log( somma )



/**

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

*/


