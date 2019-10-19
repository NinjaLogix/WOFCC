import React, {useState, useEffect} from 'react';
import { FacebookUrl, dropBox, facebookImg, pblcImg, provideUrl } from '../../script/appContext';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import {Container, Header, Heading1, Heading2, Heading3, P, ContactAContainer, SocialBadge, BottomContainer, ContactLeftBottom, PastorImg, ContactRightBottom} from './ContactUsStyle';

export const ContactUs = (props) => {
    const [displayUrl, setDisplayUrl] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const setupInfo = () => {
        dropBox.filesListFolder({path: process.env.REACT_APP_CONTACT_US_PATH})
            .then(response => {
                response.entries.forEach(fileName => {
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach(innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    setDisplayUrl(prevDisplayUrl => [...prevDisplayUrl, innerThing]);
                                }
                            })
                        })
                        .catch(error => console.error('Error getting shared links', error))
                })
            })
            .catch(error => console.log('error listing files...'));
    }

    useEffect(() => {
        if (!loaded){
            setupInfo();
        }

        return() => {
            if (!loaded){
                setLoaded(true);
            }
        }

    }, []);

    return(
        <Container>
            <Header>
                <Menu/>
                <Heading1>Keep In Touch</Heading1>
                <Heading3>We love you! Come back anytime!</Heading3>
                <Heading2>FaceBook</Heading2>
                <ContactAContainer>
                    <a href={FacebookUrl}>
                        <SocialBadge
                            src={provideUrl(displayUrl, facebookImg)}
                            alt={'facebook'}
                            />
                    </a>
                </ContactAContainer>
                <h3>Keep in touch with us on Facebook!</h3>
            </Header>
            <BottomContainer>
                <ContactLeftBottom>
                    <PastorImg
                        src={provideUrl(displayUrl, pblcImg)}
                        alt={'pastor'}
                        />
                </ContactLeftBottom>
                <ContactRightBottom>
                    <p>
                        You have a concern, we have a care! It's all love around here!
                        <br/>Let us know what's on your mind please!
                        <br/>
                        Feel free to email us at:
                    </p>
                    <Heading2>wofccsouthaven@gmail.com</Heading2>

                    <P>You can find us here:</P>
                    <Heading3>1881 Nail Rd suite D</Heading3>
                    <Heading3>Horn Lake, MS 38637</Heading3>

                    <P>or give us a call at:</P>
                    <Heading2>(769) 232-6457</Heading2>
                    <P>or</P>
                    <Heading2>(662) 536-6236</Heading2>
                </ContactRightBottom>
            </BottomContainer>
            <Footer/>
        </Container>
    )
}