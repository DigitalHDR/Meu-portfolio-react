import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

import MainRoutes from "./routes"
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <Router>
      <Header />
      <div className='main_Element'>
        <MainRoutes />
      </div>
      <Footer />
    </Router>
  )
}