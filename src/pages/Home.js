import { useIdentityContext } from 'react-netlify-identity-gotrue'
import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help'
import HeaderImage from '../assets/soccer-app-header.jpg'

const ContainerStyle = {
    display: 'flex',
    alignItems: 'start',
    flexDirection: 'column',
    maxWidth: '1400px',
    width: 'auto',
    margin: '0 auto',
    p: 0,
    bgcolor: 'background.paper',
    boxShadow: 3,
}

const InitialCardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    p: '20px 50px',
    m: '20px',
    width: 315,
    height: 300,
    textAlign: 'center',
    boxShadow: 4,
    transition: 'all .5s',
    '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.03)',
    },
}

const Home = () => {
    const identity = useIdentityContext()
    console.log(identity)

    return (
        <>
            {!identity.provisionalUser && !identity.user && (
                // Page Container
                <Box sx={ContainerStyle}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${HeaderImage})`,
                            width: '100%',
                            height: '400px',
                        }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                backgroundColor: 'rgba(0,0,0,.3)',
                            }}
                        />
                        <Typography
                            component="h1"
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                textShadow: '2px 3px 5px rgba(0,0,0,0.5)',
                                zIndex: '99',
                                mx: 'auto',
                            }}>
                            Welcome to the Soccer App!
                        </Typography>
                        <Typography
                            variant="h5"
                            paragraph
                            sx={{
                                fontWeight: 'bold',
                                textShadow: '2px 3px 5px rgba(0,0,0,0.5)',
                                zIndex: '99',
                                mb: 6,
                            }}>
                            Please signup or login to view content
                        </Typography>
                    </Box>

                    <Typography
                        component="h2"
                        variant="h3"
                        sx={{ mx: 'auto', mt: 4 }}>
                        Leagues
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            textAlign: 'center',
                            mb: 5,
                        }}>
                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>
                    </Box>
                </Box>
            )}

            {identity.provisionalUser && (
                // Page Container
                <Box sx={ContainerStyle}>
                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#fff',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundImage: `url(${HeaderImage})`,
                            width: '100%',
                            height: '400px',
                        }}>
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                backgroundColor: 'rgba(0,0,0,.3)',
                            }}
                        />
                        <Typography
                            component="h1"
                            variant="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 'bold',
                                textShadow: '2px 3px 5px rgba(0,0,0,0.5)',
                                zIndex: '99',
                                mx: 'auto',
                            }}>
                            Thanks for signing up!
                        </Typography>
                        <Typography
                            variant="h5"
                            paragraph
                            sx={{
                                fontWeight: 'bold',
                                textShadow: '2px 3px 5px rgba(0,0,0,0.5)',
                                zIndex: '99',
                                mb: 6,
                            }}>
                            Please check your email at "
                            {identity.provisionalUser.email}" to confirm your
                            account
                        </Typography>
                    </Box>

                    <Typography
                        component="h2"
                        variant="h3"
                        sx={{ mx: 'auto', mt: 4 }}>
                        Leagues
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            textAlign: 'center',
                            mb: 5,
                        }}>
                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>

                        <Card sx={InitialCardStyle}>
                            <HelpIcon
                                sx={{
                                    fontSize: 200,
                                }}
                            />
                            <Typography variant="h5">
                                Signup or login to visit
                            </Typography>
                        </Card>
                    </Box>
                </Box>
            )}

            {identity.user && (
                <Box>
                    <h1>Welcome {identity.user?.user_metadata?.full_name}!</h1>
                    <h2>Some links and stuff will be added here</h2>
                </Box>
            )}
        </>
    )
}

export default Home
