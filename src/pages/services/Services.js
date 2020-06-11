import React, {useState, useEffect, useContext} from 'react'
import WebCard from '../../component/info/WebCard'
import {Menu} from '../../component/navigation/menu'
import {Footer} from '../../component/navigation/footer'
import {Container, MidContainer, ServiceFlexBox, ServiceWebCardContainer} from './ServicesStyle'
import {config} from '../../config/config'
import {WofccContext} from '../../component/context/WofccContext'
import {ServicesBackground} from '../../assets'

export const Services = () => {
    const [api] = useContext(WofccContext);
    const [services, setServices] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const data = await api.sanity_query(api.singleton, {query:config.sanity_queries.services});
            setServices(data);
        }

        getServices();
    }, []);

    return (
        <Container>
            <MidContainer backgroundImg={ServicesBackground}>
                <Menu/>
                <h1>Our Services to You</h1>
                <ServiceFlexBox>
                    {services &&
                        services.map((service, index) => (
                          <ServiceWebCardContainer key={index}>
                              <WebCard image={service.imageUrl} headline={service.title} context={service.description}/>
                          </ServiceWebCardContainer>
                        ))
                    }
                </ServiceFlexBox>
            </MidContainer>

            <Footer/>
        </Container>
    )
}