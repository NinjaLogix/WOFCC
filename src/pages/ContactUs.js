import React from 'react';
import { connect } from 'react-redux';
import {change_page} from "../redux-def/actions";
import { FacebookUrl } from '../script/appContext';
import Facebook from '../resources/freebies/Facebook_Home_logo_old.svg.png';
import PBLC from '../resources/pastor/PBLC-3.png';
import Footer from '../component/Footer';

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
            page: ''
        };
    };

    componentDidMount(){
        this.setState({page: 'contact_us'});
        this.props.change_page('contact_us');
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
                                src={Facebook}
                                alt={'facebook'}
                                />
                        </a>
                    </div>
                    <h3>Some text goes here about facebook</h3>
                </div>
                <div className={'bottom-container'}>
                    <div className={'contact-left-bottom'}>
                        <img className={'contact-pastor-img'}
                            src={PBLC}
                            alt={'pastor'}
                            />
                    </div>
                    <div className={'contact-right-bottom'}>
                        <p>
                            You have a concern, we have a care! It's all love around here!
                            <br/>Let us know what's on your mind please!
                            <br/>
                            <br/>
                            Feel free to email us at:
                        </p>
                        <h2>wofccsouthaven@gmail.com</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const ContactUs = connect(null,mapDispatchToProps)(ConnectedContactUs);

export default ContactUs;