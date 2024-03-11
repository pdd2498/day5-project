import React, { useState } from 'react'

export default function Corse(pro) {
    const [hoverValue , setHover] = useState(pro.hours);

  return (
    <div className='divbox'>
        <p>{pro.name}</p>
        <p>{hoverValue} Hours</p>

        <button className='but1' onClick={()=>{setHover(hoverValue+1)}}>+</button>
        <button className='but2' onClick={()=>{setHover(hoverValue-1)}}>-</button>
    </div>
  )
}
