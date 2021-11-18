import * as React from 'react'
import SpanishLogo from '../assets/spanish-la-liga-logo.png'
import SpanishTeamContainer from '../components/SpanishTeamContainer'
import { Box, CardMedia, Typography} from '@mui/material'

const SpanishLaLigaPage = () => {
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

            <SpanishTeamContainer />
        </div>
    )
}

export default SpanishLaLigaPage
