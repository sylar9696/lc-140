//Scrivere un programma che faccia il conto alla rovescia per 10 secondi e poi auguri buon anno.

//variabile counter a 10
//counter--
//utilizzare il setInterval
//controllare se il counter è arrivato a 0 e poi auguri buon anno

let counter = 10
const divHtml = document.getElementById('display')

const buonAnno = setInterval( capodanno, 1000 )

// divHtml.innerHTML = counter--

function capodanno() {
    console.log('ciao')

    if( counter === 0 ){
        console.log( "ho raggiunto lo zero" )
        clearInterval( buonAnno )
        divHtml.innerHTML = "Buon Anno!!"
    } else {
        console.log( "sto eseguendo il decremento" )

        divHtml.innerHTML = counter--
    }

    return counter
}