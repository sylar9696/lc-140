function myFunction(){
	return console.log('ciao ragazzi');
}

//scriviamola in arrow function

//versione 1
let myFunction = () => {
    return console.log('ciao ragazzi');
}

//versione 2 
let myFunction = () => console.log('ciao ragazzi');

//arrow function somma

// let somma = (num1, num2) => num1 + num2

// let somma = (num1, num2) => {
//     if( num1 > num2) {
//         num1 + num2
//     } else {
//         num2 + num1
//     }
// }


let somma = (num1, num2) => ( num1 > num2 ) ? num1 + num2 : num2 + num1 

somma( 10, 20 ) // 30