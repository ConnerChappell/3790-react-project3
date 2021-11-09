import './App.css'
import EnglishPremierLeagePage from './pages/EnglishPremierLeaguePage'
import GermanBundesligaPage from './pages/GermanBundesligaPage'
import { TeamContextProvider } from './contexts/TeamContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './components/login/LoginForm'

const App = () => {
    return (
        <div className="App">
            <TeamContextProvider>
                <ButtonAppBar />

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
                <Route path="/login">
                    <LoginForm />
                </Route>
            </TeamContextProvider>
        </div>
    )
}

export default App
