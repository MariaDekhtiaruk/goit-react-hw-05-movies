import { searchMovie } from 'MovieAPI';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { LinkToPrevPage } from '../../components/LinkToPrevPage';
import { MovieBtn, InputMovieWrap } from 'pages/MoviePage/Movies.styled';
const Movies = () => {
  // const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const searchHandler = useCallback(() => {
    if (!query) {
      return alert('Enter movie');
    }
    (async () => {
      const movies = await searchMovie(query);
      setMovies(movies.results);
    })();
  }, [query]);

  useEffect(() => {
    // First search if search query is set
    if (query) searchHandler();
  }, [query, searchHandler]);

  const handleQueryChange = event => {
    const { value } = event.target;
    setSearchParams({ query: value }, { replace: true }); //записати тернарник на очищення строки 30хв репети відео 2
  };

  return (
    <div>
      <h3>Find Movie to watch</h3>
      <InputMovieWrap>
        <input type="text" onChange={handleQueryChange} />
        <MovieBtn onClick={searchHandler}>Search</MovieBtn>
      </InputMovieWrap>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <LinkToPrevPage
              to={`/movies/${item.id}`}
              // state={{ prevPage: location.pathname }}
            >
              {item.original_title}
            </LinkToPrevPage>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
