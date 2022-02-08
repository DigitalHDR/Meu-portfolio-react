import React, { useState } from 'react';
import useDarkMode from "./useDarkMode";

import './header.css'
// import { Link } from "react-router-dom";
import Button from '../Botao'

import { AiOutlineBars } from "react-icons/ai";
import { HiX } from "react-icons/hi";

export default function Index() {
  const [showLinks, setShowLinks] = useState(false)
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <nav>
      <div className='container nav_header'>
        <h1><a href='#home_link'>Lucas</a></h1>
        <ul className="nav_link" id={showLinks ? 'hidden' : ''}>
          <li onClick={() => setShowLinks(!showLinks)}><a href='#home_link' to="/"><Button title="Perfil" /></a></li>
          <li onClick={() => setShowLinks(!showLinks)}><a href='#sobre_link' to="/sobre"><Button title="Sobre" /></a></li>
          <li onClick={() => setShowLinks(!showLinks)}><a href='#skill_link' to="/skill"><Button title="Skill" /></a></li>
          <li onClick={() => setShowLinks(!showLinks)}><a href='#projetos_link' to="/projetos"><Button title="Projetos" /></a></li>
        </ul>


        <div className="nav_darkMode darkMode_container">
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          <div className="switch-checkbox">
            <label className="switch">
              <input onClick={() => toggleDarkMode(darkMode)} type="checkbox" />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{color: darkMode ? "grey" : "yellow" }}>☀︎</span>
        </div>


        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ?
            <HiX className='hix' /> :
            <AiOutlineBars className='aiOutlinesBars' />}
        </button>
      </div>
    </nav>
  )
}