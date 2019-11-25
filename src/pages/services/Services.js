import React, {useState, useEffect} from 'react';
import uuidv1 from "uuid";
import WebCard from '../../component/info/WebCard';
import {provideUrl, handlePageConfig, fixUrl, convertMarkdown} from '../../util';
import {dropBox} from '../../component/api';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Container, MidContainer, ServiceFlexBox, ServiceWebCardContainer} from './ServicesStyle';

export const Services = () => {
    const [context, setContext] = useState({});

    const setupContext = async () => {
        const data = await handlePageConfig('services');
        setContext(data.data);
    }

    useEffect(() => {
        setupContext();
    }, []);

    return (
        <Container>
            <MidContainer backgroundImg={context.header_img ? fixUrl(context.header_img) : '#'}>
                <Menu/>
                <h1>Our Services to You</h1>
                <ServiceFlexBox>
                    {context.ministries && context.ministries.map(el =>(
                        <ServiceWebCardContainer key={uuidv1()}>
                            <WebCard image={fixUrl(el.img ? el.img : '#')} headline={el.ttl ? el.ttl : ''} context={convertMarkdown(el.txt ? el.txt : '')}/>
                        </ServiceWebCardContainer>
                    ))}
                </ServiceFlexBox>
            </MidContainer>

            <Footer/>
        </Container>
    )
}