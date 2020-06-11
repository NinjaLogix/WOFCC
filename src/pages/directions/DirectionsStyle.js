import styled from 'styled-components';
import Iframe from 'react-iframe';

const container_url = process.env.REACT_APP_DIRECTIONS_CONTAINER_URL;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Heading1 = styled.h1`
    color: black;
    position: relative;
    text-align: center;
`;

export const SubContainer = styled.section`
    background-image: url('${props => props ? props.backgroundImage : container_url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    
    padding: 0 0 4% 0;
`;

export const AddrsContainer = styled.section`
  text-align: center;
`;

export const Heading2 = styled(Heading1)``;

export const MapContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
