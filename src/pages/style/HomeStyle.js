import styled from 'styled-components';
import { PineForrest } from '../../assets';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 5%;
  display: flex;
  flex-flow: row wrap;
  
  background: url(${PineForrest}) no-repeat center center fixed;
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

const Slide = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const SlideImage = styled.img`
  width: 60vw;
  max-height: 80vh;
`;

export {
  Wrapper,
  Media,
  Slide,
  SlideImage,
}