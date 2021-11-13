import * as React from 'react'
import { useParams } from 'react-router-dom'
import { useTeamContext } from '../contexts/TeamContext'

const TeamDetail = () => {
    const params = useParams()
    const teamData = useTeamContext()

    const team = teamData.allTeams.find(item => item.idTeam === params.teamId)
    console.log(team)

    return (
        <h1>{team.strTeam}</h1>
    )
}

export default TeamDetail