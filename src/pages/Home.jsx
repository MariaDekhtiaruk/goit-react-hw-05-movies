import { useEffect, useState } from 'react';
import { getTrending } from 'MovieAPI';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const trending = await getTrending();
      setTrendingMovies(trending.results);
    })();
  }, []);

  return (
    <div>
      <h1> Trending today</h1>
      <ul>
        {trendingMovies.map(item => (
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
export default Home;
