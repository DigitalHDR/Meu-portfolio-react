import React, { useState } from 'react'

export default function Redux({done}) {
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
            <span>Redux</span>
         </div>
         <div className="containerBarra">
            <div className="barraInterna redux" style={style}>{done}%</div>
         </div>
      </div>
   )
}
