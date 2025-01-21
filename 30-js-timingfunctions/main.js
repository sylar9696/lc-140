console.log( 'sono scritto prima della funzione' )

//esegue la funzione dopo 3 secondi
setTimeout(myFunction, 3000);
 
function myFunction() {
  console.log('Hello');
}

//funzione attivata ogni 1 secondo
const clock = setInterval(myFunction2, 1000);
let counter = 0

//al click bloccherò la ripetizione infinita
const stopInterval = document.getElementById('stopInterval')
stopInterval.addEventListener('click', function() {
    clearInterval(clock)
})
 
function myFunction2() {
   console.log(counter++);
}

console.log( 'sono scritto dopo la funzione' )