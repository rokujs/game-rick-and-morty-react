/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from 'react'

import CardContext from '../../context/CardContext'
import CardsListContext from '../../context/CardListContext'

import ContentCard from '../ContentCard'

function Card ({ nameCharacter, image, imageCover, id, active, characters, setCharacters, firstCard, secondCard, setFirstCard, setSecondCard, hidden = true }) {
  const [isHidden, setIsHidden] = useState(hidden)

  const { card, setCard } =
    useContext(CardContext)
  const { setCardsList, setCardInfo } = useContext(CardsListContext)

  useEffect(() => {
    if (secondCard) {
      setTimeout(() => {
        setIsHidden(true)
        setSecondCard(false)
        setFirstCard(false)
      }, 500)
    }
  }, [secondCard])

  const handleCover = () => {
    if (!firstCard || !secondCard) {
      setIsHidden(false)
    }

    if (!firstCard) {
      setFirstCard(true)
      setCard(id)
    } else {
      if (!secondCard) {
        if (card === id) {
          setCardsList(id)

          setTimeout(() => {
            const newCharacter = characters.map((character) => {
              if (character.id === id) {
                character.active = true
              }
              return character
            })
            setCharacters(newCharacter)
          }, 500)
        };

        setSecondCard(true)
      }
    }
  }

  const handleInfoCard = () => {
    setCardInfo(id)
  }

  return <ContentCard
    nameCharacter={nameCharacter}
    image={image}
    imageCover={imageCover}
    handleCover={handleCover}
    isHidden={isHidden}
    isDelete={active}
    info={handleInfoCard}
  />
}

export default Card
