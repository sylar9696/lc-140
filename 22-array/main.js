const nomi = ["Luca", "Marco", "Paolo"];

console.log( nomi )

//Stampa tutti i nomi
console.log(nomi[0]);

console.log(nomi[1]);

console.log(nomi[2]);


for (let i = 0; i < nomi.length; i++) {
  
    console.log(nomi[i], `L'indice dell'elemento è: ${i}`);
     
}



/*
1. Stampare solo i numeri dispari
*/

// let numbers = [10, 15, 2, 33, 55, 20, 22];

/*
mini task

- ciclo for
- creo una condizione
    - controllo se è divisibile per 2 con il % "modulo"
    - stampiamo poi in console conosle.log( numbers[i] )

*/

// for( let i = 0; i < numbers.length; i++ ){

//     //COntrolliamo se il valore singolo estratto durante il ciclo è dispari
//     if( numbers[i] % 2 !== 0 ){
//         console.log( numbers[i] )
//     } 

// }


/*
2. Stampare tutti gli elementi di un array
*/

let teachers = ['Michele', 'Fabio', 'Roberto'];


/*
- ciclo for
- console.log( teachers[i] )
*/

for( let i = 0; i < teachers.length; i++ ){

    console.log( teachers[i] )

}

/*
3. Semplici task sugli array

*/

const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur'];
const names = [];
const numbers = [1, 2, 3];
const colours = ['Red', 'Blue', 'Yellow', "Red"];
const keys = ['q', 'w', 'e', 'r', 't', 'y'];
const countries = ['Bolivia', 'Jordan', 'Greenland'];
const fruits = ['Apple', 'Orange', 'Pear'];

// 1. Aggiungi Fred all'array names
console.log( names, names.length );
names.push( "Fred" );
console.log( names, names.length );

// 2. Aggiungi 4 alla fine dell'array numbers
console.log( numbers, numbers.length );
numbers.push( 4 );
console.log( numbers, numbers.length );

// 3. Aggiungi Rio all'inizio dell'array cities
console.log( cities, cities.length );
cities.unshift( "Rio" );
console.log( cities, cities.length );

// 4. Rimuovi il primo colore dall'array colours
console.log( colours, colours.length );
colours.shift( );
console.log( colours, colours.length );

// 5. Rimuovi l'ultimo elemento dall'array keys
console.log( keys, keys.length );
keys.pop( );
console.log( keys, keys.length );

// 6. Rimuovi Jordan dall'array countries
console.log( countries, countries.length );
 /*
 mini task:
 - contries.indexOf( elemento ) dentro a contries.Splice(x,y)
 oppure:
 - prima contries.indexOf( elemento )
 - dopo contries.Splice(x,y)

 */

//troviamo l'indice dell'elemento con indexOf(elemento)
//let indiceJordan = countries.indexOf( "Jordan" );
//console.log( `l'indice di Jordan è: ${ indiceJordan }` ); // 1

//splice(x,y)
// x é l'indice dlel'elemento da eliminare
// y è quanti elementi elimino a partire da quello trovato in avanti
//countries.splice( indiceJordan, 1 ); //countries.splice( 1, 1 ); 


//metodo abbreviato
countries.splice( countries.indexOf( "Jordan" ), 1 );

console.log( countries )



// 7. Rimuovi l'ultimo frutto dall'array fruits e memorizzalo in pear qui sotto
// .pop() rimuove l'ultimo elemento di un array
const pippo = fruits.pop()

console.log( pippo )



//sintassi da non usare se hai array const
// numbers = [1, 2, 3, 8, 10];
// console.log( numbers )