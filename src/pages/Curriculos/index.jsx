import { useRef } from 'react'
import './curriculo.css'
import Card from '../../components/Card'
import dataCurriculo from '../../data/dataCurriculo'
import { ImCircleLeft } from 'react-icons/im'

export default function Curriculos() {
  const carrosel = useRef(null)

  const handleLeftClick = e => {
    e.preventDefault()
    carrosel.current.scrollLeft -= carrosel.current.offsetWidth
  }

  const handleRigthClick = e => {
    e.preventDefault()
    carrosel.current.scrollLeft += carrosel.current.offsetWidth
  }

  return (
    <div className="carrossel_box">
      <div>
        <div className="container top" id="curriculo_link">
          <h1>Certificados e Currículo PDF</h1>
          <br />
          <div className="teste">
            <div className="carrossel" ref={carrosel}>
              {dataCurriculo.curiculo.map(item => (
                <div className="projetos_card">
                  <Card img={item.img} title={item.title} url={item.url}></Card>
                </div>
              ))}
            </div>
            <div className="carrossel_btn">
              <ImCircleLeft
                onClick={handleLeftClick}
                className="carrossel_seta_left"
              />
              <ImCircleLeft
                onClick={handleRigthClick}
                className="carrossel_seta_rigth"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
