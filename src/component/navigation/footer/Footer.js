import React from 'react';
import { Wrapper, StyledLink, StyledA } from './style/FooterStyle';
import { DevCredit } from '../dev-credits';
import { config } from '../../../config/config';
import { Grid, Typography } from '@material-ui/core';
import { _routes } from '../../../routes';

export const Footer = () => {
  const navOptions = _routes.filter(e => !['gallery', 'events'].includes(e.title.toLowerCase()));

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
          <StyledLink to={o.target}>
            <Typography variant={'h3'} component={'h3'} color={'textPrimary'}>
              {o.title}
            </Typography>
          </StyledLink>
        </Grid>
      ))}

      <Grid item xs={3}>
        <StyledA target='_blank' href={config.givingUrl}>
          <Typography variant={'h3'} component={'h3'} color={'textPrimary'}>
            Giving
          </Typography>
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
