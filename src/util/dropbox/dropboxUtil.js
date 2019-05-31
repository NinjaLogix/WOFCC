import {dropBox, fixUrl} from "../../script/appContext";

export const handleSharedLink = async (path) => {
    let urls = await dropBox.sharingListSharedLinks({path: path});

    if (urls.links.length === 0){
        dropBox.sharingCreateSharedLinkWithSettings({
            path: path,
            settings: {requested_visibility: {'.tag': 'public'}}
        });
    }

    return urls.links[0].url;
};

export const provideAudioUrl = () => {
    let audioData = {
        title: '',
        date: '',
        url: ''
    };
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let conf = new XMLHttpRequest();
    conf.open('GET', fixUrl('https://www.dropbox.com/s/tgwjdh9dybne5xn/audio.conf?dl=0'), true);
    conf.onreadystatechange = () => {
        if (conf.readyState === 4 && conf.status === 200){
            const response = conf.responseText.split("\n");
            console.log('response', response);
            const titleSplit = response[0].split(':')[1];
            audioData.title = titleSplit.split('-')[0];
            audioData.date = titleSplit.split('-')[1];
            audioData.url = fixUrl(response[1].split(':')[1] + ':' + response[1].split(':')[2]);
        }
    };
    conf.send(null);

    return audioData;
};
