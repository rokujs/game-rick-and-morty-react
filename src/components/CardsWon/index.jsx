import React, { useEffect, useContext, useState } from 'react'

import cardsContext from '../../context/CardListContext'
import ContentCard from '../ContentCard'

function CardsWon () {
  const { cardsList } = useContext(cardsContext)
  const [card, setCard] = useState(null)

  useEffect(() => {
    if (!Array.isArray(cardsList)) {
      if (card) {
        setCard((cards) => [...cards, cardsList])
      } else {
        const aux = []
        aux[0] = cardsList
        setCard(aux)
      }
    }
  }, [cardsList])

  return (
    <div>
      {card &&
        card.map(({ name, image, id }) => (
          <ContentCard key={id} image={image} nameCharacter={name} />
        ))}
    </div>
  )
}

export default CardsWon
