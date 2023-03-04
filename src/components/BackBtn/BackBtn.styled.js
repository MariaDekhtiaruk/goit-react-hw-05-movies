import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 20px;
  :hover {
    color: #ff0d00;
  }
`;
