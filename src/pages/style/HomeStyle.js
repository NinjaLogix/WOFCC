import styled from 'styled-components';
import { BeyondBlessed, PineBackground } from '../../assets';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 5%;
  display: flex;
  flex-flow: row wrap;
  
  background: url(${PineBackground}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Media = styled.section`
  width: 100%;
  height: 88.5vh;
  z-index: 0;
`;

const Video = styled.section``;

const Social = styled.section``;

export {
  Wrapper,
  Media,
}