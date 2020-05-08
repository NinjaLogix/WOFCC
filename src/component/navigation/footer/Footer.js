import React, {useState} from 'react';
import {Wrapper, FooterH4} from './FooterStyle';
import {DevCredit} from '../dev-credits';
import {Link} from 'react-router-dom';

export const Footer = function(props){
    const [navOptions] = useState([
        {title: 'About Us', url: '/about-us'},
        {title: 'Contact Us', url: '/contact-us'},
        {title: 'Directions', url: '/directions'},
        {title: 'Services', url: '/services'},
        {title: 'Ministries', url: '/ministries'},
        {title: 'Events', url: '/events'},
        {title: 'Credits', url: '/credits'},
        {title: 'Giving', url: process.env.REACT_APP_GIVING_URL}]);

    return (
        <Wrapper>
            {navOptions.map((option, index) => 
                option.title !== 'Giving'
                ?
                    <Link key={index} to={`${option.url}`}>
                        <FooterH4>{option.title}</FooterH4>
                    </Link>
                :
                    <a key={index} target="_blank" href={option.url}>
                        <FooterH4>{option.title}</FooterH4>
                    </a>
            )}

            <a target='_blank' href={process.env.REACT_APP_GITHUB_URL}>
                <DevCredit/>
            </a>
        </Wrapper>
    )
}