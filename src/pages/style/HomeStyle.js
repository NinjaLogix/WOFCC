import styled from 'styled-components';
import { PineForrest } from '../../assets';
import { config } from '../../config/config';

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
  width: 96.7vw;
  min-height: calc(100vh - ${config.isMobile ? `3.2rem` : `6.13rem`});
  z-index: 0;
  
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  
  #slides-box {
    width: 100%;
  }
`;

const Slide = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

//todo -> set these as percentages that scale with the screen
/*
  width: ${config.isMobile ? `100%` : `54vw`};
  ${config.isMobile && `height: 35rem;`}
 */
const SlideImage = styled.img`
  width: 73.25%;
  height: 45%;
`;

export {
  Wrapper,
  Media,
  Slide,
  SlideImage,
}