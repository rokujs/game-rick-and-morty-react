import React from "react";

import Board from '../components/Board'

import "../styles/pages/game.sass";

function Game() {
  return (
    <div className="tile is-ancestor game">
      <div className="tile is-vertical is-10">
        <div className="tile">
          <div className="tile is-parent is-vertical is-2">
            <article className="tile is-child box">
              <p>Data User</p>
            </article>
          </div>
          <div className="tile is-parent section__cards">
            <article className="tile is-child box">
              <Board />
            </article>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p>Time and points</p>
          </article>
        </div>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <p>Cards win</p>
        </article>
      </div>
    </div>
  );
}

export default Game;
