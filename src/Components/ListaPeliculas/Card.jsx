import React from 'react'

export const Card = ({imagen,titulo,fecha}) => {
  return (
    <article className='Card'>
      <img src={imagen} alt="" />
      <h3>{titulo}</h3>
      <span>{fecha}</span>
    </article>
  )
}
