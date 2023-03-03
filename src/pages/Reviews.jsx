import { useState, useEffect } from 'react';
import { getMovieReview } from 'MovieAPI';
import { useParams } from 'react-router-dom';

const MovieReview = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    (async () => {
      const reviewDetails = await getMovieReview(movieId);
      setReview(reviewDetails.results);
    })();
  }, [movieId]);

  console.log('review', review);

  return review.map(item => (
    <li key={item.id}>
      <h2>Author:{item.author_details.username}</h2>
      <p>{item.content}</p>
    </li>
  ));
};

export default MovieReview;
