import styled from 'styled-components';
import { AppBar } from '@material-ui/core';
import { AboutBackground } from '../../assets';

export const Header = styled.section`
    width: 100%;
    height: 15vh;
    background-image: url(${AboutBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h2 {
        text-align: center;
        line-height: 0;
    }
`;

export const StyledImage = styled.img`
  padding: 1em;
  max-width: 20rem;
`;

export const DisplayImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const StyledAppBar = styled(AppBar)`
position: relative;
`;
