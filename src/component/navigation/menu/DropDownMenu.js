import React, { useState } from 'react';
import {
  MenuList,
  MenuItem,
  Popper,
  Paper,
  ClickAwayListener,
  Grow,
  IconButton,
  CardActionArea,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons';

//todo -> needs to be cleaned up. This is exactly the example from material ui
//todo -> menu needs to open to the left
export const DropDownMenu = ({ options, goTo }) => {
  const [open, setOpen] = useState(false);

  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  };

  const prevOpen = React.useRef(open);

  let settings = {
    variant: 'text',
    size: 'large',
  };

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}
      >
        <MoreVert fontSize={'large'} htmlColor={'whitesmoke'} />
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                >
                  {options.map((e, index) => {
                    if (goTo) settings = { ...settings, href: e.target };

                    return (
                      <CardActionArea {...settings}>
                        <MenuItem key={index} onClick={handleClose}>
                          {e.title}
                        </MenuItem>
                      </CardActionArea>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
