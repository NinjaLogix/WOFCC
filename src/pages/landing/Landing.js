/*eslint-disable no-unused-vars*/
import React, {useState, useEffect} from 'react';
import {Menu} from '../../component/navigation/menu';
import {Footer} from '../../component/navigation/footer';
import {provideAudioData, handlePageConfig, fixUrl} from '../../util';
import {Carousel} from '../../component/carousel';
import {
    Wrapper, 
    CarouselWrapper,
    Header,
    Title,
    WelcomeBox, 
    WelcomeLeft, 
    WelcomeRight,
    CenterCarousel, 
    VideoWrapper, 
    VideoLeft, 
    VideoRight
} from './LandingStyle';
import {VideoPlayer} from '../../component/av/VideoPlayer';

export const Landing = function(props){
    const [audioData, setAudioData] = useState(null);
    const [context, setContext] = useState({});

    const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;

    useEffect(() => {
        handlePageConfig()
            .then(({data}) => setContext(data))
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

            <WelcomeBox>
                <WelcomeLeft/>

                <WelcomeRight>
                    <span>
                        <h1>Come as you are</h1>
                        <h2>Service starts @ {context.service ? context.service.time : ''}</h2>
                    </span>

                    <span>
                        <h1>You can find us here!</h1>
                        <h2>{context.service ? context.service.addrs1 : ''}</h2><h2> {context.service ? context.service.addrs2 : ''}</h2>
                    </span>
                </WelcomeRight>
            </WelcomeBox>

            <CarouselWrapper>
                <Carousel/>
            </CarouselWrapper>

            {context.vid_url && 
                <VideoWrapper>
                    <VideoLeft>
                        <VideoPlayer vid={context.vid_url}/>
                    </VideoLeft>

                    <VideoRight>
                        <section>
                            <h1>Word of Faith Facebook Live!</h1>
                        </section>

                        <section>
                            <h3>{context.media_ttl}</h3>
                        </section>

                        <section>
                            <h3>{context.media_date}</h3>
                        </section>
                    </VideoRight>
                </VideoWrapper>
            }
            <Footer/>
        </Wrapper>
    )
}