import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Grid)`
  width: 100%;

  background: #5a8a81;
  background: -webkit-linear-gradient(top, #5a8a81, #1e1e1e);
  background: -moz-linear-gradient(top, #5a8a81, #1e1e1e);
  background: linear-gradient(to bottom, #5a8a81, #1e1e1e);
`;

export const StyledLink = styled(Link)`
  padding: 0 0.5%;
`;

export const StyledA = styled.a`
  padding: 0 0.5%;
`;
