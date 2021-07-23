import React, { useState } from 'react'

const Context = React.createContext({})

export function CardsListContext ({ children }) {
  const [cardsList, setCardsList] = useState([])

  return (
    <Context.Provider value={{ cardsList, setCardsList }}>{children}</Context.Provider>
  )
}

export default Context
