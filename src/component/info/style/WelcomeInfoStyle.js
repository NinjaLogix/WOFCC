import styled from 'styled-components';
import { AllBlank } from '../../../assets';

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-evenly;
  align-items: center;
  
  #group1 {
    width: 100%;
    background-color: #f2fffd;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%230f5650' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
  
  #group2 {
    width: 100%;
    z-index: 2;
    background: url(${AllBlank}) no-repeat center center fixed !important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`;

export { Wrapper };
