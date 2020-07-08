import styled from 'styled-components'
import {  Grid  } from '@material-ui/core'

const header_url = process.env.REACT_APP_RECENT_EVENTS_HEADER_URL;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Header = styled.section`
    width: 100%;
    height: 15vh;
    background-image: url('${header_url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h2 {
        text-align: center;
        line-height: 0;
    }
`;

export const GalleryWrapper = styled.section`
  height: calc(100vh - 33.5vh);
  
  background-color: aqua;
`;

export const GridContainer = styled(Grid)``;

export const GridItem = styled(Grid)``;