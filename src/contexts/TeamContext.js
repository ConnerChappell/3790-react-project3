import * as React from 'react'
import axios from 'axios'

const TeamContext = React.createContext({
    englishTeams: [],
    germanTeams: [],
    spanishTeams: [],
    italianTeams: [],
    allTeams: [],
})

export const TeamContextProvider = (props) => {
    const [englishTeams, setEnglishTeams] = React.useState([])
    const [germanTeams, setGermanTeams] = React.useState([])
    const [spanishTeams, setSpanishTeams] = React.useState([])
    const [italianTeams, setItalianTeams] = React.useState([])
    const [allTeams, setAllTeams] = React.useState([])

    React.useEffect(() => {
        // first define the async function
        const fetchTeams = async () => {
            const englishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=English%20Premier%20League`
            const germanTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=German%20Bundesliga`
            const spanishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=Spanish%20La%20Liga`
            const italianTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=Italian%20Serie%20A`

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
                // Italian teams
                const italianTeamsResponse = await axios.get(italianTeamsURL)
                const italianTeams = await italianTeamsResponse.data.teams

                setEnglishTeams(englishTeams)
                setGermanTeams(germanTeams)
                setSpanishTeams(spanishTeams)
                setItalianTeams(italianTeams)
                setAllTeams([...englishTeams, ...germanTeams, ...spanishTeams, ...italianTeams])
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
                italianTeams,
                allTeams,
            }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => React.useContext(TeamContext)