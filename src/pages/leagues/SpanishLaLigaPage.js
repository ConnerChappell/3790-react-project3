import * as React from 'react'
import SpanishLogo from '../../assets/spanish-la-liga-logo.png'
import SpanishTeamContainer from '../../components/SpanishTeamContainer'
import SpanishTableContainer from '../../components/tableCotainers/SpanishTableContainer'
import { Box, CardMedia, Typography, Fade } from '@mui/material'

const SpanishLaLigaPage = () => {
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
                        image={SpanishLogo}
                        alt="Spanish La Liga Logo"
                        sx={{
                            width: 'auto',
                            height: 60,
                            mr: '10px',
                        }}
                    />
                    <Typography component="h1" variant="h3">
                        Spanish La Liga
                    </Typography>
                </Box>

                <Box sx={{display: 'flex',}}>
                    <SpanishTeamContainer />
                    <SpanishTableContainer />
                </Box>
            </div>
        </Fade>
    )
}

export default SpanishLaLigaPage
