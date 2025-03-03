import { color, styled } from '@mui/system'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../CustomButton/CustomButton'
import logoimg from '../../assets/logo.png'

import MenuIcon from '@mui/icons-material/Menu'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
import HomeIcon from '@mui/icons-material/Home'
import ContactsIcon from "@mui/icons-material/Contacts"
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

function Header() {

    const [moblieMenu, setMobileMenu] = useState({ left: false })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
            return;
        }
        setMobileMenu({ ...moblieMenu, [anchor]: open })

    }
    const list = (anchor) => (
        <Box sx={{
            width: anchor === "top" || anchor === "bottom" ? "auto" : 250
        }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onkeyDown={
                toggleDrawer(anchor, false)
            }
        >
            <List>
                {nav_titles.map((item,index) => (

                    <ListItem key={item.index} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {
                                    index === 0 && <HomeIcon />
                                }
                                {
                                    index === 1 && <FeaturedPlayListIcon />
                                }
                                {
                                    index === 2 && <MiscellaneousServicesIcon />
                                }
                                {
                                    index === 3 && <ContactsIcon />
                                }
                            </ListItemIcon>
                            <ListItemText primary={item.display} />
                        </ListItemButton>
                    </ListItem>

                ))}

            </List>


        </Box>

    )


    const nav_titles = [{
        path: '/',
        display: 'Home'
    }, {
        path: '/',
        display: 'Dishes'
    },
    {
        path: '/',
        display: 'Services'
    }, {
        path: '/',
        display: 'About Us'
    }]

    const NavBarLinksBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }))

    const NavBarLink = styled(Box)(({ }) => ({
        fontSize: '15px',
        color: '#4F5361',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&:hover': {
            color: '#fff'
        }

    }))

    const NavBarLogo = styled("img")(({ theme }) => ({
        cursor: 'pointer',

        [theme.breakpoints.down("md")]: {
            display: 'none'
        }
    }))

    const CustomMenu = styled(MenuIcon)(({ theme }) => ({
        cursor: 'pointer',
        display: 'none',
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: 'block'
        }
    }));


    return (
        <Box

            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '40px',
                maxWidth: 'auto',
                backgroundColor: '#FED801',
                marginLeft: '0px',
                marginBottom: '-24px'
            }}




        >

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '2.5rem'
                }}

            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',

                    }}
                >
                    <CustomMenu onClick={toggleDrawer("left", true)} />
                    < Drawer

                        anchor='left'
                        open={moblieMenu["left"]}
                        onClose={toggleDrawer("left", false)}

                    >
                        {list("left")}

                    </Drawer>
                    <NavBarLogo src={logoimg} />
                </Box>
                <NavBarLinksBox >
                    {
                        nav_titles.map((item, index) => (

                            <NavBarLink variant="body2">
                                {item.display}
                            </NavBarLink>

                        ))
                    }

                </NavBarLinksBox >
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem'
                }}


            >
                <NavBarLink variant="body2">
                    Sign Up
                </NavBarLink>
                <CustomButton
                    backgroundColor='#0F1B4C'
                    color='#fff'
                    buttontext="Register"
                />

            </Box>


        </Box>
    )
}

export default Header
