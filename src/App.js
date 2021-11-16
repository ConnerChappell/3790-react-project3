import React, { Suspense } from 'react'
import './App.css'
import Home from './pages/Home'
import TeamDetail from './pages/TeamDetail'
import NotFound from './pages/NotFound'
import ButtonAppBar from './components/nav/ButtonAppBar'
import LoginForm from './components/login/LoginForm'
import { TeamContextProvider } from './contexts/TeamContext'
import { Route, Redirect, Switch } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

const EnglishPremierLeagePage = React.lazy(() =>
    import('./pages/EnglishPremierLeaguePage')
)
const GermanBundesligaPage = React.lazy(() =>
    import('./pages/GermanBundesligaPage')
)

const App = () => {
    return (
        <div className="App">
            <TeamContextProvider>
                <ButtonAppBar />

                <Suspense
                    fallback={
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 5,
                            }}>
                            <CircularProgress color="error" />
                        </Box>
                    }>
                    <Switch>
                        <Route path="/" exact>
                            <Redirect to="/home" />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/english-premier-league">
                            <EnglishPremierLeagePage />
                        </Route>
                        <Route path="/german-bundesliga">
                            <GermanBundesligaPage />
                        </Route>
                        <Route path="/team/:teamId" exact>
                            <TeamDetail />
                        </Route>
                        <Route path="/login">
                            <LoginForm />
                        </Route>
                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </Suspense>
            </TeamContextProvider>
        </div>
    )
}

export default App
