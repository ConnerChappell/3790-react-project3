import './App.css'
import TeamContainer from './components/TeamContainer'
import { TeamContextProvider } from './contexts/TeamContext'
import ButtonAppBar from './components/nav/ButtonAppBar'

const App = () => {
    return (
        <div className="App">
            <TeamContextProvider>
                <ButtonAppBar />
                
                <TeamContainer />
            </TeamContextProvider>
        </div>
    )
}

export default App
