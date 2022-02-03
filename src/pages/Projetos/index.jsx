import './projetos.css'
import Card from '../../components/Card'
import data from '../../data/data'

export default function Projetos() {
  return (
    <div className='container'>
      <h1>Lista de Projetos</h1>

      <div className='projeto_flex'>
      {data.especificacao.map((item, index) => {
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