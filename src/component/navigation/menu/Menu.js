import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper, MenuBase, MenuH2} from './MenuStyle';

export default class Menu extends React.PureComponent{
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
    }

    //* ----------------------------------------------------> Lifecycle Methods
    componentDidMount(){
        this.setState({givingUrl: process.env.REACT_APP_GIVING_URL});
    }

    render(){
        const {navOptions, givingUrl} = this.state;

        return (
            <Wrapper>
                <MenuBase>
                    {window.location.pathname !== '/' && 
                        <Link key={Date.now()} to={'/'}>
                            <MenuH2>Home</MenuH2>
                        </Link>
                    }
                    {navOptions.map((option, index) => 
                        option.title !== 'Giving'
                        ?
                            <Link key={index} to={option.url}>
                                <MenuH2>{option.title}</MenuH2>
                            </Link>
                        :
                            <section key={index} onClick={() => window.location.replace(givingUrl)}>
                                <MenuH2>{option.title}</MenuH2>
                            </section>
                    )}
                </MenuBase>
            </Wrapper>
        )
    }
}