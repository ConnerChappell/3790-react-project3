import * as React from 'react'
import axios from 'axios'

const TeamContext = React.createContext({
    englishTeams: [],
})

export const TeamContextProvider = (props) => {
    const [englishTeams, setEnglishTeams] = React.useState([])

    React.useEffect(() => {
        // first define the async function
        const fetchTeams = async () => {
            const englishTeamsURL = `/.netlify/functions/teams`
            try {
                const englishTeamsResponse = await axios.get(englishTeamsURL)
                const englishTeams = await englishTeamsResponse.data.teams

                setEnglishTeams(englishTeams)
            } catch (error) {
                console.log(error)
            }
        }
        // then call the function
        fetchTeams()
    }, [])

    return (
        <TeamContext.Provider
            value={{
                englishTeams,
            }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => React.useContext(TeamContext)