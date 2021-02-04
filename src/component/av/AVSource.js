import React, { useState, useEffect, useContext } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { AudioPlayer } from './AudioPlayer';
import { Typography } from '@material-ui/core';
import {
  AVInfoWrapper,
  AVWrapper,
  Box,
  SocialBanner,
} from './style/AVSourceStyle';
import { WofccContext } from '../context/WofccContext';
import { config } from '../../config/config';
import { Facebook } from '@material-ui/icons';

export const AVSource = () => {
  const [api] = useContext(WofccContext);

  const [avData, setAvData] = useState(undefined);
  const [avComponent, setAvComponent] = useState(undefined);

  useEffect(() => {
    api
      .sanity_query(api.singleton, { query: config.sanity_queries.av })
      .then(response => {
        console.debug('full response', response);
        
        if (Array.isArray(response)) {
          const latest = response[response.length - 1];

          const { videoDetails } = latest;
          const { audioDetails } = latest;

          if (videoDetails)
            setAvComponent([<VideoPlayer vid={videoDetails} />]);

          if (audioDetails)
            setAvComponent([<AudioPlayer track={audioDetails} />]);

          setAvData(latest);
        }
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

        <SocialBanner href={config.faceBookUrl}>
          <Typography display={'inline'} align={'right'} variant={'h4'} color={'textSecondary'}>
            Visit us @
          </Typography>

          <Typography variant={'h4'} color={'textSecondary'}>
            <Facebook style={{fontSize: '3ch'}} />
          </Typography>
        </SocialBanner>
      </AVInfoWrapper>
    </Box>
  );
};
