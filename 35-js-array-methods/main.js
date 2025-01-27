const names = ['Edoardo', 'Simone', 'Francesco'];

names.forEach( ( element, index, array ) => {
    //stampiamo tutti i nomi
    
    console.log(`la posizione è ${index} della persona:   ${element} `)
    console.log( array )
} )


//estrai solo gli studenti del primo anno
const students = [
	{id: 1, name: 'Marco', year: 1},
	{id: 1, name: 'Silvia', year: 2},
	{id: 1, name: 'Ginevra', year: 1}
];

students.forEach( ( element ) => {
    //condizione
    ( element.year === 1 ) ? console.log( element ) : null

    // if(element.year === 1){
    //     console.log( element )
    // } else {
    //     null
    // }

} )

//con il ciclo for
for( let i = 0; i < students.length; i++ ){
    ( students[i].year === 1 ) ? console.log( students[i] ) : null 
}

//con filter
const StudentFIrstYear = students.filter( ( element ) => ( element.year === 1 ) ? console.log( element ) : null
)


const students2 = [
	{ firstName: 'Mario', lastName: 'Rossi' },
	{ firstName: 'Luigi', lastName: 'Verdi' },
	{ firstName: 'Margherita', lastName: 'Bianchi' }
];

// Raccogliamo in un array i nomi di tutti gli studenti
const studentsName = students2.map( (element) => {
    return element.firstName
} )

console.log( studentsName )


//find
const people = [
	{ id: 4, name: 'Paolo', age: 32 },
	{ id: 3, name: 'Clelia', age: 34 },
];

// Se vogliamo estrarre solo l'oggeto con nome marco
const findMarco = people.find( (element) => element.name === 'marco' )
console.log( findMarco )






const students3 = [
    {
      id: 1,
      name: 'Luca Bianchi',
      age: 32,
      class: '3C',
      vote: 9
    },
    {
      id: 2,
      name: 'Andrea Rossi',
      age: 18,
      class: '4A',
      vote: 7
    },
    {
      id: 3,
      name: 'Giovanni Verdi',
      age: 33,
      class: '5B',
      vote: 7
    },
    {
      id: 4,
      name: 'Francesco Esposito',
      age: 25,
      class: '5B',
      vote: 7
    },
    {
      id: 5,
      name: 'Matteo Ferri',
      age: 57,
      class: '5B',
      vote: 10
    },
  ];

  //Stampa in console i nomi di tutti gli studenti
  //foreach

  students3.forEach( (element) => document.querySelector('ul').innerHTML += `<li>${element.name}</li>` )


  //Crea un array con la lista  di tutti i nomi degli studenti
  //map

  const students3Name = students3.map( (element) => {
    return { name: element.name, age: element.age }
  } )
  console.log( students3Name )

  //Crea un array che contenga solo gli studenti dai 30 anni in più
  //filter

  const students30 = students3.filter( (element) => element.age > 30 )

  console.log( students30 )

  //Trova lo studente con id 4
  //find

  const studentsId4 = students3.find( ( element ) => element.id === 4 )
  
  studentsId4.class = "6B"
  
  console.log( studentsId4 )



  const cars = [
    {
      marca: 'Alfa Romeo',
      modello: 'Giulietta',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Doblò',
      alimentazione: 'diesel',
    },
    {
      marca: 'FIAT',
      modello: 'Panda',
      alimentazione: 'benzina',
    },
    {
      marca: 'FIAT',
      modello: 'Fiorino',
      alimentazione: 'metano',
    },
    {
      marca: 'Ford',
      modello: 'Fiesta',
      alimentazione: 'diesel',
    },
    {
      marca: 'Ford',
      modello: 'Ka',
      alimentazione: 'gpl',
    },
    {
      marca: 'Smart',
      modello: 'Smart',
      alimentazione: 'elettrico',
    },
  ];
  
/*
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/



const benzina = cars.filter( (element) => element.alimentazione === "benzina" )
const diesel = cars.filter( (element) => element.alimentazione === "diesel" )
const altreAlimentazioni = cars.filter( (element) => element.alimentazione !== "benzina" && element.alimentazione !== "diesel" )

const listaBenzina = document.getElementById('benzina')
const listaDiesel = document.getElementById('diesel')
const listaAltro = document.getElementById('altro')


// benzina.forEach( ( element ) => listaBenzina.innerHTML += `<li>${ element.marca}, ${element.modello}, ${element.alimentazione }</li>` )

benzina.forEach( ( element ) => {

    //destructuring
    let { marca, modello, alimentazione } = element

    listaBenzina.innerHTML += `<li>${ marca}, ${modello}, ${alimentazione }</li>`

})

diesel.forEach( ( element ) => {

    //destructuring
    let { marca, modello, alimentazione } = element

    listaDiesel.innerHTML += `<li>${ marca}, ${modello}, ${alimentazione }</li>`

})

altreAlimentazioni.forEach( ( element ) => {

    //destructuring
    let { marca, modello, alimentazione } = element

    listaAltro.innerHTML += `<li>${ marca}, ${modello}, ${alimentazione }</li>`

})



//A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

const names2 = ['pippo', 'PLUTO', 'Paperino'];

const names2Capitalized = names2.map( (element) => {
    //tutto minuscolo
    // let stringa = element.toLowerCase()
    // stringa = stringa[0].toUpperCase()
    // return stringa

    let firstLetter = element[0].toUpperCase()
    let otherLetters = element.substring(1).toLowerCase()

    return firstLetter + otherLetters
} )

console.log( names2Capitalized )



const people2 = [
    {
      firstName: 'Marco',
      lastName: 'Lanci',
      age: 35,
    },
    {
      firstName: 'Antonio',
      lastName: 'Nicodemo',
      age: 21,
    },
    {
      firstName: 'Luigi',
      lastName: 'Versi',
      age: 14,
    },
    {
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 15,
    },
  ];

  //Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

  const puoGuidare = people2.map( (element) => {
    if( element.age >= 18  ){
        return `${element.firstName} - ${element.lastName} può guidare`
    } else {
        return `${element.firstName} - ${element.lastName} NON può guidare`
    }
  } )

  console.log( puoGuidare )



  