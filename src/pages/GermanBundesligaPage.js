import * as React from 'react'
import GermanLogo from '../assets/german-bundesliga-logo.png'
import GermanTeamContainer from '../components/GermanTeamContainer'
import { Box, CardMedia, Typography} from '@mui/material'

const GermanBundesligaPage = () => {
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
                    image={GermanLogo}
                    alt="English Premier League Logo"
                    sx={{
                        width: 'auto',
                        height: 60,
                        mr: '10px',
                    }}
                />
                <Typography component="h1" variant="h3">
                    German Bundesliga
                </Typography>
            </Box>

            <GermanTeamContainer />
        </div>
    )
}

export default GermanBundesligaPage
