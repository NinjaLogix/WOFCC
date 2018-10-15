import React from 'react';
import { connect } from 'react-redux';
import {change_page} from "../redux-def/actions";
import { FacebookUrl, dropBox, facebookImg, pblcImg, provideUrl, freepik1024Img } from '../script/appContext';

import '../style/wofcc_master.css';

const mapDispatchToProps = dispatch =>{
    return{
        change_page: page => dispatch(change_page(page))
    };
};

class ConnectedContactUs extends React.PureComponent{
    constructor(){
        super();

        this.state = {
            page: '',
            displayUrl: []
        };
    };

    componentDidMount(){
        this.setState({page: 'contact_us'});
        this.props.change_page('contact_us');

        dropBox.filesListFolder({path: process.env.REACT_APP_CONTACT_US_PATH})
            .then(response => {
                response.entries.forEach(fileName => {
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach(innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    this.setState(prevState => ({
                                        displayUrl: [...prevState.displayUrl, innerThing]
                                    }))
                                }
                            })
                        })
                        .catch(error => console.error('Error getting shared links', error))
                })
            })
            .catch(error => console.log('error listing files...'));
    }

    render(){
        return(
            <div className={'contact-container'}>
                <div className={'contact-header'}>
                    <h1>Keep In Touch</h1>
                    <h3>We love you! Come back anytime!</h3>
                    <h2>FaceBook</h2>
                    <div className={'contact-a-container'}>
                        <a href={FacebookUrl}>
                            <img className={'contact-social-badge'}
                                src={provideUrl(this.state.displayUrl, facebookImg)}
                                alt={'facebook'}
                                />
                        </a>
                    </div>
                    <h3>Some text goes here about facebook</h3>
                </div>
                <div className={'bottom-container'}>
                    <div className={'contact-left-bottom'}>
                        <img className={'contact-pastor-img'}
                            src={provideUrl(this.state.displayUrl, pblcImg)}
                            alt={'pastor'}
                            />
                    </div>
                    <div className={'contact-right-bottom'}>
                        <p>
                            You have a concern, we have a care! It's all love around here!
                            <br/>Let us know what's on your mind please!
                            <br/>
                            Feel free to email us at:
                        </p>
                        <h2>wofccsouthaven@gmail.com</h2>
                        <p>or give us a call at:</p>
                        <h2>(769) 232-6457</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const ContactUs = connect(null,mapDispatchToProps)(ConnectedContactUs);

export default ContactUs;
