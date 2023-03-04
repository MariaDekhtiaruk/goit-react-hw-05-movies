import { useLocation, Link } from 'react-router-dom';
import { StyledLink } from './BackBtn.styled';
export const BackButton = ({ children }) => {
  const { state } = useLocation();
  console.log('state', state);
  if (!state || !state.prevPage) return null;
  return <StyledLink to={state.prevPage}>{children}</StyledLink>;
};
