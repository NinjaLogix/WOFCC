import React from 'react';
import { connect } from 'react-redux';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * @param state
 * @returns {{currentPage: *}}
 */
const mapStateToProps = state => {
    return { currentPage: state.page };
};
/**
 * @param currentPage
 * @returns {*}
 * @constructor
 */
const ConnectedMenu = ({currentPage}) => {
    return (
        <Navbar bsStyle={'inverse'} fixedTop collapseOnSelect fluid>
            {/*Show only the words if the current page isn't the landing page*/}
            {currentPage !== 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to={'/'}>WOFCC-Southaven</Link>
                    </Navbar.Brand>
                </Navbar.Header>
            }

            {/*TODO - Show the logo if we are on the landing page*/}
            {currentPage === 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*Logo goes here*/}
                        {/*<Image src=badge_small responsive/>*/}
                    </Navbar.Brand>
                </Navbar.Header>
            }

            <Nav pullRight>
                {/*TODO - maybe add a divider here*/}
                <NavItem componentClass={Link} href={'/about-us'} to={'/about-us'} eventKey={1}>About Us</NavItem>
                <NavItem componentClass={Link} href={'/contact-us'} to={'/contact-us'} eventKey={4}>Contact Us</NavItem>
                {/*<NavItem componentClass={Link} href={'#'} to={'#'} eventKey={5}>Daily</NavItem>*/}
                <NavItem componentClass={Link} href={'/directions'} to={'/directions'} eventKey={3}>Directions</NavItem>
                <NavItem componentClass={Link} href={'/services'} to={'/services'} eventKey={2}>Services</NavItem>
                <NavItem componentClass={Link} href={'/ministries'} to={'/ministries'} eventKey={6}>Ministries</NavItem>
            </Nav>
        </Navbar>
    );
};

const MenuMaterial = connect(mapStateToProps)(ConnectedMenu);

export default MenuMaterial;