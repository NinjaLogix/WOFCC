import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { freePikCredits, copyright } from '../../script/appContext';
import { Link } from 'react-router-dom';
import '../../style/wofcc_master.css';

export const Footer = ({page}) => {
    const elements = freePikCredits(page);
    let footerUl = {
        listStyleType: 'none'
    };

    let listItem = {
        color: 'grey'
    };

    let giving_url = process.env.REACT_APP_GIVING_URL;

    return(
          <Grid className={'footer'}>
              <Row className={'show-grid'}>
                  <Col xs={2} md={4}>
                      <p>
                          <ul style={footerUl}>
                              <li>Pages</li>
                              <li><Link to={'/'} style={listItem}>Home</Link></li>
                              <li><Link to={'/about-us'} style={listItem}>About Us</Link></li>
                              <li><Link to={'/contact-us'} style={listItem}>Contact Us</Link></li>
                              <li><Link to={'/directions'} style={listItem}>Directions</Link></li>
                              <li><Link to={'/ministries'} style={listItem}>Ministries</Link></li>
                              <li><Link to={'/services'} style={listItem}>Services</Link></li>
                              <li><a href={giving_url} className={'custom_a'}>Giving</a></li>
                          </ul>
                      </p>
                  </Col>
                  <Col xs={2} md={4}>
                    {!(elements === undefined || elements.length === 0) &&
                        <p>
                            <ul className={'footer-list'}>
                                <li>Freepik Image Credits</li>
                                {elements.map(el =>
                                    <li key={el.key}><a href={'http://www.freepik.com'}>{el.link_text}</a></li>
                                )}
                            </ul>
                        </p>
                    }
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
