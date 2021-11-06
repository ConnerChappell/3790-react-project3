import './App.css'
import TeamContainer from './pages/TeamContainer'
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
                <Route path="/teams"><TeamContainer /></Route>
                <Route path="/login"><LoginForm /></Route>
            </TeamContextProvider>
        </div>
    )
}

export default App
