/**
 * 
 * al click su bart creiamo un prompt per chiedere quante volte deve scrivere la frase che passiamo tramite prompt
 */

//selezioan elementi html
let bart = document.getElementById('bart')
// let classroom = document.getElementById('classroom')
let blackboard = document.querySelector('.blackboard')

bart.addEventListener('click', function(){
    let stringaPrompt = prompt('cosa deve scrivere bart?')
    let numeroDIVolte = parseInt(prompt('quante volte deve scrivere?', 10))

    for( let i = 0; i < numeroDIVolte; i++ ){
        blackboard.append(`${stringaPrompt} <br>`)
        // blackboard.innerHTML += `${stringaPrompt} <br>`                   
    }

})