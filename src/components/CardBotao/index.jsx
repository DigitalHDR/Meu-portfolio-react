import './cardBotao.css'

export default function index(props) {
  return (
    <div className="cardBotao_container">
      <div className="centralizaBTN">
        <a href={props.url} className="card_btn">
          Detalhes
        </a>
      </div>
    </div>
  )
}
