import React, { useState, useEffect } from 'react'
import './curriculo.css'
import eduzz1 from '../../assets/curriculos/Eduzz-Fullstack-Developer-1.pdf'
import eduzz2 from '../../assets/curriculos/Eduzz-Fullstack-Developer-2.pdf'
import FrontEndCompleto from '../../assets/curriculos/Front-end-completo.pdf'
import FrontEnd from '../../assets/curriculos/Front-end.pdf'
import GitHub from '../../assets/curriculos/Git-GitHub.pdf'
import JavaScriptES6Avançado from '../../assets/curriculos/JavaScript-ES6-avançado.pdf'
import NodeJSMongoDB from '../../assets/curriculos/NodeJS-e-MongoDB.pdf'
import ProjetosAgeisComSCRUM from '../../assets/curriculos/Projetos-ágeis-com-SCRUM.pdf'
import ReactHooksProjetos from '../../assets/curriculos/React-Hooks-8-projetos.pdf'
import ReactNative from '../../assets/curriculos/React-Native.pdf'
import ReactJsAvançado from '../../assets/curriculos/ReactJs-avançado.pdf'
import ReduxCompleto from '../../assets/curriculos/Redux-Completo.pdf'
import WebDesignExpress from '../../assets/curriculos/Web-design-Express.pdf'
import Curriculo from '../../assets/curriculos/Curriculo-19-3-2022.pdf'

export default function Curriculos() {
  return (
    <div className='container top' id='projetos_link'> {/* id apenas para página única /> */}
      <h1>Certificados e Currículo PDF</h1>
      <br />
      <div className='curriculo_box'>
        <ul>
          <a href={Curriculo} type='application/pdf'><button>Currículo</button></a>
          <a href={ReactJsAvançado} type='application/pdf'><button>ReactJs avançado</button></a>
          <a href={ReduxCompleto} type='application/pdf'><button>React + Redux Completo</button></a>
          <a href={NodeJSMongoDB} type='application/pdf'><button>NodeJS e MongoDB</button></a>
          <a href={ReactHooksProjetos} type='application/pdf'><button>React Hooks 8 projetos</button></a>
          <a href={ReactNative} type='application/pdf'><button>React-Native</button></a>
          <a href={ProjetosAgeisComSCRUM} type='application/pdf'><button>Projetos ágeis com SCRUM</button></a>
          <a href={eduzz1} type='application/pdf'><button>Eduzz Fullstack Developer #1</button></a>
          <a href={eduzz2} type='application/pdf'><button>Eduzz Fullstack Developer #2</button></a>
          <a href={GitHub} type='application/pdf'><button>Git-GitHub</button></a>
          <a href={FrontEndCompleto} type='application/pdf'><button>Front-end completo</button></a>
          <a href={FrontEnd} type='application/pdf'><button>Front-end</button></a>
          <a href={JavaScriptES6Avançado} type='application/pdf'><button>JavaScript ES6 avançado</button></a>
          <a href={WebDesignExpress} type='application/pdf'><button>Web design Express</button></a>
        </ul>
      </div>
    </div>
  )
}
