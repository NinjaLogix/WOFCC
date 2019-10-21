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

export const providePageConfig = async () => {
    let page = {conf: ''};

    switch(window.location.pathname){
        case '/':
            page = {conf: process.env.REACT_APP_LANDING_CONF};
            break;
        case '/services':
            page = {conf: process.env.REACT_APP_SERVICES_CONF};
            break;
        case '/directions':
            page = {conf: process.env.REACT_APP_DIRECTIONS_CONF};
            break;
        case '/contact-us':
            page = {conf: process.env.REACT_APP_CONTACT_US_CONF};
            break;
        case '/about-us':
            page = {conf: process.env.REACT_APP_ABOUT_US_CONF};
            break;
        case '/ministries':
            page = {conf: process.env.REACT_APP_MINISTRIES_CONF};
            break;
        case '/events':
            page = {conf: process.env.REACT_APP_RECENT_EVENTS_CONF};
            break;
        default:
            break;
    }

    const response = await axios.get(fixUrl(page.conf));

    const config_lines = response.data.split('\n');

    let final_config = {};

    config_lines.forEach(line => {
        const data = line.split(';');
        const key = data[0];
        const value = data[1];

        final_config[key] = value;
    })

    return final_config;
}