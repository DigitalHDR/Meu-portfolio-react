import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './header.css'

import Button from '../Botao'

import { AiOutlineBars } from "react-icons/ai";
import { HiX } from "react-icons/hi";

export default function Index() {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav>
      <div className="container nav_header">
        <h1>Lucas</h1>
        <ul className="nav_link" id={showLinks ? 'hidden' : ''}>
          <li><Link to="/"><Button title="Home" /></Link></li>
          <li><Link to="/sobre"><Button title="Sobre" /></Link></li>
          <li><Link to="/skill"><Button title="Skill" /></Link></li>
          <li><Link to="/projetos"><Button title="Projetos" /></Link></li>
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