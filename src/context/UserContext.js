import React, { useState } from 'react'

const Context = React.createContext({})

export function UserContext ({ children }) {
  const [user, setUser] = useState('')
  const [nextLevel, setNextLevel] = useState(null)

  return (
    <Context.Provider value={{ user, setUser, nextLevel, setNextLevel }}>{children}</Context.Provider>
  )
}

export default Context
