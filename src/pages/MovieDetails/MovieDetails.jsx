import { BackButton } from 'components/BackBtn/BackButton';
import { getMovieDetails } from 'MovieAPI';
import { Suspense, useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {
  DescriptionMovieWrap,
  MovieInfoWrap,
  ListStyle,
  LinkStyle,
} from 'pages/MovieDetails/MovieDetails.styled';

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

      <DescriptionMovieWrap>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          alt="MovieImage"
          width={200}
          // height={300}
        />
        <MovieInfoWrap>
          <h1>{movie.title}</h1>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </MovieInfoWrap>
      </DescriptionMovieWrap>
      <h2> Additional information</h2>
      <ListStyle>
        <li>
          <LinkStyle to="cast">Cast</LinkStyle>
        </li>
        <li>
          <LinkStyle to="reviews">Reviews</LinkStyle>
        </li>
        <li>
          <LinkStyle to={`/movies/${movieId}`}>Close</LinkStyle>
        </li>
      </ListStyle>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  ) : null;
};
export default MovieDetails;
