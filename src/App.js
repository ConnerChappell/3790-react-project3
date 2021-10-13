import './App.css'
import logo from './premier-league-logo.png'
import TeamContainer from './components/TeamContainer'

const App = () => {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Premier League Logo" className="logo"/>
        English Premier League Teams
      </header>
      <TeamContainer />
    </div>
  );
}

export default App;
