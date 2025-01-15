//dichiarazione della funzione

let valoreUtente1 = parseInt( prompt( "dammi il primo numero" ) )
let valoreUtente2 = parseInt( prompt( "dammi il secondo numero" ) )


function sommaNumeri(num1, num2, stringaCustom) {
    console.log( stringaCustom + ": " + (num1 + num2));
}

sommaNumeri( valoreUtente1, valoreUtente2, "Ciao ragazzi vi è piaciuta la mia funzione ? la somma è: " )
sommaNumeri( valoreUtente1, valoreUtente2, "Ciao classe 140, la somma è: " )



//invocazione della funzione
// sommaNumeri( 7, 8 )

// console.log( sommaNumeri(7, 8) ) // 15
// alert( sommaNumeri(7, 8) )




// function sommaNumeri(num1, num2) {
//     // let somma = num1 + num2 
//     // return somma

//     return num1 + num2
// }
