import React, { useEffect, useState, useContext } from 'react';
import { WofccContext } from '../context/WofccContext';
import { StyledCard } from './style/SharedCardStyle';
import { CardContent, Typography } from '@material-ui/core';
import { InfoFlex } from './style/ServiceCardStyle';
import moment from 'moment';

export const ServiceCard = () => {
  const [api] = useContext(WofccContext);

  const [worship, setWorship] = useState(undefined);
  const [study, setStudy] = useState(undefined);

  useEffect(() => {
    if (api.location) {
      const { times } = api.location;

      const [worship] = times.filter(e => e.type[0] === 'worship_service');
      setWorship(worship);

      const [study] = times.filter(e => e.type[0] === 'bible_study');
      setStudy(study);
    }
  }, [api.location]);

  return (
    <StyledCard>
      <CardContent>
        <InfoFlex>
          <section>
            <Typography gutterBottom variant={'h3'} align={'center'}>
              Come as you are
            </Typography>

            {worship && (
              <Typography gutterBottom variant={'h4'} align={'center'}>
                Service via <a href={worship.url}>FaceBook Live</a>@{' '}
                {worship.time} on{' '}
                {moment().day(worship.weekdays[0]).toString().split(' ')[0]}
              </Typography>
            )}
          </section>

          <section>
            <Typography variant={'h4'} align={'center'}>
              -
            </Typography>
            {study && (
              <Typography gutterBottom variant={'h4'} align={'center'}>
                {study.description}@ {study.time} on{' '}
                {moment().day(study.weekdays[0]).toString().split(' ')[0]}
              </Typography>
            )}

            {study && (
              <Typography gutterBottom variant={'h4'} align={'center'}>
                {study.notes}
              </Typography>
            )}
          </section>
        </InfoFlex>
      </CardContent>
    </StyledCard>
  );
};
