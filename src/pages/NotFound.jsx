import { Link } from 'react-router-dom';
<h1>The page is not found</h1>;
export const NotFound = () => {
  return (
    <div>
      <h1>The page is not found</h1>
      <Link to={'/'}>Go back to Homepage</Link>
    </div>
  );
};
