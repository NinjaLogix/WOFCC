import React, { useState, useEffect, useContext } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { AudioPlayer } from './AudioPlayer';
import { Grid, Typography } from '@material-ui/core';
import {
  AVInfoWrapper,
  AVWrapper,
  Box,
  SocialBanner,
} from './style/AVSourceStyle';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';

export const AVSource = () => {
  const [api] = useContext(WofccContext);

  const [avData, setAvData] = useState(undefined);
  const [avComponent, setAvComponent] = useState(undefined);

  useEffect(() => {
    api
      .sanity_query(api.singleton, { query: config.sanity_queries.av })
      .then(response => {
        const latest = response[response.length - 1];

        const { videoDetails } = latest;
        const { audioDetails } = latest;

        if (videoDetails) setAvComponent([<VideoPlayer vid={videoDetails} />]);

        if (audioDetails)
          setAvComponent([<AudioPlayer track={audioDetails} />]);

        setAvData(latest);
      })
      .catch();
  }, []);

  return (
    <Box>
      <AVWrapper>{avComponent}</AVWrapper>

      <AVInfoWrapper>
        {avData && (
          <Typography
            gutterBottom
            align={'center'}
            variant={'h3'}
            component={'h3'}
          >
            {avData.title}
          </Typography>
        )}

        {avData && (
          <Typography
            gutterBottom
            align={'center'}
            variant={'h3'}
            component={'h3'}
          >
            {avData.date}
          </Typography>
        )}

        <SocialBanner>
          <Typography gutterBottom align={'center'} variant={'h4'}>
            Facebook
          </Typography>
        </SocialBanner>
      </AVInfoWrapper>
    </Box>
  );
};
