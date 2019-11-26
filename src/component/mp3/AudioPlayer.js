import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SoundPlayer = props => {
    return(
        <div style={{width: '30vw', textAlign: 'center'}}>
            <h1>A snippet from Sunday</h1>
            <h2>{props.data.title}</h2>
            <h3>{props.data.date}</h3>
            <section style={{width: '37vw', display: 'inline-flex', justifyContent: 'center'}}>
                <ReactAudioPlayer
                    src={props.data.url}
                    controls
                    style={{alignSelf: 'center'}}
                />
            </section>
        </div>
    )
}

export default SoundPlayer;