import React, { useState, useEffect, useContext } from 'react';
import { InfoCard } from '../component/info';
import { Wrapper, Context, Header, TitleBanner } from './style/SharedPageStyle';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';
import { AboutBackground } from '../assets';
import { Typography } from '@material-ui/core';

export const Ministries = () => {
  const [api] = useContext(WofccContext);
  const [ministries, setMinistries] = useState([]);

  useEffect(() => {
    const getMinistries = async () => {
      const data = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.ministries,
      });

      setMinistries(data);
    };

    getMinistries();
  }, []);

  return (
    <Wrapper>
      <Header backgroundImg={AboutBackground}>
        <TitleBanner>
          <Typography gutterBottom variant={'h1'} component={'h1'}>
            WOFCC - Southaven
          </Typography>
          <Typography gutterBottom variant={'h3'} component={'h3'}>
            The ministries we currently provide...
          </Typography>
        </TitleBanner>
      </Header>

      <Context>
        {ministries.map(el => (
          <InfoCard
            key={el.key}
            src={el.imageUrl}
            title={el.title}
            text={el.description}
          />
        ))}
      </Context>
    </Wrapper>
  );
};
