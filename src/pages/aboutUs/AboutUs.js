import React, {useState, useEffect} from 'react';
import DCard from "../../component/info/DCard";
import {dropBox} from '../../component/api';
import {provideUrl} from '../../util';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {texts} from './AboutUsText';
import {Wrapper, Header, Context, List} from './AboutUsStyle';

export const AboutUs = function(props) {
    const [info, setInfo] = useState([]);
    const [design, setDesign] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const setupInfo = () => {
        dropBox.filesListFolder({path: process.env.REACT_APP_ABOUT_US_PATH})
            .then(response => {
                response.entries.forEach(fileName => {
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach(innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    setInfo(prevInfo => [...prevInfo, innerThing]);
                                }
                            })
                        })
                        .catch(error => console.error('Error getting shared links', error))
                })
            })
            .catch(error => console.log('error listing files...'));
    }

    const setupDesign = () => {
        setDesign(texts);
    }

    const flipFlop = index => {
        return index % 2 > 0;
    }

    useEffect(() => {
        if (!loaded){
            setupInfo();
            setupDesign();
        }

        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    return (
        <Wrapper>
            <Header>
                <Menu/>
                <h1>WOFCC - Southaven</h1>
                <h3>A little about who we are...</h3>
            </Header>
            <Context>
                <List>
                    {design.map((el, index) => (
                        <li key={el.key}>
                            <DCard
                                inverted={flipFlop(index+1)}
                                imageUrl={provideUrl(info, el.image)}
                                title={el.title}
                                content={el.context}
                                detail={el.detail}
                                enableModal={true}
                            />
                        </li>
                    ))}
                </List>
            </Context>
            <Footer/>
        </Wrapper>
    )
}
