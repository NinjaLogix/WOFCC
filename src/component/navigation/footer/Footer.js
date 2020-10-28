import React, { useState } from 'react';
import { Wrapper, StyledLink, StyledA } from './style/FooterStyle';
import { DevCredit } from '../dev-credits';
import { config } from '../../../config/config';
import { Grid, Typography } from '@material-ui/core';

//todo -> mobile:fix mobile formatting with footer. Maybe switch this to a grid. and also fix the height
export const Footer = function (props) {
  const [navOptions] = useState([
    { title: 'About Us', url: '/about-us' },
    { title: 'Contact Us', url: '/contact-us' },
    { title: 'Directions', url: '/directions' },
    { title: 'Services', url: '/services' },
    { title: 'Ministries', url: '/ministries' },
    { title: 'Events', url: '/events' },
    { title: 'Credits', url: '/credits' },
  ]);

  return (
    <Wrapper
      container
      direction={'row'}
      wrap={'wrap'}
      align={'center'}
      justifyItems={'center'}
    >
      {navOptions.map((o, index) => (
        <Grid item xs={3} key={index}>
          <StyledLink to={o.url}>
            <Typography variant={'h3'} component={'h3'} color={'textPrimary'}>{o.title}</Typography>
          </StyledLink>
        </Grid>
      ))}

      <Grid item xs={3}>
        <StyledA target='_blank' href={config.givingUrl}>
          <Typography variant={'h3'} component={'h3'} color={'textPrimary'}>Giving</Typography>
        </StyledA>
      </Grid>

      <Grid item xs={12}>
        <StyledA target='_blank' href={config.dev_url}>
          <DevCredit />
        </StyledA>
      </Grid>
    </Wrapper>
  );
};
