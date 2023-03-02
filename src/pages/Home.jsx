import { useEffect, useState } from 'react';
import { getTrending } from 'MovieAPI';
import { Link } from 'react-router-dom';
const Home = () => {
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
            <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
