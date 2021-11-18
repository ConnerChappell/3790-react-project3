import * as React from 'react'
import axios from 'axios'

const TeamContext = React.createContext({
    englishTeams: [],
    germanTeams: [],
    spanishTeams: [],
    allTeams: [],
})

export const TeamContextProvider = (props) => {
    const [englishTeams, setEnglishTeams] = React.useState([])
    const [germanTeams, setGermanTeams] = React.useState([])
    const [spanishTeams, setSpanishTeams] = React.useState([])
    const [allTeams, setAllTeams] = React.useState([])

    React.useEffect(() => {
        // first define the async function
        const fetchTeams = async () => {
            const englishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=English%20Premier%20League`
            const germanTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=German%20Bundesliga`
            const spanishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=Spanish%20La%20Liga`

            try {
                // English teams
                const englishTeamsResponse = await axios.get(englishTeamsURL)
                const englishTeams = await englishTeamsResponse.data.teams
                // German teams
                const germanTeamsResponse = await axios.get(germanTeamsURL)
                const germanTeams = await germanTeamsResponse.data.teams
                // Spanish teams
                const spanishTeamsResponse = await axios.get(spanishTeamsURL)
                const spanishTeams = await spanishTeamsResponse.data.teams

                setEnglishTeams(englishTeams)
                setGermanTeams(germanTeams)
                setSpanishTeams(spanishTeams)
                setAllTeams([...englishTeams, ...germanTeams, ...spanishTeams])
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
                germanTeams,
                spanishTeams,
                allTeams,
            }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => React.useContext(TeamContext)