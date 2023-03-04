import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const DescriptionMovieWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;
export const MovieInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 5px;
  padding: 8px 0;
  margin-bottom: 16px;
`;
export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  margin: 0px;
  padding-left: 0;
  list-style: none;
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  :hover {
    color: #ff0d00;
  }
`;
