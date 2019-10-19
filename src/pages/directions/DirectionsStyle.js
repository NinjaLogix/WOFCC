import styled from 'styled-components';
import Iframe from 'react-iframe';

export const Container = styled.div`
width: 100%;
height: 100%;
background-image: url('https://dl.dropboxusercontent.com/s/xfjbsqugk29jtmw/102434-OLS3V2-932.jpg?dl=0');
background-size: cover;
background-repeat: no-repeat;
background-position: center center;
`;

export const Heading1 = styled.h1`
    color: black;
    position: relative;
    text-align: center;
`;

export const Heading2 = styled(Heading1)``;

export const MapContainer = styled.section`
    width: 100vw;
    height: 60vh;
    display: inline-flex;
    justify-content: space-evenly;
`;

export const GMapsIframe = styled(Iframe)`
    height: 100%;
    width: 60%;
    margin-left:20%;
`;