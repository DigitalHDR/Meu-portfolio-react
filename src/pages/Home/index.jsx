import './home.css'
import foto from '../../assets/Foto/lucas.jpg'

export default function Home() {
  return (
    <div className="container top" id='home_link'>
      {/* <h1>Home</h1> */}

      <div className="box">
        <div className='home_flex'>

          <div className='boxTexto'>
            <p>Oi </p>
            <p>Meu nome é </p>
            <p className='corNone'>Lucas </p>
            <p>Desenvolvedor </p>
            <p>Full-Stack Júnior</p>
          </div>

          <div className='boxFoto'>
            <img src={foto} alt="foto" />
          </div>

        </div>
      </div>
    </div>
  )
}