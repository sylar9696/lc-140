import { useEffect, useState } from 'react';

function App() {
  //1-impostiamo array vuoto per i personaggi dell'api
  const [characters, setCharacters] = useState([]);

  //2- impostiamo la chiamata al caricamento del componente
  const fetchCharacters = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      // .then(
      //   (res) => {
      //     console.log(  res.json() );
      //     console.log(  res.json().object );

      //     return res.results.json()
      //   }
      // )
      // .then(setCharacters)
      .catch((err) => console.error(err));
  };

  //attiviamo la chiamata api senza dipendenze [], cosi da occuparci solo dei cicli di vita del compoennte
  //eseguito al caricamento del componente
  useEffect(fetchCharacters, []);

  return (
    <>
      <div className="container">
        <div className="row row-cols-4">
          {characters.map((elem) => {
            return (
              <div className="" key={elem.id}>
                <div className="card">
                  <figure>
                    <img src={elem.image} alt={elem.name} />
                  </figure>
                  <h3>{elem.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
