import React, {useState, useEffect} from 'react';
import { FacebookUrl, dropBox, facebookImg, pblcImg, provideUrl } from '../../script/appContext';
import '../../style/wofcc_master.css';
import { Menu } from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';

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
        <div className={'contact-container'}>
            <div className={'contact-header'}>
                <Menu/>
                <h1>Keep In Touch</h1>
                <h3>We love you! Come back anytime!</h3>
                <h2>FaceBook</h2>
                <div className={'contact-a-container'}>
                    <a href={FacebookUrl}>
                        <img className={'contact-social-badge'}
                            src={provideUrl(displayUrl, facebookImg)}
                            alt={'facebook'}
                            />
                    </a>
                </div>
                <h3>Keep in touch with us on Facebook!</h3>
            </div>
            <div className={'bottom-container'}>
                <div className={'contact-left-bottom'}>
                    <img className={'contact-pastor-img'}
                        src={provideUrl(displayUrl, pblcImg)}
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

                    <p>You can find us here:</p>
                    <h3>1881 Nail Rd suite D</h3>
                    <h3>Horn Lake, MS 38637</h3>

                    <p>or give us a call at:</p>
                    <h2>(769) 232-6457</h2>
                    <p>or</p>
                    <h2>(662) 536-6236</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}