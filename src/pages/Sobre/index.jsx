import './sobre.css'

export default function Sobre() {
  const urlLinkedin = 'https://www.linkedin.com/in/lucas-fernando-1a75511a0/'

  return (
    <div className="container top" id='sobre_link'> {/* id apenas para página única /> */}
      <h1>Sobre</h1>
      <br />
      <div className='sobre_box'>
        <p>
          Faz 2 anos e 6 meses que estudo para ser um Desenvolvedor, estudo todos os dias, porém ainda não consegui um trabalho na área. Meu ponto forte é Front-end, mas tenho boas noções de Back-end.
          Tenho varios certificados, maior parte da Udemy onde pode ser visto no final da página, ou no meu 
          <a rel="noreferrer noopener" href={urlLinkedin}> Linkedin</a>, Tenho também 2 bootcamps da Dio Full-Stack
        </p>
        <br />
        <p><span>Atualizado</span></p>
        <p><span>02/06/2022</span></p>
      </div>
    </div>
  )
}