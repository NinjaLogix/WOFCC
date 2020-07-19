import React from 'react';
import {
  Wrapper,
  Content
} from './AlbumStyle';
import { Typography } from '@material-ui/core';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const Album = ({ id, title, date, cover }) => (
  <Link to={`/gallery/${id}`}>
    <Wrapper elevation={4} bkgrnd={cover}>
      <Content>
        <Typography variant={'h3'} component={'h3'}>{title}</Typography>
        <Typography variant={'h3'} component={'h3'}>{moment(date).format('MM/DD/YYYY')}</Typography>
      </Content>
    </Wrapper>
  </Link>
);
