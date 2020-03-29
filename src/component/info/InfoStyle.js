import styled from 'styled-components';
import {Paper, Dialog} from '@material-ui/core';

const InfoWrapper = styled(Paper)`
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    margin: 1.5% 0;

    :hover {
        cursor: ${props => props.expanded ? 'pointer' : 'default'}
    }
`;

const ImgSection = styled.img`
    width: ${props => props.short ? '30%' : '40%'};
    max-height: ${props => props.short ? '5rem' : '20rem'};
    clip-path: polygon(0% 0%, 90% 0%, 70% 100%, 0% 100%);

    :hover {
        clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
    }
`;

const TextSection = styled.section`
    width: 70%;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;

    section {
        width: 100%;
        height: 45%;
        padding: 2%;
        overflow-y: scroll;

        span {

        }
    }
`;

const BtnWrapper = styled.section`
    width: 100%;
`;

const TitleWrapper = styled.section`
    width: 100%;
    display: inline-flex;
    justify-content: space-around;
`;

const StyledDialog = styled(Dialog)`
    h4 {
        line-height: 1.3;
    }
`;

export {
    InfoWrapper,
    ImgSection,
    TextSection,
    BtnWrapper,
    TitleWrapper,
    StyledDialog
}