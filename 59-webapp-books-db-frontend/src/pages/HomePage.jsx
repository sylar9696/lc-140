import BookCard from '../components/BookCard';
// import ReviewCard from "../components/ReviewCard";
import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../contexts/globalContext';

export default function HomePage() {
  const [books, setBooks] = useState([]);

  const { setIsLoading } = useContext(GlobalContext)

  //funzione fetch per i libri
  const fetchBooks = () => {
    console.log('Fetching books...');

    setIsLoading(true)

    axios 
      .get('http://localhost:3000/books')
      .then((res) => {
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then( () => setIsLoading(false) );
  };

  const renderBooks = () => {
    return books.map((book) => {
      return (
        <div className="col" key={book.id}>
          <BookCard book={book} />
        </div>
      );
    });
  };

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
