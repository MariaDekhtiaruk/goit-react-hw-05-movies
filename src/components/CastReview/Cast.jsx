import { getMovieCast } from 'MovieAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LiStyle } from 'components/CastReview/CastReview.styled';

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

  const isEmpty = cast.length === 0;
  return isEmpty ? (
    <b>No information here :(</b>
  ) : cast ? (
    <>
      <ul>
        {cast.map(item => (
          <LiStyle key={item.id}>
            <h4>{item.name ? item.name : 'Unknown'}</h4>
            <p>{item.character ? item.character : 'Unknown'}</p>
          </LiStyle>
        ))}
      </ul>
    </>
  ) : null;
};
export default CastDetails;
