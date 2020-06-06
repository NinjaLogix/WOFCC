import {Landing, Services, Directions, ContactUs, AboutUs, Ministries, Events, Credits} from '../pages'
import {GalleryView} from '../component/gallery'
import {Route} from 'react-router-dom'
import React from 'react'

const defaults = {
    isMobile: typeof window.orientation !== 'undefined',
    givingUrl: process.env.REACT_APP_GIVING_URL,
    menuOptions: [
        {title: 'About Us', url: '/about-us'},
        {title: 'Contact Us', url: '/contact-us'},
        {title: 'Directions', url: '/directions'},
        {title: 'Services', url: '/services'},
        {title: 'Ministries', url: '/ministries'},
        {title: 'Events', url: '/events'},
        {title: 'Giving'}
    ],
    sanity_queries: {
        locations: process.env.REACT_APP_QUERY_LOCATIONS,
        services: process.env.REACT_APP_QUERY_SERVICES,
        ministries: process.env.REACT_APP_QUERY_MINISTRIES,
        av: process.env.REACT_APP_QUERY_SERVICE_AV,
        about: process.env.REACT_APP_QUERY_ABOUT,
        carousel: process.env.REACT_APP_QUERY_CAROUSEL_PLAYLIST
    },
    sanity_config: {
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
        dataset: process.env.REACT_APP_SANITY_DATASET,
        token: process.env.REACT_APP_SANITY_TOKEN,
        useCdn: false
    }
}

const init_config = () => {
    const tmp_config = {...defaults};

    return tmp_config;
}

const config = init_config();

export {
    config
}