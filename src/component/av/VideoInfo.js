import React, { useState, useEffect } from 'react';
import { VideoPlayer } from './VideoPlayer';
import { AudioPlayer } from './AudioPlayer';
import { Grid, Typography } from '@material-ui/core';
import { Box } from './style/VideoInfoStyle';

export const VideoInfo = ({av}) => {
  const [avData, setAvData] = useState({});
  const [avComponent, setAvComponent] = useState(undefined);

  useEffect(() => {
    console.log('av', av);

    if (av.length > 0) {
      const data = av[av.length - 1];
      const keys = Object.keys(data);
      console.log('keys', keys);

      setAvData(data);

      if (keys.includes('videoDetails'))
        setAvComponent( [<VideoPlayer vid={data.videoDetails[0]} />])

      if (keys.includes('audioDetails'))
        setAvComponent([<AudioPlayer track={data.audioDetails[0]} />])
    }
  }, [av]);

  return (
    <Box container direction={'column'} align={'center'} justifyItems={'center'} spacing={3}>
      <Grid item xs>
        {avComponent}
      </Grid>

      <Grid item xs>
        <Typography
          gutterBottom
          align={'center'}
          variant={'h1'}
          component={'h1'}>
          Word of Faith Facebook Live!
        </Typography>
      </Grid>

        {avData &&
          <Grid item xs>
            <Typography
              gutterBottom
              align={'center'}
              variant={'h3'}
              component={'h3'}>
              {avData.title}
            </Typography>
          </Grid>
        }

        {avData &&
          <Grid item xs>
            <Typography
              gutterBottom
              align={'center'}
              variant={'h3'}
              component={'h3'}>
              {avData.date}
            </Typography>
          </Grid>
        }
    </Box>
  )
}