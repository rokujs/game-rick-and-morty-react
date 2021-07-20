import React from 'react'

import ListOfCards from '../ListOfCards'
import './index.sass'

function Board() {
  return (
    <div className='Board'>
      <ListOfCards />
      <ListOfCards />
    </div>
  )
}

export default Board
