import uuidv1 from "uuid";

export const getLinks = (page) => {
    switch(page){
        case 'landing':
            return [];
        case 'about_us':
            return [{key: uuidv1(), img: '', img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}];
        case 'services':
            return [
                {key: uuidv1(), img: '28.jpg', img_desc: 'New Members Classes', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img: '11405.jpg', img_desc: 'Childrens Ministry', link_text: 'Designed by brgfx / Freepik'},
                {key: uuidv1(), img: '1869.jpg', img_desc: 'Worship Service', link_text: 'Designed by onlyyouqj / Freepik'},
                {key: uuidv1(), img: '12.jpg', img_desc: 'Corporate Confession', link_text: 'Designed by ijeab / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'background', link_text: 'Designed by Bedneyimages / Freepik'},
                {key: uuidv1(), img: '397.jpg', img_desc: 'Pastoral Care', link_text: 'Designed by ijeab / Freepik'}
            ];
        case 'directions':
            return [{key: uuidv1(), img: '', img_desc: 'green_background', link_text: 'Designed by Freepik'}];
        case 'contact_us':
            return [{key: uuidv1(), img: '', img_desc: 'background', link_text: 'Designed by GarryKillian / Freepik'}];
        case 'ministries':
            return [
                {key: uuidv1(), img: '', img_desc: 'Children’s Ministry', link_text: 'Designed by brgfx / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'Media Ministry', link_text: 'Designed by Jannoon028 / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'Hospitality', link_text: 'Designed by Mrsiraphol / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'Couples in covenant', link_text: 'Designed by Freepic.diller / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'Youth Ministry', link_text: 'Designed by Kjpargeter / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'Greeters', link_text: 'Designed by Freepik'},
                {key: uuidv1(), img: '', img_desc: 'bridge connectors', link_text: 'Designed by Vectorarte / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'free worshipers', link_text: 'Designed by kjpargeter / Freepik'},
                {key: uuidv1(), img: '', img_desc: 'background', link_text: 'Designed by Kjpargeter / Freepik'}
            ];
        default:
    }
};

export const getServices = () => {
    return [
        {key: uuidv1(), image: '28.jpg', title: 'New Members Classes', context: '4 Classes Total<br/><br/>by appointment in the Augusta Room.'},
        {key: uuidv1(), image: '12.jpg', title: 'Corporate Confession', context: 'Sunday’s from 9:30am to 9:45am'},
        {key: uuidv1(), image: '1869.jpg', title: 'Worship Service', context: 'Sundays @ 9.45am<br/>First Sundays: <br/>Holy Communion & Mission'},
        {key: uuidv1(), image: '11405.jpg', title: 'Childrens Ministry', context: '2nd & 3rd Sunday’s @ 9:45am in the Augusta Room<br/>Not held on 1st or 5th Sundays ages 5 - 11'},
        {key: uuidv1(), image: '397.jpg', title: 'Pastoral Care', context: '24/7 365! <br/>Just Call (769) 232-6457 or email wofccsouthaven@gmail.com'}
    ];
};