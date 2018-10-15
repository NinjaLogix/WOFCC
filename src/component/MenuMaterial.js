import React from 'react';
import { connect } from 'react-redux';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {LogoSmall} from '../script/appContext';

const mapStateToProps = state => {
    return { currentPage: state.page };
};

const ConnectedMenu = ({currentPage}) => {
    return (
        <Navbar bsStyle={'inverse'} fixedTop collapseOnSelect fluid>
            {currentPage !== 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>WOFCC-Southaven</Link>
                    </Navbar.Brand>
                </Navbar.Header>
            }

            {currentPage === 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*Logo goes here*/}
                        <img className={'menu_logo'} src={LogoSmall} alt={'badge'}/>
                    </Navbar.Brand>
                </Navbar.Header>
            }

            <Nav pullRight>
                <NavItem componentClass={Link} href={'/about-us'} to={'/about-us'} eventKey={1}>About Us</NavItem>
                <NavItem componentClass={Link} href={'/contact-us'} to={'/contact-us'} eventKey={2}>Contact Us</NavItem>
                {/*<NavItem componentClass={Link} href={'#'} to={'#'} eventKey={3}>Daily</NavItem>*/}
                <NavItem componentClass={Link} href={'/directions'} to={'/directions'} eventKey={4}>Directions</NavItem>
                <NavItem componentClass={Link} href={'/services'} to={'/services'} eventKey={5}>Services</NavItem>
                <NavItem componentClass={Link} href={'/ministries'} to={'/ministries'} eventKey={6}>Ministries</NavItem>
            </Nav>
        </Navbar>
    );
};

const MenuMaterial = connect(mapStateToProps)(ConnectedMenu);

export default MenuMaterial;
