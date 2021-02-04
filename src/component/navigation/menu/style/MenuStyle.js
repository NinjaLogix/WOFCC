import styled from 'styled-components';
import { config } from '../../../../config/config';

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: inherit;
`;

export const MenuBase = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-evenly;

  section {
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const MenuLabel = styled.h5`
  font-size: 1.7em;
  line-height: 0.5;
  color: white;
`;

export const DrawerList = styled.section`
  width: 30vw;
`;

const Bar = styled.div`
  position: absolute;
  width: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  flex-flow: row wrap;
  justify-content: ${config.isMobile ? `flex-end` : `space-evenly`};
  z-index: 1;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 30mm;
`;

export {
  Bar,
  StyledLogo,
}