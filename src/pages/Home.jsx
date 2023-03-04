import { useEffect, useState } from 'react';
import { getTrending } from 'MovieAPI';
import { LinkToPrevPage } from '../components/LinkToPrevPage';

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
      <h2> Trending today:</h2>
      <ul>
        {trendingMovies.map(item => (
          <li key={item.id}>
            <LinkToPrevPage to={`/movies/${item.id}`}>
              {item.original_title}
            </LinkToPrevPage>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
