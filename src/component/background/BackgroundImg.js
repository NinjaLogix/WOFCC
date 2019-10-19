import React from 'react';

const BackgroundImage = ({currentPage}) => {
    let divStyle = {
        position: 'fixed',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%'
    };

    let imgStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        margin: 'auto',
        minWidth: '50%',
        minHeight: '50%'
    };

    let bgImage = '#';

    if (window.location.pathname === '/'){
        bgImage = process.env.REACT_APP_LANDING_BACKGROUND_URL;
    }

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={bgImage} alt={''}/>
        </div>
    );
};

export default BackgroundImage;
