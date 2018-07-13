import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { getLinks } from '../script/appContext';
import '../style/Footer.css';
//side note: importing without the curly braces will cause you to import with the default export.
//           doing with them uses the exported object

const copyright = () => {
    return (
        <p>
            Copyright ©{(new Date().getFullYear())}<br/>
            Branden Boyington<br/>
            <a className="github-button" href="https://github.com/NinjaLogix" aria-label="Follow @NinjaLogix on GitHub">Follow @NinjaLogix</a>
        </p>
    )
};

/**
 * Stateless functional component
 * @param page
 * @returns {*}
 * @constructor
 */
const Footer = ({page}) => {
    const elements = getLinks(page);
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
                          {copyright()}
                      </p>
                  </Col>
              </Row>
          </Grid>
    );
};

export default Footer;