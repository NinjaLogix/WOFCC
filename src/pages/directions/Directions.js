import React, {useState, useEffect} from 'react';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import {Container, Heading1, Heading2, MapContainer, GMapsIframe} from './DirectionsStyle';
import { handlePageConfig, fixUrl } from '../../util';

export const Directions = () => {
    const [context, setContext] = useState();
    const [loaded, setLoaded] = useState(false);

    const setupContext = () => {
        handlePageConfig('directions')
            .then(response => setContext(response.data))
            .catch(error => console.error('Error calling for page config', error));
    }

    useEffect(() => {
        if (!loaded){
            setupContext()
        }

        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    })

    return(
        <Container backgroundImage={context ? fixUrl(context.header_img) : '#'}>
            <Menu/>
            
            <Heading1>Trying to Find Us?</Heading1>
            <Heading2>We aren't too hard to find.</Heading2>
            <MapContainer>
                <GMapsIframe
                    url={context ? context.google_apis : '#'}
                    width={'850'}
                    height={'400'}
                    display={'initial'}
                    allowFullScreen
                />
                <section>
                    <h2>Mailing Address</h2>
                    <h4>{context ? context.addrs : ''}</h4>
                    <br/>
                    <h2>{context ? context.addrs_info : ''}</h2>
                </section>
            </MapContainer>
            <Footer/>
        </Container>
    )
}
