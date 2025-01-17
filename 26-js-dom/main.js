// let x = parseInt(prompt("scrivi num 1"))
// let y = parseInt(prompt("scrivi num 2"))

let num1;
let num2;

console.log( num1, num2 )

let btnSomma = document.getElementById("btnSomma")

btnSomma.addEventListener("click", () => {
    num1 = parseInt(document.getElementById("inputNum1").value)
    num2 = parseInt(document.getElementById("inputNum2").value)

    console.log( num1, num2 )

    document.getElementById("risultatoSomma").innerHTML = somma( num1, num2 )
})


function somma(num1, num2) {
    return num1 + num2
}

// document.getElementById("risultatoSomma").innerHTML = somma(x, y)

/*
Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>”, 
il colore del nome deve essere azzurro o rosa a seconda del sesso inserito
*/

let nome = prompt("scrivimim il tuo nome", "Mario")
let sesso = prompt("inserisci il tuo gender, (M/F)", "M")
let salutoHtml = document.getElementById("saluto")

console.log(salutoHtml)

if (sesso.toUpperCase() == "M") {
    // salutoHtml.innerHTML = `ciao ${nome}`
    salutoHtml.innerHTML = `ciao <span class="male">${nome}</span>`
    // salutoHtml.classList.add("male")
    // salutoHtml.style.color = "blue"
} else if (sesso.toUpperCase() == "F") {
    // salutoHtml.innerHTML = `ciao ${nome}`
    salutoHtml.innerHTML = `ciao <span class="female">${nome}</span>`
    // salutoHtml.classList.add("female")
    // salutoHtml.style.color = "pink"
}


/*
n3. al click di un bottone aggiungiamo un testo nel document e lo coloriamo di rosso
*/

let text = document.getElementById("test-text")
let btn = document.getElementById("btn")
let stringa = document.getElementById("textOver")

btn.addEventListener( "click", () => {
    text.innerHTML = `questo è un testo di prova al click del <span class='text-danger'>bottone</span>`
} )

stringa.addEventListener( "mouseover", () => {
    // stringa.style.color = "red"

    if( stringa.classList == "text-danger" ){
        stringa.classList.remove("text-danger")
    } else {
        stringa.classList.add("text-danger")
    }

} )

// stringa.addEventListener( "mouseleave", () => {
//     // stringa.style.color = "black"
//     stringa.classList.add("text-dark")

// } )



/*
n4. cambiare valore attributo
*/

let link = document.getElementById("link")

link.href = "https://www.wikipedia.it"

