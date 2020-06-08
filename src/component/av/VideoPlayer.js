/*eslint-disable no-unused-vars*/
import React, {useState} from 'react'
import Plyr from 'plyr'
import {Wrapper, Video} from './VideoPlayerStyle'

export const VideoPlayer = ({vid}) => {
    const [player] = useState(new Plyr('#wofcc_live_recent'));
    const [url] = useState(vid.videoUrl);
    const [resolutions] = useState(['720']); // other576, 720, 1080

    return (
        <Wrapper id={'wofcc_live_recent'}>
            <Video controls crossorigin playsinline>
              {resolutions.map(res => <source src={url} type="video/mp4" size={res}/>)}
              <a href={url} download>Download</a>
            </Video>
        </Wrapper>
    )
}