import React, {useState, useEffect} from 'react';
import {handlePageConfig, fixUrl, convertMarkdown} from '../../util';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, Context} from '../ministries/MinistriesStyle';
import {InfoCard} from '../../component/info';

export const AboutUs = function(props) {
    const [abouts, setAbouts] = useState({});

    useEffect(() => {
        handlePageConfig('about-us')
            .then(response => setAbouts(response.data))
            .catch();
    }, []);

    return (
        <Wrapper>
            <Header backgroundImg={abouts.header_img ? fixUrl(abouts.header_img) : ''}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>A little about who we are...</h3>
            </Header>
            <Context>
                {abouts.us && abouts.us.map(el => (
                    <InfoCard
                        key={el.key}
                        src={fixUrl(el.img_url)} 
                        title={el.ttl} 
                        text={el.txt}
                        detail={convertMarkdown(el.txt)}/>
                ))}
            </Context>
            <Footer/>
        </Wrapper>
    )
}
