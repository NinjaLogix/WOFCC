import React from 'react';
import { Typography } from '@material-ui/core';
import { Wrapper } from './style/WelcomeInfoStyle';
import { AVSource } from '../av/AVSource';
import { ContactInfo } from './ContactInfo';

export const WelcomeInfo = () => (
  <Wrapper>
    <section id={'group1'}>
      <Typography gutterBottom variant={'h1'} component={'h2'} align={'center'}>
        Our Latest Service
      </Typography>

      <AVSource />
    </section>

    <section id={'group2'}>
      <Typography gutterBottom variant={'h1'} align={'center'}>
        A Little About Us
      </Typography>

      <ContactInfo />
    </section>
  </Wrapper>
);
