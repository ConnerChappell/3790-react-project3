import * as React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSoccerContext } from '../contexts/SoccerContext'
import {
    Box,
    CardMedia,
    Typography,
    IconButton,
    Tooltip,
    Fade,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const TeamDetail = () => {
    const params = useParams()
    const soccerData = useSoccerContext()
    const history = useHistory()

    const team = soccerData.allTeams.find(
        (item) => item.idTeam === params.teamId
    )
    console.log(team)

    return (
        <>
            <Fade in timeout={1500}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100&',
                        height: 'auto',
                        p: 2,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                    }}>
                    <Tooltip title="Go Back">
                        <IconButton sx={{ mr: 1 }} onClick={history.goBack}>
                            <ArrowBackIcon />
                        </IconButton>
                    </Tooltip>
                    <CardMedia
                        component="img"
                        image={team.strTeamBadge}
                        alt="Team Badge"
                        sx={{
                            width: 70,
                            height: 'auto',
                            mr: 1,
                        }}
                    />
                    <Typography component="h1" variant="h3">
                        {team.strTeam}
                    </Typography>
                </Box>
            </Fade>

            <Fade in timeout={1500}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        maxWidth: '1400px',
                        mx: 'auto',
                        pb: 10,
                    }}>
                    {/* Sidebar stuff */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '375px',
                            mt: 4,
                            mx: 'auto',
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            boxShadow: 4,
                        }}>
                        <Box sx={{ m: 2, mb: 5 }}>
                            <CardMedia
                                component="img"
                                image={team.strTeamLogo}
                                alt="Team Logo"
                                sx={{
                                    width: 200,
                                    height: 'auto',
                                    mx: 'auto',
                                }}></CardMedia>
                        </Box>

                        <Box sx={{ m: 2, mb: 5 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Location: {team.strStadiumLocation}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Established in {team.intFormedYear}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Nicknames: {team.strKeywords}
                            </Typography>
                        </Box>

                        <Box sx={{ m: 2, mb: 5 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Jersey
                            </Typography>
                            <CardMedia
                                component="img"
                                image={team.strTeamJersey}
                                alt="Team Jersey"
                                sx={{
                                    width: 200,
                                    height: 'auto',
                                    mx: 'auto',
                                }}></CardMedia>
                        </Box>

                        <Box sx={{ m: 2, mb: 5 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Stadium: {team.strStadium}
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Capacity: {team.intStadiumCapacity}
                            </Typography>
                            <CardMedia
                                component="img"
                                image={team.strStadiumThumb}
                                alt="Team Stadium"
                                sx={{
                                    width: 300,
                                    height: 'auto',
                                    mx: 'auto',
                                }}></CardMedia>
                        </Box>
                    </Box>

                    {/* Main stuff */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '975px',
                            height: 'auto',
                            mt: 4,
                            mx: 'auto',
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            boxShadow: 4,
                        }}>
                        <Box sx={{ m: 2, mb: 5 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Description:
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                {team.strDescriptionEN}
                            </Typography>
                        </Box>

                        <Box sx={{ m: 2, mb: 5 }}>
                            <Typography variant="h6" sx={{ mb: 1 }}>
                                Stadium Description:
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                {team.strStadiumDescription}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </>
    )
}

export default TeamDetail
