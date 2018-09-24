import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { freePikCredits, copyright } from '../script/appContext';
import { connect } from 'react-redux';
import '../style/wofcc_master.css';

const mapStateToProps = state => {
    return { page: state.page };
};

/**
 * Stateless functional component
 * @param page
 * @returns {*}
 * @constructor
 */
const ConnectedFooter = ({page}) => {
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