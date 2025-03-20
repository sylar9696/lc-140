import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

import ReviewForm from '../components/ReviewForm';

import GlobalContext from '../contexts/globalContext';

import StarRating from '../components/StarRating';

export default function BookPage() {
  const { id } = useParams();

  const [book, setBook] = useState({});

  const { setIsLoading } = useContext(GlobalContext);

  const fetchBook = () => {
    setIsLoading(true);

    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((error) => console.log(error))
      .then(() => setIsLoading(false));
  };

  useEffect(fetchBook, [id]);

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
        {/* media voti */}
        {book?.reviews && (
          <h5>
            Media: <StarRating vote={book.average_vote} /> {book.average_vote} / 5
          </h5>
        )}

        {renderReviews()}
      </section>

      {/* //form review */}
      <section>
        {book?.id && <ReviewForm book_id={book.id} reloadReviews={fetchBook} />}
      </section>
    </>
  );
}
