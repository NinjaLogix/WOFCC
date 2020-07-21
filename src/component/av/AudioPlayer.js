/*eslint-disable no-unused-vars*/
import React, { useState } from 'react';
import Plyr from 'plyr';
import { Wrapper, Audio } from './style/AudioPlayerStyle';

export const AudioPlayer = (track) => {
  const [player] = useState(new Plyr('#wofcc_audio_recent'));
  const [url] = useState(track.audioUrl);

  return (
    <Wrapper id={'wofcc_audio_recent'}>
      <Audio controls>
        <source src={url} type="audio/mp3" />
      </Audio>
    </Wrapper>
  );
};
