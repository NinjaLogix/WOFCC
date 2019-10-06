import axios from 'axios';
import {fixUrl} from '../dropbox/dropboxUtil';

export const provideAudioData = async () => {
    const audioData = {};
    
    const response = await axios.get(fixUrl(process.env.REACT_APP_AUDIO_URL));
    const altered = response.data.split('\n');

    audioData.title = altered[0].split('-')[0].substring(6).trim();
    audioData.date = altered[0].split('-')[1].trim();
    audioData.url = fixUrl(altered[1].substring(4));

    return audioData;
}