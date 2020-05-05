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
    ]
}

// const dev = {

// }

// const prod = {

// }

const init_config = () => {
    const tmp_config = {...defaults};

    return tmp_config;
}

const config = init_config();

export {
    config
}