import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { freePikCredits, copyright } from '../script/appContext';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../style/wofcc_master.css';

const mapStateToProps = state => {
    return { page: state.page };
};

const ConnectedFooter = ({page}) => {
    const elements = freePikCredits(page);
    let footerUl = {
        listStyleType: 'none'
    };

    let listItem = {
        color: 'grey'
    };

    return(
          <Grid className={'footer'}>
              <Row className={'show-grid'}>
                  <Col xs={2} xsOffset={2}>
                      <p>
                        Pages
                          <ul style={footerUl}>
                              <li><Link to={'/'} style={listItem}>Home</Link></li>
                              <li><Link to={'/about-us'} style={listItem}>About Us</Link></li>
                              <li><Link to={'/contact-us'} style={listItem}>Contact Us</Link></li>
                              <li><Link to={'/directions'} style={listItem}>Directions</Link></li>
                              <li><Link to={'/ministries'} style={listItem}>Ministries</Link></li>
                              <li><Link to={'/services'} style={listItem}>Services</Link></li>
                          </ul>
                      </p>
                  </Col>
                  <Col xs={2} md={4}>
                      <p>
                        Freepik Image Credits
                          {/*If there are images to credit then show them, otherwise don't render anything from this IIFE*/}
                          {!(elements === undefined || elements.length === 0) &&
                              <ul className={'footer-list'}>
                                  {elements.map(el =>
                                    <li key={el.key}><a href={'http://www.freepik.com'}>{el.link_text}</a></li>
                                  )}
                              </ul>
                          }
                      </p>
                  </Col>
                  <Col xs={2} md={4}>
                      <p>
                        Developer Credits
                          {copyright}
                      </p>
                  </Col>
              </Row>
          </Grid>
    );
};

const Footer = connect(mapStateToProps)(ConnectedFooter);

export default Footer;
