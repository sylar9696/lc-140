import { useEffect, useState } from 'react';

function App() {
  //1-impostiamo array vuoto per i personaggi dell'api
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const endpoint = 'https://rickandmortyapi.com/api/character?page='

  //2- impostiamo la chiamata al caricamento del componente
  const fetchCharacters = ( currentPage ) => {

    //https://rickandmortyapi.com/api/character?page=1
    fetch(endpoint + currentPage)
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
  useEffect( () => fetchCharacters( page ), [ page ]);

  const goPrev = () => {
    setPage( page - 1 );
  }

  const goNext = () => {
    setPage( page + 1 );
  }

  return (
    <>
      <div className="container">

        {/* paginazione */}
        <div>
          <button onClick={goPrev} disabled={ ( page === 1 ) ? true : false } >Prev</button>
          <button onClick={goNext} disabled={ ( page === 42 ) ? true : false } >Next</button>
        </div>

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
