import React from 'react';
import {Wrapper, PagesWrapper, DevCreditWrapper, FooterH4} from './FooterStyle';
import {DevCredit} from '../dev-credits';
import { Link } from 'react-router-dom';

export default class Footer extends React.PureComponent{
    state = {
        givingUrl: '',
        navOptions: [
            {title: 'About Us', url: '/about-us'},
            {title: 'Contact Us', url: '/contact-us'},
            {title: 'Directions', url: '/directions'},
            {title: 'Services', url: '/services'},
            {title: 'Ministries', url: '/ministries'},
            {title: 'Events', url: '/events'},
            {title: 'Giving'}
        ]
    };

    componentDidMount(){
        this.setState({givingUrl: process.env.REACT_APP_GIVING_URL})
    }

    render(){
        const {navOptions, givingUrl} = this.state;

        return(
            <Wrapper>
                <PagesWrapper>
                    {navOptions.map((option, index) => 
                        option.title !== 'Giving'
                        ?
                            <Link key={index} to={option.url}><FooterH4>{option.title}</FooterH4></Link>
                        :
                            <FooterH4 key={index} onClick={() => window.location.replace(givingUrl)}>{option.title}</FooterH4>
                    )}
                </PagesWrapper>

                <DevCreditWrapper>
                    
                </DevCreditWrapper>
            </Wrapper>
        )
    }
}
