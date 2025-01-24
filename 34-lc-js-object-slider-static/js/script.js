// # Fase di preparazione
//  Preparo i dati su cui basare il carosello
const pics = [
  {
    image: 'img/01.jpg',
    title: 'Svezia',
    text: 'Scandinavia\'s blend of nature and innovation.',
  }, {
    image: 'img/02.jpg',
    title: 'Norvegia',
    text: 'Fjords, mountains, and coastal charm in Nordic splendor.',
  }, {
    image: 'img/03.jpg',
    title: 'Alaska',
    text: 'Untamed wilderness and rugged beauty in the Last Frontier.',
  }, {
    image: 'img/04.jpg',
    title: 'Gran Canyon',
    text: 'Nature\'s masterpiece, a colorful tapestry of cliffs.',
  }, {
    image: 'img/05.jpg',
    title: "Skyrim",
    text: 'Epic Nordic fantasy with dragons and ancient magic.',
  }
];

//sostituisco con il template literal le cards nel carosello
const gallery = document.querySelector('.gallery')

//seleziono l'area thumbnails
const thumbnails = document.getElementById('thumbnails')



for (let i = 0; i < pics.length; i++) {
  let element = pics[i];

  const { title, text, image } = element

  gallery.innerHTML +=
  `
  <figure>
    <figcaption>
      <h2>${title}</h2>
      <h3>${text}</h3>
    </figcaption>
    <img alt='${title}' src='${image}'>
  </figure>
  `

  thumbnails.innerHTML += 
  `
  <img src='${image}' alt="${title}">
  `
}

let currentIndexImage = 0
const images = document.querySelectorAll('#carousel figure')
const thumbs = document.querySelectorAll('#thumbnails img')


//inserisco l'active alla prima figure generate dal ciclo
console.log( images, thumbs )

//seleziono la prima figure della nodelist images 
images[currentIndexImage].classList.add('active')
thumbs[currentIndexImage].classList.add('active')


//seleziono prev e next nel DOM
const prev = document.getElementById('prev')
const next = document.getElementById('next')


//funzione per next
next.addEventListener( 'click', function(){
  // images[currentIndexImage].classList.remove('active')

  // //cambio l'indice per poter selezionare il figure successivo
  // currentIndexImage++

  // //aggiungo la classe active all'immagine successiva
  // images[currentIndexImage].classList.add('active')

  // let nextIndex = currentIndexImage + 1
  let nextIndex = (currentIndexImage === images.length - 1) ? 0 : currentIndexImage + 1

  setNextImages(nextIndex)

} )


//funzione per prev
prev.addEventListener( 'click', function(){
  // images[currentIndexImage].classList.remove('active')

  // //cambio l'indice per poter selezionare il figure successivo
  // currentIndexImage--

  // //aggiungo la classe active all'immagine successiva
  // images[currentIndexImage].classList.add('active')

  // let nextIndex = currentIndexImage - 1
  let nextIndex = (currentIndexImage === 0) ? images.length - 1 : currentIndexImage - 1


  setNextImages(nextIndex)
 
} )

function setNextImages(nextIndex){
  images[currentIndexImage].classList.remove('active')
  thumbs[currentIndexImage].classList.remove('active')

  //cambio l'indice per poter selezionare il figure successivo
  currentIndexImage = nextIndex

  //aggiungo la classe active all'immagine successiva
  images[currentIndexImage].classList.add('active')
  thumbs[currentIndexImage].classList.add('active')
}


//rendo cliccabili tutte le thumbs del carosello
for( let i = 0; i < thumbs.length; i++ ){
  //prendo la singola thumb => <img src="img/01.jpg" alt="Svezia">
  let element = thumbs[i]

  element.addEventListener('click', function(){
    setNextImages( i )
  })
}

//Autoplay

let intervalId = setInterval(goToNextAutoplay, 2000)

function goToNextAutoplay (){
  let nextIndex = (currentIndexImage === images.length - 1) ? 0 : currentIndexImage + 1
  setNextImages(nextIndex)
}

//blocca l'autoplay
gallery.addEventListener('mouseover', function(){
  clearInterval( intervalId )
})

thumbnails.addEventListener('mouseover', function(){
  clearInterval( intervalId )
})


//riprendi l'autoplay
gallery.addEventListener('mouseout', function(){
  intervalId = setInterval(goToNextAutoplay, 2000)
})

thumbnails.addEventListener('mouseout', function(){
  intervalId = setInterval(goToNextAutoplay, 2000)
})





