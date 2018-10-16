import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import '../style/wofcc_master.css'

const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin: 10px;
`;

const TextContainer = styled.div`
    margin-top: -25px;
    flex: 1 0 auto;
    flexDirection: column;
`;

const ImageContainer = styled.div`
    height: 180px;
    width: 230px;
    background-color: rgba(50, 50, 50, 0.8);
`;

const DImage = styled.img`
    height: 180px;
    width: 230px;
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
    margin-left: ${props => props.inverted ? '5px':'0px'}
    margin-right: ${props => props.inverted ? '0px':'5px'}
    text-align: justified;
`;

const ButtonContainer = styled.div`
    float: ${props => props.inverted ? 'left':'right'}
`;

class DCard extends React.Component{
    constructor(){
        super();
        this.state={
            showModal: false
        }
    }
    static propTypes = {
        imageUrl: PropTypes.string,
        title: PropTypes.string,
        alt: PropTypes.string,
        content: PropTypes.object,
        inverted: PropTypes.bool,
        detail: PropTypes.object,
        enableModal: PropTypes.bool
    };

    static defaultProps = {
        imageUrl: '#',
        title: 'Sample Title',
        alt: 'Sample Image',
        content: 'Sample Message',
        inverted: true,
        detail: 'Some Detail About a Thing',
        enableModal: false
    };

    render(){
        return(
            <Container>
                {this.props.enableModal &&
                    <Modal  show={this.state.showModal}
                            onHide={()=> this.setState({showModal: false})}
                            dialogClassName="custom-modal">
                        <Modal.Header closeButton={()=>this.setState({showModal: false})}>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.props.detail}</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>this.setState({showModal: false})}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }

                {this.props.inverted &&
                <ImageContainer>
                    <DImage src={this.props.imageUrl} alt={this.props.alt} onClick={() => this.setState({showModal: true})}/>
                </ImageContainer>
                }

                <TextContainer>
                    <Title inverted={this.props.inverted}>
                        {this.props.title}
                    </Title>
                    <Paragraph inverted={this.props.inverted}>
                        {this.props.content}
                        {this.props.enableModal &&
                            <ButtonContainer inverted={this.props.inverted}>
                                <Button bsSize="xsmall" bsStyle={'Link'}
                                        onClick={() => this.setState({showModal: true})}>...more</Button>
                            </ButtonContainer>
                        }
                    </Paragraph>
                </TextContainer>

                {!this.props.inverted &&
                <ImageContainer>
                    <DImage src={this.props.imageUrl} alt={this.props.alt} onClick={() => this.setState({showModal: true})}/>
                </ImageContainer>
                }
            </Container>
        )
    };
}

export default DCard;
