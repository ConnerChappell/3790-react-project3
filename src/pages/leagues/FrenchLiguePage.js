import * as React from 'react'
import FrenchLogo from '../../assets/french-ligue-logo.png'
import FrenchTeamContainer from '../../components/FrenchTeamContainer'
import FrenchTableContainer from '../../components/tableCotainers/FrenchTableContainer'
import { Box, CardMedia, Typography, Fade } from '@mui/material'

const FrenchLiguePage = () => {
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
                        image={FrenchLogo}
                        alt="French Ligue 1 Logo"
                        sx={{
                            width: 'auto',
                            height: 60,
                            mr: '10px',
                        }}
                    />
                    <Typography component="h1" variant="h3">
                        French Ligue 1
                    </Typography>
                </Box>
                
                <Box sx={{display: 'flex',}}>
                    <FrenchTeamContainer />
                    <FrenchTableContainer />
                </Box>
            </div>
        </Fade>
    )
}

export default FrenchLiguePage
