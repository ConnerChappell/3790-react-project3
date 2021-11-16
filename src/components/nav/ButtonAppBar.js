import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material'
import Divider from '@mui/material/Divider'
// import { useTeamContext } from '../../contexts/TeamContext'
import { NavLink, useHistory } from 'react-router-dom'

const ButtonAppBar = () => {
    // const teamData = useTeamContext()
    const history = useHistory()
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen(!isOpen)
    }

    const handleNavChoice = (pageLink) => {
        history.push(`/${pageLink}`)
        toggleDrawer()
    }

    const drawerItemList = () => (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                <ListItem>
                    <ListItemIcon>
                        <SportsSoccerIcon />
                    </ListItemIcon>
                    <ListItemText primary="Menu" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button onClick={() => handleNavChoice('home')}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleNavChoice('english-premier-league')}>
                    <ListItemText primary="English Premier League" />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleNavChoice('german-bundesliga')}>
                    <ListItemText primary="German Bundesliga" />
                </ListItem>
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

                        <Button color="inherit">
                            <NavLink
                                to="/login"
                                style={{
                                    textDecoration: 'none',
                                    color: '#fff',
                                }}>
                                Login
                            </NavLink>
                        </Button>
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
