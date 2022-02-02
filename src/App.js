import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

import MainRoutes from "./routes"
import Header from './components/Header'

export default function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  )
}