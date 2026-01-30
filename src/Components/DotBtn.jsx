import React, { useState } from 'react'


export default function  DotBtn() {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <button className={`flex p-2 drop-shadow-sm rounded-full ${isHovered? " bg-amber-950 drop-shadow-amber-400" : "bg-gray-400 drop-shadow-amber-950"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}></button>
  )
}
