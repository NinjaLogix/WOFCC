import {dropBox, fixUrl} from "../../script/appContext";

/**
 * @param path
 */
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

/**
 * 
 */
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
            const titleSplit = response[0].split(':')[1];
            audioData.title = titleSplit.split('-')[0];
            audioData.date = titleSplit.split('-')[1];
            audioData.url = fixUrl(response[1].split(':')[1] + ':' + response[1].split(':')[2]);
        }
    };
    conf.send(null);

    return audioData;
};

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
export const compareCarousel = (a,b) => {
    const compA = a.name.toUpperCase();
    const compB = b.name.toUpperCase();

    let comparison = 0;

    if (compA > compB){
        comparison = 1;
    } else if (compA < compB) {
        comparison = -1;
    }

    return comparison;
};

/**
 * Provides all images needed for the media
 */
export const provideMinistriesImages = async () => {
    let displayUrl = [];

    try{
        const {entries} = await dropBox.filesListFolder({path: process.env.REACT_APP_MINISTRIES_PATH});

        for (let entry of entries){
            const entryLinks = await dropBox.sharingListSharedLinks({path: entry.path_display});
            
            entryLinks.links.forEach(innerThing => {
                if (innerThing['.tag'] === 'file'){
                    displayUrl.push(innerThing);
                }
            })
        }

        return displayUrl;
        
    } catch (error) {
        console.log('dropboxUtil -> ', error)
    }
}