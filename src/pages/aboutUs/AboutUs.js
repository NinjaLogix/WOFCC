import React, {useState, useEffect} from 'react';
import DCard from "../../component/info/DCard";
import {handlePageConfig, fixUrl, convertMarkdown} from '../../util';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {Wrapper, Header, Context, List} from './AboutUsStyle';

export const AboutUs = function(props) {
    const [context, setContext] = useState({});
    const [loaded, setLoaded] = useState(false);

    const setupContext = () => {
        handlePageConfig('about-us')
            .then(response => setContext(response.data))
            .catch();
    }

    const flipFlop = index => {
        return index % 2 > 0;
    }

    useEffect(() => {
        if (!loaded){
            setupContext();
        }

        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    const shortHandText = text => text.substring(0, 400);

    const handleAboutUs = () => {
        return (
            <List>
                {context.us && context.us.map((el, index) => (
                    <li key={el.key}>
                        <DCard
                            inverted={flipFlop(index+1)}
                            imageUrl={el.img_url ? fixUrl(el.img_url) : ''}
                            title={el.ttl}
                            content={convertMarkdown(shortHandText(el.txt))}
                            detail={convertMarkdown(el.txt)}
                            enableModal={true}
                        />
                    </li>
                ))}
            </List>
        )
    };

    return (
        <Wrapper>
            <Header backgroundImg={context.header_img ? fixUrl(context.header_img) : ''}>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>A little about who we are...</h3>
            </Header>
            <Context>
                {handleAboutUs()}
            </Context>
            <Footer/>
        </Wrapper>
    )
}
