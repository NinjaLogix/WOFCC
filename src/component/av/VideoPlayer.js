import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import { Wrapper, Video } from './style/VideoPlayerStyle';
import { getIframeSettings } from '../../util';
import { config } from '../../config/config';

export const VideoPlayer = ({ vid }) => {
  const [type, setType] = useState(undefined);
  const [url, setUrl] = useState(undefined);

  //eslint-disable-next-line no-unused-vars
  const player = new Plyr('#wofcc_live_recent');
  const resolutions = ['720']; // others -> 576, 720, 1080

  const Iframe = ({ frame }) => (
    <iframe
      title={'wofcc_vid'}
      {...getIframeSettings(
        frame,
        !config.isMobile ? 230 : 560,
        !config.isMobile ? 175 : 315,
      )}
    />
  );

  const setSource = thing => {
    console.log('whole thing', thing);

    const { embed, url, videoUrl } = thing;

    if (!!embed) {
      console.log('using embed...');

      setType('iframe');
      setUrl(embed);

      return true;
    }

    if (!!url) {
      console.log('using url...');

      setType('url');
      setUrl(url);

      return true;
    }

    if (!!videoUrl) {
      console.log('using uploaded file...');

      setType('url');
      setUrl(videoUrl);

      return true;
    }

    return false;
  };

  /* 
  todo 
   -> this isn't currently setup to handle more than one video
   -> use Slider to allow mutiple videos
   */
  useEffect(() => {
    const [videos] = vid;
    const { embed, url, videoUrl } = videos;

    if (setSource({ embed, url, videoUrl }))
      console.log('video details set...');
    else console.log('there was an issue setting the video...');
  }, []);

  return (
    <Wrapper id={'wofcc_live_recent'}>
      {type === `iframe` && <Iframe frame={url} />}

      {type === 'url' && (
        <Video controls crossorigin playsinline>
          {resolutions.map((res, index) => (
            <source key={index} src={url} type='video/mp4' size={res} />
          ))}
          <a href={url} download>
            Download
          </a>
        </Video>
      )}
    </Wrapper>
  );
};
