import React from 'react'

export default function Paragraf(pro) {
  return (
    <div>
        <p key={pro.index}>{pro.para}</p>
    </div>
  )
}
