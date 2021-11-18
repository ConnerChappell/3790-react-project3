import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import HomeIcon from '@mui/icons-material/Home'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@mui/material'
import { useHistory } from 'react-router-dom'
import { useIdentityContext } from 'react-netlify-identity-gotrue'

const ButtonAppBar = () => {
    const history = useHistory()
    const identity = useIdentityContext()
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const handleNavChoice = (pageLink, shouldToggle) => {
        history.push(`/${pageLink}`)
        if (shouldToggle) toggleDrawer()
    }

    const drawerItemList = () => (
        <Box sx={{ width: 275 }} role="presentation">
            <List>
                <ListItem>
                    <ListItemText primary="Menu" />
                </ListItem>
                <Divider />
                <ListItem button onClick={() => handleNavChoice('', true)}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>

                {identity.user && (
                    <>
                        <ListItem
                            button
                            onClick={() =>
                                handleNavChoice('english-premier-league', true)
                            }>
                            <ListItemIcon>
                                <SportsSoccerIcon />
                            </ListItemIcon>
                            <ListItemText primary="English Premier League" />
                        </ListItem>

                        <ListItem
                            button
                            onClick={() =>
                                handleNavChoice('german-bundesliga', true)
                            }>
                            <ListItemIcon>
                                <SportsSoccerIcon />
                            </ListItemIcon>
                            <ListItemText primary="German Bundesliga" />
                        </ListItem>

                        <ListItem
                            button
                            onClick={() =>
                                handleNavChoice('spanish-la-liga', true)
                            }>
                            <ListItemIcon>
                                <SportsSoccerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Spanish La Liga" />
                        </ListItem>

                        <ListItem
                            button
                            onClick={() =>
                                handleNavChoice('italian-serie-a', true)
                            }>
                            <ListItemIcon>
                                <SportsSoccerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Italian Serie A" />
                        </ListItem>

                        <ListItem
                            button
                            onClick={() =>
                                handleNavChoice('french-ligue-1', true)
                            }>
                            <ListItemIcon>
                                <SportsSoccerIcon />
                            </ListItemIcon>
                            <ListItemText primary="French Ligue 1" />
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    )

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: '#d00',
                        textAlign: 'center',
                    }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer}>
                            <MenuIcon />
                        </IconButton>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            Soccer App
                        </Typography>

                        {!identity.user && !identity.provisionalUser && (
                            <>
                                <Button
                                    color="inherit"
                                    onClick={() =>
                                        handleNavChoice('signup', false)
                                    }>
                                    Signup
                                </Button>

                                <Button
                                    color="inherit"
                                    onClick={() =>
                                        handleNavChoice('login', false)
                                    }>
                                    Login
                                </Button>
                            </>
                        )}

                        {identity.provisionalUser && (
                            <Button
                                color="inherit"
                                onClick={() => handleNavChoice('login', false)}>
                                Login
                            </Button>
                        )}

                        {identity.user && (
                            <Button color="inherit" onClick={identity.logout}>
                                Logout
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>

            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                {drawerItemList()}
            </Drawer>
        </>
    )
}

export default ButtonAppBar
