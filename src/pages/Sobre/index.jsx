import './sobre.css'

export default function Sobre() {
  const urlLinkedin = 'https://www.linkedin.com/in/lucas-fernando-1a75511a0/'

  return (
    <div className="container top" id='sobre_link'> {/* id apenas para página única /> */}
      <h1>Sobre</h1>
      <br />
      <div className='sobre_box'>
        <p>
          Estudo para ser um Desenvolvedor Full stack, estudo todos os dias.
          <br />
          Meu ponto forte é Front-end, pórem tenho boas noções de Back-end.
          <br />
          Tenho varios certificados, maior parte da Udemy onde pode ser visto no final da página, ou no meu 
          <a rel="noreferrer noopener" href={urlLinkedin}> Linkedin</a>, Tenho também 2 bootcamps da Dio Full-Stack
          <br />
          Também estou cursando Análise e desenvolvimento de sistemas pela faculdade Unip.
        </p>
      </div>
    </div>
  )
}