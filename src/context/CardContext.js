import React, { useState } from 'react'

const Context = React.createContext({})

export function CardContext ({ children }) {
  const [card, setCard] = useState(null)

  return (
    <Context.Provider value={{ card, setCard }}>{children}</Context.Provider>
  )
}

export default Context
