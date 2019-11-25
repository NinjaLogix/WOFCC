import React, {useState, useEffect} from 'react';
import {DCard} from "../../component/info";
import {provideMinistriesImages, provideUrl, handlePageConfig,fixUrl, convertMarkdown} from '../../util';
import {texts} from './MinistriesText';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, Context, List} from './MinistriesStyle';

export const Ministries = function(props) {
    const [context, setContext] = useState({});
    //const [displayUrl, setDisplayUrl] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const setupContext = () => {
        handlePageConfig('ministries')
            .then(response => setContext(response.data))
            .catch();
    }

    // const setupMinistries = () => {
    //     provideMinistriesImages()
    //         .then(response => setDisplayUrl(response))
    //         .catch(error => console.log('error retrieving ministries objects', error));
    // }

    const flipFlop = index => index % 2 > 0;

    useEffect(() =>{
        if (!loaded){
            setupContext();
            //setupMinistries();
            //setContext(texts);
        }
        return()=>{
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    const handleMinistries = () => {
        if (context.ministries){
            return (
                <List>
                    {context.ministries.map((el, index) => (
                        <li key={el.key}>
                            <DCard
                                inverted={flipFlop(index + 1)}
                                imageUrl={fixUrl(el.img_url)}
                                title={el.ttl}
                                content={convertMarkdown(el.txt)}
                                small={true}
                            />
                        </li>
                    ))}
                </List>
            )
        }
    }

    return(
        <Wrapper>
            <Header backgroundImg={context.header_img ? fixUrl(context.header_img) : null}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>The ministries we currently provide...</h3>
            </Header>
            <Context>
                {handleMinistries()}
            </Context>
            <Footer/>
        </Wrapper>
    )
}
