import React, { useState, useEffect, useContext } from 'react';
import { WofccContext } from '../context/WofccContext';
import { Grid, Typography } from '@material-ui/core';
import { Box, Wrapper } from './style/WelcomeInfoStyle';
import { SmallPadding } from '../../pages/style/LandingStyle';
import moment from 'moment';
import { config } from '../../config/config';
import { AVSource } from '../av/AVSource';

export const WelcomeInfo = () => {
  const [api] = useContext(WofccContext);

  const [times, setTimes] = useState();
  const [worship, setWorship] = useState(undefined);
  const [study, setStudy] = useState(undefined);
  const [location, setLocation] = useState();

  useEffect(() => {
    const { location } = api;

    if (location) {
      const { times } = api.location;

      const [worship] = times.filter(e => e.type[0] === 'worship_service');
      setWorship(worship);

      const [study] = times.filter(e => e.type[0] === 'bible_study');
      setStudy(study);

      const { address, address_cont } = api.location;

      setLocation({ address, address_cont });
    }
  }, [api.location]);

  return (
    <Wrapper>
      <Typography variant={'h3'} align={'center'}>
        Our Last Service
      </Typography>

      <AVSource />

      <Typography variant={'h3'} align={'center'}>
        A Little About Us
      </Typography>
    </Wrapper>
    /*<Box container direction={config.isMobile ? 'column' : 'row'}>
      <Grid item xs direction={'column'}>
        <Typography
          gutterBottom
          variant={'h1'}
          component={'h1'}
          align={'center'}
        >
          Come as you are
        </Typography>

        {times && (
          <SmallPadding>
            <Typography
              gutterBottom
              variant={'h3'}
              component={'h3'}
              align={'center'}
            >
              Service via{' '}
              <a
                href={
                  times.worship_service.url ? times.worship_service.url : ''
                }
              >
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

        {times && (
          <SmallPadding>
            <Typography
              gutterBottom
              variant={'h3'}
              component={'h3'}
              align={'center'}
            >
              {times.bible_study.description}@ {times.bible_study.time} on{' '}
              {
                moment()
                  .day(times.bible_study.weekdays[0])
                  .toString()
                  .split(' ')[0]
              }
            </Typography>

            <Typography
              gutterBottom
              variant={'h3'}
              component={'h3'}
              align={'center'}
            >
              {times.bible_study.notes}
            </Typography>
          </SmallPadding>
        )}
      </Grid>

      <Grid item xs direction={'column'}>
        <Typography
          gutterBottom
          variant={'h1'}
          component={'h1'}
          align={'center'}
        >
          You can find us here!
        </Typography>

        {location && (
          <SmallPadding>
            <Typography
              gutterBottom
              variant={'h3'}
              component={'h3'}
              align={'center'}
            >
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
              align={'center'}
            >
              {location.address_cont}
            </Typography>
          </SmallPadding>
        )}
      </Grid>
    </Box>*/
  );
};
