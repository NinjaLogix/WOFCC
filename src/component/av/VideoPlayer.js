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
    if (typeof vid === `string`) {
      setType('iframe');
      setUrl(vid);
    }

    if (typeof vid === `object` && Object.keys(vid).includes('videoDetails')) {
      const [url] = vid.videoDetails;
      console.log('url', url);

      setType('url');
      setUrl(url);
    }

    //remove after testing
    setType('iframe');
    setUrl(
      `<iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2FWordOfFaithSouthaven%2Fvideos%2F730344167599688%2F&show_text=false&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`,
    );
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
