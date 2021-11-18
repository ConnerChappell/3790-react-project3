import * as React from 'react'
import TeamCard from './TeamCard'
import { useTeamContext } from '../contexts/TeamContext'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

const ItalianTeamContainer = () => {
    // use state for adding favorites
    const [favorites, setFavorites] = React.useState([])
    // extracts the team data from useTeamContext
    const teamData = useTeamContext()

    // Add favorites function
    const addToFavorites = (team) => {
        if (!favorites.includes(team.strTeamBadge)) {
            console.log(`${team.strTeamBadge} was clicked`)
            // Not a favorite so add it
            setFavorites((prevState) => {
                return [...prevState, team.strTeamBadge]
            })
        } else {
            setFavorites(() => {
                // Duplicate: filter and return new array
                return favorites.filter((item) => {
                    return item !== team.strTeamBadge
                })
            })
        }
    }

    return (
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
                }}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        mx: 'auto',
                        mt: 2,
                        mb: 2,
                    }}>
                    Favorites
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    {favorites &&
                        favorites.map((strTeamBadge) => {
                            return (
                                <CardMedia
                                    component="img"
                                    image={strTeamBadge}
                                    alt="Team Badge"
                                    sx={{
                                        width: 50,
                                        height: 'auto',
                                        mx: 1,
                                        mb: 2,
                                    }}
                                />
                            )
                        })}
                </Box>
            </Box>

            {teamData.italianTeams.map((team) => {
                // Passes down team object as prop and handleOpen function as prop
                return (
                    <TeamCard
                        key={team.idTeam}
                        addToFavoritesFunction={addToFavorites}
                        team={{ ...team }}
                    />
                )
            })}

        </div>
    )
}

export default ItalianTeamContainer
