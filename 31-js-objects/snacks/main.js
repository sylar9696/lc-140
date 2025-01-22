/* 
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza. 
 * Calcola quanto pesano tutte le zucchine.
 */

const zucchine = [
    { varietà: "Nero di Milano", peso: 250, lunghezza: 20 },
    { varietà: "Romanesco", peso: 300, lunghezza: 25 },
    { varietà: "Tondo di Piacenza", peso: 180, lunghezza: 15 },
    { varietà: "Zucchino giallo", peso: 150, lunghezza: 18 },
    { varietà: "Zucchino striato", peso: 220, lunghezza: 22 },
    { varietà: "Zucchino bianco", peso: 170, lunghezza: 16 },
    { varietà: "Zucchino lungo verde", peso: 350, lunghezza: 30 },
    { varietà: "Zucchino tondo verde", peso: 200, lunghezza: 17 },
    { varietà: "Zucchino romanesco nano", peso: 120, lunghezza: 12 },
    { varietà: "Zucchino trombetta", peso: 280, lunghezza: 28 }
];

let somma = 0

for( let i = 0; i < zucchine.length; i++ ){

    let element = zucchine[i]

    somma += element.peso

    console.log( somma )

}


/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

let zucchineCorte = []
let somma1 = 0
let zucchineLunghe = []
let somma2 = 0


for(let i = 0; i < zucchine.length; i++){
    let element = zucchine[i]

    if( element.lunghezza > 15 ){
        zucchineLunghe.push( element )
        somma1 += element.peso
    } else {
        zucchineCorte.push( element )
        somma2 += element.peso

    }
}

console.log( zucchineLunghe, zucchineCorte )
console.log( somma1, somma2 )

/*

Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

    a = 1
    b = 5

function  myfunction( array, a, b ){



}

*/





