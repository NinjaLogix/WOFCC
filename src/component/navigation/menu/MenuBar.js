import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bar, MenuLabel, StyledLogo } from './style/MenuStyle';
import { _routes } from '../../../_routes';
import { Button } from '@material-ui/core';
import { smallWofccLogo } from '../../../assets';

export const MenuBar = () => {
  const { pathname } = useLocation();

  const [options, setOptions] = useState([
    ..._routes.filter(e => ['Home', 'About', 'Ministries', 'Services'].includes(e.title)),
    { target: process.env.REACT_APP_GIVING_URL, title: 'Giving' },
  ]);

  useEffect(() => {
    if (pathname === '/') setOptions(options.filter(e => e.title !== 'Home'));
  }, []);

  return (
    <Bar>
      <StyledLogo src={smallWofccLogo} alt={'badge'} />
      {options.map((e, index) => (
        <Button
          key={index}
          href={e.target}
          variant={'text'}
          size={'large'}
        >
          <MenuLabel>{e.title}</MenuLabel>
        </Button>
      ))}
    </Bar>
  );
};
