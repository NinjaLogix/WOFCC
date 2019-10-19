import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
`;

export const MidContainer = styled.section`
background-image: url('https://dl.dropboxusercontent.com/s/931csoonk8h0utf/ODRAX20.jpg?dl=0');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;

text-align: center;

height: calc(100vh - 50px);
`;

export const ServiceFlexBox = styled.section`
display: flex;
flex-flow: row wrap;
width: auto;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
align-items: center;
justify-content: center;
`;

export const ServiceWebCardContainer = styled.section`
padding: 10px;
`;