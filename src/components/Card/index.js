/* eslint-disable react/prop-types */
import React, { useState, useContext, useCallback } from 'react'

import CardContext from '../../context/CardContext'
import CardsListContext from '../../context/CardListContext'

import getOneCharacter from '../../services/getOneCharacter'

import ContentCard from '../ContentCard'

function Card ({ nameCharacter, image, imageCover, id, active, characters, setCharacters }) {
  const [isHidden, setIsHidden] = useState(true)

  const { firstCard, secondCard, setFirstCard, setSecondCard, card, setCard } =
    useContext(CardContext)
  const { setCardsList } = useContext(CardsListContext)

  const handleCover = useCallback(() => {
    if (!firstCard || !secondCard) {
      setIsHidden(false)
      setTimeout(() => {
        setIsHidden(true)
        if (!firstCard) {
          setFirstCard(false)
        } else {
          if (!secondCard) {
            setSecondCard(false)
          }
        }
      }, 2000)
    }

    if (!firstCard) {
      setFirstCard(true)
      setCard(id)
    } else {
      if (!secondCard) {
        if (card === id) {
          getOneCharacter({ id }).then(setCardsList)

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
  }, [firstCard, secondCard, setFirstCard, setSecondCard, card, characters, setCharacters, active])

  return <ContentCard
    nameCharacter={nameCharacter}
    image={image}
    imageCover={imageCover}
    handleCover={handleCover}
    isHidden={isHidden}
    isDelete={active}
  />
}

export default React.memo(Card)
