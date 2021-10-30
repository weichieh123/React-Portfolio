import Nav from './components/Nav/Nav'
import Intro from './components/Intro/Intro'
import Portfolio from './components/Portfolio/Portfolio'
import Works from './components/Works/Works'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="section">
        <Intro />
        <Portfolio />
        <Works />
      </div>
    </div>
  )
}

export default App
