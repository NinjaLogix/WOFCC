import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import {Container, TextContainer, ImageContainer, DImage, Title, ButtonText, Paragraph, SubHeading, ButtonContainer, CustomModal} from './DCardStyle';

export default class DCard extends React.Component{
    constructor(){
        super();
        this.state={
            showModal: false
        }
    }

    render(){
        let context;

        if (this.props.small) {
            context = <SubHeading inverted = {this.props.inverted}>
                {this.props.content}
                {this.props.enableModal &&
                <ButtonContainer inverted={this.props.inverted}>
                    <Button bsSize="xsmall" bsStyle={'Link'}
                            onClick={() => this.setState({showModal: true})}><ButtonText>...more</ButtonText></Button>
                </ButtonContainer>
                }
            </SubHeading>
        } else {
            context = <Paragraph inverted={this.props.inverted}>
                {this.props.content}
                {this.props.enableModal &&
                <ButtonContainer inverted={this.props.inverted}>
                    <Button bsSize="xsmall" bsStyle={'Link'}
                            onClick={() => this.setState({showModal: true})}><ButtonText>...more</ButtonText></Button>
                </ButtonContainer>
                }
            </Paragraph>
        }

        return(
            <Container>
                {this.props.enableModal &&
                    <CustomModal  show={this.state.showModal}
                            onHide={()=> this.setState({showModal: false})}
                            >
                        <Modal.Header closeButton={()=>this.setState({showModal: false})}>
                            <Modal.Title>{this.props.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.props.detail}</Modal.Body>
                        <Modal.Footer>
                            <Button onClick={()=>this.setState({showModal: false})}>Close</Button>
                        </Modal.Footer>
                    </CustomModal>
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
                    {context}
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