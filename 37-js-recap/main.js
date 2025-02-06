//setInterval a ogni tot di tempo corrisponde una azione costantemente attivata

//setTimeout   dopo tot tempo viene eseguita una azione 

const intervallo = setInterval( ()=> {
    console.log( 'ciao' )
    // clearInterval( intervallo )

}, 1000)

clearInterval( intervallo )


setTimeout( () => {
    console.log( 'Buongiorno' )
}, 2000)