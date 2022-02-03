import './card.css'
import CardBotao from '../CardBotao'

export default function index(props) {
  return (
    <div className="card_box">
      <div className="card_container">
        <div>
          <img src={props.img} alt="capa" />
        </div>
        <div className='card_descricao'>
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
      <CardBotao url={props.url} />
    </div>
  )
}
