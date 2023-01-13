import React from 'react'
import { Link } from 'react-router-dom'

function toDashes(string){
  let pattern0=/\d{3}\/\d{2}\/\d{2}/g
  if (pattern0.test(string)){
    let result = string.replace(/\//g, "-");
    return result
  }
  return string
}


export default function Tire({ image, brand, id, size}) {
  return (
    <article className='tire'>
      <div className='img-container'>
        <img src={image} alt={brand} />
      </div>
      <div className='tire-footer'>
      <h3>{brand}</h3>
        <h3>{toDashes(size)}</h3>
        <Link to={`/tire/${id}`} className='btn btn-primary btn-details'>
          detalles
        </Link>
      </div>
    </article>
  )
}
