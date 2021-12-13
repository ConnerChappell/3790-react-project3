import * as React from 'react'
import { Box, Typography, Fade } from '@mui/material'
import TeamCard from '../components/TeamCard'
import { useSoccerContext } from '../contexts/SoccerContext'

const Favorites = () => {
    const [matchedFavorites, setMatchedFavorites] = React.useState([])
    const { allTeams, favorites } = useSoccerContext()

    // side effect that filters favorites and renders on favorites page
    React.useEffect(() => {
         setMatchedFavorites(() => {
            const matches = allTeams.filter((team) => favorites.includes(team.idTeam))

            return [...matches]
         })
    }, [favorites, allTeams])
    
    return (
        <Fade in timeout={1500}>
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100&',
                        height: 'auto',
                        p: 3,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                    }}>
                    <Typography component="h1" variant="h3">
                        Favorites
                    </Typography>
                </Box>

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
                        }}></Box>

                    {matchedFavorites.map((team) => {
                        return <TeamCard key={team.idTeam} team={{ ...team }} />
                    })}
                </div>
            </div>
        </Fade>
    )
}

export default Favorites
