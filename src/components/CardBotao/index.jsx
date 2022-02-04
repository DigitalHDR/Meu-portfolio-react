import './cardBotao.css'

export default function index(props) {
  return (
    <div className='cardBotao_container'>
      <a href={props.url} className="card_btn">
        Ver Projeto
      </a>
    </div>
  )
}

