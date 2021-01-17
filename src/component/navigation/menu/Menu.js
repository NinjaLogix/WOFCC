import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Wrapper, MenuBase, MenuLabel, DrawerList } from './style/MenuStyle';
import { config } from '../../../config/config';
import { Link } from 'react-router-dom';
import { IconButton, Typography, Drawer, List, ListItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Menu = () => {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  const fullMenu = () => (
    <Wrapper>
      <MenuBase>
        {pathname !== '/' && (
          <Link key={Date.now()} to={'/'}>
            <Typography variant={'h5'}>Home</Typography>
          </Link>
        )}

        {config.menuOptions.map(option =>
          option.title !== 'Giving' ? (
            /*<Link key={option.title} to={option.url}>*/
              <MenuLabel>{option.title}</MenuLabel>
            /*</Link>*/
          ) : (
            <a key={option.title} target='_blank' href={config.givingUrl}>
              <MenuLabel>{option.title}</MenuLabel>
            </a>
          ),
        )}
      </MenuBase>
    </Wrapper>
  );

  const mobileList = () => (
    <DrawerList onClick={toggleDrawer} onKeyDown={toggleDrawer}>
      <List>
        {window.location.pathname !== '/' && (
          <ListItem>
            {/*<Link key={Date.now()} to={'/'}>*/}
              <MenuLabel>Home</MenuLabel>
           {/* </Link>*/}
          </ListItem>
        )}

        {config.menuOptions.map(option =>
          option.title !== 'Giving' ? (
            <ListItem>
              {/*<Link key={option} to={option.url}>*/}
                <MenuLabel>{option.title}</MenuLabel>
              {/*</Link>*/}
            </ListItem>
          ) : (
            <ListItem>
              <a target='_blank' href={config.givingUrl} key={option}>
                <MenuLabel>{option.title}</MenuLabel>
              </a>
            </ListItem>
          ),
        )}
      </List>
    </DrawerList>
  );

  const mobileMenu = () => (
    <Wrapper>
      <Drawer anchor={'left'} open={open} onClose={toggleDrawer}>
        {mobileList()}
      </Drawer>

      <IconButton
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
    </Wrapper>
  );

  const showMenu = () => {
    if (config.isMobile) return mobileMenu();
    else return fullMenu();
  };

  return <div>{showMenu()}</div>;
};

export default Menu;
