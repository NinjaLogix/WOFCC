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
  VideoRight,
  SmallPadding,
} from './style/LandingStyle';
import { InfoConf } from '../../component/info';
import { VideoPlayer } from '../../component/av/VideoPlayer';
import { config } from '../../config/config';
import { smallWofccLogo, LandingBackground } from '../../assets';
import moment from 'moment';
import { Typography } from '@material-ui/core';

//todo -> mobile:text on service time needs to scale correctly
export const Landing = function (props) {
  const [api, setApi] = useContext(WofccContext);

  const [location, setLocation] = useState();
  const [times, setTimes] = useState({});
  const [carousel, setCarousel] = useState();
  const [av, setAV] = useState();
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
            t => t.type[0] === 'worship_service'
          )[0],
          bible_study: location[0].times.filter(
            t => t.type[0] === 'bible_study'
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

  const getLatestAv = () => av[av.length - 1];

  const getReleventAv = () => {
    const latest = getLatestAv();

    if (latest.videoDetails)
      return <VideoPlayer vid={latest.videoDetails[0]} />;

    if (latest.audioDetails)
      return <AudioPlayer track={latest.audioDetails[0]} />;
  };

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

      <WelcomeBox>
        <WelcomeLeft />

        <WelcomeRight>
          <span>
            <Typography
              gutterBottom
              variant={'h1'}
              component={'h1'}
              align={'center'}>
              Come as you are
            </Typography>

            {times.worship_service && (
              <SmallPadding>
                <Typography
                  gutterBottom
                  variant={'h3'}
                  component={'h3'}
                  align={'center'}>
                  Service via{' '}
                  <a
                    href={
                      times.worship_service.url ? times.worship_service.url : ''
                    }>
                    FaceBook Live
                  </a>
                  @ {times.worship_service.time} on{' '}
                  {
                    moment()
                      .day(times.worship_service.weekdays[0])
                      .toString()
                      .split(' ')[0]
                  }
                </Typography>
              </SmallPadding>
            )}

            {times.bible_study && (
              <SmallPadding>
                <Typography
                  gutterBottom
                  variant={'h3'}
                  component={'h3'}
                  align={'center'}>
                  Bible Study via{' '}
                  <a href={times.bible_study.url ? times.bible_study.url : ''}>
                    Zoom
                  </a>
                  @ {times.bible_study.time} on{' '}
                  {
                    moment()
                      .day(times.bible_study.weekdays[0])
                      .toString()
                      .split(' ')[0]
                  }
                </Typography>
              </SmallPadding>
            )}
          </span>

          <span>
            <Typography
              gutterBottom
              variant={'h1'}
              component={'h1'}
              align={'center'}>
              You can find us here!
            </Typography>

            {location && (
              <SmallPadding>
                <Typography
                  gutterBottom
                  variant={'h3'}
                  component={'h3'}
                  align={'center'}>
                  {location.address}
                </Typography>
              </SmallPadding>
            )}

            {location && (
              <SmallPadding>
                <Typography
                  gutterBottom
                  variant={'h3'}
                  component={'h3'}
                  align={'center'}>
                  {location.address_cont}
                </Typography>
              </SmallPadding>
            )}
          </span>
        </WelcomeRight>
      </WelcomeBox>

      {carousel && (
        <CarouselWrapper>
          <Carousel playlists={carousel} />
        </CarouselWrapper>
      )}

      {av && (
        <VideoWrapper>
          <VideoLeft>{getReleventAv()}</VideoLeft>

          <VideoRight>
            <section>
              <Typography
                gutterBottom
                align={'center'}
                variant={'h1'}
                component={'h1'}>
                Word of Faith Facebook Live!
              </Typography>
            </section>

            <section>
              <Typography
                gutterBottom
                align={'center'}
                variant={'h3'}
                component={'h3'}>
                {getLatestAv().title}
              </Typography>
            </section>

            <section>
              <Typography
                gutterBottom
                align={'center'}
                variant={'h3'}
                component={'h3'}>
                {getLatestAv().date}
              </Typography>
            </section>
          </VideoRight>
        </VideoWrapper>
      )}
      <Footer />
    </Wrapper>
  );
};
