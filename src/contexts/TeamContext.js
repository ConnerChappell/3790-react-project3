import * as React from 'react'
import axios from 'axios'

const TeamContext = React.createContext({
    // context for teams
    englishTeams: [],
    germanTeams: [],
    spanishTeams: [],
    italianTeams: [],
    frenchTeams: [],
    americanTeams: [],
    allTeams: [],
    // context for favorites
    favorites: [],
    // context for league tables
    englishTable: [],
    germanTable: [],
    spanishTable: [],
    italianTable: [],
    frenchTable: [],

})

export const TeamContextProvider = (props) => {
    // gets all the teams for each league
    const [englishTeams, setEnglishTeams] = React.useState([])
    const [germanTeams, setGermanTeams] = React.useState([])
    const [spanishTeams, setSpanishTeams] = React.useState([])
    const [italianTeams, setItalianTeams] = React.useState([])
    const [frenchTeams, setFrenchTeams] = React.useState([])
    const [americanTeams, setAmericanTeams] = React.useState([])
    const [allTeams, setAllTeams] = React.useState([])
    // favorites
    const [favorites, setFavorites] = React.useState([])
    // gets all the table data for each league
    const [englishTable, setEnglishTable] = React.useState([])
    const [germanTable, setGermanTable] = React.useState([])
    const [spanishTable, setSpanishTable] = React.useState([])
    const [italianTable, setItalianTable] = React.useState([])
    const [frenchTable, setFrenchTable] = React.useState([])

    // update favorites function
    const updateFavorites = (team) => {
        if (!favorites.includes(team.idTeam)) {
            console.log(`${team.idTeam} was clicked`)
            // Not a favorite so add it
            setFavorites((prevState) => {
                return [...prevState, team.idTeam]
            })
        } else {
            setFavorites(() => {
                // Duplicate: filter and return new array
                return favorites.filter((item) => {
                    return item !== team.idTeam
                })
            })
        }
    }

    React.useEffect(() => {
        // first define the async function
        const fetchSoccer = async () => {
            // fetches teams for each league
            const englishTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=English%20Premier%20League`
            const germanTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=German%20Bundesliga`
            const spanishTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=Spanish%20La%20Liga`
            const italianTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=Italian%20Serie%20A`
            const frenchTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=French%20Ligue%201`
            const americanTeamsURL = `/.netlify/functions/soccer?option=search_all_teams.php?l=American%20Major%20League%20Soccer`

            // fetches table data for each league
            const englishTableURL = `/.netlify/functions/soccer?option=lookuptable.php?l=4328&s=2021-2022`
            const germanTableURL = `/.netlify/functions/soccer?option=lookuptable.php?l=4331&s=2021-2022`
            const spanishTableURL = `/.netlify/functions/soccer?option=lookuptable.php?l=4335&s=2021-2022`
            const italianTableURL = `/.netlify/functions/soccer?option=lookuptable.php?l=4332&s=2021-2022`
            const frenchTableURL = `/.netlify/functions/soccer?option=lookuptable.php?l=4334&s=2021-2022`

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

                // English table
               const englishTableResponse = await axios.get(englishTableURL)
               const englishTable = await englishTableResponse.data.table
               // German table
               const germanTableResponse = await axios.get(germanTableURL)
               const germanTable = await germanTableResponse.data.table
               // Spanish table
               const spanishTableResponse = await axios.get(spanishTableURL)
               const spanishTable = await spanishTableResponse.data.table
               // Italian table
               const italianTableResponse = await axios.get(italianTableURL)
               const italianTable = await italianTableResponse.data.table
               // French table
               const frenchTableResponse = await axios.get(frenchTableURL)
               const frenchTable = await frenchTableResponse.data.table

                setEnglishTeams(englishTeams)
                setGermanTeams(germanTeams)
                setSpanishTeams(spanishTeams)
                setItalianTeams(italianTeams)
                setFrenchTeams(frenchTeams)
                setAmericanTeams(americanTeams)
                setAllTeams([...englishTeams, ...germanTeams, ...spanishTeams, ...italianTeams, ...frenchTeams, ...americanTeams])
                setEnglishTable(englishTable)
                setGermanTable(germanTable)
                setSpanishTable(spanishTable)
                setItalianTable(italianTable)
                setFrenchTable(frenchTable)

            } catch (error) {
                console.log(error)
            }
        }
        // then call the function
        fetchSoccer()
    }, [])

    return (
        <TeamContext.Provider
            value={{
                // teams
                englishTeams,
                germanTeams,
                spanishTeams,
                italianTeams,
                frenchTeams,
                americanTeams,
                allTeams,
                // favorites in context provider
                favorites,
                updateFavorites,
                // tables
                englishTable,
                germanTable,
                spanishTable,
                italianTable,
                frenchTable,
            }}>
            {props.children}
        </TeamContext.Provider>
    )
}

export const useTeamContext = () => React.useContext(TeamContext)