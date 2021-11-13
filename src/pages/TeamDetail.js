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
    )
}

export default TeamDetail
