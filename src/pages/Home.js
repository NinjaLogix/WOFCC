import React from 'react';
import { Wrapper, Media } from './style/HomeStyle';
import { WelcomeInfo } from '../component/info/WelcomeInfo';
import { Carousel } from '../component/carousel';

export const Home = () => (
  <Wrapper>
    <Media>
      <Carousel />
    </Media>

    <WelcomeInfo />
  </Wrapper>
);
