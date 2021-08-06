import React from 'react'

function Lose ({ repeat, backToHome }) {
  return (
    <div className="content">
      <div className="section has-text-centered">
        <strong className="title is-size-1">Game Over</strong>
      </div>
      <div className="section buttons is-justify-content-space-evenly">
        <button className="button is-danger is-large" onClick={backToHome}>
          To go to Home
        </button>
        <button className="button is-warning is-large" onClick={repeat}>
          Repeat level
        </button>
      </div>
    </div>
  )
}

export default Lose
