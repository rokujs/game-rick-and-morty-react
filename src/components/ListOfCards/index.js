import React, { useEffect, useState, useContext } from 'react'

import Card from '../Card'
import getCharacters from '../../services/getCharacters'
import Loading from '../Loading'
import ContextLevel from '../../context/UserContext'

const IMAGE_COVER = 'https://i.pinimg.com/originals/5b/53/73/5b537363393dc26c68b566fe482eb32d.png'

function ListOfCards () {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])
  const [firstCard, setFirstCard] = useState(false)
  const [secondCard, setSecondCard] = useState(false)
  const { nextLevel, setNextLevel } = useContext(ContextLevel)

  useEffect(() => {
    setLoading(true)

    const imageCover = new Image()
    imageCover.src = IMAGE_COVER
    console.log(nextLevel)

    getCharacters({ newUrl: nextLevel })
      .then(data => {
        const { results, info } = data
        const deck = shuffle(results)
        setNextLevel(info.next)

        results.forEach(({ image }) => {
          const img = new Image()
          img.src = image
        })

        setCharacters(deck)
        setLoading(false)
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
    return <Loading />
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
