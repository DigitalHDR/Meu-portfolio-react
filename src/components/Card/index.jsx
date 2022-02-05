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
          <hr />
          <h4>{props.title}</h4>
          <hr />
          <p>{props.desc}</p>
        </div>

        <div className='CardBotao_position'>
          <CardBotao url={props.url} />
        </div>

      </div>

    </div>
  )
}
