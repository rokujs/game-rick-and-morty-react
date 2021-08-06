import React from 'react'

import ListOfCards from '../ListOfCards'
import { CardContext } from '../../context/CardContext'
import './index.sass'

function Board () {
  return (
    <div className="Board">
      <CardContext>
          <ListOfCards />
      </CardContext>
    </div>
  )
}

export default Board
