import * as React from 'react'
import TeamCard from '../components/TeamCard'
import { useTeamContext } from '../contexts/TeamContext'
import Box from '@mui/material/Box'

const GermanTeamContainer = () => {
    // extracts the team data from useTeamContext
    const teamData = useTeamContext()

    return (
        <Box className="team-container">

            {teamData.germanTeams.map((team) => {
                // Passes down team object as prop
                return (
                    <TeamCard
                        key={team.idTeam}
                        team={{ ...team }}
                    />
                )
            })}

        </Box>
    )
}

export default GermanTeamContainer
