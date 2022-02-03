import React, { useState } from 'react'

export default function MySQL({done}) {
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
            <span>MySQL</span>
         </div>
         <div className="containerBarra">
            <div className="barraInterna mySQL" style={style}>{done}%</div>
         </div>
      </div>
   )
}
