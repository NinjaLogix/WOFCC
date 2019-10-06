import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LogoSmall} from '../../script/appContext';

export default class MenuMaterial extends React.Component{
    constructor(){
        super();
        this.state = {
            navExpanded: false
        };

        this.setNavExpanded = this.setNavExpanded.bind(this);
        this.closeNav = this.closeNav.bind(this);
    }

    setNavExpanded(expanded){
        this.setState({navExpanded: expanded})
    }

    closeNav(){
        this.setState({navExpanded: false})
    }

    render(){
        const giving_url = process.env.REACT_APP_GIVING_URL;

        return(
            <Navbar bsStyle={'inverse'} fixedTop collapseOnSelect fluid onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
                {this.props.currentPage !== 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>WOFCC-Southaven</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                }

                {this.props.currentPage === 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        <img className={'menu_logo'} src={LogoSmall} alt={'badge'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                }

                <Navbar.Collapse>
                    <Nav pullRight onSelect={this.closeNav}>
                        <NavItem componentClass={Link} href={'/about-us'} to={'/about-us'} eventKey={1}>About Us</NavItem>
                        <NavItem componentClass={Link} href={'/contact-us'} to={'/contact-us'} eventKey={2}>Contact Us</NavItem>
                        <NavItem componentClass={Link} href={'/directions'} to={'/directions'} eventKey={3}>Directions</NavItem>
                        <NavItem componentClass={Link} href={'/services'} to={'/services'} eventKey={4}>Services</NavItem>
                        <NavItem componentClass={Link} href={'/ministries'} to={'/ministries'} eventKey={5}>Ministries</NavItem>
                        <NavItem componentClass={Link} href={'/events'} to={'/events'} eventKey={6}>Events</NavItem>
                        <NavItem onClick={()=>{window.location.href = giving_url}}>Giving</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
