import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Box } from './style/WelcomeInfoStyle';
import { SmallPadding } from '../../pages/style/LandingStyle';
import moment from 'moment';
import { config } from '../../config/config';

export const WelcomeInfo = ({ times, location }) => {
  return (
    <Box container direction={config.isMobile ? 'column' : 'row'}>
      <Grid item xs direction={'column'}>
        <Typography
          gutterBottom
          variant={'h1'}
          component={'h1'}
          align={'center'}
        >
          Come as you are
        </Typography>

        {times.worship_service && (
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

        {times.bible_study && (
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
    </Box>
  );
};
