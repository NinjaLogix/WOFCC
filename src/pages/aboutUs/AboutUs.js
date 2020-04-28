import React, {useState, useEffect} from 'react';
import {handlePageConfig, fixUrl, convertMarkdown} from '../../util';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
// import {Wrapper, Header, Context, List} from './AboutUsStyle';
import {Wrapper, Header, Context} from '../ministries/MinistriesStyle';
import {InfoCard} from '../../component/info';

export const AboutUs = function(props) {
    const [abouts, setAbouts] = useState({});
    // const [loaded, setLoaded] = useState(false);

    // const setupContext = () => {
    //     handlePageConfig('about-us')
    //         .then(response => {
    //             console.log(response.data)
    //             setContext(response.data)
    //         })
    //         .catch();
    // }

    // const flipFlop = index => {
    //     return index % 2 > 0;
    // }

    useEffect(() => {
        handlePageConfig('about-us')
            .then(response => setAbouts(response.data))
            .catch();
    }, []);

    // const shortHandText = text => text.substring(0, 400);

    // const handleAboutUs = () => {
    //     return (
    //         <List>
    //             {context.us && context.us.map((el, index) => (
    //                 <li key={el.key}>
    //                     <DCard
    //                         inverted={flipFlop(index+1)}
    //                         imageUrl={el.img_url ? fixUrl(el.img_url) : ''}
    //                         title={el.ttl}
    //                         content={convertMarkdown(shortHandText(el.txt))}
    //                         detail={convertMarkdown(el.txt)}
    //                         enableModal={true}
    //                     />
    //                 </li>
    //             ))}
    //         </List>
    //     )
    // };

    return (
        <Wrapper>
            <Header backgroundImg={abouts.header_img ? fixUrl(abouts.header_img) : ''}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>A little about who we are...</h3>
            </Header>
            <Context>
                {abouts.us && abouts.us.map(el => (
                    <section key={el.key} id={'item'}>
                        <InfoCard 
                            src={fixUrl(el.img_url)} 
                            title={el.ttl} 
                            text={el.txt}
                            detail={convertMarkdown(el.txt)}/>
                    </section>
                ))}
            </Context>
            <Footer/>
        </Wrapper>
    )
}
