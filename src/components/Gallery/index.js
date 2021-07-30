import React, { useEffect, useContext, useState, useReducer } from 'react'

import cardsContext from '../../context/CardListContext'
import WonCards from '../WonCards'

let indexPage = 0

const ACTION = {
  ACTIVE_NEXT: 'activeNext',
  ACTIVE_PREV: 'activePrev',
  DISABLED_NEXT: 'nextClass',
  DISABLED_PREV: 'prevClass'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ACTIVE_NEXT:
      return {
        ...state,
        nextClass: '',
        nextDisabled: false
      }
    case ACTION.DISABLED_NEXT:
      return {
        ...state,
        nextClass: 'disabled',
        nextDisabled: true
      }
    case ACTION.ACTIVE_PREV:
      return {
        ...state,
        prevClass: '',
        prevDisabled: false
      }
    case ACTION.DISABLED_PREV:
      return {
        ...state,
        prevClass: 'disabled',
        prevDisabled: true
      }
    default:
      return state
  }
}

function Gallery () {
  const { cardsList } = useContext(cardsContext)
  const [card, setCard] = useState([])
  const [viewCards, setViewCards] = useState(null)
  const [state, dispatch] = useReducer(reducer, {
    nextDisabled: true,
    prevDisabled: true,
    nextClass: 'disabled',
    prevClass: 'disabled'
  })

  useEffect(() => {
    (card.length / 4 > indexPage + 1)
      ? dispatch({ type: ACTION.ACTIVE_NEXT })
      : dispatch({ type: ACTION.DISABLED_NEXT });

    (card.length > 4 && indexPage > 0)
      ? dispatch({ type: ACTION.ACTIVE_PREV })
      : dispatch({ type: ACTION.DISABLED_PREV })
  }, [card, viewCards])

  useEffect(() => {
    if (!Array.isArray(cardsList)) {
      if (card) {
        setCard((cards) => [...cards, cardsList])
      } else {
        const aux = []
        aux[0] = cardsList
        setCard(aux)
      }

      if (card.length < 4) {
        setViewCards([...card, cardsList])
      }
    }
  }, [cardsList])

  const handleNext = () => {
    indexPage += 1
    const index = indexPage * 4
    const newCards = []
    for (let i = 0; i < 4; i++) {
      card[index + i]
        ? newCards.push(card[index + i])
        : i = 5
    }
    setViewCards(newCards)
  }

  const handlePrev = () => {
    const index = (indexPage * 4) - 4
    const newCards = []
    for (let i = 0; i < 4; i++) {
      card[index + i]
        ? newCards.push(card[index + i])
        : i = 5
    }
    indexPage -= 1
    setViewCards(newCards)
  }

  return viewCards && <WonCards card={viewCards} handlePrev={handlePrev} handleNext={handleNext} isDisabled={state} />
}

export default Gallery
