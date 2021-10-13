import * as React from 'react'
import '../App.css'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'
import FavoriteIcon from '@mui/icons-material/Favorite'

const TeamCard = (props) => {
    const [loadTeamInfo, setLoadTeamInfo] = React.useState(false)

    const [favorite, setFavorite] = React.useState(false)

    // Function that handles favorite click
    const handleFavoriteClick = () => {
        setFavorite(!favorite)
        props.addToFavoritesFunction(props.team)
    }

    // Handles modal function prop from parent which opens modal from click event listener
    const handleInfoClick = () => {
        setLoadTeamInfo(loadTeamInfo)
        props.modalFunction(props.team)
    }

    return (
        <Card
            className="card"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: '20px 50px',
                m: '20px',
                width: 200,
                textAlign: 'center',
                boxShadow: 4,
                transition: 'all .5s',
                '&:hover': {
                    transform: 'scale(1.03)',
                },
            }}>
            <CardMedia
                component="img"
                image={props.team.strTeamBadge}
                alt="Team Badge"
                sx={{
                    width: 125,
                    height: 'auto',
                    mx: 'auto',
                }}
            />
            <CardContent>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        mx: 'auto',
                    }}>
                    {props.team.strTeam}
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    p: 0,
                }}>
                <IconButton
                    onClick={handleInfoClick}
                    sx={{
                        m: 0,
                    }}>
                    <InfoIcon />
                </IconButton>
                <IconButton
                    onClick={handleFavoriteClick}
                    sx={{
                        m: 0,
                        color: favorite ? "#F00" : "rgba(0, 0, 0, 0.54)",
                    }}>
                    <FavoriteIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default TeamCard
