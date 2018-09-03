import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
`;

const Header = styled.div`
    width: 100%;
    height: 150px;
    background-image:url(${props => props.background ? props.background:'../resources/freepik/2144.jpg'})
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    -moz-box-shadow: 0 0 30px 5px #999;
    -webkit-box-shadow: 0 0 30px 5px #999;
`;

const MidContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const InfoImage = styled.image`
    width:400px;
    height:200px;
`;

const ImageContainer = styled.div`
    width: 400px;
    height: 200px;
`;

const LongContext = styled.div`

`;

class InfoDetail extends React.Component{
    static propTypes = {
        shortContext: PropTypes.string,
        title: PropTypes.string,
        imageUrl: PropTypes.string,
        longContext: PropTypes.string
    };

    static defaultProps = {

    };

    render(){
        return(
            <Container>
                <Header>
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.shortContext}</h3>
                </Header>
                <MidContainer>
                    <ImageContainer>
                        <InfoImage src={} alt={}/>
                    </ImageContainer>
                    {/*Image*/}
                    {/*Long Context*/}
                </MidContainer>
            </Container>
        )
    };
}