import * as React from 'react'
import TeamCard from './TeamCard'
import { useTeamContext } from '../contexts/TeamContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const SpanishTeamContainer = () => {
    // extracts the team data from useTeamContext
    const teamData = useTeamContext()

    return (
        <div className="team-container">
            <Box
                sx={{
                    width: '81.5%',
                    height: 'auto',
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 4,
                    m: '0 20px 20px 20px',
                }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        mx: 'auto',
                        mt: 2,
                        mb: 2,
                    }}>
                    Favorites
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    {teamData.favorites &&
                        teamData.favorites.map((strTeamBadge) => {
                            return (
                                <CardMedia
                                    component="img"
                                    image={strTeamBadge}
                                    alt="Team Badge"
                                    sx={{
                                        width: 50,
                                        height: 'auto',
                                        mx: 1,
                                        mb: 2,
                                    }}
                                />
                            )
                        })}
                </Box>
            </Box>

            {teamData.spanishTeams.map((team) => {
                // Passes down team object as prop and handleOpen function as prop
                return (
                    <TeamCard
                        key={team.idTeam}
                        team={{ ...team }}
                    />
                )
            })}

        </div>
    )
}

export default SpanishTeamContainer
