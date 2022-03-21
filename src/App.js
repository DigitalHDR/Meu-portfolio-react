import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

// import MainRoutes from "./routes"
import Header from './components/Header'
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Skill from "./pages/Skill";
import Projetos from "./pages/Projetos";
import Curriculos from "./pages/Curriculos";
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
        <Header />
        <div className='main_Element'>
          {/* <MainRoutes /> */}
          <Home />
          <Sobre />
          <Skill />
        <Projetos />
        <Curriculos />
        </div>
        <Footer />
    </Router>
  )
}