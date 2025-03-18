import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ReviewCard from '../components/ReviewCard';

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
