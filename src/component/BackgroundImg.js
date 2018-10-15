import React from 'react';
import { connect } from 'react-redux';
import { landingBackground } from '../script/appContext';

const mapStateToProps = state => {
    return { currentPage: state.page };
};

const ConnectedBackgroundImage = ({currentPage}) => {
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

    if (currentPage === 'landing'){
        bgImage = landingBackground;
    }

    return (
        <div style={divStyle}>
            <img style={imgStyle} src={bgImage} alt={''}/>
        </div>
    );
};

const BackgroundImage = connect(mapStateToProps)(ConnectedBackgroundImage);

export default BackgroundImage;
