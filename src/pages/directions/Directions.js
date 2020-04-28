import React, {useState, useEffect} from 'react';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import {Container, Heading1, Heading2, MapContainer} from './DirectionsStyle';
import { handlePageConfig, fixUrl } from '../../util';
import {WOFCCMap} from '../../component/info';

export const Directions = () => {
    const [context, setContext] = useState();

    useEffect(() => {
        handlePageConfig('directions')
            .then(response => setContext(response.data))
            .catch(error => console.error('Error calling for page config', error));
    })

    return(
        <Container backgroundImage={context ? fixUrl(context.header_img) : '#'}>
            <Menu/>
            
            <Heading1>Trying to Find Us?</Heading1>
            <Heading2>We aren't too hard to find.</Heading2>
            <MapContainer>
                <WOFCCMap info={context}/>
                <section>
                    <h2>Mailing Address</h2>
                    <span><h4>{context ? context.addrs : ''} - {context ? context.addrs_info : ''}</h4></span>
                </section>
            </MapContainer>
            <Footer/>
        </Container>
    )
}
