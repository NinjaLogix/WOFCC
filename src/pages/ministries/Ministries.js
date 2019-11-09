import React, {useState, useEffect} from 'react';
import {DCard} from "../../component/info";
import {provideMinistriesImages, provideUrl} from '../../util';
import {texts} from './MinistriesText';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, Context, List} from './MinistriesStyle';

export const Ministries = function(props) {
    const [context, setContext] = useState([]);
    const [displayUrl, setDisplayUrl] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const setupMinistries = () => {
        provideMinistriesImages()
            .then(response => setDisplayUrl(response))
            .catch(error => console.log('error retrieving ministries objects', error));
    }

    const flipFlop = index => index % 2 > 0;

    useEffect(() =>{
        if (!loaded){
            setupMinistries();
            setContext(texts);
        }
        return()=>{
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    return(
        <Wrapper>
            <Header>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>The ministries we currently provide...</h3>
            </Header>
            <Context>
                <List>
                    {context.map((el, index) => (
                        <li key={el.key}>
                            <DCard
                                inverted={flipFlop(index+1)}
                                imageUrl={provideUrl(displayUrl, el.image)}
                                title={el.title}
                                content={el.context}
                                small = {true}
                            />
                        </li>
                    ))}
                </List>
            </Context>
            <Footer/>
        </Wrapper>
    )
}
