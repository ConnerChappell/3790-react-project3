import * as React from 'react'
import GermanLogo from '../../assets/german-bundesliga-logo.png'
import GermanTeamContainer from '../../components/GermanTeamContainer'
import GermanTableContainer from '../../components/tableCotainers/GermanTableContainer'
import { Box, CardMedia, Typography, Fade } from '@mui/material'

const GermanBundesligaPage = () => {
    return (
        <Fade in timeout={1500}>
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
                        alt="German Bundesliga Logo"
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

                <Box sx={{display: 'flex',}}>
                    <GermanTeamContainer />
                    <GermanTableContainer />
                </Box>
            </div>
        </Fade>
    )
}

export default GermanBundesligaPage
