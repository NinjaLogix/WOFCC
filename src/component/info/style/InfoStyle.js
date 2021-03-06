import styled from 'styled-components';
import { Paper, Dialog } from '@material-ui/core';

const InfoWrapper = styled(Paper)`
  width: ${props => (props.mobile ? '90%' : '60%')};
  max-height: 15rem;
  display: inline-flex;
  margin: 2% 0;
  justify-content: space-between;

  :hover {
    cursor: ${props => (props.expanded ? 'pointer' : 'default')};
  }
`;

const ImgSection = styled.img`
  width: ${props => (props.short ? '30%' : '40%')};
  max-height: ${props => (props.short ? '5rem' : '100%')};
  clip-path: polygon(0% 0%, 90% 0%, 70% 100%, 0% 100%);

  :hover {
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }
`;

const StyledA = styled.a`
  color: black;
`;

const TextSection = styled.section`
  width: ${({ short }) => (short ? '70%' : '60%')};

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  padding: 2%;
`;

const BtnWrapper = styled.section`
  width: 100%;
`;

const TitleWrapper = styled.section`
  width: 100%;
  display: inline-flex;
  justify-content: space-around;
`;

const StyledDialog = styled(Dialog)`
  h4 {
    line-height: 1.3;
  }
`;

export {
  InfoWrapper,
  ImgSection,
  TextSection,
  BtnWrapper,
  TitleWrapper,
  StyledDialog,
  StyledA,
};
