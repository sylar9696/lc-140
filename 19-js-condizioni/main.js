//condizioni if
let x = -100

if (x > 1) {
    //condizone true
    console.log(`${x} è più grande di 1`)
} else {
    //condizione false
    console.log(`${x} è minore di 1`)
}

//condizione con if else if
if (x <= 10 && x >= 0) {
    //condizone true
    console.log(`${x} è compresa tra 0 e 10`)
} else if (x >= 10) {
    //condizione true
    console.log(`${x} è maggiore di 10`)
} else {
    //istruzione se le condizioni precedenti sono false
    console.log(`${x} non è un valore numerico o è un valore negativo`)
}


let y = "pippo"

if (y !== "pippo") {
    //se la condizione è vera
    console.log("si Y è una stringa diversa da pippo")
} else {
    //se la condizione è vera
    console.log("no y è PIPPO")
}

let nome = "massimo"

if( (nome === "marco") ){
    console.log( `${nome} è marco` )
} else {
    console.log( `${nome} non è marco` )
}




let validation = true;
const wordA = "Word A";
let wordB = "Word B";

let nomeTest; // scope globale

if ( validation === true) {
  let wordC = "Word C"; // block scope visibili solo qui!
  let wordB = "Word Custom B"; // block scope visibili solo qui!

    nomeTest = "pippo 2"

  console.log(wordA);  // Word A"
  console.log(wordB);  // Word Custom B
  console.log(wordC);  // Word C
}

console.log(wordA); // Word A
console.log(wordB); // Word B
// console.log(wordC); // non può vedere wordC perchè block scope

console.log( nomeTest )

