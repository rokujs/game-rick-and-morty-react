import React from 'react'
import { Link } from 'react-router-dom'

import Vortex from '../components/Vortex'
import '../styles/pages/notFound.sass'

function NoMatch () {
  return (
    <>
      <Vortex />
      <main className="NotFound">
        <div>
          <div className="NotFound__404 title has-text-white-ter">
            <strong>404</strong>
          </div>
          <div className="NotFound__text">
            <span className="subtitle has-text-white-bis">Not found</span>
          </div>
          <Link to="/home" className="button is-primary">Go to Home page</Link>
        </div>
      </main>
    </>
  )
}

export default NoMatch
