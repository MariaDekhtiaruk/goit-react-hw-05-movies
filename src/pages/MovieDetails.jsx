// import { useParams } from 'react-router-dom';
// import Reviews from 'components/Reviews';
import { getMovieDetails } from 'MovieAPI';
import { Suspense, useEffect, useState } from 'react';

import { Link, Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState();
  useEffect(() => {
    (async () => {
      const movieDetails = await getMovieDetails(movieId);
      setMovie(movieDetails);
    })();
  }, []);
  console.log(movie);
  return movie ? (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
      />
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </>
  ) : null;
};
export default MovieDetails;

// const MovieDetails = ({ show }) => {
//   const { movieId } = useParams();
//   const additionalContentMap = {
//     reviews: () => <Reviews movieId={movieId} />,
//   };
//   return (
//     <PageWrapper>
//       MovieDetails {movieId} {show}
//       {show ? additionalContentMap[show]() : null}
//     </PageWrapper>
//   );
// };
// export default MovieDetails;
