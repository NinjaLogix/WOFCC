import React, {useState, useEffect} from 'react';
import {SoundPlayer} from "../../component/mp3";
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData, providePageConfig} from '../../util';
import {WofccCarousel} from '../../component/carousel';
import {Wrapper, Header, Title, CarouselBox, AudioLanding, AudioBox, CenterCarousel} from './LandingStyle';

export const Landing = function(props){
    const [audioData, setAudioData] = useState(null);
    const [config, setConfig] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;

    useEffect(() => {
        if (!loaded){
            provideAudioData()
                .then(response => setAudioData(response))
                .catch(error => console.log('error getting audio data', error));
    
            providePageConfig()
                .then(response => setConfig(response))
                .catch(error => console.log('service error --x trying to get page config'));
        }
        
        return () => {
            if (!loaded){
                setLoaded(true);
            }
        }
    }, []);

    return(
        <Wrapper>
            <Header>
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
                        <h2>Service Time @ 9:45am</h2>
                        <h2>Find Us @</h2>
                        <h3>1881 Nail Rd suite D</h3>
                        <h3>Horn Lake, MS 38637</h3>
                    </AudioBox>
                </AudioLanding>
            </CarouselBox>

            <CenterCarousel style={{margin: 'auto'}}>
                <WofccCarousel/>
            </CenterCarousel>

            <Footer/>
        </Wrapper>
    )
}