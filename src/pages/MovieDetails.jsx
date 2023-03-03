import { BackButton } from 'components/BackButton';
import { getMovieDetails } from 'MovieAPI';
import { Suspense, useEffect, useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    })();
  }, [movieId]);
  console.log(movie);
  return movie ? (
    <>
      <BackButton>Go Back</BackButton>

      <h1>{movie.title}</h1>
      <p>User score: {movie.vote_average * 10}%</p>
      <p>Overwiev {movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
        alt="MovieImage"
        width={200}
        // height={300}
      />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}`}>Close</Link>;
        </li>
      </ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  ) : null;
};
export default MovieDetails;
