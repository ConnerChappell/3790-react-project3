import * as React from 'react'
import TeamCard from './TeamCard'
import { useSoccerContext } from '../contexts/SoccerContext'
import Box from '@mui/material/Box'

const FrenchTeamContainer = () => {
    // extracts the team data from useTeamContext
    const soccerData = useSoccerContext()

    return (
        <Box className="team-container">

            {soccerData.frenchTeams.map((team) => {
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

export default FrenchTeamContainer
