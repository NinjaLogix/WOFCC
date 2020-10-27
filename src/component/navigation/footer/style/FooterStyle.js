import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 4.4em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  margin-top: 5%;
  border-top: 5px solid #595959;

  section {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const FooterH4 = styled.h4`
  font-size: 1em;
  font-weight: 600;
  color: black;
`;
