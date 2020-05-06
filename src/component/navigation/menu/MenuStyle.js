import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

export const MenuBase = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;

    section {
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`;

export const MenuH2 = styled.h3`
    font-size: 1.7em;
    line-height: 0.5;
    color: black;

    &:hover {
        text-decoration: underline;
    }
`;

export const DrawerList = styled.section`
    width: 30vw;
`;