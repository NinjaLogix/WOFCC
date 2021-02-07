import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar, MenuLabel, StyledLogo } from './style/MenuStyle';
import { _routes } from '../../../routes';
import { Button, Typography } from '@material-ui/core';
import { smallWofccLogo } from '../../../assets';
import { DropDownMenu } from './index';
import { config } from '../../../config/config';

export const MenuBar = () => {
  const { pathname } = useLocation();

  const [options, setOptions] = useState([
    ..._routes.filter(e =>
      ['Home', 'About', 'Ministries', 'Services'].includes(e.title),
    ),
    { target: process.env.REACT_APP_GIVING_URL, title: 'Giving' },
  ]);

  useEffect(() => {
    if (pathname === '/') setOptions(options.filter(e => e.title !== 'Home'));
  }, []);

  return (
    <Bar>
      <StyledLogo src={smallWofccLogo} alt={'badge'} />

      {config.isMobile && (
        <Typography variant={'h3'} color={'textSecondary'}>
          Word of Faith Southaven
        </Typography>
      )}

      {config.isMobile ? (
        <DropDownMenu options={options} goTo={true} />
      ) : (
        options.map((e, index) => (
          <Button key={index} href={e.target} variant={'text'} size={'large'}>
            <MenuLabel>{e.title}</MenuLabel>
          </Button>
        ))
      )}
    </Bar>
  );
};
