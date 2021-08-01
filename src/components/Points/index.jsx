/* eslint-disable react/prop-types */
import React from 'react'

function Points ({ points }) {
  return (
    <div>
      <div className="isPrimary">
        <p className="is-size-1">Pairs: <b>{points}</b></p>
      </div>
    </div>
  )
}

export default Points
