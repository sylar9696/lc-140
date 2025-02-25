import { useState, useEffect } from 'react';

const initialTasks = [
  'Fare la spesa',
  'Pulire casa',
  'Fare il bucato'
];

function App() {
  const [firstName, setFirstName] = useState('Mario');

  //todolist
  //l'array iniziale reattivo
  const [tasks, setTasks] = useState(initialTasks);
  //Nuovo task da aggiungere all'array iniziale
  const [newTask, setNewTask] = useState('');
  //filtro di ricerca della todo list
  const [search, setSearch] = useState('')
  const [filteredTasks, setFilteredTasks] = useState( tasks )

  const handleChange = (e) => {
    console.log(e);
    console.log(e.target);
    setFirstName(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = newTask.trim();
    setTasks([...tasks, task]);
    setNewTask('');
  };

  const removeTask = (indiceElementoArray) => {
    console.log(indiceElementoArray);
    const arrayClone = tasks.filter(
      (_, index) => index !== indiceElementoArray
    );
    return setTasks(arrayClone);
  };

  useEffect(() => {
    console.log('è stato attivato useEffect')
    setFilteredTasks(
      tasks.filter( element => {
        return element.toLowerCase().includes( search.toLowerCase() )
      })
    )
  }, [ search, tasks ])

  return (
    <>
      <input type="text" value={firstName} onChange={handleChange} />

      <p> Il tuo nome è: {firstName} </p>

      <div className="container mt-5 w-50">
        <h1>tasks</h1>

        <div>
          <input 
            type="text"
            className='form-control'
            placeholder='Cerca task'
            value={search}
            onChange={ (e) => setSearch(e.target.value) }
          />
        </div>


        <ul className="list-group">
          {filteredTasks.map((element, index) => {
            return (
              <li key={index} className="list-group-item">
                {element}

                <button
                  className="btn btn-danger btn-sm float-end"
                  onClick={() => removeTask(index)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>

        {/* //form per il nuovo items  */}
        <form onSubmit={addTask}>
          <input
            type="text"
            className="form-control"
            placeholder="Cosa devi fare?"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <button className="btn btn-primary mt-3">Aggiungi</button>
        </form>
      </div>
    </>
  );
}

export default App;
