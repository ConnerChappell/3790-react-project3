import React, { Suspense } from 'react'
import './App.css'
import Home from './pages/Home'
import TeamDetail from './pages/TeamDetail'
import NotFound from './pages/NotFound'
import ButtonAppBar from './components/nav/ButtonAppBar'
import SignupForm from './components/login/SignupForm'
import LoginForm from './components/login/LoginForm'
import { TeamContextProvider } from './contexts/TeamContext'
import NetlifyIdentityContext from 'react-netlify-identity-gotrue'
import { Route, Switch } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'

const EnglishPremierLeagePage = React.lazy(() => import('./pages/leagues/EnglishPremierLeaguePage'))
const GermanBundesligaPage = React.lazy(() => import('./pages/leagues/GermanBundesligaPage'))
const SpanishLaLigaPage = React.lazy(() => import('./pages/leagues/SpanishLaLigaPage'))
const ItalianSerieAPage = React.lazy(() => import('./pages/leagues/ItalianSerieAPage'))
const FrenchLiguePage = React.lazy(() => import('./pages/leagues/FrenchLiguePage'))
const MLSPage = React.lazy(() => import('./pages/leagues/MLSPage'))

const App = () => {
    return (
        <div className="App">
            <NetlifyIdentityContext url="https://3790-react-soccer-app-conner-chappell.netlify.app">
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
                                <Home />
                            </Route>

                            <Route path="/english-premier-league">
                                <EnglishPremierLeagePage />
                            </Route>

                            <Route path="/german-bundesliga">
                                <GermanBundesligaPage />
                            </Route>

                            <Route path="/spanish-la-liga">
                                <SpanishLaLigaPage />
                            </Route>

                            <Route path="/italian-serie-a">
                                <ItalianSerieAPage />
                            </Route>

                            <Route path="/french-ligue-1">
                                <FrenchLiguePage />
                            </Route>

                            <Route path="/major-league-soccer">
                                <MLSPage />
                            </Route>

                            <Route path="/team/:teamId" exact>
                                <TeamDetail />
                            </Route>

                            <Route path="/signup">
                                <SignupForm />
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
            </NetlifyIdentityContext>
        </div>
    )
}

export default App
