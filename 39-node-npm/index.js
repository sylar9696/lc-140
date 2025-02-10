import axios from 'axios';

axios.get('https://rickandmortyapi.com/api/character')
    .then(  (response) => {
        console.log(response.data);
    })

