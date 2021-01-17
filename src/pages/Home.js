import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, Media } from './style/HomeStyle';
import { WelcomeInfo } from '../component/info/WelcomeInfo';
import { Carousel } from '../component/carousel';
import { AudioPlayer } from '../component/av/AudioPlayer';
import { VideoPlayer } from '../component/av/VideoPlayer';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';

export const Home = () => {
  const [api, setApi] = useContext(WofccContext);

  const [location, setLocation] = useState();
  const [times, setTimes] = useState({});
  const [carousel, setCarousel] = useState([]);
  const [av, setAV] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const lookups = async () => {
      const [location, av, notes] = await Promise.all([
        api.sanity_query(api.singleton, {
          query: config.sanity_queries.locations,
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
      setAV(av);
      setNotes(notes);

      setApi({ ...api, location: location[0] });
    };

    lookups();
  },[])
  return (
    <Wrapper>
      <Media>
        <Carousel />
      </Media>

      <WelcomeInfo />
    </Wrapper>
  );
};