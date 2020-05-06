import styled from 'styled-components';

const header_url = process.env.REACT_APP_MINISTRIES_HEADER_URL;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Header = styled.section`
    width: 100%;
    height: 150px;
    background-image: url('${props => props.backgroundImg ? props.backgroundImg : header_url}');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    h1, h2, h3 {
        text-align: center;
    }
`;

export const Context = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 2% 5%;
`;