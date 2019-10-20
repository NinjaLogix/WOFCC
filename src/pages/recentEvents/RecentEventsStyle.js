import styled from 'styled-components';

const header_url = process.env.REACT_APP_RECENT_EVENTS_HEADER_URL;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Header = styled.section`
    width: 100%;
    height: 75px;
    background-image: url('${header_url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`;

export const FlexBox = styled.section`
    display: flex;
    flex-flow: row wrap;
    width: auto;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
`;

export const SpinnerBox = styled.section`
    margin-top: 80px;
`;