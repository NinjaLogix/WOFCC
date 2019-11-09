import Dropbox from 'dropbox';

export const dropBox = new Dropbox.Dropbox({accessToken: process.env.REACT_APP_TOKEN_PROD});
