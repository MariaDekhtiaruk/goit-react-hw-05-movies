import { getMovieCast } from 'MovieAPI';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const CastDetails = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    (async () => {
      const castDetails = await getMovieCast(movieId);
      setCast(castDetails.cast);
    })();
  }, [movieId]);
  console.log('cast', cast);
  return cast ? (
    <>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            <h2>{item.name ? item.name : 'Unknown'}</h2>
            <p>{item.character ? item.character : 'Unknown'}</p>
          </li>
        ))}
      </ul>
    </>
  ) : null;
};
export default CastDetails;
