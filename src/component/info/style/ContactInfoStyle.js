import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { config } from '../../../config/config';

const Wrapper = styled.div`
  width: 100%;
  padding: 2% 0 4% 0;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const InfoWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
`;

const Picture = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const PastorCard = styled(Card)`
  width: ${config.isMobile ? `38rem` : `48rem`};
  
  #title {
    padding: 1% 0;
  }
  
  #banner {
    background-color: rgba(0,0,0,0.7);
  }
`;

const PastorImg = styled.img`
  width: 100%;
`;

export { Wrapper, InfoWrapper, Picture, PastorCard, PastorImg }