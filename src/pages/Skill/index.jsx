import './skill.css'
import dataBarraSkill from '../../data/dataBarraSkill'

import Html from "../../components/BarraSkill/Html";
// import Css from '../../components/BarraSkill/Css';
// import JavaScript from '../../components/BarraSkill/Javascript';
// import Sass from '../../components/BarraSkill/Sass';
// import BootStrap from '../../components/BarraSkill/BootStrap';
// import ReactSub from '../../components/BarraSkill/React';
// import Redux from '../../components/BarraSkill/Redux';
// import ReactNative from '../../components/BarraSkill/ReactNative';
// import ReactForm from '../../components/BarraSkill/ReactForm';
// import Next from '../../components/BarraSkill/Next';
// import TypeScript from '../../components/BarraSkill/TypeScript';
// import WebPack from '../../components/BarraSkill/WebPack';
// import FireBase from '../../components/BarraSkill/FireBase';
// import Git from '../../components/BarraSkill/Git';
// import PhotoShop from '../../components/BarraSkill/PhotoShop';
// import Illustrator from '../../components/BarraSkill/Illustrator';
// import Formik from '../../components/BarraSkill/Formik';
// import Node from '../../components/BarraSkill/Node';
// import MongoDb from '../../components/BarraSkill/MongoDb';
// import MySQL from '../../components/BarraSkill/MySQL';

export default function Skill() {
  return (
    <div className='container'>
      <h1>Lista de Skills FullStack</h1>
      <div className="duasBarra">

        <div className='containerSkill'>
          {dataBarraSkill.atributos.map((item, index) => {
            return (
              <div key={index}>
                <Html done={item.done} title={item.title} classSet={item.classSet} />
              </div>
            )
          })}
        </div>

        <div className="containerSkill">
          {dataBarraSkill.atributosDois.map((item, index) => {
            return (
              <div key={index}>
                <Html done={item.done} title={item.title} classSet={item.classSet} />
              </div>
            )
          })}
        </div>

        {/* <div className="containerSkill">
            <Html done={70} />
            <Css done={70} />
            <JavaScript done={70} />
            <Sass done={75} />
            <BootStrap done={80} />
            <ReactSub done={80} />
            <Redux done={50} />
            <ReactNative done={70} />
            <ReactForm done={50} />
            <MongoDb done={20} />
          </div> */}

        {/* <div className="containerSkill">
            <Next done={50} />
            <TypeScript done={35} />
            <WebPack done={40} />
            <FireBase done={20} />
            <Git done={80} />
            <PhotoShop done={60} />
            <Illustrator done={30} />
            <Formik done={20} />
            <Node done={30} />
            <MySQL done={20} />
          </div> */}

      </div>
    </div>
  )
}