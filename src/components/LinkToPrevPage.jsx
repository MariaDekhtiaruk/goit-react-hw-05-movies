import { Link, useLocation } from 'react-router-dom';

export const LinkToPrevPage = props => {
  const { children } = props;
  const location = useLocation();

  return (
    <Link {...props} state={{ prevPage: location.pathname }}>
      {children}
    </Link>
  );
};
