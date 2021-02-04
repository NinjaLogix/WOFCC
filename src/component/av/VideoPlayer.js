import React, { useState, useEffect } from 'react';
import Plyr from 'plyr';
import { Wrapper, Video } from './style/VideoPlayerStyle';

export const VideoPlayer = ({ vid }) => {
  const [type, setType] = useState(undefined);
  const [url, setUrl] = useState(undefined);

  //eslint-disable-next-line no-unused-vars
  const player = new Plyr('#wofcc_live_recent');
  const resolutions = ['720']; // others -> 576, 720, 1080

  const Iframe = ({ frame }) => (
    <div dangerouslySetInnerHTML={{ __html: frame ? frame : `` }} />
  );

  useEffect(() => {
    console.log('vid', vid);

    const [videos] = vid;

    console.log('url', videos);

    if (typeof vid === `string`) {
      setType('iframe');
      setUrl(vid);
    }

    if (typeof vid === `object`) {
      const [url] = vid;
      console.log('url', url);

      setType('url');
      setUrl(url.url);
    }
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
