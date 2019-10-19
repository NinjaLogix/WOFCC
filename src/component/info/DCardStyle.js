import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

export const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin: 10px;
`;

export const TextContainer = styled.div`
    margin-top: -25px;
    flex: 1 0 auto;
    flexDirection: column;
`;

export const ImageContainer = styled.div`
    height: 180px;
    width: 230px;
`;

export const DImage = styled.img`
    height: 180px;
    width: 220px;
    border-radius: 50%;
    -moz-box-shadow: 0 0 5px 2px #899;
    -webkit-box-shadow: 0 0 5px 2px #899;
`;

export const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    position: relative;
    text-align: ${props => props.inverted ? 'left':'right'};
    padding: 5px;
`;

export const ButtonText = styled.h4`
    font-family: 'Permanent Marker', cursive;
`;

export const Paragraph = styled.div`
    max-width: 570px;
    max-height: 100px;
    margin-left: ${props => props.inverted ? '5px':'0px'}
    margin-right: ${props => props.inverted ? '0px':'5px'}
    text-align: justified;
`;

export const SubHeading = styled.h3`
    max-width: 570px;
    max-height: 100px;
    margin-left: ${props => props.inverted ? '5px':'0px'}
    margin-right: ${props => props.inverted ? '0px':'5px'}
    text-align: ${props => props.inverted ? 'left': 'right'}
`;

export const ButtonContainer = styled.div`
    float: ${props => props.inverted ? 'left':'right'}
`;

export const CustomModal = styled(Modal)`
    width: 70%;
    text-align: center;
`;