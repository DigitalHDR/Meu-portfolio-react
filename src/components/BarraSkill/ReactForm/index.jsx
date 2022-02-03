import React, { useState } from 'react'

export default function ReactForm({done}) {
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
            <span>React Hook Form</span>
         </div>
         <div className="containerBarra">
            <div className="barraInterna reactForm" style={style}>{done}%</div>
         </div>
      </div>
   )
}
