import './home.css'
import foto from '../../assets/Foto/lucas.jpg'

import { Animated } from "react-animated-css";

export default function Home() {
  return (
    <div className="box">

      <div className='container home_flex'>

        <div className='boxTexto'>
          <Animated animationInDelay={200} animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
            <p>Oi </p>
          </Animated>
          <Animated animationInDelay={200} animationIn="fadeInRight" animationOut="fadeOut" isVisible={true}>
            <p>Meu nome é </p>
          </Animated>
          <Animated animationInDelay={500} animationIn="fadeInDown" animationOut="fadeOut" isVisible={true}>
            <p className='corNone'>Lucas </p>
          </Animated>
          <Animated animationInDelay={200} animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
            <p>Desenvolvedor </p>
          </Animated>
          <Animated animationInDelay={200} animationIn="fadeInLeft" animationOut="fadeOut" isVisible={true}>
            <p>FullStack </p>
          </Animated>
        </div>

        <div className='boxFoto'>
          <Animated animationInDelay={500} animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <img src={foto} alt="foto" />
          </Animated>
        </div>

      </div>
    </div>
  )
}