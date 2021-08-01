import React from 'react'

import Board from '../components/Board'
import Gallery from '../components/Gallery'
import InfoGame from '../components/InfoGame'
import { CardsListContext } from '../context/CardListContext'

import '../styles/pages/game.sass'

function Game () {
  return (
    <div className="tile is-ancestor game">
      <CardsListContext>
        <div className="tile is-vertical is-10">
          <div className="tile">
            <div className="tile is-parent is-vertical is-2">
              <article className="tile is-child box">
                <Gallery />
              </article>
            </div>
            <div className="tile is-parent section__cards">
              <main className="tile is-child box">
                <Board />
              </main>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <InfoGame />
            </article>
          </div>
        </div>
      </CardsListContext>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p>Data character</p>
        </article>
      </div>
    </div>
  )
}

export default Game
