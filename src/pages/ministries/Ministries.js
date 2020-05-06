import React, {useState, useEffect} from 'react';
import {InfoCard} from "../../component/info";
import {handlePageConfig,fixUrl} from '../../util';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, Context} from './MinistriesStyle';

export const Ministries = function(props) {
    const [ministries, setMinistries] = useState([]);

    useEffect(() => {
        handlePageConfig('ministries')
            .then(response => setMinistries(response.data.ministries))
            .catch();
    }, []);

    return(
        <Wrapper>
            <Header backgroundImg={ministries.header_img ? fixUrl(ministries.header_img) : null}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>The ministries we currently provide...</h3>
            </Header>
            <Context>
                {ministries.map(el => (
                    <InfoCard
                        key={el.key}
                        src={fixUrl(el.img_url)} 
                        title={el.ttl} 
                        text={el.txt}/>
                ))}
            </Context>
            <Footer/>
        </Wrapper>
    )
}
