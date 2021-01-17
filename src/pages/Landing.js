/*eslint-disable no-unused-vars*/
import React, { useState, useContext, useEffect } from 'react';
import { WofccContext } from '../component/context/WofccContext';
import { Menu } from '../component/navigation/menu';
import { Footer } from '../component/navigation/footer';
import { Carousel } from '../component/carousel';
import { AudioPlayer } from '../component/av/AudioPlayer';
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
  VideoRight,
  SmallPadding,
} from './style/LandingStyle';
import { InfoConf } from '../component/info';
import { VideoPlayer } from '../component/av/VideoPlayer';
import { config } from '../config/config';
import { smallWofccLogo, LandingBackground } from '../assets';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { WelcomeInfo } from '../component/info/WelcomeInfo';
import { AVSource } from '../component/av/AVSource';

export const Landing = function (props) {
  const [api, setApi] = useContext(WofccContext);

  const [location, setLocation] = useState();
  const [times, setTimes] = useState({});
  const [carousel, setCarousel] = useState();
  const [av, setAV] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const lookups = async () => {
      const [location, carousel, av, notes] = await Promise.all([
        api.sanity_query(api.singleton, {
          query: config.sanity_queries.locations,
        }),
        api.sanity_query(api.singleton, {
          query: config.sanity_queries.carousel,
        }),
        api.sanity_query(api.singleton, { query: config.sanity_queries.av }),
        api.sanity_query(api.singleton, {
          query: config.sanity_queries.side_notes,
        }),
      ]);

      if (location[0])
        setTimes({
          worship_service: location[0].times.filter(
            t => t.type[0] === 'worship_service',
          )[0],
          bible_study: location[0].times.filter(
            t => t.type[0] === 'bible_study',
          )[0],
        });

      setLocation(location[0]);
      setCarousel(carousel);
      setAV(av);
      setNotes(notes);

      setApi({ ...api, location: location[0] });
    };

    lookups();
  }, []);

  return (
    <Wrapper>
      {notes.length >= 1 && <InfoConf notes={notes} />}

      <Header backgroundImg={LandingBackground}>
        <Menu />
        <Title>
          <h1>Word of Faith Christian Center</h1>
          <section>
            <img src={smallWofccLogo} alt={'badge'} />
          </section>
        </Title>
      </Header>

      <WelcomeInfo times={times} location={location} />

      {carousel && (
        <CarouselWrapper>
          <Carousel playlists={carousel} />
        </CarouselWrapper>
      )}

      <AVSource av={av} />
      <Footer />
    </Wrapper>
  );
};
