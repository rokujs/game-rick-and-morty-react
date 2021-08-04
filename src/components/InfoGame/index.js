import React, { useContext, useEffect, useState } from 'react'

import CardContext from '../../context/CardListContext'
import UserContext from '../../context/UserContext'

import Points from '../Points'
import Timer from '../Timer'
import User from '../User'

function InfoGame () {
  const { cardsList } = useContext(CardContext)
  const { user } = useContext(UserContext)
  const [numberCards, setNumberCards] = useState(-1)
  const [minutes, setMinutes] = useState(10)
  const [seconds, setSeconds] = useState('00')

  useEffect(() => {
    let timer = 600
    setInterval(() => {
      if (timer % 60 === 0) {
        setMinutes(n => (n -= 1))
        setSeconds('60')
      }

      timer -= 1
      setSeconds(seg => {
        let time = parseInt(seg)

        time -= 1

        if (time < 10) {
          return `0${time}`
        }

        return time
      })
    }, 1000)
  }, [])

  useEffect(() => {
    setNumberCards(cards => (cards += 1))
  }, [cardsList])

  return (
    <div className="is-flex is-justify-content-space-between is-align-content-center">
      <Timer seconds={seconds} minutes={minutes} />
      <User user={user} />
      <Points points={numberCards}/>
    </div>
  )
}

export default InfoGame
