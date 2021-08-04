import React from 'react'

function User ({ user }) {
  return (
    <div>
      <h2>
        <strong className="is-size-1 has-text-success">{user}</strong>
      </h2>
    </div>
  )
}

export default User
