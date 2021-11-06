import './App.css'
import EnglishTeamContainer from './pages/EnglishTeamContainer'
import GermanTeamContainer from './pages/GermanTeamContainer'
import { TeamContextProvider } from './contexts/TeamContext'
import ButtonAppBar from './components/nav/ButtonAppBar'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import LoginForm from './components/login/LoginForm'

const App = () => {
    return (
        <div className="App">
            <TeamContextProvider>
                <ButtonAppBar />

                <Route path="/home"><Home /></Route>
                <Route path="/english-premier-league"><EnglishTeamContainer /></Route>
                <Route path="/german-bundesliga"><GermanTeamContainer /></Route>
                <Route path="/login"><LoginForm /></Route>
            </TeamContextProvider>
        </div>
    )
}

export default App
