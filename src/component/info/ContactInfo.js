import React from 'react';
import {
  Wrapper,
  InfoWrapper,
  Picture,
  PastorImg,
  PastorCard,
} from './style/ContactInfoStyle';
import { ContactCard } from './ContactCard';
import { MapCard } from './MapCard';
import { Pastors } from '../../assets';
import { Typography } from '@material-ui/core';
import { ServiceCard } from './ServiceCard';

export const ContactInfo = () => {
  return (
    <Wrapper>
      <InfoWrapper>
        <ServiceCard />
        <ContactCard />
      </InfoWrapper>

      <Picture>
        <PastorCard>
          <PastorImg src={Pastors} alt={'pastor'} />

          <section id={'banner'}>
            <Typography
              id={'title'}
              variant={'h4'}
              align={'center'}
              color={'textSecondary'}
            >
              Pastor Joe Butts & First Lady Constance Butts
            </Typography>
          </section>
        </PastorCard>
      </Picture>

      <MapCard />
    </Wrapper>
  );
};
