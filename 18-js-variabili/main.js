//variabili
// dati modificabili

//var nome = "Marco";
let nome = "vincenzo"; //tipo di dato stringa
let numero = 2; //tipo di dato: number


console.log(nome, numero)

//costanti
// dati inmodificabili
const cognome = "Amari";
const pgreco = 3.14159;

//console log
console.log(pgreco, cognome)

//manipolare il valore di una varibaile
numero = 5; // da 2 diventa 5 perchè è una variabile modificabile in quanto let
console.log(numero)
// pgreco = 6.14
// console.log( pgreco ) non posso modificarlo in quanto è una costante


const x = 10;
const y = 25;

let somma = x + y; // 35

console.log(somma)

//concatenazione di stringhe vecchio stile
let fullName = nome + " " + cognome
console.log(fullName, "manuel" + " " + "pezzi")

let stringa2 = "lorem ipsum dolor malet" + " " + fullName;
//Concatenazione di stringhe con template literal
let stringa = `lorem ipsum dolor malet ${fullName} le dita delle mie mani sono : ${somma - 10}`
console.log(stringa)


console.log((4 - "2"))

// && questo rappresenta AND
// || questo rappresenta OR


console.log(

    0.1286.toFixed(2),
    0.12345.toString(),
    pgreco.toFixed(2)

)