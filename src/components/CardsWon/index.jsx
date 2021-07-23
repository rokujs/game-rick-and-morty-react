import React, { useEffect, useContext } from 'react'

import cardsContext from '../../context/CardListContext'

function CardsWon () {
  const { cardsList } = useContext(cardsContext)

  useEffect(() => {
    return () => {

    }
  }, [cardsList])

  return (
    <ul>

    </ul>
  )
}

export default CardsWon
