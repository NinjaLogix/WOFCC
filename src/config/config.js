const defaults = {
  isMobile: typeof window.orientation !== 'undefined',
  givingUrl: process.env.REACT_APP_GIVING_URL,
  faceBookUrl: process.env.REACT_APP_FACEBOOK_URL,
  dev_url: process.env.REACT_APP_GITHUB_URL,
  menuOptions: [
    { title: 'About Us', url: '/about-us' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Directions', url: '/directions' },
    { title: 'Services', url: '/services' },
    { title: 'Ministries', url: '/ministries' },
    { title: 'Events', url: '/events' },
    { title: 'Giving' },
  ],
  sanity_queries: {
    locations: process.env.REACT_APP_QUERY_LOCATIONS,
    services: process.env.REACT_APP_QUERY_SERVICES,
    ministries: process.env.REACT_APP_QUERY_MINISTRIES,
    av: process.env.REACT_APP_QUERY_SERVICE_AV,
    about: process.env.REACT_APP_QUERY_ABOUT,
    carousel: process.env.REACT_APP_QUERY_CAROUSEL_PLAYLIST,
    all_albums: process.env.REACT_APP_QUERY_GALLERY_ALL_ALBUMS,
    single_album: id =>
      process.env.REACT_APP_QUERY_GALLERY_SINGLE_ALBUM.replace(':doc-id', id),
    side_notes: process.env.REACT_APP_QUERY_SIDE_NOTES,
  },
  sanity_config: {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET,
    token: '',
    useCdn: true,
  },
};

export const config = { ...defaults };
