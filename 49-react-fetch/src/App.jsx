import { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  //creare un array vuoto al cui interno andranno i dati della chiamata fetch
  //array reattivo
  const [todos, setTodos] = useState([]);

  const [pizzas, setPizzas] = useState([]);



  // Fetching dei dati
  // function fetchTodos() {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //   .then(
  //     (res) => res.json()
  //   )
  //   .then(setTodos);
  // }

  function fetchTodos() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data));
  }

  function fetchPizzas() {
    axios
      .get('http://localhost:3000/api/pizzas')
      .then((res) => setPizzas(res.data));
  }



  // Solo al primo rendering
  useEffect(fetchTodos, []);

  useEffect(fetchPizzas, []);


  return (
    <div>
      {/* evvento che attiva la chiata fetch */}
      {/* <button onClick={fetchTodos}>Carica Todos</button> */}
      <ul>
        {/* ciclo che funziona nel momento in cui l'array vuoto si popola con la chiamata fetch */}
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

        {/* pizzas */}
      <ul>
        {/* ciclo che funziona nel momento in cui l'array vuoto si popola con la chiamata fetch */}
        {pizzas.map((elem) => (
          <li key={elem.id}>{elem.name}</li>
        ))}
      </ul>

      
    </div>
  );
}
