import * as React from 'react'
import TeamCard from './TeamCard'
import { useTeamContext } from '../contexts/TeamContext'
import Box from '@mui/material/Box'

const ItalianTeamContainer = () => {
    // extracts the team data from useTeamContext
    const teamData = useTeamContext()

    return (
        <Box className="team-container">

            {teamData.italianTeams.map((team) => {
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

export default ItalianTeamContainer
