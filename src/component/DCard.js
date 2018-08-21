import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 800px;
    height: 220px;
    display: flex;
    margin: 10px;
    background-color: rgba(50, 50, 50, 0.8);
`

const TextContainer = styled.div`
    flex: 1 0 auto;
    flexDirection: column;
`

const ImageContainer = styled.div`
    float: ${props => props.inverted ? 'left' : 'right'};
    height: 200px;
    width: 200px;
    background-color: rgba(50, 50, 50, 0.8);
`

const DImage = styled.img`
    height: 200px;
    width: 200px;
`

const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    text-align: ${props => props.inverted ? 'right' : 'left'};
`

const Paragraph = styled.p`
    font-family: 'Teko', sans-serif;
    text-align: justify-all;
`

class DCard extends React.Component{
    static propTypes = {
        mode: PropTypes.string,
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string,
        content: PropTypes.string
    };

    static defaultProps = {
        mode: 'left',
        imageUrl: '../resources/freebies/WDF_1461291.jpg',
        title: 'Sample Title',
        alt: 'Sample Image',
        content: 'Sample Message'
    };
    render(){
        return(
            <Container>
                <ImageContainer>
                    <DImage src={require('../resources/freebies/WDF_1461291.jpg')} alt={'some image'}/>
                </ImageContainer>
                <TextContainer>
                    <Title>
                        {this.props.title}
                    </Title>
                    <Paragraph>
                        {this.props.content}
                    </Paragraph>
                </TextContainer>
            </Container>
        )
    };
}

export default DCard;