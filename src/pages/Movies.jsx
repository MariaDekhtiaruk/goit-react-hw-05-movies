import { searchMovie } from 'MovieAPI';
import { useEffect, useState } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    // First search if search query is set
    if (query) searchHandler();
  }, []);

  const handleQueryChange = event => {
    const { value } = event.target;
    setSearchParams({ query: value }, { replace: true }); //записати тернарник на очищення строки 30хв репети відео 2
  };

  const searchHandler = () => {
    if (!query) {
      return alert('Enter movie');
    }
    (async () => {
      const movies = await searchMovie(query);
      setMovies(movies.results);
    })();
  };

  return (
    <div>
      <h1>
        Movie finder <input type="text" onChange={handleQueryChange} />
        <button onClick={searchHandler}>Search</button>
      </h1>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link
              to={`/movies/${item.id}`}
              state={{ prevPage: location.pathname }}
            >
              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Movies;
