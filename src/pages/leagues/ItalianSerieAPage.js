import * as React from 'react'
import ItalianLogo from '../../assets/serie-a-logo.png'
import ItalianTeamContainer from '../../components/ItalianTeamContainer'
import { Box, CardMedia, Typography, Fade } from '@mui/material'

const ItalianSerieAPage = () => {
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
                        image={ItalianLogo}
                        alt="Italian Serie A Logo"
                        sx={{
                            width: 'auto',
                            height: 60,
                            mr: '10px',
                        }}
                    />
                    <Typography component="h1" variant="h3">
                        Italian Serie A
                    </Typography>
                </Box>

                <ItalianTeamContainer />
            </div>
        </Fade>
    )
}

export default ItalianSerieAPage
