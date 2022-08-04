import './skill.css';

import dataBarraSkill from '../../data/dataBarraSkill';

export default function Skill() {
  return (
    <div className="container top" id="skill_link">
      <h1>Lista de Skills Full-Stack</h1>
      <br />
      <div className="box_skill">
        {dataBarraSkill.atributos.map((item, index) => (
          <div className="containerSkill" key={index}>
            <div className="container_skill_box">
              <img src={item.img} width="100" alt="css" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
