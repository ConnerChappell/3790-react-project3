import * as React from 'react'
import axios from 'axios'

const TeamContext = React.createContext({
    englishTeams: [],
    germanTeams: [],
    spanishTeams: [],
    italianTeams: [],
    frenchTeams: [],
    americanTeams: [],
    allTeams: [],
})

export const TeamContextProvider = (props) => {
    const [englishTeams, setEnglishTeams] = React.useState([])
    const [germanTeams, setGermanTeams] = React.useState([])
    const [spanishTeams, setSpanishTeams] = React.useState([])
    const [italianTeams, setItalianTeams] = React.useState([])
    const [frenchTeams, setFrenchTeams] = React.useState([])
    const [americanTeams, setAmericanTeams] = React.useState([])
    const [allTeams, setAllTeams] = React.useState([])

    React.useEffect(() => {
        // first define the async function
        const fetchTeams = async () => {
            const englishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=English%20Premier%20League`
            const germanTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=German%20Bundesliga`
            const spanishTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=Spanish%20La%20Liga`
            const italianTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=Italian%20Serie%20A`
            const frenchTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=French%20Ligue%201`
            const americanTeamsURL = `/.netlify/functions/teams?league=search_all_teams.php?l=American%20Major%20League%20Soccer`

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
                // French teams
                const frenchTeamsResponse = await axios.get(frenchTeamsURL)
                const frenchTeams = await frenchTeamsResponse.data.teams
                // American teams
                const americanTeamsResponse = await axios.get(americanTeamsURL)
                const americanTeams = await americanTeamsResponse.data.teams

                setEnglishTeams(englishTeams)
                setGermanTeams(germanTeams)
                setSpanishTeams(spanishTeams)
                setItalianTeams(italianTeams)
                setFrenchTeams(frenchTeams)
                setAmericanTeams(americanTeams)
                setAllTeams([...englishTeams, ...germanTeams, ...spanishTeams, ...italianTeams, ...frenchTeams, ...americanTeams])
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
                frenchTeams,
                americanTeams,
                allTeams,
            }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => React.useContext(TeamContext)