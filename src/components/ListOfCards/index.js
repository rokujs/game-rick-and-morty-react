import React, { useEffect, useState } from 'react'

import Card from '../Card'
import getCharacters from '../../services/getCharacters'

const IMAGE_COVER = 'https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png'

function ListOfCards () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])
  const [firstCard, setFirstCard] = useState(false)
  const [secondCard, setSecondCard] = useState(false)

  useEffect(() => {
    setLoading(true)

    const imageCover = new Image()
    imageCover.src = IMAGE_COVER

    getCharacters()
      .then(data => {
        const { results } = data
        const deck = shuffle(results)

        results.forEach(({ image }) => {
          const img = new Image()
          img.src = image
        })

        setCharacters(deck)
        setLoading(true)
        setError(false)
      })
      .catch(err => {
        console.error(err)
        setError(true)
        setLoading(false)
      })
  }, [])

  const shuffle = (cards) => {
    const deck = cards.map(card => ({ ...card, index: card.id, active: false }))

    cards.forEach(card => deck.push({ ...card, index: `${card.id}_copy`, active: false }))

    const newDeck = deck.sort(() => Math.random() - 0.5)

    return newDeck
  }

  if (error) {
    return <p>Error...</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return characters.map(({ id, name: nameCharacter, image, index, active }) => (
    <Card
      key={index}
      id={id}
      image={image}
      nameCharacter={nameCharacter}
      imageCover={IMAGE_COVER}
      setCharacters={setCharacters}
      characters={characters}
      active={active}
      firstCard={firstCard}
      secondCard={secondCard}
      setFirstCard={setFirstCard}
      setSecondCard={setSecondCard}
    />
  ))
}

export default ListOfCards
