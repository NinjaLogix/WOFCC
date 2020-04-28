import React, {useState, useEffect} from 'react';
import {SoundPlayer} from "../../component/mp3";
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData, handlePageConfig, fixUrl} from '../../util';
import {Carousel} from '../../component/carousel';
import {Wrapper, CarouselWrapper, Header, Title, CarouselBox, AudioLanding, AudioBox, CenterCarousel, VideoWrapper} from './LandingStyle';
import {VideoPlayer} from '../../component/av/VideoPlayer';

export const Landing = function(props){
    const [audioData, setAudioData] = useState(null);
    const [context, setContext] = useState({});

    const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;

    useEffect(() => {
        handlePageConfig()
            .then(response => setContext(response.data))
            .catch();

        provideAudioData()
            .then(response => setAudioData(response))
            .catch(error => console.log('error getting audio data', error));
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

            {context.vid_url && 
                <VideoWrapper>
                    <h1>Check out our latest service!</h1>
                    <VideoPlayer vid={context.vid_url}/>
                </VideoWrapper>
            }
            <Footer/>
        </Wrapper>
    )
}