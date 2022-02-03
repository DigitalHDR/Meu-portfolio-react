import React, { useState } from 'react'

export default function ReactSub({done}) {
   const [style, setStyle] = useState({})

   setTimeout(() => {
      const newStyle = {
         opacity: 1,
         width: `${done}%`
      }

      setStyle(newStyle)
   }, 200)

   return (
      <div>
         <div className="boxTxt">
            <span>React</span>
         </div>
         <div className="containerBarra">
            <div className="barraInterna react" style={style}>{done}%</div>
         </div>
      </div>
   )
}
