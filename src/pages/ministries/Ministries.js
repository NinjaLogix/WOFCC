import React, {useState, useEffect} from 'react';
import {DCard} from "../../component/info";
import {provideUrl} from '../../script/appContext';
import {provideMinistriesImages} from '../../util';
import {texts} from './MinistriesText';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import '../../style/wofcc_master.css'

export const Ministries = props => {
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
        <div className={'about-ministries-container'}>
            <div className={'about-ministries-header'}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>The ministries we currently provide...</h3>
            </div>
            <div className={'about-ministries-context'}>
                <ul className={'about-ministries-list'}>
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
                </ul>
            </div>
            <Footer/>
        </div>
    )
}
