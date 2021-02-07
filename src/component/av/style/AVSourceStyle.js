import styled from 'styled-components';
import { CardActionArea } from '@material-ui/core';

const Box = styled.div`
  width: 100%;
  padding: 2% 0 4% 0;
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
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 1% 100%);
  display: inline-flex !important;
  justify-content: flex-end !important;
  border-radius: 5px !important;
`;

export { Box, AVWrapper, AVInfoWrapper, SocialBanner };
