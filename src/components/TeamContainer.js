import * as React from 'react'
import { teams } from '../data/teams'
import TeamCard from './TeamCard'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CardMedia from '@mui/material/CardMedia'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
}

const TeamContainer = () => {
    // use state for opening modal
    const [open, setOpen] = React.useState(false)
    // use state for rendering team info into modal
    const [renderTeamInfo, setRenderTeamInfo] = React.useState([])
    // use state for adding favorites
    const [favorites, setFavorites] = React.useState([])

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

    // Modal Functions
    const handleOpen = (team) => {
        setOpen(true)
        setRenderTeamInfo(() => {
            return [team]
        })
    }
    const handleClose = () => {
        setOpen(false)
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

            {teams.map((team) => {
                // Passes down team object as prop and handleOpen function as prop
                return (
                    <TeamCard
                        key={team.idTeam}
                        addToFavoritesFunction={addToFavorites}
                        modalFunction={handleOpen}
                        team={{ ...team }}
                    />
                )
            })}

            <Modal open={open} onClose={handleClose}>
                <Box sx={modalStyle}>
                    {renderTeamInfo.map((team) => {
                        return (
                            <div>
                                <Typography variant="h3" component="h2">
                                    {team.strTeam}
                                </Typography>

                                <Typography>
                                    Formed in {team.intFormedYear}
                                </Typography>

                                <Typography>
                                    Location: {team.strStadiumLocation}
                                </Typography>

                                <Typography mt={2}>
                                    Stadium: {team.strStadium}
                                </Typography>
                                <Typography>
                                    Capacity: {team.intStadiumCapacity}
                                </Typography>
                                <CardMedia
                                    component="img"
                                    image={team.strStadiumThumb}
                                    alt="Team Stadium"
                                    sx={{
                                        width: 325,
                                        height: 'auto',
                                        mt: 1,
                                        mx: 'auto',
                                    }}
                                />

                                <CardMedia
                                    component="img"
                                    image={team.strTeamJersey}
                                    alt="Team Jersey"
                                    sx={{
                                        width: 150,
                                        height: 'auto',
                                        mt: 4,
                                        mx: 'auto',
                                    }}
                                />
                            </div>
                        )
                    })}
                </Box>
            </Modal>
        </div>
    )
}

export default TeamContainer
