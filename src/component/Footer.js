import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { freePikCredits, copyright } from '../script/appContext';
import '../style/wofcc_master.css';

/**
 * Stateless functional component
 * @param page
 * @returns {*}
 * @constructor
 */
//TODO - footer not showing correctly on the following pages: landing and contact us
const Footer = ({page}) => {
    const elements = freePikCredits(page);
    return(
          <Grid className={'footer'}>
              <Row className={'show-grid'}>
                  <Col xs={2} xsOffset={2}>
                      <p>
                        Pages
                      </p>
                  </Col>
                  <Col xs={2} md={4}>
                      <p>
                        Freepik Credits
                          {/*If there are images to credit then show them, otherwise don't render anything from this IIFE*/}
                          {!(elements === undefined || elements.length === 0) &&
                              <ul>
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

export default Footer;