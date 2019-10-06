import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SoundPlayer = props => {
        return(
            <div className={'audio-box'}>
                <h1>A snippet from Sunday</h1>
                <h2>{props.data.title}</h2>
                <h3>{props.data.date}</h3>
                <ReactAudioPlayer
                    src={props.data.url}
                    controls
                    style={{alignSelf: 'center'}}
                />
            </div>
        )
}

export default SoundPlayer;