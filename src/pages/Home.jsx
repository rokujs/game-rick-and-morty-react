import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

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
      <div className="background">
        <div className="waves">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
          <div className="wave wave5"></div>
          <div className="second_waves sw1"></div>
          <div className="second_waves sw2"></div>
          <div className="second_waves sw3"></div>
          <div className="second_waves sw4"></div>
          <div className="burbles burble1"></div>
          <div className="burbles burble2"></div>
          <div className="burbles burble3"></div>
          <div className="burbles burble4"></div>
          <div className="burbles burble5"></div>
          <div className="burbles burble6"></div>
          <div className="burbles burble7"></div>
          <div className="burbles burble8"></div>
          <div className="burbles burble9"></div>
          <div className="burbles burble10"></div>
        </div>
      </div>
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
