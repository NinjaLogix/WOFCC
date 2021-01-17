import styled from 'styled-components';
import { CardActionArea, Grid } from '@material-ui/core';

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const AVWrapper = styled.section`
  display: inline-flex;
  flex-flow: row nowrap;
`;

const AVInfoWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

const SocialBanner = styled(CardActionArea)`
  width: 100%;
  background-color: blue !important;
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
`;

export { Box, AVWrapper, AVInfoWrapper, SocialBanner };
