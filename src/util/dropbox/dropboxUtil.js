import {dropBox} from "../../component/api";

const ALT_REGEX = RegExp(process.env.REACT_APP_REGEX_ALT + new Date().getFullYear());

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

//* --------> General
export const fixUrl = (url) => {
    return url.replace(process.env.REACT_APP_DROPBOX_BAD_URL, process.env.REACT_APP_DROPBOX_GOOD_URL);
};

/**
* Formats the dropbox url for viewing
* @param {*} array 
* @param {*} fileName 
*/
export const provideUrl = (array, fileName) => {
   let found = false;
   for (let i=0; i< array.length && !found; i++) {
       if (array[i].url.includes(fileName)) {
           found = true;
           return array[i].url.replace(process.env.REACT_APP_DROPBOX_BAD_URL, process.env.REACT_APP_DROPBOX_GOOD_URL);
       }
   }
};