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
 * TODO - make sure there is a shadow under the menu
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
                        WOFCC-Southaven
                    </Navbar.Brand>
                </Navbar.Header>
            }

            {/*Show the logo if we are on the landing page*/}
            {currentPage === 'landing' &&
                <Navbar.Header>
                    <Navbar.Brand>
                        {/*Logo goes here*/}
                        {/*<Image src=badge_small responsive/>*/}
                    </Navbar.Brand>
                </Navbar.Header>
            }

            <Nav pullRight>
                {currentPage !== 'landing' &&
                    <NavItem componentClass={Link} href={'/'} to={'/'} eventKey={0}>Home</NavItem>
                }
                <NavItem componentClass={Link} href={'#'} to={'#'} eventKey={1}>About Us</NavItem>
                <NavItem componentClass={Link} href={'/services'} to={'/services'} eventKey={2}>Services</NavItem>
                <NavItem componentClass={Link} href={'/directions'} to={'/directions'} eventKey={3}>Directions</NavItem>
                <NavItem componentClass={Link} href={'/contact-us'} to={'/contact-us'} eventKey={4}>Contact Us</NavItem>
                <NavItem componentClass={Link} href={'#'} to={'#'} eventKey={5}>Ministries</NavItem>
            </Nav>
        </Navbar>
    );
};

const MenuMaterial = connect(mapStateToProps)(ConnectedMenu);

export default MenuMaterial;