import './footer.css'

import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'

export default function index() {
  const urlLinkedin = 'https://www.linkedin.com/in/lucas-fernando-1a75511a0/'
  const urlGitHub = 'https://github.com/DigitalHDR'
  const urlWhatsapp = 'https://api.whatsapp.com/send?phone=5518997704896'

  return (
    <nav>
      <div className="container nav_footer">
        <div className="footerBaixo">
          <div>
            <p className="nome">Lucas</p>
          </div>

          <div>
            <p>© Copyright 2022</p>
          </div>

          <div>
            <ul>
              <li>
                <a rel="noreferrer noopener" href={urlLinkedin}>
                  <BsLinkedin id="BsLinkedin" />
                </a>
              </li>
              <li>
                <a rel="noreferrer noopener" href={urlGitHub}>
                  <BsGithub id="BsGithub" />
                </a>
              </li>
              <li>
                <a rel="noreferrer noopener" href={urlWhatsapp}>
                  <BsWhatsapp id="BsWhatsapp" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
