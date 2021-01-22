import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Grid)`
  width: 100%;
  
  background: #5A8A81;
  background: -webkit-linear-gradient(top, #5A8A81, #1E1E1E);
  background: -moz-linear-gradient(top, #5A8A81, #1E1E1E);
  background: linear-gradient(to bottom, #5A8A81, #1E1E1E);
`;

export const StyledLink = styled(Link)`
  padding: 0 0.5%;
`;

export const StyledA = styled.a`
  padding: 0 0.5%;
`;
