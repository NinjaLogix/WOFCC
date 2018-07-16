import uuidv1 from "uuid";

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
            return [
                {key: uuidv1(), img_desc: 'Children’s Ministry', link_text: 'Designed by brgfx / Freepik'},
                {key: uuidv1(), img_desc: 'Media Ministry', link_text: 'Designed by Jannoon028 / Freepik'},
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

export const designContext = (page) => {
    switch(page){
        case 'landing':
            return [];
        case 'about_us':
            return [];
        case 'services':
            return [{key: uuidv1(), image: '28.jpg', title: 'New Members Classes', context: `<p>4 Classes Total by appointment in the Augusta Room.</p>`},
                {key: uuidv1(), image: '12.jpg', title: 'Corporate Confession', context: `<p>Sunday’s<br/>9:30am to 9:45am</p>`},
                {key: uuidv1(), image: '1869.jpg', title: 'Worship Service', context: `<p>Sunday's @ 9.45am<br/>First Sundays: Holy Communion & Mission</p>`},
                {key: uuidv1(), image: '11405.jpg', title: 'Childrens Ministry', context: `<p>2nd & 3rd Sunday's<br/>9:45am in the Augusta Room<br/>Not held on 1st or 5th Sunday's<br/>ages 5 - 11</p>`},
                {key: uuidv1(), image: '397.jpg', title: 'Pastoral Care', context: `<p>24/7 365!<br/>Call (769) 232-6457<br/>Email wofccsouthaven@gmail.com</p>`}];
        case 'directions':
            return [];
        case 'contact_us':
            return [];
        case 'ministries':
            return [];
        default:
            return [];
    }
};

export const latLng = {lat: 34.9868725, long: -90.0680343};

/**
 * key supplied from google maps tutorial
 * https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
 * @type {string}
 */
export const testGoogleApiKey = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';