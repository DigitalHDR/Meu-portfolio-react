import React, { useState, useEffect } from 'react'
import './projetos.css'
import Card from '../../components/Card'
import dataGeral from '../../data/data'

export default function Projetos() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)

  useEffect(() => {
    const getProdutos = () => {
      const response = dataGeral.especificacao
      setFilter(response)
      setData(response)
    }
    getProdutos()
  }, [])

  const filterProduto = (categoria) => {
    const resultadoFilter = data.filter((resp) => resp.type === categoria)
    return setFilter(resultadoFilter)
  }

  return (
    <div className='container top' id='projetos_link'> {/* id apenas para página única /> */}
      <h1>Lista de Projetos</h1>
      <br />
      <div className='FiltroBox'>
        <h2>Filtro de busca</h2>
        <div className='BoxButton'>
          {/* <Button title="JavaScript">JavaScript</Button> */}
          <h1 onClick={() => filterProduto('html-css-javascrip')}>Html Css Javascrip</h1>
          <h1 onClick={() => filterProduto('react')}>React</h1>
          <h1 onClick={() => filterProduto('react-native')}>React-Native</h1>
          <h1 onClick={() => setFilter(data)}>Todos</h1>
        </div>
      </div>
      <br />
      <div className='projeto_flex'>
        {filter.map((item, index) => {
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