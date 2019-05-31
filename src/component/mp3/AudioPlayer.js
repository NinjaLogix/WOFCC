import React from 'react';
import {provideAudioUrl} from '../../util';
import ReactAudioPlayer from 'react-audio-player';

const data = provideAudioUrl();
console.log('url', data);

export default class SoundPlayer extends React.Component {
    render(){
        return(
            <div className={'audio-box'}>
                <h1>A snippet from Sunday</h1>
                <h2>{data.title}</h2>
                <h3>{data.date}</h3>
                <ReactAudioPlayer
                    src={data.url}
                    controls
                    style={{alignSelf: 'center'}}
                />
            </div>
        )
    }
}
