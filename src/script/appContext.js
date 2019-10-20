import uuidv1 from "uuid";
import React from 'react';
import Dropbox from 'dropbox';
import { Link } from 'react-router-dom';

const bishopImg = 'Bishop-KAB-large.jpg';
export const pblcImg = 'PBLC-3.png';
const crossImg = 'b6c8eca1-0910-4fd9-b154-849aef0af522.png';
const bibleHistoryImg = 'Bible_History.jpg';
//const logoSmallImg = 'badge_small.png';
const logoLargeImg = 'logo_large.png';
export const facebookImg = 'Facebook_Home_logo_old.svg.png';
//const wdfImg = 'WDF_1461291.jpg';
//const freepik12Img = '12.jpg';
const freepik28Img = '28.jpg';
const freepik55Img = '55.jpg';
const freepik397Img = '397.jpg';
//export const freepik1024Img = '1024.jpg';
const freepik1773Img = '1773.jpg';
const freepik1869Img = '1869.jpg';
//const freepik2144Img = '2144.jpg';
const freepik2159Img = '2159.jpg';
const freepik3893Img = '3893.jpg';
const freepik11405Img = '11405.jpg';
//const freepik102434Img = '102434-OLS3V2-932.jpg';
const freepik272299Img = '272299-P5OLTS-748.jpg';
//const freepik768832Img = '768832.jpg';
//const freepikoccn5z0Img = 'OCCN5Z0.jpg';
//const freepikodrax20Img = 'ODRAX20.jpg';
//const freepikogdrvdoImg = 'OGDRVD0.jpg';
const freepikoq5kaw0Img = 'OQ5KAW0.jpg';

let date = new Date();

export const FILE_REGEX = RegExp(process.env.REACT_APP_REGEX_FILE);
export const EXT_REGEX = RegExp(process.env.REACT_APP_REGEX_EXT);
export const ALT_REGEX = RegExp(process.env.REACT_APP_REGEX_ALT + date.getFullYear());

const githubUrl = process.env.REACT_APP_GITHUB_COPYRIGHT_URL;
const githubLabel = process.env.REACT_APP_GITHUB_COPYRIGHT_LABEL;
const githubText = process.env.REACT_APP_GITHUB_COPYRIGHT_TEXT;
export const copyright = <p> Copyright ©{(new Date().getFullYear())}<br/>
                             Branden Boyington<br/>
                             <a className="github-button" href={githubUrl} aria-label={githubLabel}>{githubText}</a>
                         </p>;

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

export const FacebookUrl = process.env.REACT_APP_FACEBOOK_URL;
export const landingBackground = process.env.REACT_APP_LANDING_BACKGROUND_URL;
export const LogoSmall = process.env.REACT_APP_LOGO_SMALL_URL;
export const LogoLarge = process.env.REACT_APP_LOGO_LARGE_URL;

export const freePikCredits = (page) => {
    switch(page){
        case 'landing':
            return [];
        case 'about_us':
            return [{key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}];
        case 'services':
            return [
                {key: uuidv1(), img_desc: 'New Members Classes', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img_desc: 'Childrens Ministry', link_text: 'Designed by brgfx / Freepik'},
                {key: uuidv1(), img_desc: 'Worship Service', link_text: 'Designed by onlyyouqj / Freepik'},
                {key: uuidv1(), img_desc: 'Corporate Confession', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Bedneyimages / Freepik'},
                {key: uuidv1(), img_desc: 'Pastoral Care', link_text: 'Designed by ijeab / Freepik'}
            ];
        case 'directions':
            return [{key: uuidv1(), img_desc: 'green_background', link_text: 'Designed by Freepik'}];
        case 'contact_us':
            return [{key: uuidv1(), img_desc: 'background', link_text: 'Designed by GarryKillian / Freepik'}];
        case 'ministries':
            return [{key: uuidv1(), img_desc: 'Children’s Ministry', link_text: 'Designed by brgfx / Freepik'},
                    {key: uuidv1(), img_desc: 'Media Ministry', link_text: 'Designed by jcomp / Freepik'},
                    {key: uuidv1(), img_desc: 'Hospitality', link_text: 'Designed by Mrsiraphol / Freepik'},
                    {key: uuidv1(), img_desc: 'Couples in covenant', link_text: 'Designed by Freepic.diller / Freepik'},
                    {key: uuidv1(), img_desc: 'Youth Ministry', link_text: 'Designed by Kjpargeter / Freepik'},
                    {key: uuidv1(), img_desc: 'Greeters', link_text: 'Designed by Freepik'},
                    {key: uuidv1(), img_desc: 'bridge connectors', link_text: 'Designed by Vectorarte / Freepik'},
                    {key: uuidv1(), img_desc: 'free worshipers', link_text: 'Designed by kjpargeter / Freepik'},
                    {key: uuidv1(), img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}
            ];
        default:
    }
};