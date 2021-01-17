import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  margin: auto;
  justify-self: center;

  .slick-prev::before {
    color: dimgrey;
  }

  .slick-next::before {
    color: dimgrey;
  }
`;

export const StyledImg = styled.img`
  height: 95vh;
`;
