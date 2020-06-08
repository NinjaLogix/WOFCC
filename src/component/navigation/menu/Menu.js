import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Wrapper, MenuBase, MenuH2, DrawerList} from './MenuStyle'
import {config} from '../../../config/config'
import {IconButton, Drawer, List, ListItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const Menu = () => {
    const [open, setOpen] = useState(false);
    
    const toggleDrawer = () => setOpen(!open);

    const fullMenu = () => (
        <Wrapper>
            <MenuBase>
                {window.location.pathname !== '/' && 
                    <Link key={Date.now()} to={'/'}>
                        <MenuH2>Home</MenuH2>
                    </Link>
                }

                {config.menuOptions.map(option => 
                    option.title !== 'Giving'
                    ?
                        <Link key={option.title} to={option.url}>
                            <MenuH2>{option.title}</MenuH2>
                        </Link>
                    :
                        <a key={option.title} target='_blank' href={config.givingUrl}>
                            <MenuH2>{option.title}</MenuH2>
                        </a>
                )}
            </MenuBase>
        </Wrapper>
    );

    const mobileList = () => (
        <DrawerList
            onClick={() => toggleDrawer()}
            onKeyDown={() => toggleDrawer()}>

            <List>
                {window.location.pathname !== '/' && 
                    <ListItem>
                        <Link key={Date.now()} to={'/'}>
                            <MenuH2>Home</MenuH2>
                        </Link>
                    </ListItem>
                }

                {config.menuOptions.map(option => 
                    option.title !== 'Giving'
                    ?
                    <ListItem>
                        <Link key={option} to={option.url}>
                            <MenuH2>{option.title}</MenuH2>
                        </Link>
                        </ListItem>
                    :
                    <ListItem>
                        <a target='_blank' href={config.givingUrl} key={option}>
                            <MenuH2>{option.title}</MenuH2>
                        </a>
                        </ListItem>
                )}
            </List>
        </DrawerList>
    )

    const mobileMenu = () => (
        <Wrapper>
            <Drawer anchor={'left'} open={open} onClose={() => toggleDrawer()}>
                {mobileList()}
            </Drawer>

            <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => toggleDrawer()}>
                <MenuIcon/>
            </IconButton>
        </Wrapper>
    );

    const showMenu = () => {
        if (config.isMobile)
            return mobileMenu()
        else
            return fullMenu()
    }

    return (
        <div>
            {showMenu()}
        </div>
    )
}

export default Menu;