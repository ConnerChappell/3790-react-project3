import './App.css'
import Home from './pages/Home'
import EnglishPremierLeagePage from './pages/EnglishPremierLeaguePage'
import GermanBundesligaPage from './pages/GermanBundesligaPage'
import TeamDetail from './pages/TeamDetail'
import NotFound from './pages/NotFound'
import ButtonAppBar from './components/nav/ButtonAppBar'
import LoginForm from './components/login/LoginForm'
import { TeamContextProvider } from './contexts/TeamContext'
import { Route, Redirect, Switch } from 'react-router-dom'

const App = () => {
    return (
        <div className="App">
            <TeamContextProvider>
                <ButtonAppBar />

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
                
            </TeamContextProvider>
        </div>
    )
}

export default App
