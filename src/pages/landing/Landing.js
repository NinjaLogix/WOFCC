/*eslint-disable no-unused-vars*/
import React, {useState, useContext, useEffect} from 'react'
import {WofccContext} from '../../component/context/WofccContext'
import {Menu} from '../../component/navigation/menu'
import {Footer} from '../../component/navigation/footer'
import {Carousel} from '../../component/carousel'
import {AudioPlayer} from '../../component/av/AudioPlayer'
import {
    Wrapper, 
    CarouselWrapper,
    Header,
    Title,
    WelcomeBox, 
    WelcomeLeft, 
    WelcomeRight,
    VideoWrapper, 
    VideoLeft, 
    VideoRight} from './LandingStyle'
import {VideoPlayer} from '../../component/av/VideoPlayer'
import {config} from '../../config/config'
import {
    smallWofccLogo,
    LandingBackground} from '../../assets'

export const Landing = function(props){
    const [api, setApi] = useContext(WofccContext);

    const [location, setLocation] = useState();
    const [carousel, setCarousel] = useState();
    const [av, setAV] = useState();

    useEffect(() => {
        const lookups = async () => {
            const [location, carousel, av] = await Promise.all([
              api.sanity_query(api.singleton, {query:config.sanity_queries.locations}),
              api.sanity_query(api.singleton, {query:config.sanity_queries.carousel}),
              api.sanity_query(api.singleton, {query:config.sanity_queries.av})
            ]);

            setLocation(location[0]);
            setCarousel(carousel);
            setAV(av);

            setApi({...api, location: location[0]});
        }

        lookups();
    }, []);

    const getLatestAv = () => av[av.length - 1];

    const getReleventAv = () => {
        const latest = getLatestAv();

        if (latest.videoDetails)
            return <VideoPlayer vid={latest.videoDetails[0]}/>

        if (latest.audioDetails)
            return <AudioPlayer track={latest.audioDetails[0]}/>
    }

    return(
        <Wrapper>
            <Header backgroundImg={LandingBackground}>
                <Menu/>
                <Title>
                    <h1>Word of Faith Christian Center</h1>
                    <section>
                        <img src={smallWofccLogo} alt={'badge'}/>
                    </section>
                </Title>
            </Header>

            <WelcomeBox>
                <WelcomeLeft/>

                <WelcomeRight>
                    <span>
                        <h1>Come as you are</h1>

                        {location &&
                            <section>
                                <h3>Service starts @ {location.service_time}</h3>
                            </section>
                        }
                    </span>

                    <span>
                        <h1>You can find us here!</h1>

                        {location &&
                            <section>
                                <h3>{location.address}</h3>
                                <h3>{location.address_cont}</h3>
                            </section>
                        }
                    </span>
                </WelcomeRight>
            </WelcomeBox>

            {carousel &&
                <CarouselWrapper>
                    <Carousel playlists={carousel}/>
                </CarouselWrapper>
            }

            {av &&
                <VideoWrapper>
                    <VideoLeft>
                        {getReleventAv()}
                    </VideoLeft>

                    <VideoRight>
                        <section>
                            <h1>Word of Faith Facebook Live!</h1>
                        </section>

                        <section>
                            <h3>{getLatestAv().title}</h3>
                        </section>

                        <section>
                            <h3>{getLatestAv().date}</h3>
                        </section>
                    </VideoRight>
                </VideoWrapper>
            }
            <Footer/>
        </Wrapper>
    )
}