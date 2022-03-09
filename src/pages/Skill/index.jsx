import './skill.css'

import dataBarraSkill from '../../data/dataBarraSkill'
import BarraSkill from "../../components/BarraSkill"

export default function Skill() {
  return (
    <div className='container top' id='skill_link'>  {/* id apenas para página única /> */}
      <h1>Lista de Skills Full-Stack Júnior</h1>
      <br />
      <div className="duasBarra">

        <div className='containerSkill'>
          {dataBarraSkill.atributos.map((item, index) => {
            return (
              <div key={index}>
                <BarraSkill done={item.done} title={item.title} classSet={item.classSet} />
              </div>
            )
          })}
        </div>

        <div className="containerSkill">
          {dataBarraSkill.atributosDois.map((item, index) => {
            return (
              <div key={index}>
                <BarraSkill done={item.done} title={item.title} classSet={item.classSet} />
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}