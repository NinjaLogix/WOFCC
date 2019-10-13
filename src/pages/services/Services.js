import React, {useState, useEffect} from 'react';
import WebCard from '../../component/WebCard';
import {designContext, dropBox, provideUrl} from '../../script/appContext';
import {withContext} from '../../component/context-api/withContext';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import '../../style/wofcc_master.css';

const Services = () => {
    const [context, setContext] = useState([]);
    const [displayUrl, setDisplayUrl] = useState([]);
    const [dataLoaded, setDataLoaded] = useState({context: false, urls: false});

    const setupServices = () => {
        dropBox.filesListFolder({path: process.env.REACT_APP_SERVICES_PATH})
            .then(response => {
                response.entries.forEach(fileName => {
                    dropBox.sharingListSharedLinks({path: fileName.path_display})
                        .then(response => {
                            response.links.forEach(innerThing => {
                                if (innerThing['.tag'] === 'file') {
                                    setDisplayUrl(prevDisplayUrl => 
                                        [...prevDisplayUrl, innerThing]
                                    )
                                }
                            })
                        })
                        .catch(error => console.error('Error getting shared links', error))
                })
            })
            .catch(error => console.log('error listing files...'));
    }

    const setupContext = () => {
        setContext(designContext('services'));
    }

    useEffect(() => {
        if (!dataLoaded.context && !dataLoaded.urls){
            setupServices();
            setupContext();
        }

        return () => {
            if (!dataLoaded.context && !dataLoaded){
                setDataLoaded({context: true, urls: true})
            }
        };
    }, []);

    return (
        <div className={'service-container'}>
            <div className={'service-mid-container'}>
                <Menu/>
                <h1>Our Services to You</h1>
                <div className={'service-flexbox'}>
                    {context.map((el, index) =>
                        <div key={index} className={'service-webCard-container'}>
                            <WebCard image={provideUrl(displayUrl, el.image)} headline={el.title} context={el.context}/>
                        </div>
                    )}
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default withContext(Services);