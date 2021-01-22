import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  overflow-y: auto;
  padding-top: 7%;
`;

export const CreditList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    color: black;
    padding: 5px 10px;
  }
`;
