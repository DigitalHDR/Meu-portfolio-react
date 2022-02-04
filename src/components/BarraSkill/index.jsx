import React, { useState, useEffect } from 'react';

export default function Index({ done, title, classSet }) {
  const [style, setStyle] = useState({})

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      }
      setStyle(newStyle)
    }, 200)
  }, [done])

  return (
    <div>
      <div className="boxTxt">
        <span>{title}</span>
      </div>
      <div className="containerBarra">
        <div className={`barraInterna ${classSet}`} style={style}>{done}%</div>
      </div>
    </div>
  )
}
