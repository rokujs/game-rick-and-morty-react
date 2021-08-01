import React, { useState } from 'react'

const Context = React.createContext({})

export function CardsListContext ({ children }) {
  const [cardsList, setCardsList] = useState([])
  const [cardInfo, setCardInfo] = useState(null)

  return (
    <Context.Provider value={{ cardsList, setCardsList, cardInfo, setCardInfo }}>{children}</Context.Provider>
  )
}

export default Context
