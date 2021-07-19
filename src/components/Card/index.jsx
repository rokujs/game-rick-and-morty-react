import React from 'react'

function Card({ name, id, image}) {
  return (
    <div className="card">
      <div className='card-content'>
        <div className="media-content">
        <p className='title'>Hi {name}</p>
        <strong className='subtitle'>#{id}</strong>
        </div>
      </div>
    </div>
  )
}

export default Card
