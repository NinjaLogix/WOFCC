import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { AboutBackground } from '../assets';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.section`
  width: 100%;
  height: 15vh;
  background-image: url('${AboutBackground}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  h2 {
    text-align: center;
    line-height: 0;
  }
`;

export const GalleryWrapper = styled.section`
  height: calc(85vh - 7.9em);
  padding: 1em;
  overflow: scroll;
  flex-grow: 1;
`;

export const GridContainer = styled(Grid)`
  overflow: hidden;
`;
