/* eslint-disable react/prop-types */
import React from 'react'

import ContentCard from '../ContentCard'

import './style.sass'

function WonCards ({ card, handlePrev, handleNext, isDisabled }) {
  const { nextDisabled, prevDisabled, nextClass, prevClass } = isDisabled

  return (
    <div className="p-6 gallery">
      {card && card.map(({ name, image, id }) => (
        <div key={id} className="block">
          <ContentCard image={image} nameCharacter={name} />
        </div>
      ))}
      <div className="section__button">
        <div className="buttons has-addons is-centered">
          <button className={`button is-warning is-large ${prevClass}`} onClick={handlePrev} disabled={prevDisabled}>
            <span className="icon">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11.92,19.92L4,12L11.92,4.08L13.33,5.5L7.83,11H22V13H7.83L13.34,18.5L11.92,19.92M4,12V2H2V22H4V12Z"
                />
              </svg>
            </span>
          </button>
          <button className={`button is-primary is-large ${nextClass}`} onClick={handleNext} disabled={nextDisabled}>
            <span className="icon">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.08,4.08L20,12L12.08,19.92L10.67,18.5L16.17,13H2V11H16.17L10.67,5.5L12.08,4.08M20,12V22H22V2H20V12Z"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WonCards
