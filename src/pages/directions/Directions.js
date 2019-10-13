import React, {useState, useEffect} from 'react';
import Iframe from 'react-iframe';
import '../../style/wofcc_master.css';
import { Menu } from '../../component/navigation/menu';

export const Directions = () => {
    return(
        <div className={'direction-container'}>
            <Menu/>
            
            <h1>Trying to Find Us?</h1>
            <h2>We aren't too hard to find.</h2>
            <div className={'directions-map-container'}>
                <Iframe
                    url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6540.728862544873!2d-90.02572996728493!3d34.94747358037176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d5618baea2c68b%3A0xdb0f86cf9ad4538!2s1881+Nail+Rd+suite+d%2C+Horn+Lake%2C+MS+38637!5e0!3m2!1sen!2sus!4v1554175353512!5m2!1sen!2sus"}
                    width={'850'}
                    height={'400'}
                    className={'directions-iframe-gmaps'}
                    display={'initial'}
                    allowFullScreen
                />
                <section>
                    <h2>Mailing Address</h2>
                    <h4>P.O. Box 1968 Southaven, MS 38671</h4>
                    <br/>
                    <h2>Our building is located in suite D</h2>
                </section>
            </div>
        </div>
    )
}
