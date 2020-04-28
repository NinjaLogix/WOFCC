/*eslint-disable no-unused-vars*/
import React, {useState} from 'react';
import Plyr from 'plyr';
import {Wrapper, Video} from './VideoPlayerStyle';
import {fixUrl} from '../../util';

export const VideoPlayer = ({vid}) => {
    const [player] = useState(new Plyr('#wofcc_live_recent'));

    return (
        <Wrapper id={'wofcc_live_recent'}>
            <Video controls crossorigin playsinline>
                {/* <source src={fixUrl(vid)} type="video/mp4" size="576"/> */}
                <source src={fixUrl(vid)} type="video/mp4" size="720"/>                
                {/* <source src={fixUrl(vid)} type="video/mp4" size="1080"/>    */}
                
                <a href={vid} download>Download</a>
            </Video>
        </Wrapper>
    )
}