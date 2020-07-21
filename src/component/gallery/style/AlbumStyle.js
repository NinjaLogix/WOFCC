import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const Wrapper = styled(Paper)`
  width: 35rem;
  height: 20rem;

  margin: 1rem;
  padding: 1rem 0;

  display: flex;
  flex-flow: column-reverse nowrap;
  align-items: center;

  background-image: url(${({ bkgrnd }) => bkgrnd});
  background-position: top 0 left 0;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 0.5em;
`;

const Content = styled.section`
  height: 7rem;
  width: calc(100% - 2rem);
  padding: 0 1rem;

  background-color: rgba(63, 63, 63, 0.94);

  border-radius: 0.5em;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h3 {
    color: whitesmoke;
  }
`;

export { Wrapper, Content };
