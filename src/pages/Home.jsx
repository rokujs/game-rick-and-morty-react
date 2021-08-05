import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

import Vortex from '../components/Vortex'

import '../styles/pages/home.sass'

function Home () {
  const { setUser } = useContext(UserContext)
  const [username, setUsername] = useState('')

  const handleChange = (evt) => {
    setUsername(evt.target.value)
    setUser(evt.target.value)
  }

  return (
    <>
    <Vortex />
      <div className="home">
        <div className="container_home">
          <h1 className="container__title">Rick and Morthy</h1>
          <div className="container__description">
            <p className="container__description--p">
              You have to find all pairs before your time runs out. Every time
              you find a pair you will see the character on the left side, when
              you click on a character image, it will show more information
              about the character.
            </p>
          </div>
          <div className="block is-large">
            <input
              className="input is-primary is-rounded is-large"
              type="text"
              placeholder="UserName"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div className="container__description--button">
            <Link to="/game" className="button is-link is-large">
              Play
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
