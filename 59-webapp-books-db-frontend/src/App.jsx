import DefaultLayout from './layouts/DefaultLayout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import CreateBookPage from './pages/CreateBookPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={ DefaultLayout }>
            {/* qui vanno le pagine */}
            <Route path='/' Component={HomePage}/>
            <Route path='/books/:id' Component={BookPage}/>
            <Route path='/books/create' Component={CreateBookPage}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
