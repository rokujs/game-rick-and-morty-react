import React from 'react'

import './index.sass'

// eslint-disable-next-line react/prop-types
function ContentCard ({ nameCharacter, image, imageCover, handleCover, isHidden = false, isDelete = false }) {
  if (isDelete) {
    return <div></div>
  }

  if (isHidden) {
    return (
      <button className="card__button" onClick={handleCover}>
        <div className="card">
          <div className="card-image Cover">
            <figure className="image is-1by1">
              <img src={imageCover} alt="Cover" />
            </figure>
          </div>
        </div>
      </button>
    )
  }

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Card" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="subtitle">
            {nameCharacter}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContentCard
