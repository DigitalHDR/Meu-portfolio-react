import React, { useState, useEffect } from 'react'
import './projetos.css'
import Card from '../../components/Card'
import data from '../../data/data'

export default function Projetos() {
  const [dados, setDados] = useState([])
  
  const filtrarLista = (filtro) => {
    const filtrado = data.especificacao.filter((resp) => resp.type === filtro)
    return setDados(filtrado)
  }

  return (
    <div className='container top' id='projetos_link'> {/* id apenas para página única /> */}
      <h1>Lista de Projetos</h1>
      <br />

      <div className='FiltroBox'>

        <h2>Filtro de busca</h2>

        <div className='BoxButton'>
          {/* <Button title="JavaScript">JavaScript</Button> */}
          <h1 onClick={() => filtrarLista('html-css-javascrip')}>Html Css Javascrip</h1>
          <h1 onClick={() => filtrarLista('react')}>React</h1>
          <h1 onClick={() => filtrarLista('react-native')}>React-Native</h1>
          <h1 onClick={() => setDados(data.especificacao)}>Todos</h1>
        </div>

      </div>

      <br />
      <div className='projeto_flex'>
        {dados.map((item, index) => {
          return (
            <div key={index}>
              <div className='projetos_card'>
                <Card
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  url={item.url} />
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}