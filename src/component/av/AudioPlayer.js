import React, {useState} from 'react'
import Plyr from 'plyr'
import {Wrapper, Audio} from './AudioPlayerStyle'
import {fixUrl} from '../../util'

export const AudioPlayer = ({track}) => {
    const [player] = useState(new Plyr('#wofcc_audio_recent'));

    return (
        <Wrapper id={'wofcc_audio_recent'}>
            {console.log('track', track)}
            <Audio controls>
                <source src={fixUrl(track)} type="audio/mp3" />
            </Audio>
        </Wrapper>
    )
}