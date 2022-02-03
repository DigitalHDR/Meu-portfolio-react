import React, { useState } from 'react'

export default function Git({done}) {
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
            <span>Git e GitHub</span>
         </div>
         <div className="containerBarra">
            <div className="barraInterna git" style={style}>{done}%</div>
         </div>
      </div>
   )
}
