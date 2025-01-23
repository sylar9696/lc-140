let nome = "francesco"
let peso = 20
let email = "email@email.it"

let chiaveDinamica = 'coloreOcchi'

let studente = {
    nome,
    peso,
    email,
    [chiaveDinamica]: "verdi"
}

console.log(studente)

const student = {
    name: 'Paolo',
    age: 30,
    email2: 'paolo@email.it'
};

//senza destructuring
const name = student.name
const email2 = student.email

//destructuring
// const { name, email2 } = student;
// console.log(name, email);
//Otteniamo: Paolo, paolo@email.it

const array1 = [2,30,20]

const array2 = [60,310,210]

const arrayFull = [ ...array1,"a", "G", ...array2 ]

console.log( arrayFull )


const obj = {name: 'palla', peso: 50};
const copyObj = {...obj, colore: 'blue'};
console.log(copyObj); 
//{name: "palla", peso: 50, colore: "blue"}

copyObj.name = "Cubo"

console.log( copyObj )


