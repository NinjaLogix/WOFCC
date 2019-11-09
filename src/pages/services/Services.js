import React, {useState, useEffect} from 'react';
import uuidv1 from "uuid";
import WebCard from '../../component/info/WebCard';
import {provideUrl} from '../../util';
import {dropBox} from '../../component/api';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Link} from 'react-router-dom';
import {Container, MidContainer, ServiceFlexBox, ServiceWebCardContainer} from './ServicesStyle';

export const Services = () => {
    //*-----------> State
    const [context, setContext] = useState([]);
    const [displayUrl, setDisplayUrl] = useState([]);
    const [dataLoaded, setDataLoaded] = useState({context: false, urls: false});

    //*-------------> Constants
    const freepik28Img = '28.jpg';
    const freepik397Img = '397.jpg';
    const freepik1869Img = '1869.jpg';
    const freepik11405Img = '11405.jpg';

    //*----------> Component Functions
    const setupServices = () => {
        dropBox.filesListFolder({path: process.env.REACT_APP_SERVICES_PATH})
            .then(response => {
                response.entries.forEach(fileName => {
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach(innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    setDisplayUrl(prevDisplayUrl => 
                                        [...prevDisplayUrl, innerThing]
                                    )
                                }
                            })
                        })
                        .catch(error => console.error('Error getting shared links', error))
                })
            })
            .catch(error => console.log('error listing files...'));
    }

    const setupContext = () => {
        setContext(
            [
                {key: uuidv1(), image: freepik28Img, title: 'New Members Classes', context: <p>4 Classes Total by appointment in the business suite.</p>},
                {key: uuidv1(), image: freepik1869Img, title: 'Worship Service & Corporate Confession', context: <p>Sunday's @ 9.45am<br/>First Sundays: Holy Communion & Mission</p>},
                {key: uuidv1(), image: freepik11405Img, title: 'Children\'s Ministry', context: <p>2nd & 3rd Sunday's<br/>9:45am in the Children's Zone<br/>Not held on 1st or 5th Sunday's<br/>ages 5 - 11</p>},
                {key: uuidv1(), image: freepik397Img, title: 'Pastoral Care', context: <p>24/7 365!<br/>Visit the <Link to={'/contact-us'}>Contact Us</Link> page for contact information</p>}
            ]
        );
    }

    const provideCards = () => {
        if (context){
            return (
                <ServiceFlexBox>
                        {context.map((el, index) =>
                            <ServiceWebCardContainer>
                                <WebCard image={provideUrl(displayUrl, el.image)} headline={el.title} context={el.context}/>
                            </ServiceWebCardContainer>
                        )}
                </ServiceFlexBox>
            )
        }
    }

    //*--------> Lifecycle Functions
    useEffect(() => {
        if (!dataLoaded.context && !dataLoaded.urls){
            setupServices();
            setupContext();
        }

        return () => {
            if (!dataLoaded.context && !dataLoaded){
                setDataLoaded({context: true, urls: true})
            }
        };
    }, []);

    return (
        <Container>
            <MidContainer>
                <Menu/>
                <h1>Our Services to You</h1>
                {provideCards()}
            </MidContainer>

            <Footer/>
        </Container>
    )
}