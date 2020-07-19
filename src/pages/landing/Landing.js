/*eslint-disable no-unused-vars*/
import React, { useState, useContext, useEffect } from 'react';
import { WofccContext } from '../../component/context/WofccContext';
import { Menu } from '../../component/navigation/menu';
import { Footer } from '../../component/navigation/footer';
import { Carousel } from '../../component/carousel';
import { AudioPlayer } from '../../component/av/AudioPlayer';
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
  VideoRight
} from './style/LandingStyle';
import { InfoConf } from '../../component/info';
import { VideoPlayer } from '../../component/av/VideoPlayer';
import { config } from '../../config/config';
import {
  smallWofccLogo,
  LandingBackground
} from '../../assets';
import moment from 'moment';

export const Landing = function(props) {
  const [api, setApi] = useContext(WofccContext);

  const [location, setLocation] = useState();
  const [times, setTimes] = useState();
  const [carousel, setCarousel] = useState();
  const [av, setAV] = useState();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const lookups = async () => {
      const [location, carousel, av, notes] = await Promise.all([
        api.sanity_query(api.singleton, { query: config.sanity_queries.locations }),
        api.sanity_query(api.singleton, { query: config.sanity_queries.carousel }),
        api.sanity_query(api.singleton, { query: config.sanity_queries.av }),
        api.sanity_query(api.singleton, { query: config.sanity_queries.side_notes })
      ]);

      const e = {
        worship_service: location[0].times.filter(t => t.type[0] === 'worship_service')[0],
        bible_study: location[0].times.filter(t => t.type[0] === 'bible_study')[0]
      }

      setLocation(location[0]);
      setTimes(e)
      setCarousel(carousel);
      setAV(av);
      setNotes(notes);

      setApi({ ...api, location: location[0] });
    };

    lookups();
  }, []);

  const getLatestAv = () => av[av.length - 1];

  const getReleventAv = () => {
    const latest = getLatestAv();

    if (latest.videoDetails)
      return <VideoPlayer vid={latest.videoDetails[0]}/>;

    if (latest.audioDetails)
      return <AudioPlayer track={latest.audioDetails[0]}/>;
  };

  return (
    <Wrapper>
      {notes.length >= 1 &&
      <InfoConf notes={notes}/>
      }

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

            {times &&
            <section>
              <h3>Service via <a href={times.worship_service.url ? times.worship_service.url : ''}>FaceBook Live</a>
                @ {times.worship_service.time} on {moment().day(times.worship_service.weekdays[0]).toString().split(' ')[0]}</h3>
            </section>
            }

            {times &&
            <section>
              <h3>Bible Study via <a href={times.bible_study.url ? times.bible_study.url : ''}>Zoom</a>
                @ {times.bible_study.time} on {moment().day(times.bible_study.weekdays[0]).toString().split(' ')[0]}</h3>
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
  );
};