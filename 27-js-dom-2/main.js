const list = document.querySelector(".list");
console.log( list )

const lists = document.getElementsByClassName('list')
console.log( lists )

const names = ['Qui', 'Quo', 'Qua'];

let items = '';

// for (let i = 0; i < names.length; i++) {
//    items += `<li>${names[i]}</li>`;
// }

for (let i = 0; i < names.length; i++) {
//creare l'elemento html da zero
   const li = document.createElement('li');
   console.log( li )
   //ci permette di creare elemento + informazione al suo interno
   //<li>Qui</li>
   li.append(names[i]);
   //ci permette di inserire nella lista del DOM <ul></ul> li elementi <li> creati</li>
   list.appendChild(li);
}

// list.innerHTML = items;


for( let k = 0; k < lists.length; k++ ){
    console.log( lists[k] )
}





let elementDiv = document.getElementById( 'target' )

for(let i=0; i<= 10; i++){
    // elementDiv.innerHTML += i
    elementDiv.append(i)
}



let inputName = document.getElementById( 'name' )
let inputLastName = document.getElementById( 'cognome' )
let btn = document.getElementById( 'btnSaluto' )

let rispostaHtml = document.getElementById('rispostaSaluto')

btn.addEventListener( 'click', function() {
    inputName = inputName.value
    inputLastName = inputLastName.value

    rispostaHtml.innerHTML = `Ciao da ${inputName} ${inputLastName}`
} )