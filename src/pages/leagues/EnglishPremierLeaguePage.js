import * as React from 'react'
import EnglishLogo from '../../assets/premier-league-logo.png'
import EnglishTeamContainer from '../../components/EnglishTeamContainer'
import { Box, Typography, CardMedia } from '@mui/material'

const EnglishPremierLeagePage = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100&',
                    height: 'auto',
                    p: 3,
                    bgcolor: 'background.paper',
                    boxShadow: 3,
                }}>
                <CardMedia
                    component="img"
                    image={EnglishLogo}
                    alt="English Premier League Logo"
                    sx={{
                        width: 'auto',
                        height: 60,
                        mr: '10px',
                    }}
                />
                <Typography component="h1" variant="h3">
                    English Premier League
                </Typography>
            </Box>

            <EnglishTeamContainer />
        </div>
    )
}

export default EnglishPremierLeagePage
