const teamMembers = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

const teamContainer = document.querySelector('.team-container')

function cicloAddMembers(){
  for (let i = 0; i < teamMembers.length; i++) {
    let element = teamMembers[i]
  
    teamContainer.innerHTML += `
    <div class="team-card">
            <div class="card-image">
              <img src='img/${element.image}' alt="${element.name}" />
            </div>
            <div class="card-text">
              <h3>${element.name}</h3>
              <p>${element.role}</p>
            </div>
          </div>
    
    `
  
  }
}

cicloAddMembers()

//recuperiamo i valori degli input del form

const btn = document.getElementById('btn')

btn.addEventListener('click', function (event) {
  event.preventDefault()
  const name = document.getElementById('name').value
  const role = document.getElementById('role').value
  const image = document.getElementById('image').value

  teamMembers.push(
    {
      name,
      role,
      image
    }
  )

  console.log( teamMembers )

  // teamContainer.innerHTML = ''

  //svuoto il container dalle cards esistenti
  teamContainer.innerHTML +=  `
  <div class="team-card">
          <div class="card-image">
            <img src='img/${image}' alt="${name}" />
          </div>
          <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
          </div>
        </div>
  `
  // cicloAddMembers()

})