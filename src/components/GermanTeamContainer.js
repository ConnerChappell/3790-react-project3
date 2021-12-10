import * as React from 'react'
import TeamCard from '../components/TeamCard'
import { useTeamContext } from '../contexts/TeamContext'
import Box from '@mui/material/Box'

const GermanTeamContainer = () => {
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
            </Box>

            {teamData.germanTeams.map((team) => {
                // Passes down team object as prop
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

export default GermanTeamContainer
