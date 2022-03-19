import React, { useState, useEffect } from 'react'
import './projetos.css'
import Card from '../../components/Card'
import dataGeral from '../../data/data'

export default function Projetos() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState([])

  useEffect(() => { //! ########################## 1°
    const getProdutos = () => {
      const response = dataGeral.especificacao
      setData(response)
      setFilter(response) //!Aqui tem que ter porque inicia com ele.
    }
    getProdutos()
  }, [])

  //! Aqui setFilter vai receber a variavel somente quando hover o onclick de filterProduto para pesquisar um unico type de acordo com o parametro posto
  //! antes disso setFilter esta com todos os types vindo de dataGeral.especificacao, onde esta todos os dados da api fake
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
          <h1 onClick={() => filterProduto('html-css-javascrip')}>Html Css Javascript</h1>
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