1. Instalare react: `npm create vite@latest . -- --template react`
2. Inizializzare il progetto ripulendo le cartelle
   eliminare i file foto all'interno della cartella - 📁public e assets - eliminare file 📃app.css - ripulire file 📃index.css e app.jsx
3. Installiamo Bootstrap (opzionale): `npm i bootstrap`

   - Modificare il file 📃main.jsx:

   ```jsx
   import { StrictMode } from 'react'
   import { createRoot } from 'react-dom/client'
   //bootstrap css
   import 'bootstrap/dist/css/bootstrap.min.css' 👈

   import './index.css'
   import App from './App.jsx'

   createRoot(document.getElementById('root')).render(
   <StrictMode>
       <App />
   </StrictMode>,
   )

   ```

4. Installare React router: `npm i react-router-dom`
5. Creare le cartelle di lavoro in src:
   -📁components
   -📁pages
   -📁layouts
6. Gestire il layouts del progetto, creando un file 📃DefaultLayout.jsx nella cartella 📁layouts gestendo il componente Outlet di react dom per inserire il contenuto dinamico al cambio pagina

   ```jsx
   import Header from '../components/Header';
   import { Outlet } from 'react-router-dom';

   export default function DefaultLayout() {
     return (
       <>
         <Header />
         <main className="container">
           <Outlet />
         </main>
       </>
     );
   }
   ```

   6.1 Creiamo il componente 📃Header.jsx nella cartella 📁components

   ```jsx
   import { NavLink } from 'react-router-dom';

   export default function Header() {
     return (
       <header>
         <nav className="navbar navbar-expand navbar-light bg-light">
           <div className="nav navbar-nav">
             <NavLink className="nav-item nav-link" to="/">
               Home
             </NavLink>
           </div>
         </nav>
       </header>
     );
   }
   ```

   6.2 Creare le pagine del progetto nella cartella 📁pages - HomePage.jsx - BookPage.jsx
   6.3 Solo Dopo modifico 📃app.jsx con Il routing

   ```jsx
   import DefaultLayout from './layouts/DefaultLayout';
   import { Routes, Route, BrowserRouter } from 'react-router-dom';
   import HomePage from './pages/HomePage';
   import BookPage from './pages/BookPage';

   function App() {
     return (
       <>
         <BrowserRouter>
           <Routes>
             <Route Component={DefaultLayout}>
               {/* qui vanno le pagine */}
               <Route path="/" Component={HomePage} />
               <Route path="/books/:id" Component={BookPage} />
             </Route>
           </Routes>
         </BrowserRouter>
       </>
     );
   }

   export default App;
   ```

7. Creiamo il file 📃.env e .emv-example nella cartella progettoe poi lo aggiungiamo al file 📃.gitignore:

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

.env 👈

```

8. Creare i componenti per le card: 📃BookCard.jsx e 📃ReviewCard.jsx in 📁components

```jsx
//BookCard
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  const { id, title, author, abstract, image } = book;

  return (
    <>
      <div className="card mb-4">
        <img src={image} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span>{author}</span>
          <p>{abstract}</p>
          <Link to={`books/${id}`}>Read More</Link>
        </div>
      </div>
    </>
  );
}
```

```jsx
//ReviewCard
export default function ReviewCard({ review }) {
  const { id, name, vote, text } = review;

  return (
    <>
      <div key={id} className="card mb-4">
        <div className="card-body">
          <h5>{name}</h5>
          <p className="card-text">{text}</p>
          <span>Voto: {vote}</span>
        </div>
      </div>
    </>
  );
}
```

9. Andare nel Backend e installare i Cors: `npm i cors`.
   Aggiornare il file 📃app.js e file 📃.env

```javascript
//pacchetti da importare
import express from 'express';

//impostiamo express e la porta del server
const app = express();
import cors from 'cors';
const port = process.env.SERVER_PORT || 3000;

import bookRouter from './routes/bookRouter.js';
import imagePathMiddleware from './middlewares/imagePath.js';

//middleware cors 👈
app.use(
  cors({
    origin: process.env.FRONTEND_APP,
  })
);

//middleware per gestire asset statici
app.use(express.static('public'));

//middleware per gestire le informazioni del body
app.use(express.json());

//middleware per gestione delle immagini
app.use(imagePathMiddleware);

//rotta di test
app.get('/', (req, res) => {
  res.send('Server Book tutto a posto!');
});

//Router libri
app.use('/books', bookRouter);

//attivazione del server
app.listen(port, () => {
  console.log(`Server Books in funzione sulla porta: ${port}`);
});
```

.env

```
SERVER_PORT = 3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=books_db

FRONTEND_APP=http://localhost:5173 👈
```

10. Eseguiamo le chiamate Frontend al backend con axios
    10.1 Installiamo axios nel frontend: `npm i axios`
    10.2 Aggiorniamo la pagina per la chiamata chiamata INDEX

```jsx
//pages/HomePage
import BookCard from '../components/BookCard';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [books, setBooks] = useState([]);

  //funzione fetch per i libri
  const fetchBooks = () => {
    console.log('Fetching books...');

    axios
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //funzione per rendering delle card dei libri nell'html
  const renderBooks = () => {
    return books.map((book) => {
      return (
        <div className="col" key={book.id}>
          <BookCard book={book} />
        </div>
      );
    });
  };

  //Invocazione chiamata al caricamento del componente in pagina
  useEffect(fetchBooks, []);

  return (
    <>
      <h1 className="text-primary">Bool Books</h1>
      <h2>Qui andranno tutti i libri</h2>
      <div className="row row-cols-3">
        {/* <BookCard/> */}
        {renderBooks()}

        {/* {books.map((book) => {
          return (
            <div className="col" key={book.id}>
              <BookCard book={book} />
            </div>
          );
        })} */}
      </div>
    </>
  );
}
```

10.3 Aggiorniamo la pagina per la chiamata chiamata SHOW

```jsx
//pages/BookPage
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//uso del compoennte ReviewCard
import ReviewCard from '../components/ReviewCard';

export default function BookPage() {
  //Estrazione dinformazione dall'url del sito
  //http:localhost:3000/books/2
  const { id } = useParams(); //2

  //Crreazione varibaile reattiva
  const [book, setBook] = useState({});

  //Chiamata fetch Show
  const fetchBook = () => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => console.log(error));
  };

  //Invocazione chiamata al caricamento del componente in pagina
  useEffect(fetchBook, [id]);

  //Rendering html delle reviews
  const renderReviews = () => {
    return book.reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  return (
    <>
      <h1>{book?.title}</h1>
      <img src={book?.image} alt={book?.title} />
      {/* qui andrà la pagina di dettaglio del prodotto */}

      <section>
        <h4>Our community reviews</h4>
        {renderReviews()}
      </section>
    </>
  );
}
```

11. gestiamo il form di review per il metodo del controller backend storeReviews.
    Creiamo un componente 📃ReviewForm.jsx nella cartella 📁components

```jsx
import axios from 'axios';
import { useState } from 'react';

export default function ReviewForm({ book_id, reloadReviews }) {
  //endpoint
  const endpoint = `http://localhost:3000/books/${book_id}/reviews`;

  const initialValue = {
    name: 'Anonimo',
    text: 'lorem ipsum frontend',
    vote: 4,
  };

  const [formData, setFormData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(endpoint, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        setFormData(initialValue);
        //ricaricare le recensioni da zero
        reloadReviews();
      })
      .catch((err) => console.log(err));
  };

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="card">
        <h5>Add reviews</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={setFieldValue}
              />
            </div>
            <div className="form-group">
              <label>text</label>
              <textarea
                name="text"
                className="form-control"
                value={formData.text}
                onChange={setFieldValue}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Vote</label>
              <input
                type="number"
                min={1}
                max={5}
                name="vote"
                className="form-control"
                value={formData.vote}
                onChange={setFieldValue}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                Crea Recensione
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
```

11.2 Inseriamo il componente nella pagina singola del libro da recensire perciò in 📃BookPage.jsx

```jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

import ReviewForm from '../components/ReviewForm'; 👈

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState({});

  const fetchBook = () => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(fetchBook, [id]);

  const renderReviews = () => { 👈
    return book.reviews?.map((review) => {
      return <ReviewCard key={review.id} review={review} />;
    });
  };

  return (
    <>
      <h1>{book?.title}</h1>
      <img src={book?.image} alt={book?.title} />
      {/* qui andrà la pagina di dettaglio del prodotto */}

      <section>
        <h4>Our community reviews</h4>
        {renderReviews()}
      </section>

      {/* //form review */}
      <section>
        {book?.id && <ReviewForm book_id={book.id} reloadReviews={fetchBook} />} 👈
      </section>
    </>
  );
}
```

12. creiamo la pagina per la creazione del nuovo libro: 📁pages/CreateBookPage.jsx
    12.1 registriamo la rotta in 📃app.jsx

```jsx
import DefaultLayout from './layouts/DefaultLayout'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import BookPage from './pages/BookPage'
import CreateBookPage from './pages/CreateBookPage' 👈

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={ DefaultLayout }>
            {/* qui vanno le pagine */}
            <Route path='/' Component={HomePage}/>
            <Route path='/books/:id' Component={BookPage}/>
            <Route path='/books/create' Component={CreateBookPage}/> 👈
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

```

13.2 Aggiungiamo la rotta al componente 📃Header.jsx

```jsx
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/books/create">
            {' '}
            👈 Create Book
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
```

13.3 Prepariamo il form per il file 📃CreateBookPage.jsx

```jsx
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateBookPage() {
  const initialData = {
    title: '',
    author: '',
    image: null,
    abstract: '',
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialData);

  const setFieldValue = (e) => {
    const { name, value } = e.target;

    if (name === 'image') {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(() => {
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Qui andrà il form</h1>

      <section id="book-form">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Title:</label>
            <input
              className="form-control"
              name="title"
              type="text"
              value={formData.title}
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Author:</label>
            <input
              className="form-control"
              name="author"
              type="text"
              value={formData.author}
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Image:</label>
            <input
              className="form-control"
              name="image"
              type="file"
              onChange={setFieldValue}
              required
            />
          </div>
          <div className="mb-4">
            <label>Abstract:</label>
            <textarea
              value={formData.abstract}
              className="form-control"
              name="abstract"
              onChange={setFieldValue}
              required
            ></textarea>
          </div>
          <div className="border-top mb-3 pt-3 d-flex justify-content-between">
            <Link className="btn btn-secondary" to="/">
              Back
            </Link>
            <button className="btn btn-success" type="submit">
              Add Book
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
```
