import styled from 'styled-components';
import Iframe from 'react-iframe';

const container_url = process.env.REACT_APP_DIRECTIONS_CONTAINER_URL;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('${container_url}');
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

    section {
        padding: 0 1% 0 1%;
        h2, h4 {
            color: black;
        }
    }
`;

export const GMapsIframe = styled(Iframe)`
    height: 100%;
    width: 60%;
    margin-left:20%;
`;