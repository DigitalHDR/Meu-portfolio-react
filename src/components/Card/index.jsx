import './card.css'
import CardBotao from '../CardBotao'

export default function Card(props) {
  return (
    <div className="card_box">
      <div className="card_container">
        <div className="card_container_img">
          <img src={props.img} alt="capa" />
        </div>

        <div className="card_descricao">
          <hr />
          <h4>{props.title}</h4>
          <hr />
          <p>{props.desc}</p>
        </div>

        <div className="btnposition">
          <div className="CardBotao_position">
            <CardBotao url={props.url} />
          </div>
        </div>
        
      </div>
    </div>
  )
}
