import React, { useState } from 'react';

import './header.css'
// import { Link } from "react-router-dom";
import Button from '../Botao'

import { AiOutlineBars } from "react-icons/ai";
import { HiX } from "react-icons/hi";

export default function Index() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className='container nav_header'>
        <h1><a href='#home_link'>Lucas</a></h1>
        <ul className="nav_link" id={showLinks ? 'hidden' : ''}>
          <li ><a href='#home_link' to="/"><Button title="Perfil" /></a></li>
          <li><a href='#sobre_link' to="/sobre"><Button title="Sobre" /></a></li>
          <li><a href='#skill_link' to="/skill"><Button title="Skill" /></a></li>
          <li><a href='#projetos_link' to="/projetos"><Button title="Projetos" /></a></li>
        </ul>
        <button onClick={() => setShowLinks(!showLinks)}>
          {showLinks ? 
            <HiX className='hix' /> :
            <AiOutlineBars className='aiOutlinesBars' />}
        </button>
      </div>
    </nav>
  )
}