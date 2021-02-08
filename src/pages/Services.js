import React, { useState, useEffect, useContext } from 'react';
import { config } from '../config/config';
import { WofccContext } from '../component/context/WofccContext';
import { ServicesBackground } from '../assets';
import { Wrapper, Context, Header, TitleBanner } from './style/SharedPageStyle';
import { InfoCard } from '../component/info';
import { Typography } from '@material-ui/core';

export const Services = () => {
  const [api] = useContext(WofccContext);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      const data = await api.sanity_query(api.singleton, {
        query: config.sanity_queries.services,
      });
      setServices(data);
    };

    getServices();
  }, []);

  return (
    <Wrapper>
      <Header backgroundImg={ServicesBackground}>
        <TitleBanner>
          <Typography gutterBottom variant={'h2'}>
            Our Services to You
          </Typography>
        </TitleBanner>
      </Header>

      <Context>
        {services.map((e, index) => (
          <InfoCard
            key={index}
            src={e.imageUrl}
            title={e.title}
            text={e.description}
          />
        ))}
      </Context>
    </Wrapper>
  );
};
