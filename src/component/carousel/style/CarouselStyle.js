import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 75%;
  margin: auto;
  justify-self: center;

  .slick-prev::before {
    color: dimgrey;
  }

  .slick-next::before {
    color: dimgrey;
  }
  
  #slick_image {
    height: 83vh;
  }
`;
