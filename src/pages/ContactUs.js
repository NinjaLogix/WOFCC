import React from 'react';
import '../style/ContactUs.css';

class ContactUs extends React.PureComponent{
    render(){
        return(
            <div className={'contact-container'}>
                <div className={'contact-header'}>
                    <h1>Keep In Touch</h1>
                    <h3>We love you! Come back anytime!</h3>
                    <h2>FaceBook</h2>
                    {/*TODO - image link is taking the whole width of the page instead of just the image.*/}
                    <a href={'https://www.facebook.com/WordOfFaithSouthaven'}>
                        <img className={'contact-social-badge'}
                             src={require('../resources/freebies/Facebook_Home_logo_old.svg.png')}
                        />
                    </a>
                    <h3>Some text goes here about facebook</h3>
                </div>
                <div className={'contact-left-bottom'}>
                    <p>You have a concern, we have a care! It's all love around here! Let us know what's on your mind please!</p>
                    {/*Image of pastor goes here*/}
                </div>
                <div className={'contact-right-bottom-form'}>

                </div>
            </div>
        )
    }
}

export default ContactUs;