import React, {useState, useEffect} from 'react';
import {handlePageConfig, fixUrl, convertMarkdown} from '../../util';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import {Container, Header, Heading1, Heading2, Heading3, P, ContactAContainer, SocialBadge, BottomContainer, ContactLeftBottom, PastorImg, ContactRightBottom} from './ContactUsStyle';

export const ContactUs = (props) => {
    const [context, setContext] = useState({});
    const FacebookUrl = process.env.REACT_APP_FACEBOOK_URL;

    const setupContext = () => {
        handlePageConfig('contact-us')
            .then(response => setContext(response.data))
            .catch();
    }

    useEffect(() => {
        setupContext();
    }, []);

    return(
        <Container>
            <Header backgroundImg={context.header_img ? fixUrl(context.header_img) : '#'}>
                <Menu/>
                <Heading1>Keep In Touch</Heading1>
                <Heading3>We love you! Come back anytime!</Heading3>
                <Heading2>FaceBook</Heading2>
                <ContactAContainer>
                    <a href={FacebookUrl}>
                        <SocialBadge src={context.social_facebook ? fixUrl(context.social_facebook) : '#'} alt={'facebook'}/>
                    </a>
                </ContactAContainer>
                <h3>Keep in touch with us on Facebook!</h3>
            </Header>
            <BottomContainer>
                <ContactLeftBottom>
                    <PastorImg src={context.pastors ? fixUrl(context.pastors) : '#'} alt={'pastor'}/>
                </ContactLeftBottom>
                <ContactRightBottom>
                    <p>
                        You have a concern, we have a care! It's all love around here!
                        <br/>Let us know what's on your mind please!
                        <br/>
                        Feel free to email us at:
                    </p>
                    <Heading2>{context.contact_info ? context.contact_info.email : ''}</Heading2>

                    <P>You can find us here:</P>
                    <Heading3 dangerouslySetInnerHTML={{__html: context.contact_info ? convertMarkdown(context.contact_info.addrs) : ''}}/>

                    <P>or give us a call at:</P>
                    <Heading2>{context.contact_info ? context.contact_info.phone_one : ''}</Heading2>
                    <P>or</P>
                    <Heading2>{context.contact_info ? context.contact_info.phone_two : ''}</Heading2>
                </ContactRightBottom>
            </BottomContainer>
            <Footer/>
        </Container>
    )
}