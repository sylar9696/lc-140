import { useState } from "react"

const initialTasks = ['Fare la spesa', 'Pulire casa', 'Fare il bucato'];

function App() {

  const [firstName, setFirstName] = useState('Mario')


  //todolist
  //l'array iniziale reattivo
  const [tasks, setTasks] = useState( initialTasks ) 
  //Nuovo task da aggiungere all'array iniziale
  const [newTask, setNewTask] = useState('')

  const handleChange = (e) => {
    console.log( e )
    console.log( e.target )
    setFirstName( e.target.value )
  }

  const addTask = (e) => {
    e.preventDefault()
    const task = newTask.trim()
    setTasks( [...tasks, task] )
    setNewTask('')
   }

  const removeTask = (indiceElementoArray) => {
    console.log( indiceElementoArray )
    const arrayClone = tasks.filter( ( _, index ) => index !== indiceElementoArray )
    return setTasks( arrayClone )

  }

  return (
    <>
      <input
        type="text"
        value={firstName}
        onChange={ handleChange  }  
      />

      <p> Il tuo nome è: { firstName } </p>


      <div className="container mt-5 w-50">
        <h1>tasks</h1>
        <ul className="list-group">
          {
            tasks.map( ( element, index ) => {
              return(
                <li key={index} className="list-group-item">
                  { element }

                <button className="btn btn-danger btn-sm float-end" onClick={ () => removeTask(index) }>
                  X
                </button>

                </li>
              )
            } )
          }
        </ul>



        {/* //form per il nuovo items  */}
        <form onSubmit={ addTask }>
          <input 
            type="text"
            className="form-control"
            placeholder="Cosa devi fare?"
            value={ newTask }
            onChange={ (e) => setNewTask( e.target.value ) }
            />

          <button className="btn btn-primary mt-3">Aggiungi</button>

        </form>


      </div>

    </>
  )
}

export default App
