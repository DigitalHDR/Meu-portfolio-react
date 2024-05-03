import './sobre.css'

export default function Sobre() {
  const urlLinkedin = 'https://www.linkedin.com/in/lucas-fernando-1a75511a0/'

  return (
    <div className="container top" id="sobre_link">
      {' '}
      {/* id apenas para página única /> */}
      <h1>Sobre</h1>
      <br />
      <div className="sobre_box">
        <p>
          Sou um desenvolvedor web e mobile com experiência em diversas
          tecnologias modernas. Trabalho principalmente com HTML, CSS e
          JavaScript para criar interfaces web interativas e responsivas. Tenho
          proficiência em frameworks como React.js para o desenvolvimento
          frontend e Node.js para o backend, além de ser experiente em
          TypeScript. No desenvolvimento mobile, utilizo o React Native para
          criar aplicativos nativos para iOS e Android. Minha experiência inclui
          o uso de bancos de dados NoSQL como MongoDB para armazenamento e
          gerenciamento de dados de aplicativos web e mobile. Estou sempre
          buscando aprender e me atualizar com as últimas tecnologias e
          tendências no desenvolvimento de software.
          <a rel="noreferrer noopener" href={urlLinkedin}>
            {' '}
            Linkedin
          </a>
        </p>
      </div>
    </div>
  )
}
