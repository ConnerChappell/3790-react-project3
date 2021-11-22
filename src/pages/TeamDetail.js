import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useTeamContext } from '../contexts/TeamContext'
import { Box, CardMedia, Typography } from '@mui/material'

const TeamDetail = () => {
    const params = useParams()
    const teamData = useTeamContext()

    const team = teamData.allTeams.find((item) => item.idTeam === params.teamId)
    console.log(team)

    return (
        <>
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

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    maxWidth: '1400px',
                    mx: 'auto',
                }}>
                {/* Sidebar stuff */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '400px',
                        mt: 4,
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        boxShadow: 4,
                    }}>
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
                            alt="Team Badge"
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
                        <CardMedia
                            component="img"
                            image={team.strStadiumThumb}
                            alt="Team Badge"
                            sx={{
                                width: 300,
                                height: 'auto',
                                mx: 'auto',
                            }}></CardMedia>
                        <Typography variant="h6" sx={{ mb: 1 }}>
                            Capacity: {team.intStadiumCapacity}
                        </Typography>
                    </Box>

                </Box>

                {/* Main stuff */}
            </Box>
        </>
    )
}

export default TeamDetail
