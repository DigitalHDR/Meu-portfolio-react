import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import useDarkMode from "./useDarkMode";

// import MainRoutes from "./routes"
import Header from './components/Header'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skill from "./pages/Skill";
import Projetos from "./pages/Projetos";
import Footer from './components/Footer'

export default function App() {
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <Router>
        <Header />
        <div className='main_Element'>
          {/* <MainRoutes /> */}
          <Home />
          <div className="apppp" style={{color: '#fff', textAlign: 'center'}}>
            <h1>React Dark Mode</h1>
            <input onClick={() => toggleDarkMode()}  type="checkbox" />
          </div>
          <Sobre />
          <Skill />
          <Projetos />
        </div>
        <Footer />
    </Router>
  )
}