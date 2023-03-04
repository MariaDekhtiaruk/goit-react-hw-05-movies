import { useState, useEffect } from 'react';
import { getMovieReview } from 'MovieAPI';
import { useParams } from 'react-router-dom';
import { LiStyle } from 'components/CastReview/CastReview.styled';

const MovieReview = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);

  useEffect(() => {
    (async () => {
      const reviewDetails = await getMovieReview(movieId);
      setReview(reviewDetails.results);
    })();
  }, [movieId]);

  const isEmpty = review.length === 0;

  console.log('review', review);

  return isEmpty ? (
    <b>No information here :(</b>
  ) : (
    review.map(item => (
      <ul>
        <LiStyle key={item.id}>
          <h3>Author: {item.author_details.username}</h3>
          <p>{item.content}</p>
        </LiStyle>
      </ul>
    ))
  );
};

export default MovieReview;
