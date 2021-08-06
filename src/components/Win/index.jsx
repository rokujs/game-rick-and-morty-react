import React from 'react'

function Win ({ nextLevel, backToHome }) {
  return (
    <div className="content">
      <div className="section has-text-centered">
        <strong className="title is-size-1">Congratulation You win</strong>
      </div>
      <div className="section buttons is-justify-content-space-evenly">
        <button className="button is-danger is-large" onClick={backToHome}>
          Exit
        </button>
        <button className="button is-success is-large" onClick={nextLevel}>
          Next level
        </button>
      </div>
    </div>
  )
}

export default Win
