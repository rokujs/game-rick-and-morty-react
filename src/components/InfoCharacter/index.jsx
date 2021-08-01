import React, { useState, useEffect, useContext } from 'react'

import cardContext from '../../context/CardListContext'

function InfoCharacter () {
  const [character, setCharacter] = useState(null)
  const { cardInfo } = useContext(cardContext)

  useEffect(() => {
    setCharacter(cardInfo)
  }, [cardInfo])

  const handleClose = () => {
    setCharacter(null)
  }

  return (
    character && (
      <div className="content">
        <div className="has-text-right">
          <button className="delete is-large" onClick={handleClose}></button>
        </div>
        <div className="block">
          <h2 className="title is-1 has-text-centered">{character.name}</h2>
        </div>
        <figure className="image">
          <img
            className="is-rounded"
            src={character.image}
            alt="Character image"
          />
        </figure>
        <div className="block has-text-centered is-size-4">
          <p>
            <b>{character.status}</b>
          </p>
          <p>
            <small>{character.species}</small>
          </p>
        </div>
        <div className="content">
          <ul className="is-size-3">
            <li>
              <b>Location:&nbsp;</b>
              {character.location.name}
            </li>
            <li>
              <b>Episodes:&nbsp;</b>
              {character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    )
  )
}

export default InfoCharacter
