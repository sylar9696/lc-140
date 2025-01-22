const studente = {
    altezza: 175,
    peso: 70,
    occhi: ['marroni', 'verdi'],
    classe: 'Delfini'
}

for (const x in studente) {
    //estrazione dei valori di tutte le chiavi dell'oggetto
    console.log(studente[x])

    console.log(x)
}

//console.log( studente.altezza )

//aggiunta chiave extra all'oggetto
// studente.giocoPreferito = 'pallina da tennis'
studente['gioco-preferito'] = 'pallina da tennis'

//console.log( studente )

const classe140 = [
    {
        altezza: 160,
        nome: "vincenzo"
    },
    {
        altezza: 170,
        nome: "samuele"

    }
]

//console.log( classe140[1].nome )

const oggetto = { 
    nome: "Luca",
    età: 25,
    attivo: true,
    indirizzo: { via: "Via Verdi", città: "Roma" }, interessi: ["pittura", "fotografia", "viaggi"], saluta: function () { return "Ciao, come stai?"; }, numeroFortunato: 7, isOnline: false, altezza: 1.82, preferiti: { cibo: "Pasta", colore: "Verde" } };



    const lista = document.getElementById('lista')

    oggetto.preferiti.cibo

for( let y in oggetto ){
    lista.innerHTML += `<li>${y}: ${ oggetto[y] }</li>`



}