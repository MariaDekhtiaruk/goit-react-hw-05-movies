import { useLocation } from 'react-router-dom';
import { Link } from './App.styled';

export const BackButton = ({ children }) => {
  const { state } = useLocation();
  console.log('state', state);
  if (!state || !state.prevPage) return null;
  return <Link to={state.prevPage}>{children}</Link>;
};
