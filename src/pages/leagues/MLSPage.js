import * as React from 'react'
import MLSLogo from '../../assets/mls-logo.png'
import AmericanTeamContainer from '../../components/AmericanTeamContainer'
import { Box, CardMedia, Typography} from '@mui/material'

const MLSPage = () => {
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
                    image={MLSLogo}
                    alt="Major League Soccer Logo"
                    sx={{
                        width: 'auto',
                        height: 60,
                        mr: '10px',
                    }}
                />
                <Typography component="h1" variant="h3">
                    Major League Soccer
                </Typography>
            </Box>

            <AmericanTeamContainer />
        </div>
    )
}

export default MLSPage
