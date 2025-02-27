import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  //creare un array vuoto al cui interno andranno i dati della chiamata fetch
  //array reattivo
  // const [todos, setTodos] = useState([]);

  const apiUrl = import.meta.env.VITE_BASE_API_URL;

  const [pizzas, setPizzas] = useState([]);

  const initialFormData = {
    name: '',
    image: '',
    ingredients: [],
  };

  const [formData, setFormData] = useState(initialFormData);

  // Fetching dei dati
  // function fetchTodos() {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(
  //     (res) => res.json()
  //   )
  //   .then(setTodos);
  // }

  // function fetchTodos() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => setTodos(res.data));
  // }

  function fetchPizzas() {
    axios.get(apiUrl).then((res) => setPizzas(res.data));
  }

  const handleDelete = (idSingolaPizza) => {

    fetch( `${apiUrl}/${idSingolaPizza}`, {
      method: 'DELETE'
    } ).then(
      fetchPizzas()
    )

    // axios.delete(`${apiUrl}/${idSingolaPizza}`).then(
    //   fetchPizzas()
    //   //setPizzas(pizzas.filter( elem => elem.id !== idSingolaPizza ))
    // );
  };

  const handleField = (event) => {
    //e.target si occupa di recuperare in modo dinamico il campo che stiamo compilando del form
    const { name, value } = event.target;
    console.log(event.target); //<input type="text" name="name">
    console.log(event);
    console.log('attributo del input: ' + name);
    console.log('value del input: ' + value);

    //condizione per tramutare la stringa in array
    if ([name] == 'ingredients') {
      setFormData({
        //...formData è un operatore di spread che mi permette di copiare l'oggetto formData
        ...formData,
        [name]: value.split(',').map((elem) => elem.trim()),
      });
    } else {
      setFormData({
        //...formData è un operatore di spread che mi permette di copiare l'oggetto formData
        ...formData,
        [name]: value,
      });
    }

    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(apiUrl, formData)
      .then(
        fetchPizzas()
        //svuotiamo l'array formData
      )
      .catch((err) => console.log(err));

    setFormData(initialFormData);
  };

  // Solo al primo rendering
  // useEffect(fetchTodos, []);

  useEffect(fetchPizzas, []);

  return (
    <div>
      {/* evvento che attiva la chiata fetch */}
      {/* <button onClick={fetchTodos}>Carica Todos</button> */}
      <ul>
        {/* ciclo che funziona nel momento in cui l'array vuoto si popola con la chiamata fetch */}
        {/* {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))} */}
      </ul>

      {/* pizzas */}
      <div className="container">
        <ul className="d-flex flex-column gap-3">
          {/* ciclo che funziona nel momento in cui l'array vuoto si popola con la chiamata fetch */}
          {pizzas.map((elem) => (
            <li key={elem.id} className="d-flex justify-content-between">
              <h4>{elem.name}</h4>
              <ul>
                {elem.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(elem.id)}
              >
                x
              </button>
            </li>
          ))}
        </ul>

        {/* form */}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleField}
              value={formData.name}
            />

            <label htmlFor="">image</label>
            <input
              type="text"
              name="image"
              onChange={handleField}
              value={formData.image}
            />

            <label htmlFor="">ingredients</label>
            <input
              type="text"
              name="ingredients"
              onChange={handleField}
              value={formData.ingredients}
            />

            <button className="btn btn-primary" type="submit">
              Invio
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/*

chiamta api delete
evento sul bottone: onClick

funzione di chiamata api all'onCLick

*/
