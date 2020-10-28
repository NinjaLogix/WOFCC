import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Grid)`
  width: 100%;
  border-top: 5px solid #595959;
  
  background: rgb(20,98,5);
  background: linear-gradient(0deg, rgba(20,98,5,1) 0%, rgba(117,165,1,1) 100%);
`;

export const StyledLink = styled(Link)`
  padding: 0 0.5%;
`;

export const StyledA = styled.a`
  padding: 0 0.5%;
`;