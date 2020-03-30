import React, {useState, useEffect} from 'react';
import {SoundPlayer} from "../../component/mp3";
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData, providePageConfig, handlePageConfig, fixUrl} from '../../util';
import {Carousel} from '../../component/carousel';
import {Wrapper, CarouselWrapper, Header, Title, CarouselBox, AudioLanding, AudioBox, CenterCarousel} from './LandingStyle';

export const Landing = function(props){
    const [audioData, setAudioData] = useState(null);
    const [context, setContext] = useState({});
    const [loaded, setLoaded] = useState(false);

    const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;

    const setupContext = () => {
        handlePageConfig()
            .then(response => {
                console.log('context', response.data)
                setContext(response.data)
            })
            .catch();
    };

    useEffect(() => {
        if (!loaded){
            setupContext();
            provideAudioData()
                .then(response => setAudioData(response))
                .catch(error => console.log('error getting audio data', error));
        }
        
        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    return(
        <Wrapper>
            <Header backgroundImg={context.header_img ? fixUrl(context.header_img) : ''}>
                <Menu/>
                <Title>
                    <h1>Word of Faith Christian Center</h1>
                    <section>
                        <img src={LogoSmall} alt={'badge'}/>
                    </section>
                </Title>
            </Header>

            <CarouselBox>
                <AudioLanding>
                    {audioData && 
                        <SoundPlayer data={audioData}/>
                    }

                    <AudioBox>
                        <h1>Come as you are</h1>
                        <h2>Service Time @ {context.service ? context.service.time : ''}</h2>
                        <h2>Find Us Here At</h2>
                        <h3>{context.service ? context.service.addrs1 : ''}</h3>
                        <h3>{context.service ? context.service.addrs2 : ''}</h3>
                    </AudioBox>
                </AudioLanding>
            </CarouselBox>

            <CarouselWrapper>
                <CenterCarousel>
                    <Carousel/>
                </CenterCarousel>
            </CarouselWrapper>

            <Footer/>
        </Wrapper>
    )
}