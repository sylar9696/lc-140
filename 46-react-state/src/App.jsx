import Hello from './components/Hello'
import Counter from './components/Counter'
import AccordionList from './components/accordions/AccordionList'

function App() {

  return (
    <>
    
      < Hello/>
      < Counter />

      <div className='container'>
        <AccordionList />
      </div>


      {/* < Btn testo={ 'cliccami' } />

      < Btn testo={ 'salutami' } />

      < Btn testo={ 'arrivederci' } /> */}


    </>
  )
}

export default App
