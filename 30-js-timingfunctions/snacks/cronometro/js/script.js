//Cliccando su un pulsante, viene avviato un cronometro (start). Per fermare il cronometro, bisogna cliccare su un secondo pulsante (stop).

const btnSuccess = document.querySelector('.btn-success')
const btnDanger = document.querySelector('.btn-danger')
const display = document.getElementById('display')

let counter = 0
let timer;

btnSuccess.addEventListener('click', function(){
    console.log( 'start' )

    btnDanger.disabled = false
    btnSuccess.disabled = true

    if( counter !== 0 ){
        counter = 0
    }

    //parte il contatore
    timer = setInterval( function(){
        display.innerHTML = counter++
    }, 1000 )

    

})

btnDanger.addEventListener('click', function(){
    console.log( 'stop' )

    btnDanger.disabled = true
    btnSuccess.disabled = false

    clearInterval(timer)

})