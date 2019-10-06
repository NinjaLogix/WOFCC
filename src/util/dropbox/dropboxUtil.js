import {dropBox} from "../../component/api";
import {ALT_REGEX} from '../../script/appContext';

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

//! -------------------------------------------------------------> @Depreciated
//* ----------> Carousel Related
export const provideCarouselImages = async () =>{
    const returnArr = [];

    const response = await dropBox.filesListFolder({path: process.env.REACT_APP_CAROUSEL_PATH})

    response.entries.forEach(async (fileName) => {
        const response2 = await dropBox.sharingListSharedLinks({path: fileName.path_display});

        const file = response2.links[0].name.substring(0, response2.links[0].name.indexOf('.'));
        const startDate = new Date(file.split('-')[1]);
        const endDate = new Date(file.split('-')[2]);
        const today = new Date();

        if ((today >= startDate && today < endDate) || (ALT_REGEX.test(file))) {
            returnArr.push(response2.links[0]);
        }
    });

    return returnArr;
};