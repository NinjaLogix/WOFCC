import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    width: 800px;
    height: 200px;
    display: flex;
    margin: 10px;
`;

const TextContainer = styled.div`
    flex: 1 0 auto;
    flexDirection: column;
`;

const ImageContainer = styled.div`
    height: 200px;
    width: 200px;
    background-color: rgba(50, 50, 50, 0.8);
`;

const DImage = styled.img`
    height: 200px;
    width: 200px;
`;

const Title = styled.h1`
    font-family: 'Permanent Marker', cursive;
    position: relative;
    text-align: ${props => props.inverted ? 'left':'right'};
    padding: 5px;
`;

const Paragraph = styled.div`
    max-width: 570px;
    max-height: 100px;
    margin-left: ${props => props.inverted ? '10px':'0px'}
    margin-right: ${props => props.inverted ? '0px':'10px'}
    text-align: justified;
`;

class DCard extends React.Component{
    static propTypes = {
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string,
        content: PropTypes.object,
        inverted: PropTypes.bool
    };

    static defaultProps = {
        imageUrl: '../resources/freebies/WDF_1461291.jpg',
        title: 'Sample Title',
        alt: 'Sample Image',
        content: 'Sample Message',
        inverted: true
    };

    render(){
        return(
            <Container>
                {this.props.inverted &&
                <ImageContainer>
                    <DImage src={this.props.imageUrl} alt={this.props.alt}/>
                </ImageContainer>
                }
                <TextContainer>
                    <Title inverted={this.props.inverted}>
                        {this.props.title}
                    </Title>
                    <Paragraph inverted={this.props.inverted}>
                        {this.props.content}
                    </Paragraph>
                </TextContainer>
                {!this.props.inverted &&
                <ImageContainer>
                    <DImage src={this.props.imageUrl} alt={this.props.alt}/>
                </ImageContainer>
                }
            </Container>
        )
    };
}

export default DCard;