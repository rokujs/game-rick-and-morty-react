import React, { useState } from 'react'

const Context = React.createContext({})

export function CardContext({ children }) {

  const [firstCard, setFirstCard] = useState(false)
  const [secondCard, setSecondCard] = useState(false)
  const [card, setCard] = useState(9999)

  return (
    <Context.Provider value={{ firstCard, secondCard, setFirstCard, setSecondCard, card, setCard }}>{children}</Context.Provider>
  )
}

export default Context
