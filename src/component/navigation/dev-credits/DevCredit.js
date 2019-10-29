import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 5vh;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    padding: 4%;
`;

const Logo = styled.section`
    height: 5vh;
`;

const Text = styled.section`
    height: 5vh;

    p {
        font-size: 1.5em;
        color: black;
    }
`;

export const DevCredit = () => (
    <Wrapper>
        <Logo>
            <img style={{height: '100%'}} src={require('../../../resources/GitHub_Logo.png')}/>
        </Logo>

        <Text>
            <p>BLogix</p>
        </Text>
    </Wrapper>
);