import React, { useContext, useEffect, useState } from 'react';
import { Wrapper, Media } from './style/HomeStyle';
import { WelcomeInfo } from '../component/info/WelcomeInfo';
import { Carousel } from '../component/carousel';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';

export const Home = () => {
  const [api, setApi] = useContext(WofccContext);

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    api.sanity_query(api.singleton, {
      query: config.sanity_queries.side_notes,
    })
      .then()
      .catch();
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