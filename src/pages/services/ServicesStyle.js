import styled from 'styled-components';

const mid_container_url = process.env.REACT_APP_SERVICES_MID_CONTAINER_URL;

export const Container = styled.div`
    height: 100vh;
`;

export const MidContainer = styled.section`
    background-image: url('${props => props ? props.backgroundImg : mid_container_url}');
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

    p {
        color: black;
    }
`;