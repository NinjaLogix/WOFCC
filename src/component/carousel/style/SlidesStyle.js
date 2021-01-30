import styled from 'styled-components';

export const Boxed = styled.div`
  display: block;
  width: 100%;
  margin: auto;
  justify-self: center;
`;

export const CarouselBody = styled.section`
  width: 90%;
  margin: auto;
  justify-self: center;

  .slick-prev::before {
    color: dimgrey;
  }

  .slick-next::before {
    color: dimgrey;
  }
  
  a {
    color: black;
  }
`;